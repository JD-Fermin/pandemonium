import React from "react";
import { connect } from "react-redux";
import { fetchServerList } from "../../actions/server_actions";
import ServerListItem from "../servers/server_list_item"
import CreateServerForm from "./create_server_form"
import { withRouter } from "react-router";
class ServerList extends React.Component {
    constructor(props) {
        super(props)
        this.state = { openForm: false, editing: false }
        this.toggleForm = this.toggleForm.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
    }
    componentDidMount() {
        this.props.fetchServerList(this.props.currentUser.id)
    }

    toggleForm(e) {

        this.setState({ openForm: this.state.openForm ? false : true })
    }

    toggleEdit() {
        this.setState({ editing: this.state.editing ? false : true })
    }

    componentDidUpdate(prevProps) {
        
        if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
            this.props.fetchServerList(this.props.currentUser.id)
        }
    }


    render() {
        // if (this.props.servers.length === 0) return null;
        return <div className="server-bar">
            <ul className='server-list'>
                {
                    this.props.servers.map((server) => (
                        <ServerListItem key={server.id + server.name} server={server} activeServerId={this.props.match.params.serverId} />
                    ))
                }
                <li onClick={this.toggleForm} className={this.state.openForm ? "server-create active-server" : "server-create"}>&#10011;</li>
                <li className={this.props.match.path==="/discover" ? "server-create active-server" : "server-create"} onClick={() => this.props.history.push("/discover")} ><img className="server-explore" src="https://hotemoji.com/images/dl/b/compass-emoji-by-twitter.png" /></li>
            </ul>
            {this.state.openForm && !this.state.editing ? <div className="create-channel-container"><CreateServerForm toggleForm={this.toggleForm} /></div> : null}

        </div>
    }
}

const mSTP = (state) => ({
    servers: Object.values(state.entities.servers),
    currentUser: state.session.currentUser
})

const mDTP = (dispatch) => ({
    fetchServerList: (id) => dispatch(fetchServerList(id))
})


export default withRouter(connect(mSTP, mDTP)(ServerList))