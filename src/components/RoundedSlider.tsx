import TouchSweep from 'touchsweep';
import { v4 as uuid } from 'uuid';
import {
  FC,
  useRef,
  useMemo,
  useState,
  useEffect,
  forwardRef,
  useCallback,
  CSSProperties,
  useImperativeHandle,
} from 'react';
import { RoundedSliderStyles } from '../styles/components/RoundedSlider';
import { CheckedIcon } from '../assets/svg';

export type CarouselItem = Readonly<{
  alt?: string;
  image: string;
  onClick?: () => void;
  checked?: boolean;
}>;

export type DecoratedCarouselItem = CarouselItem & Readonly<{ id: string }>;

export type CarouselProps = Readonly<{
  ref?: React.ForwardedRef<CarouselRef>;
  items: CarouselItem[];
  itemWidth?: number;
  showControls?: boolean;
  slideOnClick?: boolean;
  classNamePrefix?: string;
  nextButtonContent?: string | React.ReactNode;
  prevButtonContent?: string | React.ReactNode;
  onChangeSlide?: (index: number) => void;
}>;

export type CarouselRef = Readonly<{
  next: () => void;
  prev: () => void;
  getItems: () => DecoratedCarouselItem[];
  getSelectedIndex: () => number;
  setSelectedIndex: (index: number) => void;
}>;

export const RoundedSlider: FC<CarouselProps> = forwardRef(
  (
    {
      items,
      itemWidth = 210,
      showControls = false,
      slideOnClick = false,
      classNamePrefix = 'carousel',
      prevButtonContent = 'Previous',
      nextButtonContent = 'Next',
      onChangeSlide,
    }: CarouselProps,
    CarouselRef,
  ) => {
    const data: DecoratedCarouselItem[] = useMemo(
      () =>
        items.map((item) => ({
          ...item,
          ...((item as unknown as DecoratedCarouselItem).id
            ? ({} as unknown as DecoratedCarouselItem)
            : { id: uuid() }),
        })),
      [items],
    );

    const len = useMemo(() => data.length, [data.length]);
    const theta = useMemo(() => 360 / len, [len]);

    const radius = useMemo(() => Math.round(itemWidth / 2 / Math.tan(Math.PI / len)), [itemWidth, len]);

    const ref = useRef<HTMLDivElement>(null);
    const [prevSelectedIndex, setPrevSelectedIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [currentAngle, setCurrentAngle] = useState(0);

    useEffect(() => {
      onChangeSlide && onChangeSlide(selectedIndex);
    }, [selectedIndex]);

    const getSlideStyle = useCallback(
      (index: number): CSSProperties => {
        const style: CSSProperties = {};

        if (index < len) {
          const cellAngle = theta * index;

          style.opacity = 1;
          style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px)`;
        } else {
          style.opacity = 0;
          style.transform = 'none';
        }

        if (index == selectedIndex) {
          const cellAngle = theta * index;

          style.opacity = 1;
          style.transform = `rotateY(${cellAngle}deg) translateZ(${radius}px) scale(1.3)`;
        }

        return style;
      },
      [len, radius, theta, selectedIndex],
    );
    console.log(currentAngle);

    const getItemStyle = useCallback((): CSSProperties => {
      //   const angle = theta * selectedIndex * -1
      return {
        transform: `translateZ(${-1 * radius}px) rotateY(${currentAngle}deg)`,
      };
    }, [radius, currentAngle]);

    const getClassName = useCallback(
      (parts: string | string[]) =>
        Array.isArray(parts)
          ? parts.map((part: string) => `${classNamePrefix}${part}`).join(' ')
          : `${classNamePrefix}${parts}`,
      [classNamePrefix],
    );

    const prev = useCallback(() => {
      setPrevSelectedIndex(selectedIndex);
      setSelectedIndex((prev) => {
        if (prev === 0) {
          return len - 1;
        } else {
          return prev - 1;
        }
      });
      setCurrentAngle((prev) => prev + theta);
    }, [selectedIndex, theta, len]);

    const next = useCallback(() => {
      setPrevSelectedIndex(selectedIndex);
      setSelectedIndex((prev) => {
        if (prev === len - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
      setCurrentAngle((prev) => prev - theta);
    }, [selectedIndex, theta]);

    useEffect(() => {
      const area = ref?.current;
      const touchsweep = new TouchSweep(area ?? undefined);

      area?.addEventListener('swipeleft', next);
      area?.addEventListener('swiperight', prev);

      return () => {
        touchsweep.unbind();

        area?.removeEventListener('swipeleft', next);
        area?.removeEventListener('swiperight', prev);
      };
    });

    useImperativeHandle(
      CarouselRef,
      (): CarouselRef => ({
        next,
        prev,
        getItems: () => data,
        getSelectedIndex: () => selectedIndex,
        setSelectedIndex: (index: number) => setSelectedIndex(index),
      }),
    );

    return (
      <RoundedSliderStyles>
        <div className={getClassName('')} ref={ref}>
          <div className={getClassName('__container')} style={getItemStyle()}>
            {data.map((item: DecoratedCarouselItem, index: number) => (
              <div
                key={item.id}
                style={getSlideStyle(index)}
                onClick={() => {
                  if (item.onClick) item.onClick();
                  setPrevSelectedIndex(selectedIndex);

                  if (slideOnClick) {
                    console.log(prevSelectedIndex);

                    // if (
                    //   prevSelectedIndex + 1 === index ||
                    //   (prevSelectedIndex === len - 1 && index === 0) ||
                    //   (index > selectedIndex && index !== 0 && index !== len - 1)
                    // ) {
                    //   setCurrentAngle((prev) => prev + -theta);
                    // } else if (
                    //   prevSelectedIndex - 1 === index ||
                    //   (prevSelectedIndex === 0 && index === len - 1) ||
                    //   (index < selectedIndex && index !== 0 && index !== len - 1)
                    // ) {
                    //   setCurrentAngle((prev) => prev + theta);
                    // } else {
                    setCurrentAngle(theta * index * -1);
                    // }

                    setSelectedIndex(index);
                  }
                }}
                className={`${getClassName('__slide')} ${index !== selectedIndex ? 'inactive_slide' : 'active_slide'} `}
              >
                <img src={item.image} alt={item.alt} />

                <div className={getClassName('__slide-overlay')}>
                  {item.checked && (
                    <div className="checked_item">
                      <img src={CheckedIcon} alt={'checked'} />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {showControls && (
          <div className={getClassName('__controls')}>
            <button className={getClassName(['__control', '__control--prev'])} onClick={prev}>
              {prevButtonContent}
            </button>

            <button className={getClassName(['__control', '__control--next'])} onClick={next}>
              {nextButtonContent}
            </button>
          </div>
        )}
      </RoundedSliderStyles>
    );
  },
);

export default RoundedSlider;
