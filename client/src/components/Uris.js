import React from "react";
import Admin from './Admin'

import { Routes } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Wallet from "./Wallet";

// Params are placeholders in the URL that begin
// with a colon, like the `:id` param defined in
// the route in this example. A similar convention
// is used for matching dynamic segments in other
// popular web frameworks like Rails and Express.

export default function Uris() {
  return (
    <Router>
      <div>
        

        {/* <ul>
          <li>
            <Link to="/wallet/id">Shareholders</Link>
          </li>

        </ul> */}

        <Routes>
           <Route exact path="/" element={<Admin/>}/ >
  
          <Route path="/wallet/:id" element={<Wallet />} />
        </Routes>
      </div>
    </Router>
  );
}
