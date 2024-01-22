import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Carousal from './Components/Carousal';
import Cart from './Components/Cart';
import Navbar from './Components/Navbar';
import RingList from './Components/RingList';
import CheckoutForm from './Components/CheckoutForm';
import ContactUsForm from './Components/ContactUsForm';

function App() {
  return (
    <>
    
    <Router>
    <Navbar />
      <Routes>
      <Route path="/" exact element={<Carousal />} />
      <Route path="/ring-list" element={<RingList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path='/checkout' element={<CheckoutForm />} />
      <Route path='/contact' element={<ContactUsForm />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
