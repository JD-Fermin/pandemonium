import React from "react";
import { connect } from "react-redux";
import { deleteChannel, initFetchChannelList, setActiveChannel } from "../../actions/channel_actions";
import CreateChannelForm from "./create_channel_form"

const ChannelItem = (props) => {
    const { channel, isActive, setActiveChannel, deleteChannel } = props;
    const name = `#${channel.name}`;
    const handleChannelClick = () => setActiveChannel(channel);
    const handleDeleteClick = (channelId) => {
        return e => {
            e.stopPropagation();
            deleteChannel(channelId);
        }
    };
   
    return  <li onClick={handleChannelClick} className={isActive ? "active-channel" : ""}>
        {name}
        <button>Edit</button>
        <button onClick={handleDeleteClick(channel.id)}>Delete</button>
    </li>
}

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { openForm: false }
        this.toggleForm = this.toggleForm.bind(this)
       
    }
    componentDidMount() {
        this.props.initFetchChannelList()
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
                    channelList.map(channel =>
                        <ChannelItem
                            key={channel.id}
                            channel={channel}
                            setActiveChannel={this.props.setActiveChannel} 
                            isActive={channel.id === this.props.activeChannelId}
                            deleteChannel={this.props.deleteChannel}
                         />
                    )
                }
            </ul>
        )
        
    }
}

const mSTP = (state) => ({
    channelList: Object.values(state.entities.channels.channelList),
    activeChannelId: (state.entities.channels.activeChannel || {}).id
})

const mDTP = (dispatch) => ({
    setActiveChannel: (channel) => dispatch(setActiveChannel(channel)),
    initFetchChannelList: () => dispatch(initFetchChannelList()),
    deleteChannel: (channelId) => dispatch(deleteChannel(channelId))
})

export default connect(mSTP, mDTP)(ChannelList)