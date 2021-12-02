import React from "react";
import { connect } from "react-redux";
import { fetchRandomServerList } from "../../actions/server_actions";

class ServerIndex extends React.Component {

    componentDidMount() {
        this.props.fetchRandomServers()
    }

    render() {
        if (Object.keys(this.props.servers).length === 0) return null;
        return <div className="random-servers-container">
            {
                this.props.servers.map((server) => (
                        <div key={server.name + server.id}className="random-server-item">
                            <h3>{server.name}</h3>
                            <p>{server.description}</p>
                        </div>
                ))
            }
        </div>
    }
}

const mSTP = (state) => ({
    servers: Object.values(state.entities.randomServers)
})

const mDTP = (dispatch) => ({
    fetchRandomServers: () => dispatch(fetchRandomServerList())
})

export default connect(mSTP, mDTP)(ServerIndex)