import React from "react";
import ChannelList from "../channels/channel_list";
import ChannelHeader from "../channels/channel_header"
import Chatbox from "../messages/chatbox";
import ServerList from "../servers/server_list"
class Home extends React.Component {
    componentDidMount() {
        this.props.fetchUsers();
        { this.props.activeServerId ? this.props.fetchServer(this.props.activeServerId) : null}
    }
    render() {
        if (!this.props.currentUser) return null;
        if (this.props.users.length === 0) return null;
        // if (!this.props.activeServer) return null;
        return (
            <div className="home">

                <ServerList activeServerId={this.props.activeServerId} />
                <div className="channel-bar">
                    <div className="server-title">
                        { this.props.activeServer ? <h2>{this.props.activeServer.name}</h2> : null}
                        
                    </div>
                    <ChannelList activeChannelId={this.props.activeChannelId} activeServerId={this.props.activeServerId}/>
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
                        <ChannelHeader activeChannelId={this.props.activeChannelId} />
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