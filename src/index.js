import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import StationsWrapper from "./components/StationsWrapper/StationsWrapper";
import {Provider} from "react-redux";
import {store} from "./core/store";
import {BrowserRouter} from "react-router-dom";
import { Switch, Route } from 'react-router'
import StationDetails from "./components/StationDetails/StationDetails";

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Switch>
                <Route path="/" exact={true} component={StationsWrapper} />
                <Route path="/stations/:id" exact={true} component={StationDetails} />
              </Switch>
          </BrowserRouter>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
