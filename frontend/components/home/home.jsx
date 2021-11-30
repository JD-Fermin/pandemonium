import React from "react";
import ChannelList from "../channels/channel_list";
import ChannelHeader from "../channels/channel_header"
import Chatbox from "../messages/chatbox";
class Home extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
        
    }
    render() {
        if (!this.props.currentUser) return null;
        if(this.props.users.length === 0) return null;
        
        return (
            <div className="home">
                <div className="server-bar">
                    
                </div>
                <div className="channel-bar">
                    <div className="server-title">
                        <h2>Round Table</h2>
                    </div>
                    <ChannelList activeChannelId={this.props.activeChannelId}/>
                    <div className="user-ops">
                        <h3>{this.props.currentUser.username}</h3>
                        <button className="button" onClick={this.props.logout}>Log Out</button>
                    </div>
                    
                </div>
                <div className="home-content">
                    <nav>
                        {/* <div className="channel-header">
                            <span>#</span>
                            <h2>general</h2>
                        </div> */}
                        <ChannelHeader activeChannelId={this.props.activeChannelId}/>
                    </nav>
                    <div className="chatbox-outer">
                        <Chatbox />
                        <div className="sidebar">
                            <ul className="users-list">
                                <h3>Users</h3>
                                {
                                    this.props.users.map((user) => (
                                        <li key={user.id}>{user.username}</li>
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