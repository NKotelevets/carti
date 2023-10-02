import { FC } from 'react';

import { StyledCheckoutScreens } from '../styles/screens/Checkout';
import { Field, Form, Formik } from 'formik';

export const Checkout: FC = () => {
  return (
    <StyledCheckoutScreens>
      <h3 className="title">Checkout</h3>

      <div>
        <div>
          <h2>DELIVERY ADDRESS</h2>
          <Formik initialValues={{ code: '' }} onSubmit={() => {}}>
            {() => (
              <Form className="form">
                <div></div>

                <Field name="code" type="text" className="input-text" placeholder="Enter Verification code" />
              </Form>
            )}
          </Formik>
        </div>
        <div></div>
      </div>
    </StyledCheckoutScreens>
  );
};

export default Checkout;
