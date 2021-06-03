// import React, {createContext,useState} from 'react';
// import './App.css';
// import FakeDataLoad from './Components/FakeDataLoad/FakeDataLoad';
// import Navbar from './Components/Navbar/Navbar';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Booking from './Components/Booking/Booking';
// import RideBook from './Components/RideBook/RideBook';
// import GoogleSignin from './Components/Login/GoogleSignin';
// import PrivetRoute from './Components/PrivetRoute/PrivetRoute';
// import EmailPassword from './Components/Login/EmailPassword';
// import LoginForm from './Components/Login/LoginForm';


// export const userContext = createContext();




// function App() {
//   const [loggedInUser,setLoggedInUser] = useState({})
//   return (
//     <userContext.Provider value={[loggedInUser,setLoggedInUser]}>
//    <Router>
     
//      <Navbar></Navbar>
   
//     <Switch>

//       <Route path="/home">
//       <FakeDataLoad></FakeDataLoad>
//       </Route>
//       <Route exact path="/">
//       <FakeDataLoad></FakeDataLoad>
//       </Route>
//       <PrivetRoute path="/book/:id">
//         <Booking></Booking>
//       </PrivetRoute>
//       <Route path="/ride/:id">
//         <RideBook></RideBook>
         
//       </Route>
//       <Route path="/Glogin">
//         <GoogleSignin></GoogleSignin>
//       </Route>
//       <Route path="/emailpass">
//      <EmailPassword></EmailPassword>
//       </Route>
//       <Route path="/loginf">
//         <LoginForm></LoginForm>
        
//       </Route>

//     </Switch>

//    </Router>
//    </userContext.Provider>
    

    
//   );
// }

// export default App;
