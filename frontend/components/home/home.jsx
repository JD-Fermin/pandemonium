import React from "react";

class Home extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchMessages();
    }
    render() {
        if (!this.props.currentUser) return null;
        // if (!this.props.users) return null;
        return (
            <div className="splash">
                <h1>{this.props.currentUser.username}</h1>
                <button className="button" onClick={this.props.logout}>Log Out</button>
                <ul>
                    <h3>Users: </h3>
                    {
                        this.props.users.map((user, i) => (
                            <li key={i}>{user.username}</li>
                        ))
                    }
                </ul>

                <ul>
                    <h3>Messages</h3>
                    {
                        this.props.messages.map((message, i) => (
                            <li key={i}>{`${message.content} by ${message.authorId}`}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Home