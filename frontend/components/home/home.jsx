import React from "react";

class Home extends React.Component {
    render() {
        if (!this.props.currentUser) return null;
        return (
            <div className="splash">
                <h1>{this.props.currentUser.username}</h1>
                <button className="button" onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }
}

export default Home