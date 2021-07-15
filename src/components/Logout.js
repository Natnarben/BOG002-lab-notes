import React from 'react';
import  { 
    Link

} from 'react-router-dom'
import Homepage from '../vistas/Homepage';
// import {handleLogout} from './LoginApp';

const Logout  = ({handleLogout}) => {
    
    return (
            <section className="HomeNav">
                <nav>
                    <h2>ANOTALO</h2>
                    <Link to="/login">
                        <button className="buttonLogout" onClick={handleLogout}>Salir</button>
                    </Link>
                </nav>
                <Homepage />
            </section>
    )
}

export default Logout;
