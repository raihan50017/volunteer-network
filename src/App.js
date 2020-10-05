import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import { useState } from 'react';
import { createContext } from 'react';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegisterVolunteer from './components/RegisterVolunteer/RegisterVolunteer';
import Dashbord from './components/Dashbord/Dashbord';

export const userContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({
    name:'',
    email:'',
    photoURL:'',
    eventTitle: '',
    eventDescription: '',
    eventDate:'',
    id:'',
    eventPhoto:''
  });

  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/register">
            <Register></Register>
          </PrivateRoute>
          <PrivateRoute path="/volunteer">
            <RegisterVolunteer></RegisterVolunteer>
          </PrivateRoute>
          <Route path="/dashbord">
            <Dashbord></Dashbord>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
