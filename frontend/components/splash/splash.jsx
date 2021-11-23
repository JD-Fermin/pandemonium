import React from "react";
import { Link } from "react-router-dom";
class Splash extends React.Component {
    render() {
        return (
            <div className="splash-screen">
                <h2>Welcome!</h2>
                <h3>The Place for Cultured Peeps to Hang Out</h3>
                <ul className="splash-options">
                    <li><Link to="/login">Log In!</Link></li>
                    <li><Link to="/register">Register!</Link></li>
                </ul>
                
                <ul className="reference-links"> You can find me in:
                    <li><a href="https://github.com/JD-Fermin/pandemonium">Github</a></li>
                </ul>
            </div>
        )
    }
}

export default Splash