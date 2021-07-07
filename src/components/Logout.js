import React from 'react';
import {handleLogout} from './LoginApp';

const Logout  = ({handleLogout}) => {

    return (
        <section className="Logout">
            <nav>
                <h2>Welcome</h2>
                <button className="buttonLogout" onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    )
}

export default Logout;
