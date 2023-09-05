import { FC, useState } from 'react';
import { StyledPhoneAuth } from '../styles/components/PhoneAuth';
import { Link } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'

import 'react-phone-number-input/style.css'
import { Button } from './Button';
import { Field, Formik, Form } from 'formik';

interface Props {
  title: string;
  subtitle: string;
  subtitleLinkText: string;
  subtitleLinkPath: string;
  stepsCount: number;
}

export const PhoneAuth: FC<Props> = ({
  title,
  subtitle,
  subtitleLinkText,
  subtitleLinkPath,
  stepsCount,
}) => {
  const [value, setValue] = useState()
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleNext = () => {
    setCurrentIndex(1)
  }

  return (
    <StyledPhoneAuth>
      <div>
        <h4>{title}</h4>
        <p className='subtitle'>
          <span>{subtitle}</span>
          <Link to={subtitleLinkPath}>{subtitleLinkText}</Link>
        </p>
      </div>
      {currentIndex === 0 ? (
        <div>
          <div className='label-wrapper'>
            <p className='label'>Phone number</p>
            {false && (
              <p className='error'>Phone number is required</p>
            )}
          </div>
          
          <PhoneInput
            international
            placeholder="Enter phone number"
            defaultCountry="US"
            value={value}
            onChange={() => setValue}
            smartCaret={false}
          />
          <Button type="button" onClick={handleNext}>
            Next
          </Button>
        </div>
      ) : (
        <Formik
          initialValues={{code: ''}}
          onSubmit={() => {}}
        >
          {({ handleSubmit }) => (
            <Form className='form'>
              <div className='label-wrapper'>
                <p className='label'>Verification code from SMS</p>
                {false && (
                  <p className='error'>Code is required</p>
                )}
              </div>
              
              <Field
                name="code"
                type="text"
                className="input-text"
                placeholder="Enter Verification code"
              />
              <Button type="button" onClick={handleSubmit}>
                Log in
              </Button>
            </Form>
          )}
        </Formik>
      )}
      
      <div>
        {Array.from({ length: stepsCount }, (_, index) => (
          <div key={index} className={`tile ${currentIndex === index ? 'active' : ''}`}>
          </div>
        ))}
      </div>
    </StyledPhoneAuth>
  );
};
