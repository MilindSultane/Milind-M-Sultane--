import './App.css';
import Navbar from './components/header/Navbar';
import Newnav from './components/new nav/Newnav';
import SignIn from './components/Signin_SignUp/SignIn';
import SignUp from './components/Signin_SignUp/SignUp';
import Maincomp from './components/home/Maincomp';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import Laptop from './components/cart/Laptop';
import Tablet from './components/cart/Tablet';
import HeadPhones from './components/cart/HeadPhones';
import PowerBank from './components/cart/PowerBank';
import Footer from './components/footer/Footer';
import Payment from './components/buynow/Payment'
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar/>
    <Newnav/>
    <Routes>
      <Route path="/" element={<Maincomp/>}></Route>
      <Route path="/login" element={<SignIn/>}></Route>
      <Route path="/Register" element={<SignUp/>}></Route> 
      <Route path="/getproductsone/:id" element={<Cart/>}></Route>
      <Route path="/buynow" element={<Buynow/>}></Route>
      <Route path="/lp" element={<Laptop/>}></Route>
      <Route path="/tab" element={<Tablet/>}></Route>
      <Route path="/hp" element={<HeadPhones/>}></Route>
      <Route path="/pb" element={<PowerBank/>}></Route>
      <Route path="/pay" element={<Payment/>}></Route>
    </Routes>
   
    <Footer/>
    
    </>
  );
}

export default App;
