import { useEffect, useState } from 'react'
import {getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from '../Firebase/firebase.init';
initializeAuthentication()
const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    // register a new user
    const registerNewUser = (email, password,name,location, navigate, Swal) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location.state?.from || '/'
                setUser(result.user)
                updateUser(name, email)
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Register',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(destination)
            })
            .catch((error) => {
                if (error.message.includes('email-already-in-use')) {
                    setError('You Already registered. Please Login')
                } else {
                    setError(error.message)
                }
            }).finally(() =>setIsLoading(false));;
    }
    // update an user profile
    const updateUser = (name,email) => {
        const newUser = { email, displayName: name };
        updateProfile(auth.currentUser, {
            displayName: name,
        }).then(() => {
            setUser(newUser)
         }).catch(err => setError(err.message));
    }
    // login with email and password
    const logIn = (email, password, location, navigate, Swal) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const destination = location.state?.from || '/'
                setUser(result.user);
                setError("");
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Successfully Login',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(destination);
            }).catch(error => {
                if (error.message.includes("user-not-found")) {
                    setError("invalid email and Password");
                } else if (error.message.includes("wrong-password")) {
                    setError('Your password is incorrect')
                }
                else {
                    setError(error.message)
                }
            }).finally(() => setIsLoading(false))
    }
    // get current user
    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
    }, [auth])
    // logout an user
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        }).finally(() => setIsLoading(false));
    }
    return {
        user,
        error,
        isLoading,
        logOut,
        registerNewUser,
        logIn
    }
}
export default useFirebase;