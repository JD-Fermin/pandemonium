import React from "react";
import { connect } from "react-redux";
import { fetchServerList } from "../../actions/server_actions";
import ServerListItem from "../servers/server_list_item"
class ServerList extends React.Component {
    componentDidMount() {
        this.props.fetchServerList()
    }
    render() {
        if (this.props.servers.length === 0) return null;
        return <div className="server-bar">
            <ul className='server-list'>
                {
                    this.props.servers.map((server) => (
                        <ServerListItem key={server.id + server.name} server={server} />
                    ))
                }
                <li className="server-create">&#10011;</li>
            </ul>
        </div>
    }
}

const mSTP = (state) => ({
    servers: Object.values(state.entities.servers)
})

const mDTP = (dispatch) => ({
    fetchServerList: () => dispatch(fetchServerList())
})


export default connect(mSTP, mDTP)(ServerList)