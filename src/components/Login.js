import React  from 'react'
import { useHistory } from 'react-router-dom';


const Login = (props) => {
    const {
        email, 
        setEmail, 
        password, 
        setPassword, 
        handleLogin, 
        handleSignup, 
        hasAccount,
        setHasAccount, 
        emailError, 
        passwordError
    } = props;

    return (
        <section className="login">
        
            <div className="loginContainer">
                <h1 className="tittleForm">ANOTALO</h1>
                <label>Email</label>
                <input 
                    type="text" 
                    autoFocus 
                    required
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    />
                    <p className="errorMsg">{emailError}</p>
                <label>Contraseña</label>
                <input 
                    type="password" 
                    required
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    />
                    <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                        <button onClick={handleLogin}>Ingresar</button>
                        <p>Aun no tienes una cuenta?<span onClick={() => setHasAccount(!hasAccount)}>Crear</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick={handleSignup}>Crear</button>
                        <p>Ya eres usuario?<span onClick={() => setHasAccount(!hasAccount)}>Ingresar</span></p>
                        </>    
                    )}
                </div>
            </div>
        </section>
    )
    
}

export default Login;

