import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Route , BrowserRouter as Router, NavLink, Switch} from 'react-router-dom';
import Customer from './Components/Customer';
import Product from './Components/Product';
import NotFound from './Components/NotFound';

const routing =(
  <Router>
      <div>
        <ul>
          <button>
            <li>
              <NavLink to="/" activeClassName="active"> Home </NavLink>
            </li>
          </button>
          <button>
            <li>
              <NavLink activeClassName="active" to="/Customer"> Customer </NavLink>
            </li>
          </button>
          <button>
            <li>
              <NavLink to="/Product" activeClassName="active"> Product  </NavLink>
            </li>
          </button>
        </ul>
        <Switch>
          <Route exact path="/" component={App} />
          <Route  path="/Customer/:id" component={Customer} />
          <Route  path="/Product" component={Product} />
          <Route  component={NotFound} />
        </Switch>
          
      </div>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

