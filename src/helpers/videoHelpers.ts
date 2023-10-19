import { IVideoEventCard } from '../models/event';

export const generateVideoTimeLine = (duration: number): string[] => {
  const arr = [];
  for (let i = 0; i <= duration; i++) {
    arr.push(i % 5 === 0 ? `${String(i).padStart(2, '0')}s` : '·');
  }
  return arr;
};

type GetProductCardStyledProps = {
  currentSeek: number;
  item: IVideoEventCard;
  clientWidth: number;
  clientHeight: number;
};

export const getProductCardStyles = ({ currentSeek, item, clientWidth, clientHeight }: GetProductCardStyledProps) => {
  const styles = {
    opacity:
      currentSeek <= Math.trunc(Number(item.start) - 1) ||
      currentSeek >= Math.trunc(Number(item.start)) + Math.trunc(Number(item.duration))
        ? '0'
        : '1',
    transform:
      currentSeek <= Math.trunc(Number(item.start) - 1)
        ? `translate(${Number(clientWidth) * Number(item.offsetLeft)}px, ${
            Number(item.offsetTop) * Number(clientHeight) + 60
          }px)`
        : currentSeek <= Math.trunc(Number(item.start)) + Math.trunc(Number(item.duration))
        ? `translate(${Number(clientWidth) * Number(item.offsetLeft)}px, ${
            Number(item.offsetTop) * Number(clientHeight)
          }px)`
        : `translate(${Number(clientWidth) * Number(item.offsetLeft)}px, ${
            Number(item.offsetTop) * Number(clientHeight) - 60
          }px)`,
  };

  return {
    ...styles,
    display: 'flex',
    width: Number(item.width) * Number(clientWidth),
    height: Number(item.height) * Number(clientHeight),
    transition: '2s',
    right: '0px',
  };
};
