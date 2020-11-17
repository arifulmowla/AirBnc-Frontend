

import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import Single from "./Pages/Single/Single";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewOrder from "./Pages/ReviewOrder/ReviewOrder";
import Contact from "./Pages/Contact/Contact";
import Payment from "./Pages/Payment/Payment";
import { createContext, useState } from "react";



import Navigation from './Components/Navigation/Navigation';
import Home from './Components/HomePage/Home/Home';
import HotelNavigation from './Components/HotelNavigation/HotelNavigation';
import HotelList from './Components/HotelList/HotelList';
export const ClientContext = createContext()

function App() {
  const [clientsNeed, setClientsNeed] = useState({})
  return (
    <>
      <ClientContext.Provider value={[clientsNeed, setClientsNeed]}>
        <BrowserRouter>
          <Route exact path='/' component={Navigation} />
          <Route exact path='/' component={Home} />
          <Route exact path='/hotelbooking' component={HotelNavigation} />
          <Route exact path='/hotelbooking' component={HotelList} />
        </BrowserRouter>
      </ClientContext.Provider>
      <Router>
        <Switch>
          <Route path="/single">
            <Single></Single>
          </Route>

          <Route path="/review-order">
            <ReviewOrder></ReviewOrder>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>


        </Switch>
      </Router>
    </>
  );
}

export default App;
