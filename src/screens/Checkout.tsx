import { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { StyledCheckoutScreens } from '../styles/screens/Checkout';
import { Field, Form, Formik } from 'formik';
import PhoneInput from 'react-phone-number-input';
import { Close, Fedex, Ups } from '../assets/svg';
import { Button } from '../components/Button';
import { CheckoutProductItem } from '../components/CheckoutProductItem';
import { StyledSelectAdressModal } from '../styles/components/SelectAdressModal';
import Image_1 from '../assets/images/carti/product_1_1.png';
import Image_2 from '../assets/images/carti/product_2_1.png';
import Image_3 from '../assets/images/carti/product_3_1.png';
import Image_4 from '../assets/images/carti/product_4_1.jpg';
import GoogleMapReact from 'google-map-react';

const products = [
  {
    image: Image_1,
    name: 'Playboi Carti Black Cat Hoodie',
    price: '$ 359.00',
    size: 'S',
  },
  {
    image: Image_2,
    name: 'Playboi Carti Burn Tee',
    price: '$ 129.00',
    size: 'S',
  },
  {
    image: Image_3,
    name: 'Playboi Carti x CPFM 4 WLR King Vamp T-shirt',
    price: '$ 99.00',
    size: 'S',
  },
  {
    image: Image_4,
    name: 'Playboi Carti Fuck Off Tee',
    price: '$ 109.00',
    size: 'S',
  },
];

export const googleMapsApiKey: string = import.meta.env.VITE_REACT_APP_GOOGLE_API_KEY;

export const Checkout: FC = () => {
  const [value, setValue] = useState();
  // const [isLoaded, setIsLoaded] = useState(false);

  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleSelectAddressModal() {
    setIsOpenModal(!isOpenModal);
  }

  // const mapRef = useRef<google.maps.Map>();

  // const onLoad = useCallback(
  //   (map: google.maps.Map): void | Promise<void> => {
  //     setIsLoaded(true);
  //     mapRef.current = map;
  //   },
  //   [setIsLoaded],
  // );

  const defaultProps = {
    center: {
      lat: 40.73061,
      lng: -73.935242,
    },
    zoom: 11,
  };

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
                    <label htmlFor="#sender">SENDER NAME</label>
                    <Field id="sender" name="sender" type="text" className="input-text" placeholder="SENDER NAME" />
                  </div>
                  <div className="column label-sender">
                    <label htmlFor="#phone">PHONE NUMBER</label>
                    <PhoneInput
                      international
                      placeholder="Phone number"
                      defaultCountry="US"
                      value={value}
                      onChange={() => setValue}
                      smartCaret={false}
                      className="input-text-phone input-text"
                      id="phone"
                    />
                  </div>
                </div>
                <div className="column">
                  <label htmlFor="#address_1">ADDRESS 1</label>
                  <Field
                    name="address_1"
                    type="text"
                    className="input-text"
                    placeholder="ADDRESS 1"
                    onFocus={handleSelectAddressModal}
                    autoComplete="off"
                    aria-autocomplete="none"
                    id="address_1"
                  />
                </div>
                <div className="column">
                  <label htmlFor="#address_2">ADDRESS 2</label>

                  <Field id="address_2" name="address_2" type="text" className="input-text" placeholder="ADDRESS 2" />
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
          <div className="products-list ">
            {products.map((product: any) => (
              <CheckoutProductItem
                name={product.name}
                price={product.price}
                image={product.image}
                size={product.size}
                key={uuidv4()}
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
        <div className="map-container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapsApiKey }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            // onGoogleApiLoaded={({ map }: { map: google.maps.Map }) => onLoad(map)}
          ></GoogleMapReact>
        </div>
        <Button type="button" onClick={() => console.log('do ')} width={'400px'} className="button">
          Save
        </Button>
      </StyledSelectAdressModal>
    </StyledCheckoutScreens>
  );
};

export default Checkout;
