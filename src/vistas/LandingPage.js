import React from 'react'
import landingBackground from "../images/landingBackground.png";
import  { Link } from 'react-router-dom'

export default function LandingPage() {
    return (
            <section className="HomeNav">
                <nav>
                    <h2>ANOTALO</h2>
                    <Link to="/login">
                    <button className="buttonLogout">Signin Login</button> 
                    </Link> 
                </nav>
                <div style={{ backgroundImage: `url(${landingBackground})` }} className="landingBackground">  
                </div>
            </section> 
    )
}
