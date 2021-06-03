import './Login.css';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { useState } from 'react';
import {useContext} from 'react';
import {UserContext} from '../../App';
import { useHistory, useLocation } from "react-router";



firebase.initializeApp(firebaseConfig);



function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    photo: '',
    email: '',
    password: ''

  })
  const [loggedInUser,setLoggedInUser] = useContext(UserContext); 
  const history=useHistory();
  const location =useLocation();
  let { from } = location.state || { from: { pathname: "/" } };




  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const  fbProvider = new firebase.auth.FacebookAuthProvider();

  //GoogleSignin
  const handleSignin = () => {
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {

        const { displayName, email, photoURL } = result.user;
        const signedInUser = {
          isSignIn: true,
          name: displayName,
          photo: photoURL,
          email: email
        }
        setUser(signedInUser);
        setLoggedInUser(signedInUser)//Context e set kora
    history.replace(from);//private Route er jonoo

      })
    // .catch((error) => {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorCode, errorMessage)

    // });
  }
  //facebookSignIn
  const handleFbSigin =()=>{
    firebase
    .auth()
    .signInWithPopup(fbProvider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;
  
      // The signed-in user info.
      var user = result.user;
      console.log(user)
  
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      var accessToken = credential.accessToken;
  
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
  
      // ...
    });

  }


  //GoogleSinOut
  const handleSignOut = () => {
    firebase.auth().signOut().then(() => {
      const signOutUser = {
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        succes: false
      }
      setUser(signOutUser);

    }).catch((error) => {
      // An error happened.
    });
  }



  //emailpassword
  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)

    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value)
      isFieldValid = isPasswordValid && passwordHasNumber
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {

      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.succes = true;
          setUser(newUserInfo);
          updateUserName(user.name);

        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.succes = false;
          setUser(newUserInfo);

        });


    }
    if(!newUser && user.email && user.password){
      firebase.auth().signInWithEmailAndPassword(user.email,user.password)
  .then((res) => {
    const newUserInfo = { ...user };
    newUserInfo.error = '';
    newUserInfo.succes = true;
    setUser(newUserInfo);
    setLoggedInUser(newUserInfo)//Context e set kora
    history.replace(from);//private Route er jonoo
    console.log('sign in userinfo',res.user);
  })
  .catch((error) => {
    const newUserInfo = { ...user };
    newUserInfo.error = error.message;
    newUserInfo.succes = false;
    setUser(newUserInfo);

  });
    }
    e.preventDefault();
  }
  const updateUserName= name =>{
    const user = firebase.auth().currentUser;

user.updateProfile({
  displayName: name 
}).then(function() {

console.log('user name update')
}).catch(function(error) {
  console.log(error)
});
   
  }


  return (

    <div className="body">

      {/* {
        user.isSignIn && <div>
          name:{user.name}
          <br />
    email:{user.email}
          <br />
          <img src={user.photo} alt="" />
        </div>
      } */}

     
      <form onSubmit={handleSubmit} className="form-login text-center">
      <h2>User Login</h2>
        {newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="name" required />}
        <br />
        <input type="text" name="email" onBlur={handleBlur} placeholder="email" required />
        <br />
        <input type="password" name="password" onBlur={handleBlur} placeholder="password" required />
        <br />
        <input className="" type="Submit" value={newUser ?'Sign up' : 'Sign in'} />
        <br/>
        <input type="checkbox" onChange={() => setNewUser(!newUser)} nmae="newUser" id="" />
        <label htmlfor="newUser">New User Sign up</label>
      </form>
      <p style={{ color: 'red' }}>{user.error}</p>
      {
        user.succes && <p style={{ color: 'green' }}>User {newUser?'created':'Logged In'} Successfully</p>
      }
        {
        user.isSignIn ? <button onClick={handleSignOut}>SignOut</button> :
          <button className="gLogin text-center" onClick={handleSignin}>Continue With Google</button>
      }
      <br />
      <button className=" fLogin text-center" onClick={handleFbSigin}>Continue With Facebook</button>
    </div>

  );
}

export default Login;
