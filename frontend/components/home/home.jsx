import React from "react";

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchUser(this.props.currentUser.id)
    }
    render() {
        if (!this.props.currentUser) return null;
        return (
            <div>
                <h1>{this.props.currentUser.username}</h1>
            </div>
        )
    }
}

export default Home