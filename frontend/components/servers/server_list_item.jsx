import React from "react";
import { withRouter } from "react-router";
class ServerListItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleServerClick = this.handleServerClick.bind(this)
    }

    handleServerClick() {
        this.props.history.push(`/servers/${this.props.server.id}`)
    }

    render() {
        return (
            <li onClick={this.handleServerClick} className={parseInt(this.props.activeServerId) === this.props.server.id ? "server-item active-server" : "server-item"}>{this.props.server.name[0]}</li>
        )
    }
}

export default withRouter(ServerListItem)