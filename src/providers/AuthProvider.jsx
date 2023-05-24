import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider,
         GoogleAuthProvider,
         createUserWithEmailAndPassword, 
         getAuth, onAuthStateChanged, 
         signInWithEmailAndPassword, 
         signInWithPopup, 
         signOut, 
         updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword( auth, email, password )
    }

    const userLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword( auth, email, password )
    }

    const googleSingIn = () => {
        setLoading(true)
        return signInWithPopup( auth, googleProvider )
    }

    const githubSingIn = () => {
        setLoading(true)
        return signInWithPopup( auth, githubProvider )
    }

    // sign out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // update user profile
    const updateUserProfile = (name, photo, currentUser) => {
        setLoading(true)
         return updateProfile(currentUser, {
            displayName: name,
            photoURL: photo
        })
    }

    // observer user auth state
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            return unsubscribe();
        }

    }, [])

    const authInfo = {
        createUser,
        googleSingIn,
        githubSingIn,
        userLogin,
        logOut,
        user,
        loading,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;