import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Review from './Components/Review';
import Login from "./Components/Login";
import Register from "./Components/Register";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter>
        <React.Fragment>
            <Route exact path='/' component={Review} />
            <Route path='/Login' component={Login} />
            <Route path='/Register' component={Register} />
        </React.Fragment>
    </BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
