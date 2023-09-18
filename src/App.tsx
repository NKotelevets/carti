import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SignIn, Home, SignUp, WaitingRoom, ProductsList } from './screens';
import { Theme } from './styles/Theme';
import { Header } from './components/Header';
import 'animate.css/animate.min.css';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/waiting-room" element={<WaitingRoom />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
