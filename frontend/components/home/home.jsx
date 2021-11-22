import React from "react";

class Home extends React.Component {
    render() {
        if (!this.props.currentUser) return null;
        return (
            <div>
                <h1>{this.props.currentUser.username}</h1>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }
}

export default Home