import React from 'react';
import  { 
    Link

} from 'react-router-dom'
// import {handleLogout} from './LoginApp';

const Logout  = ({handleLogout}) => {
    
    return (
            <section className="HomeNav">
                <nav>
                    <h2>NOTE ME</h2>
                    <button className="buttonLogout" onClick={handleLogout}>Logout</button>
                </nav>
            </section>
    )
}

export default Logout;
