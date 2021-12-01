import React from "react";

class ServerHeader extends React.Component {
    render() {
        return (
            <div className="server-title">
                {this.props.activeServer ? <h2>{this.props.activeServer.name}</h2> : null}
                {this.props.activeServer && this.props.currentUser.id === this.props.activeServer.ownerId ? <span className="server-settings">⚙︎</span> : null}
            </div>
        )
    }
}

export default ServerHeader