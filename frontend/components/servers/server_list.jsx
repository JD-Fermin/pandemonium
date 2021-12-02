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

    toggleForm() {
        this.setState({ openForm: this.state.openForm ? false : true })
    }

    toggleEdit() {
        this.setState({ editing: this.state.editing ? false : true })
    }

    render() {
        if (this.props.servers.length === 0) return null;
        return <div className="server-bar">
            <ul className='server-list'>
                {
                    this.props.servers.map((server) => (
                        <ServerListItem key={server.id + server.name} server={server} activeServerId={this.props.activeServerId} />
                    ))
                }
                <li onClick={this.toggleForm} className="server-create">&#10011;</li>
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