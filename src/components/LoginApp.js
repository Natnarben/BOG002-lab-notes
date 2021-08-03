import React, { useState, useEffect }from "react";
import fire from "./Firebase";
import Login from "./Login";
import Logout from "./Logout";

const LoginApp = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setpasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

    const clearInputs  = () => {
        setEmailError('');
        setpasswordError('');
    }

    const clearErrors  = () => {
        setEmail('');
        setPassword('');
    }

    const handleLogin  = () => {
        clearErrors();
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(error=> {
                switch(error.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(error.message);
                        break;
                    case "auth/wrong-password":
                        setpasswordError(error.message);
                        break;
                }
            });
            console.log("USUARIO DENTRO")
    };

    const handleSignup  = () => {
        clearErrors();
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error=> {
                switch(error.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                        setEmailError(error.message);
                        break;
                    case "auth/weak-password":
                        setpasswordError(error.message);
                        break;
                }
            });

    };

    const handleLogout  = () => {
        fire.auth().signOut();
        console.log("USUARIO FUERA");
    };

    const authListener  = () => {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                clearInputs();
                setUser(user);
            } else {
                setUser("");
            }
        })
    };

    useEffect(() => {
        authListener();
    }, []);

    return (
        <div className="App">
            {user ? (
                <Logout handleLogout={handleLogout}/> 
            ) : (
                <Login 
                email={email}
                setEmail={setEmail} 
                password={password} 
                setPassword={setPassword} 
                handleLogin={handleLogin}
                handleSignup={handleSignup}
                hasAccount={hasAccount}
                setHasAccount={setHasAccount}
                emailError={emailError}
                passwordError={passwordError}
            />
            )}
            
        
        </div>
    );
}

export default LoginApp;