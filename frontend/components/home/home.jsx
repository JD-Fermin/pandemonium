import React from "react";
import MessagesIndexContainer from "../messages/messages_index_container";
import MessageForm from "../messages/message_form";
class Home extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
        this.props.fetchMessages();
    }
    render() {
        if (!this.props.currentUser) return null;
        // if (!this.props.users) return null;
        return (
            <div className="home">
                <header className="home-header">
                    <h2>{this.props.currentUser.username}</h2>
                    <button className="button" onClick={this.props.logout}>Log Out</button>
                </header>
                <div className="home-content">
                    <div className="sidebar">
                        <ul className="users-list">
                            <h3>Users</h3>
                            {
                                this.props.users.map((user, i) => (
                                    <li key={i}>{user.username}</li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="chatbox">
                        <MessagesIndexContainer />
                        <MessageForm />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home