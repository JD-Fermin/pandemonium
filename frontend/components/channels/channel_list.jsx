import React from "react";
import { connect } from "react-redux";
import { deleteChannel, fetchChannelList } from "../../actions/channel_actions";
import CreateChannelForm from "./create_channel_form"
import { withRouter } from "react-router-dom";
import ChannelItem from "./channel_item"
import EditChannelForm from "./edit_channel_form"
class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openForm: false, editing: false }
        this.toggleForm = this.toggleForm.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
        // this.refresh = new Date()
    }
    componentDidMount() {
        this.props.fetchChannelList(this.props.activeServerId);
    }

    toggleForm() {
        this.setState({ openForm: this.state.openForm ? false : true })
    }

    toggleEdit() {
        this.setState({ editing: this.state.editing ? false : true })
    }

    
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.serverId !== this.props.match.params.serverId) {
            this.props.fetchChannelList(this.props.activeServerId);
        }
    }

    render() {
        if(!this.props.activeServer) return null
        const channelList = this.props.channelList
        // if (channelList.length === 0) return null;
        const channelHead = <><p>TEXT CHANNELS</p>{this.props.activeServer && this.props.currentUser.id === this.props.activeServer.ownerId ? <button onClick={this.toggleForm}>+</button> : null}</>;
        return (
            <ul className="channel-list">
                <div className="text-channels-header">
                    {this.props.match.params.serverId ? channelHead : <p>Ahoy! Choose today's poison!</p>}
                    {this.state.openForm && !this.state.editing ? <div className="create-channel-container"><CreateChannelForm toggleForm={this.toggleForm} activeServerId={this.props.activeServerId}/></div> : null}
                    {this.state.openForm && this.state.editing ? <div className="create-channel-container"><EditChannelForm toggleForm={this.toggleForm} toggleEdit={this.toggleEdit} activeServerId={this.props.activeServerId}/></div> : null}

                </div>
                {
                    channelList.map(channel => {
                        return <ChannelItem
                            key={channel.id + channel.name + this.props.activeServerId}
                            channel={channel}
                            deleteChannel={this.props.deleteChannel}
                            activeChannelId={this.props.activeChannelId}
                            activeServerId={this.props.activeServerId}
                            activeServer={this.props.activeServer}
                            currentUser={this.props.currentUser}
                            toggleForm={this.toggleForm}
                            toggleEdit={this.toggleEdit}
                        />
                    })
                }
            </ul>
        )

    }
}

const mSTP = (state, ownProps) => ({
    location: ownProps.location,
    channelList: Object.values(state.entities.channels),
    currentUser: state.session.currentUser
})

const mDTP = (dispatch) => ({

    fetchChannelList: (id) => dispatch(fetchChannelList(id)),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
})

export default withRouter(connect(mSTP, mDTP)(ChannelList))