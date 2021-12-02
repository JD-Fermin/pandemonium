import React from "react";
import EditServerForm from "./edit_server_form";
import { withRouter } from "react-router";
class ServerHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = { openForm: false }
        this.toggleForm = this.toggleForm.bind(this)
    }

    toggleForm() {
        this.setState({ openForm: this.state.openForm ? false : true })
    }

    render() {
        let serverTitle;
        if (this.props.activeServer) {
            serverTitle = <div className="server-title-header"><h2>{this.props.activeServer.name}</h2></div>;
        } else {
            if (this.props.match.path === "/discover") {
                serverTitle = <div className="server-title-header"><h2>Explore Servers!</h2></div>;
            } else {
                serverTitle = null;
            }
        }
        return (
            <div className="server-title">
                {serverTitle}
                {this.props.activeServer && this.props.currentUser.id === this.props.activeServer.ownerId ? <span onClick={this.toggleForm} className="server-settings">⚙︎</span> : null}
                {this.state.openForm ? <div className="create-channel-container"><EditServerForm toggleForm={this.toggleForm} server={this.props.activeServer} /></div> : null}
            </div>
        )
    }
}
export default withRouter(ServerHeader)

