import React from 'react'
import LoginApp from '../components/LoginApp'
import Logout from '../components/Logout'
import landingBackground from "../images/landingBackground.png";

export default function LandingPage() {
    return (
        <section>
            <section className="HomeNav">
                <nav>
                    <h2>ANOTALO</h2>
                    <button className="buttonLogout" onClick={LoginApp}>Signin Login</button>  
                </nav>
                <section style={{ backgroundImage: `url(${landingBackground})` }} className="landingBackground">
                    
                </section>
            </section> 
        </section>
    )
}
