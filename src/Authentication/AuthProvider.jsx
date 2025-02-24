import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile, onAuthStateChanged } from "firebase/auth";
import auth from '../Firebase/firebase-config';
import { useNavigate } from 'react-router';



export const authContext = createContext({})

const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [ userData, setUserData ] = useState(null)
    const [ loading, setLoading ] = useState(null)
    const [ error, setError ] = useState(null)
    const [ showPass, setShowPass ] = useState(null)

    {/** Create Account using Email*/}
    const signUpwithEmail = (allField) => {
      const email = allField.email
      const name = allField.name
      const photoURL = allField.photoURL
      const password = allField.password
      const form = allField.form      
 
        setLoading('Loading...')
        createUserWithEmailAndPassword(auth, email, password)
        .then((result)=>{
          const user = result.user
          updateProfile(user,{
            displayName: name,
            photoURL: photoURL
          })
          setLoading('')
          setError('Congratulations! Successfully Create your Account!')
          form.reset()          
        }).catch((error)=>{
          setError('Something Went Wring!')
        })
        return;
    }

    {/** Login With Email */}
    const logInWithEmail = (email, password, form) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result)=>{
            form.reset()
          }).catch((error)=>{
            setError('Something Went Wrong!')     
          })
        return;
    }

    {/** SignUp Account and SingIn using Google*/}
    const signUpWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((results)=>{

        }).catch((error)=>{
            setError('Something Went Wrong!')
        })
        return;
    }

    { /** User Profile Information */}
    useEffect(()=>{
      const loggedUser = onAuthStateChanged( auth, (user) => {
        setUserData(user)
      })

      return () => loggedUser()
    }, [userData])


    {/** SignOut */}
    const logOut = ()=>{
        signOut(auth).then(() => {
            setUserData(null)
            navigate('/signin')
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
        return;
    }

    const authData = {
        userData,
        loading,
        setLoading,
        error,        
        setError,
        showPass, 
        setShowPass,
        signUpwithEmail,
        logInWithEmail,
        signUpWithGoogle,
        logOut
    }

  return (
    <authContext.Provider value={ authData }>
        {children}
    </authContext.Provider>
  )
}

export default AuthProvider