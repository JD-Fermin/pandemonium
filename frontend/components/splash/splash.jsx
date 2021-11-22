import React from "react";
import { Link } from "react-router-dom";
class Splash extends React.Component {
    render() {
        return (
            <div>
                <h2>Welcome!</h2>
                <ul>
                    <li><Link to="/login">Log In!</Link></li>
                    <li><Link to="/register">Register!</Link></li>
                </ul>
                
            </div>
        )
    }
}

export default Splash