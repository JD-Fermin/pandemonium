import React from "react";
import { withRouter } from "react-router";
class ServerListItem extends React.Component {
    render() {
        return (
            <li className="server-item" >{this.props.server.name[0]}</li>
        )
    }
}

export default withRouter(ServerListItem)