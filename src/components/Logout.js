import React from 'react';
import  { 
    Link

} from 'react-router-dom'
// import {handleLogout} from './LoginApp';

const Logout  = ({handleLogout}) => {
    
    return (
            <section className="HomeNav">
                <nav>
                    <h2>ANOTALO</h2>
                    <Link to="/Login">
                        <button className="buttonLogout" onClick={handleLogout}>Salir</button>
                    </Link>
                </nav>
                <section>
                    <h2>NOTA 1</h2>
                    <h2>NOTA 2</h2>
                    <h2>NOTA 3</h2>
                </section>
            </section>
    )
}

export default Logout;
