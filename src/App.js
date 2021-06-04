import React, { createContext, useState } from 'react';
import './App.css';
import FakeDataLoad from './Components/FakeDataLoad/FakeDataLoad';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SearchResult from './Components/SearchResult/SearchResult';
import Login from './Components/Login/Login';
import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
import Search from './Components/Search/Search';
import Map from './Components/Map/Map';
import Direction from './Components/Map/Direction';





export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Navbar></Navbar>

        <Switch>

          <Route path="/home">
            <FakeDataLoad></FakeDataLoad>
          </Route>
          <Route exact path="/">
            <FakeDataLoad></FakeDataLoad>
          </Route>
          <PrivetRoute path="/search/:id">
          <Search></Search>
          </PrivetRoute>
          <PrivetRoute path="/searchResult/:id">
            <SearchResult></SearchResult>
          </PrivetRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/map">
           <Map></Map>
          </Route>
          


        </Switch>

      </Router>
    </UserContext.Provider>



  );
}

export default App;
