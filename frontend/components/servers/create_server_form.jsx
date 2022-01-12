import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import { createServer } from "../../actions/server_actions";

class CreateServerForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: "", description: "", owner_id: this.props.currentUser.id }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.create(this.state).then(res => this.props.history.push(`/servers/${res.payload.id}`))
        this.setState({ name: '', description: '' })
        this.props.toggleForm()
    }

    render() {
        return (
            <div className="create-channel-modal">
                <h2>Create Server</h2>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" onChange={this.handleChange("name")} value={this.state.name} placeholder="Name" />
                    </div>

                    <div>
                        <input type="text" onChange={this.handleChange("description")} value={this.state.description} placeholder="Description" />
                    </div>

                    <div className="create-channel-buttons">
                        <button type="submit">Create Server</button>
                        <button onClick={this.props.toggleForm}>Cancel</button>
                    </div>
                </form>
                <br />
            </div>
        )
    }
}

const mSTP = (state) => ({
    currentUser: state.session.currentUser
})

const mDTP = (dispatch) => ({
    create: (server) => dispatch(createServer(server))
})

export default withRouter(connect(mSTP, mDTP)(CreateServerForm))