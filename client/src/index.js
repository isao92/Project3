import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import registerServiceWorker from './registerServiceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import axios from "axios";

// Our Components
import Login from './components/Login';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import SpeciesCalendar from './components/SpeciesCalendar';
import MushroomPage from './components/MushroomPage';
import PageAdmin from './pages/AdminPage';


// Here is if we have an id_token in localStorage
if(localStorage.getItem("id_token")) {
  // then we will attach it to the headers of each request from react application via axios
  axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('id_token')}`;
}

ReactDOM.render(
    <Router>
        <div>
            <Navbar />
            <Route exact path="/" component={App} />
            <Route exact path="/speciescalendar" component={SpeciesCalendar} />
            <Route exact path="/adminpage" component={PageAdmin} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/ourmushrooms" component={MushroomPage} />
        </div>
    </Router>
    , document.getElementById('root')
);
registerServiceWorker();
