import { FC, useCallback, useMemo, useRef, useState } from 'react';

import { StyledCheckoutScreens } from '../styles/screens/Checkout';
import { Field, Form, Formik } from 'formik';
import PhoneInput from 'react-phone-number-input';
import { Close, Fedex, Ups } from '../assets/svg';
import { Button } from '../components/Button';
import { CheckoutProductItem } from '../components/CheckoutProductItem';
import { StyledSelectAdressModal } from '../styles/components/SelectAdressModal';
import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import Image_1 from '../assets/images/joshua/product_1_1.png';
import Image_2 from '../assets/images/joshua/product_2_1.png';
import Image_3 from '../assets/images/joshua/product_3_1.png';
import Image_4 from '../assets/images/joshua/product_4_1.png';

const products = [
  {
    image: Image_1,
    name: 'AJBXNG Olympic Jacket',
    price: '$ 169.00',
    size: 'S',
  },
  {
    image: Image_2,
    name: 'Elite ESG10 Hustle Sparring Glove 16oz',
    price: '$ 155.00',
    size: 'S',
  },
  {
    image: Image_3,
    name: 'Dark Earth Hoodie',
    price: '$ 75.00',
    size: 'S',
  },
  {
    image: Image_4,
    name: 'Sketch Tee White',
    price: '$ 25.00',
    size: 'S',
  },
];

const libraries: 'places'[] = ['places'];

export const googleMapsApiKey: string = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;

export const Checkout: FC = () => {
  const [value, setValue] = useState();
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: googleMapsApiKey ?? '',
    libraries,
  });
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleSelectAddressModal() {
    setIsOpenModal(!isOpenModal);
  }

  const mapRef = useRef<google.maps.Map>();
  const options = useMemo(
    () => ({
      mapId: '900afbd5cfe4c204',
      disableDefaultUI: true,
      clickableIcons: false,
    }),
    [],
  );

  const onLoad = useCallback((map: google.maps.Map): void | Promise<void> => {
    mapRef.current = map;
  }, []);

  return (
    <StyledCheckoutScreens>
      <h3 className="title">Checkout</h3>

      <div className="container">
        <div className="form-container">
          <h2 className="title-form">DELIVERY ADDRESS</h2>
          <Formik initialValues={{ sender: '', address_1: '', address_2: '', delivery: '0' }} onSubmit={() => {}}>
            {() => (
              <Form className="form">
                <div className="row">
                  <div className="column label-sender">
                    <label>SENDER NAME</label>
                    <Field name="sender" type="text" className="input-text" placeholder="SENDER NAME" />
                  </div>
                  <div className="column label-sender">
                    <label>PHONE NUMBER</label>
                    <PhoneInput
                      international
                      placeholder="Phone number"
                      defaultCountry="US"
                      value={value}
                      onChange={() => setValue}
                      smartCaret={false}
                      className="input-text-phone input-text"
                    />
                  </div>
                </div>
                <div className="column">
                  <label>ADDRESS 1</label>
                  <Field
                    name="address_1"
                    type="text"
                    className="input-text"
                    placeholder="ADDRESS 1"
                    onFocus={handleSelectAddressModal}
                    autoComplete="off"
                    aria-autocomplete="none"
                  />
                </div>
                <div className="column">
                  <label>ADDRESS 2</label>
                  <Field name="address_2" type="text" className="input-text" placeholder="ADDRESS 2" />
                </div>

                <h2 className="subtitle-form">SHIPPING METHOD</h2>
                <div className="radio-button">
                  <input type="radio" name="delivery" value={'0'} checked={true} onChange={() => console.log(0)} />
                  <span>
                    <img src={Fedex} alt="fedex" />
                    FedEx ($25.75)
                  </span>
                </div>
                <div className="radio-button">
                  <input type="radio" name="delivery" value={'1'} checked={false} onChange={() => console.log(1)} />
                  <span>
                    <img src={Ups} alt="UPS" />
                    UPS ($25.75)
                  </span>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="products-container">
          <div className="products-list">
            {products.map((product: any) => (
              <CheckoutProductItem
                name={product.name}
                price={product.price}
                image={product.image}
                size={product.size}
              />
            ))}
          </div>
          <div className="bottom-container">
            <div className="prices">
              <p className="prices-description">
                <span>Subtotal:</span> <span>$ 950.00</span>
              </p>
              <p className="prices-description">
                <span>Shipping:</span> <span>$ 25.75</span>
              </p>
              <p className="prices-description">
                <span>Taxes:</span> <span>$ 18.30</span>
              </p>
            </div>
            <p className="prices-description">
              <span>Total:</span> <span>$ 994.05</span>
            </p>

            <Button type="button" onClick={() => console.log('do ')} width={'100%'} className="pay-button">
              PLACE ORDER
            </Button>
          </div>
        </div>
      </div>
      <StyledSelectAdressModal
        isOpen={isOpenModal}
        onBackgroundClick={handleSelectAddressModal}
        onEscapeKeydown={handleSelectAddressModal}
      >
        <button className="close-button" onClick={handleSelectAddressModal}>
          <Close />
        </button>
        <h1 className="title">select your location</h1>
        <p className="description">
          Choose your location by clicking on the map or entering the address in the search field
        </p>
        {isLoaded && <GoogleMap zoom={10} options={options} mapContainerClassName="map-container" onLoad={onLoad} />}
        <Button type="button" onClick={() => console.log('do ')} width={'400px'} className="button">
          Save
        </Button>
      </StyledSelectAdressModal>
    </StyledCheckoutScreens>
  );
};

export default Checkout;
