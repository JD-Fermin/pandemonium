import React from "react";

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
        return (
            <div className="server-title">
                {this.props.activeServer ? <h2>{this.props.activeServer.name}</h2> : null}
                {this.props.activeServer && this.props.currentUser.id === this.props.activeServer.ownerId ? <span onClick={this.toggleForm} className="server-settings">⚙︎</span> : null}
                {this.state.openForm ? <div className="create-channel-container"></div> : null}
            </div>
        )
    }
}

export default ServerHeader