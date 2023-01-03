import logo from './logo.svg';
import './App.css';
import WithSubnavigation from './Navbar';
import HeroContent from './Hero';
import SocialProfileWithImage from './Hero';
import { Card } from '@chakra-ui/react';
import CardSection from './Cards';
import Login from './Auth/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as RouteLink,
  Routes
} from "react-router-dom";
import Signup from './Auth/Signup';
import Transactions from './Transactions';
import CreditCard from './CreditCard';

function App() {
  return(
    <>
    <WithSubnavigation/>
    <Router>
   <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<HeroContent/>}/>
          <Route path="/home" element={<Transactions/>}/>
          <Route path="/credit_card" element={<CreditCard/>}>
          </Route>
          </Routes>
        </Router>
    </>
  )
}

export default App;
