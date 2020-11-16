

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Single from "./Pages/Single/Single";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReviewOrder from "./Pages/ReviewOrder/ReviewOrder";
import Contact from "./Pages/Contact/Contact";
import Payment from "./Pages/Payment/Payment";

function App() {
  return (
    <>
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
