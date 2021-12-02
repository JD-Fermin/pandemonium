import React from "react";
import ChannelList from "../channels/channel_list";
import ChannelHeader from "../channels/channel_header"
import Chatbox from "../messages/chatbox";
import ServerList from "../servers/server_list"
import ServerHeader from "../servers/server_header"
import UserList from "../users/user_list"
import { withRouter } from "react-router";
class Home extends React.Component {
    componentDidMount() {
        //  this.props.fetchUsers();
        //  { this.props.activeServerId ? this.props.fetchUsers(this.props.activeServerId) : this.props.fetchUsers() }
        { this.props.match.params.serverId ? this.props.fetchServer(this.props.match.params.serverId ) : null}
    }
    render() {
        if (!this.props.currentUser) return null;
        // if (this.props.users.length === 0) return null;
        // if (!this.props.activeServer) return null;
        return (
            <div className="home">
                <ServerList />
                <div className="channel-bar">
                    <ServerHeader activeServer={this.props.activeServer} currentUser={this.props.currentUser} />
                    <ChannelList activeChannelId={this.props.activeChannelId} activeServerId={this.props.match.params.serverId } activeServer={this.props.activeServer} currentUser={this.props.currentUser}/>
                    <div className="user-ops">
                        <h3>{this.props.currentUser.username}</h3>
                        <button className="button" onClick={this.props.logout}>Log Out</button>
                    </div>

                </div>
                <div className="home-content">
                    <nav>
                        <ChannelHeader activeChannelId={this.props.activeChannelId} />
                    </nav>
                    <div className="chatbox-outer">
                        <Chatbox />
                        <UserList activeServer={this.props.activeServer} />
                    </div>

                </div>
            </div>
        )
    }
}

export default withRouter(Home)