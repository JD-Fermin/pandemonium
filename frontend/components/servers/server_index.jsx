import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { createMembership } from "../../actions/membership_actions";
import { fetchRandomServerList, fetchServerList } from "../../actions/server_actions";
withRouter

class ServerIndex extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchRandomServers()
    }

    handleClick(serverId) {
        if (this.props.joinedServers[serverId] !== undefined) {
            this.props.history.push(`/servers/${serverId}`)
        } else {
            
            this.props.join({ user_id: this.props.currentUserId, server_id: serverId }).then(res => this.props.history.push(`/servers/${serverId}`))
            // this.props.fetchJoinedServers(this.props.currentUserId)
        }
    }

    render() {
        if (Object.keys(this.props.servers).length === 0) return null;
        return <div className="random-servers-container">
            {
                this.props.servers.map((server) => (
                        <div key={server.name + server.id} className={this.props.joinedServers[server.id] !== undefined ? "joined random-server-item" : "random-server-item"} onClick={() => this.handleClick(server.id)}>
                            <h3>{server.name}</h3>
                            <p>{server.description}</p>
                        </div>
                ))
            }
        </div>
    }
}

const mSTP = (state) => ({
    servers: Object.values(state.entities.randomServers),
    joinedServers: state.entities.servers,
    currentUserId: state.session.currentUser.id
})

const mDTP = (dispatch) => ({
    join: (membership) => dispatch(createMembership(membership)) ,
    fetchRandomServers: () => dispatch(fetchRandomServerList()),
    fetchJoinedServers: (id) => dispatch(fetchServerList(id))
})

export default withRouter(connect(mSTP, mDTP)(ServerIndex))