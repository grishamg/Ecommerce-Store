import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { useEffect } from "react";
import { auth } from './firebase';
import { useStateValue } from './StateProvider'
import Payment from "./Payment";
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import Home2 from './Home3.js';
import Orders from "./Orders";
const promise = loadStripe( 'pk_test_51Kh5ldSCmCEPpXnutCtWmQQjvckAil9edgoO6UMnCtaNFTVQozQxMEEG4M5IvQrAm3hiitYGY3MDKP29bdGYLfkT00f1xsRr9d' );


function App ()
{
  const [ { }, dispatch ] = useStateValue();
  useEffect( () =>
  {
    // will onyl run once when the app component loads
    auth.onAuthStateChanged( authUser =>
    {
      console.log( 'The User is >>> ', authUser );

      if ( authUser )
      {
        // user jsut logged in / the user was logged in
        dispatch( {
          type: 'SET_USER',
          user: authUser
        } )
      } else
      {
        // the user is logged out
        dispatch( {
          type: 'SET_USER',
          user: null
        } )
      }
    } )
  }, [] )
  return (
    // BEM  Convention 
    <Router basename="/">
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/checkout" element={
          <>
            <Header />
            <Checkout />
          </>
        } />

        <Route path='/payment' element={
          <>
            <Header />
            <Elements stripe={ promise }>
              <Payment />
            </Elements>
          </>
        } />

        <Route path="/" element={
          <>
            <Header />
            <Home2 />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
