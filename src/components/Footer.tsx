import { FC, useState } from 'react';

import { StyledFooter } from '../styles/components/Footer';
import { Link } from 'react-router-dom';
import logo from '../assets/images/carti/Logo.png';
import { Button } from './Button';
import { Field, Form, Formik } from 'formik';
import { ContactUsModal } from '../styles/components/ContactUsModal';
import { Close } from '../assets/svg';

// import { Facebook, Instagram, Pinterest, Tiktok, Twitter, Youtube } from '../assets/svg';

export const Footer: FC = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleSelectSizesModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <StyledFooter>
      <div className="links-container">
        <img src={logo} className="logo" alt="logo" />

        <div className="web-links">
          <Button flat textButton type="button" onClick={handleSelectSizesModal}>
            Contact Us
          </Button>
          {/* <Link to="/">My Account</Link> */}
        </div>
        {/* <div className="social-links">
          <a target="_blank" rel="noreferrer" href={'/'}>
            <img src={Facebook} alt="Facebook" />
          </a>
          <a target="_blank" rel="noreferrer" href={'/'}>
            <img src={Twitter} alt="Twitter" />
          </a>
          <a target="_blank" rel="noreferrer" href={'/'}>
            <img src={Instagram} alt="Instagram" />
          </a>
          <a target="_blank" rel="noreferrer" href={'/'}>
            <img src={Youtube} alt="Youtube" />
          </a>
          <a target="_blank" rel="noreferrer" href={'/'}>
            <img src={Pinterest} alt="Pinterest" />
          </a>
          <a target="_blank" rel="noreferrer" href={'/'}>
            <img src={Tiktok} alt="Tiktok" />
          </a>
        </div> */}
      </div>
      <div className="bottom-container">
        <span>© ALL RIGHTS RESERVED</span>
        <div>
          <Link to="/terms-and-conditions">Terms & Conditions</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>

      <ContactUsModal
        isOpen={isOpenModal}
        onBackgroundClick={handleSelectSizesModal}
        onEscapeKeydown={handleSelectSizesModal}
      >
        <h2>contact us</h2>
        <button className="close-button" onClick={handleSelectSizesModal}>
          <Close />
        </button>
        <Formik initialValues={{ email: '', name: '', Message: '' }} onSubmit={() => {}}>
          <Form className="form">
            <div className="label-wrapper">
              <p className="label">name</p>
              {false && <p className="error">Name is required</p>}
            </div>
            <Field name="name" type="text" className="input-text" placeholder="Name" />

            <div className="label-wrapper">
              <p className="label">Email</p>
              {false && <p className="error">Email is required</p>}
            </div>
            <Field name="email" type="email" className="input-text" placeholder="Email" />
            <div className="label-wrapper">
              <p className="label">Message</p>
              {false && <p className="error">Message is required</p>}
            </div>
            <textarea></textarea>
          </Form>
        </Formik>

        <Button type="button" transparent onClick={handleSelectSizesModal}>
          send
        </Button>
      </ContactUsModal>
    </StyledFooter>
  );
};
