import React from "react";
import { connect } from "react-redux";
import { createChannel, fetchChannelList } from "../../actions/channel_actions";

class CreateChannelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { name: '', description: '' }  
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.create(this.state)
        this.setState({ name: '', description: '' })
        this.props.toggleForm();
        this.props.fetchList();
    }
    render(){
        return (
            <div className="create-channel-modal">
                <h2>Create Text Channel</h2>
                <form className="create-channel-form" onSubmit={this.handleSubmit}>
                    
                    <div>
                        <input type="text"  onChange={this.handleChange("name")} value={this.state.name} placeholder="Name"/>
                    </div>

                    <div>
                        <input type="text"  onChange={this.handleChange("description")} value={this.state.description} placeholder="Description"/>
                    </div>

                    <div className="create-channel-buttons">
                        <button type="submit">Create Channel</button>
                        <button onClick={this.props.toggleForm}>Cancel</button>
                    </div>
                </form>
                <br />
            </div>
        )
    }
}

const mDTP = dispatch => ({
    create: channel => dispatch(createChannel(channel)),
    fetchList: () => dispatch(fetchChannelList())
})

export default connect(null, mDTP)(CreateChannelForm)