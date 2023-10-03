import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  SignIn,
  Home,
  SignUp,
  WaitingRoom,
  ProductsList,
  PickedItems,
  MissedItems,
  Checkout,
  Event,
  TermsAndConditions,
  PrivacyPolicy,
} from './screens';
import { Theme } from './styles/Theme';
import { Header } from './components/Header';
import 'animate.css/animate.min.css';
import { ModalProvider } from 'styled-react-modal';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <ModalProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/waiting-room" element={<WaitingRoom />} />
            <Route path="/products" element={<ProductsList />} />
            <Route path="/picked-items" element={<PickedItems />} />
            <Route path="/missed-items" element={<MissedItems />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/Event" element={<Event />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
