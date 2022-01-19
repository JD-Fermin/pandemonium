import React from "react";
import { Link } from "react-router-dom";
class Splash extends React.Component {
    render() {
        return (
            <div>
                <h1>Pandemonium</h1>
                <div className="splash-screen">
                    <div className="greetings">
                        <h2>Welcome!</h2>
                        <h3>The Place for Cultured Peeps to Hang Out</h3>
                    </div>
                    
                    <ul className="splash-options">
                        <li><Link to="/login">Log In!</Link></li>
                        <li><Link to="/register">Register!</Link></li>
                    </ul>
                    
                    <ul className="reference-links"> You can find me in:
                        <li onClick={() => window.open('https://github.com/JD-Fermin/pandemonium')}>Github</li>
                        <li onClick={() => window.open('https://angel.co/u/jan-daniel-fermin')}>AngelList</li>
                        <li onClick={() => window.open('https://www.linkedin.com/in/jan-daniel-fermin-923418228/')}>LinkedIn</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Splash