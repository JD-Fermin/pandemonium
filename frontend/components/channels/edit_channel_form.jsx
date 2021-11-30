import React from "react";
import { connect } from "react-redux";
import { updateChannel, fetchChannelList } from "../../actions/channel_actions";
import { withRouter } from "react-router";
class EditChannelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.channel  
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    componentDidMount() {
        this.props.fetchList();
    }

    handleChange(field) {
        return e => this.setState({ [field]: e.target.value })
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.update(this.state)
        this.setState({ name: '', description: '' })
        this.props.toggleForm();
        this.props.toggleEdit();
        
    }
    render(){
        if (!this.props.channel) return null;
        return (
            <div className="create-channel-modal">
                <h2>Edit Text Channel</h2>
                <form className="create-channel-form" onSubmit={this.handleSubmit}>
                    
                    <div>
                        <input type="text"  onChange={this.handleChange("name")} value={this.state.name} placeholder="Name"/>
                    </div>

                    <div>
                        <input type="text"  onChange={this.handleChange("description")} value={this.state.description || ""} placeholder="Description"/>
                    </div>

                    <div className="create-channel-buttons">
                        <button type="submit">Edit Channel</button>
                        <button onClick={() => { this.props.toggleForm(); this.props.toggleEdit() } }>Cancel</button>
                    </div>
                </form>
                <br />
            </div>
        )
    }
}
const mSTP = (state, ownProps) => ({
    channel: state.entities.channels[ownProps.match.params.channelId]
})
const mDTP = dispatch => ({
    update: channel => dispatch(updateChannel(channel)),
    fetchList: () => dispatch(fetchChannelList())
})

export default withRouter(connect(mSTP, mDTP)(EditChannelForm))