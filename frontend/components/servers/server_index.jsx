import React from "react";
import { connect } from "react-redux";
import { fetchServerList } from "../../actions/server_actions";
import ServerListItem from "../servers/server_list_item"
class ServerIndex extends React.Component {

   
    render() {
        if (Object.keys(this.props.servers).length === 0) return null;
        return <ul className='server-list'>
                {
                    this.props.servers.map((server) => (
                        <ServerListItem key={server.id + server.name} server={server}  />
                    ))
                }
        </ul>
    }
}

const mSTP = (state) => ({
    servers: {}
})

const mDTP = (dispatch) => ({
    fetchServers: () => dispatch(fetchServerList())
})

export default connect(mSTP, mDTP)(ServerIndex)