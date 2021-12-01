import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { updateServer, deleteServer } from "../../actions/server_actions"
import ServerDeletionConfirmation from "./server_deletion_confirmation";
class EditServerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { ...this.props.server, deleting: false }
        this.toggleDelete = this.toggleDelete.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.update(this.state);
        this.props.toggleForm();
    }

    toggleDelete() {
       this.setState({deleting: !this.state.deleting})
    }

    handleDelete() {
        
    }

    render() {
        let mainForm = <div className="create-channel-modal">
                <h2>Server Settings</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input className="name-input" type="text" onChange={this.handleChange('name')} value={this.state.name} />
                    </div>

                    <div>
                        <input type="text" className="description-input" onChange={this.handleChange('description')} value={this.state.description} />
                    </div>

                    <br />

                    <div className="create-channel-buttons">
                        <button type="submit">Edit Server</button>
                        <button onClick={this.props.toggleForm}>Cancel</button>
                    </div>
                        
                </form>
                <button className="delete-server" onClick={this.toggleDelete}>Delete Server</button>
                
            </div>
        return (
                this.state.deleting ? <ServerDeletionConfirmation /> : mainForm 
        )
    }
}


const mDTP = (dispatch) => ({
    update: (server) => dispatch(updateServer(server)),
    delete: (serverId) => dispatch(deleteServer(serverId))
})

export default connect(null, mDTP)(EditServerForm)


