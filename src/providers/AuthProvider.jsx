import React, { createContext, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null)

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword( auth, email, password )
    }

    const userLogin = (email, password) => {
        return signInWithEmailAndPassword( auth, email, password )
    }

    const googleSingIn = () => {
        return signInWithPopup( auth, googleProvider )
    }

    const githubSingIn = () => {
        return signInWithPopup( auth, githubProvider )
    }

    const authInfo = {
        createUser,
        googleSingIn,
        githubSingIn,
        userLogin,
        user
    }

    return (
        <AuthContext.Provider value={ authInfo }>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;