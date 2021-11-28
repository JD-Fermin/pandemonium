import React from "react";

import Chatbox from "../messages/chatbox";
class Home extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
        
    }
    render() {
        if (!this.props.currentUser) return null;
        if(this.props.users.length === 0) return null;
        // if(this.props.messages.length === 0) return null;
        // if (!this.props.users) return null;
        return (
            <div className="home">
                <div className="server-bar">
                    
                </div>
                <div className="channel-bar">
                    <div className="server-title">
                        <h2>Round Table</h2>
                    </div>
                    <div className="user-ops">
                        <h3>{this.props.currentUser.username}</h3>
                        <button className="button" onClick={this.props.logout}>Log Out</button>
                    </div>
                    
                </div>
                <div className="home-content">
                    <nav>
                        <div className="channel-header">
                            <span>#</span>
                            <h2>general</h2>
                        </div>
                    </nav>
                    <div className="chatbox-outer">
                        <Chatbox />
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
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default Home