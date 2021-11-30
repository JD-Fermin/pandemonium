import React from "react";
import { connect } from "react-redux";
import { deleteChannel, fetchChannelList } from "../../actions/channel_actions";
import CreateChannelForm from "./create_channel_form"
import { withRouter } from "react-router-dom";
import ChannelItem from "./channel_item"

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openForm: false }
        this.toggleForm = this.toggleForm.bind(this)
       
    }
    componentDidMount() {
        this.props.fetchChannelList();
    }

    toggleForm() {
        this.setState({ openForm: this.state.openForm ? false : true })
    }


    render() {
        const channelList = this.props.channelList
        return (
            <ul className="channel-list">
                <div className="text-channels-header">TEXT CHANNELS
                    <button onClick={this.toggleForm}>+</button>
                    { this.state.openForm ? <div className="create-channel-container"><CreateChannelForm toggleForm={this.toggleForm} /></div> : null }
                </div>
                {
                    channelList.map(channel => {
                        
                        
                        return <ChannelItem
                            key={channel.id}
                            channel={channel}
                            deleteChannel={this.props.deleteChannel}
                            activeChannelId={this.props.activeChannelId}
                         />
                    })
                }
            </ul>
        )
        
    }
}

const mSTP = (state, ownProps) => ({
    location: ownProps.location,
    channelList: Object.values(state.entities.channels)
})

const mDTP = (dispatch) => ({
    
    fetchChannelList: () => dispatch(fetchChannelList()),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
})

export default withRouter(connect(mSTP, mDTP)(ChannelList))