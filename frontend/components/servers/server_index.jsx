import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { fetchRandomServerList } from "../../actions/server_actions";
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
            console.log('Joined!')
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
    // fetchJoinedServers: (i
    fetchRandomServers: () => dispatch(fetchRandomServerList())
})

export default withRouter(connect(mSTP, mDTP)(ServerIndex))