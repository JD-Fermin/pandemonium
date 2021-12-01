import React from "react";
import ChannelList from "../channels/channel_list";
import ChannelHeader from "../channels/channel_header"
import Chatbox from "../messages/chatbox";
import ServerList from "../servers/server_list"
import ServerHeader from "../servers/server_header"
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
                    <ServerHeader activeServer={this.props.activeServer} currentUser={this.props.currentUser} />
                    <ChannelList activeChannelId={this.props.activeChannelId} activeServerId={this.props.activeServerId} activeServer={this.props.activeServer} currentUser={this.props.currentUser}/>
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
                                        <li key={user.id}>{this.props.activeServer && user.id === this.props.activeServer.ownerId ? <div className="owner">{user.username}<img src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/54/crown_1f451.png" className="owner-crown" /></div> : user.username}</li>
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