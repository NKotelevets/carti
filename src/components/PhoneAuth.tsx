import { FC, useState } from 'react';
import { StyledPhoneAuth } from '../styles/components/PhoneAuth';
import { Link } from 'react-router-dom';
import { Field, Formik, Form } from 'formik';
import PhoneInput from 'react-phone-number-input';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

import { Button } from './Button';

import 'react-phone-number-input/style.css';
import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  title: string;
  subtitle: string;
  subtitleLinkText: string;
  subtitleLinkPath: string;
  stepsCount: number;
}

const genderList = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'female',
    label: 'female',
  },
  {
    value: 'other',
    label: 'other',
  },
];

export const PhoneAuth: FC<Props> = ({ title, subtitle, subtitleLinkText, subtitleLinkPath, stepsCount }) => {
  const [value, setValue] = useState();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [startDate, setStartDate] = useState<Date | null>();

  const handleLoginNext = () => {
    setCurrentIndex(1);
  };

  const handleCreateAccount = () => {
    setCurrentIndex(1);
  };

  const handleLogin = () => {};

  const handleResendCode = () => {};

  const handleNextCreateAcc = () => {
    setCurrentIndex(2);
  };

  const handleSubmitCreateAcc = () => {};

  return (
    <StyledPhoneAuth>
      <div>
        <h4>{title}</h4>
        <p className="subtitle">
          <span>{subtitle}</span>
          <Link to={subtitleLinkPath}>{subtitleLinkText}</Link>
        </p>
      </div>
      {currentIndex === 0 ? (
        <div>
          <div className="label-wrapper">
            <p className="label">Phone number</p>
            {false && <p className="error">Phone number is required</p>}
          </div>

          <PhoneInput
            international
            placeholder="Enter phone number"
            defaultCountry="US"
            value={value}
            onChange={() => setValue}
            smartCaret={false}
          />
          {stepsCount === 3 && (
            <div className="agreement-wrapper">
              <p className="agreement-text">
                By clicking “Create account” you agree to <Link to="/">Terms & Conditions</Link> and{' '}
                <Link to="/">Privacy Policy</Link>
              </p>
            </div>
          )}
          <Button type="button" onClick={stepsCount === 2 ? handleLoginNext : handleCreateAccount}>
            {stepsCount === 2 ? 'Next' : 'create account'}
          </Button>
        </div>
      ) : currentIndex === 1 ? (
        <Formik initialValues={{ code: '' }} onSubmit={() => {}}>
          {() => (
            <Form className="form">
              <div className="label-wrapper">
                <p className="label">Verification code from SMS</p>
                {false && <p className="error">Code is required</p>}
              </div>

              <Field name="code" type="text" className="input-text" placeholder="Enter Verification code" />
              <Button type="button" onClick={stepsCount === 2 ? handleLogin : handleNextCreateAcc}>
                {stepsCount === 2 ? 'Log in' : 'next'}
              </Button>
              <Button flat textButton type="button" onClick={handleResendCode} className="text-button">
                resend code
              </Button>
              <Button flat textButton type="button" onClick={() => setCurrentIndex(0)} className="text-button">
                Change phone number
              </Button>
            </Form>
          )}
        </Formik>
      ) : (
        <Formik initialValues={{ firstName: '', lastName: '', birthday: '', gender: '' }} onSubmit={() => {}}>
          {({ values, setFieldValue }) => (
            <Form className="form">
              <div className="label-wrapper">
                <p className="label">first name</p>
                {false && <p className="error">First name is required</p>}
              </div>
              <Field name="firstName" type="text" className="input-text" placeholder="Enter first name" />
              <div className="label-wrapper">
                <p className="label">last name</p>
                {false && <p className="error">Last name is required</p>}
              </div>
              <Field name="lastName" type="text" className="input-text" placeholder="Enter last name" />
              <div className="label-wrapper">
                <p className="label">your birthday</p>
                {false && <p className="error">Birthday is required</p>}
              </div>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                placeholderText="date of birth"
                //It should be added, because  it is not convenient to choose birthday by flipping through just one month.
                // showMonthDropdown
                // showYearDropdown
                dropdownMode="select"
              />
              <div className="label-wrapper">
                <p className="label">your gender</p>
                {false && <p className="error">Gender is required</p>}
              </div>
              <Select
                name="gender"
                placeholder="select gender"
                options={genderList}
                value={genderList.find((item) => item.value === values.gender)}
                onChange={(selectedOption) => setFieldValue('gender', selectedOption?.value)}
                className="gender-select"
                classNamePrefix="gender-select"
                isSearchable={false}
              />
              <div className="label-wrapper">
                <p className="label">your email</p>
                {false && <p className="error">Email is required</p>}
              </div>
              <Field name="email" type="email" className="input-text" placeholder="Enter email" />

              <Button type="button" onClick={handleSubmitCreateAcc}>
                submit
              </Button>
            </Form>
          )}
        </Formik>
      )}

      <div>
        {Array.from({ length: stepsCount }, (_, index) => (
          <div key={index} className={`tile ${currentIndex === index ? 'active' : ''}`}></div>
        ))}
      </div>
    </StyledPhoneAuth>
  );
};
