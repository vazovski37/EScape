import React from 'react'
import { useState, useEffect } from "react";

import { auth } from '../firebase-config';
import { signInWithPopup, FacebookAuthProvider,GoogleAuthProvider} from "firebase/auth";


function Profile() {
const [isAuth, setIsAuth] = useState(  localStorage.getItem('isAuth'))

  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup( auth,googleProvider).then((re)=>{

      localStorage.setItem( 'isAuth' , true ) 
      localStorage.setItem( 'userName' , re.user.displayName )
      localStorage.setItem( 'email' , re.user.email )
      localStorage.setItem( 'pImg' , re.user.photoURL )
      if( re.user.email=='giorgipapidze37@gmail.com'){
        localStorage.setItem('user', 'vaxadminskaisalami')
      }else{
        localStorage.setItem('user','user')
      }
      setIsAuth(true)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  }
    
  const signInWithFacebook = () =>{
    const facebookProvider = new FacebookAuthProvider();
    signInWithPopup( auth,facebookProvider).then((re)=>{
      localStorage.setItem( 'isAuth' , true ) 
      localStorage.setItem( 'userName' , re.user.displayName )
      localStorage.setItem( 'email' , re.user.email )
      localStorage.setItem( 'pImg' , re.user.photoURL )
      if( re.user.email=='giorgipapidze37@gmail.com'){
        localStorage.setItem('user', 'vaxadminskaisalami')
      }else{
        localStorage.setItem('user','user')
      }
      setIsAuth(true)
    })
    .catch((err)=>{
      console.log(err.message)
    })
  
  }
  const signOut = () =>{
    localStorage.clear()
    setIsAuth(false)
  }

  return (
    <>
    { 
      isAuth ? (
        <div>
          welcome {localStorage.getItem("userName")}, your email is {localStorage.getItem("email")} here is ypur img <img src={localStorage.getItem("pImg")} />
          <button onClick={signOut} > sign out</button>
        </div>
      ) : (
        <div>
          <button onClick={signInWithGoogle} id='signInWithGoogle' >Sign In With Google</button>
          <button onClick={signInWithFacebook} id='signInWithFacebook' >Sign In With Facebook</button>
        </div> 
      )
    }
    </>
  )
}

export default Profile