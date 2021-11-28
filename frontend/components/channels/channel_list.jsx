import React from "react";
import { connect } from "react-redux";
import { initFetchChannelList, setActiveChannel } from "../../actions/channel_actions";


const ChannelItem = (props) => {
    const { channel, isActive, setActiveChannel } = props;
    const handleClick = () => setActiveChannel(channel);
    const name = isActive ? `[${channel.name}]` : channel.name;
    return  <li onClick={handleClick}>{name}</li>
}

class ChannelList extends React.Component {
    
    componentDidMount() {
        this.props.initFetchChannelList()
    }

    render() {
        const channelList = this.props.channelList
        return channelList.map(channel =>
            <ChannelItem
                key={channel.id}
                channel={channel}
                setActiveChannel={this.props.setActiveChannel} 
                isActive={channel.id === this.props.activeChannelId}
             />
        )
    }
}

const mSTP = (state) => ({
    channelList: state.entities.channels.channelList,
    activeChannelId: (state.entities.channels.activeChannel || {}).id
})

const mDTP = (dispatch) => ({
    setActiveChannel: (channel) => dispatch(setActiveChannel(channel)),
    initFetchChannelList: () => dispatch(initFetchChannelList())
})

export default connect(mSTP, mDTP)(ChannelList)