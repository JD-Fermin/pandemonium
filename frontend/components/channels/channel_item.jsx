import { withRouter } from "react-router";
import React from "react";
const ChannelItem = (props) => {
    const { channel, activeChannelId, deleteChannel} = props;
    const name = `#${channel.name}`;
    const handleChannelClick = () => {
        // setActiveChannel(channel);
        props.history.push(`/channels/${channel.id}`)
    }

    const handleDeleteClick = (channelId) => {
        return e => {
            e.stopPropagation();
            deleteChannel(channelId);
        }
    };
   
    return  <li onClick={handleChannelClick} className={ parseInt(activeChannelId) === channel.id ? "active-channel" : ""}>
        {name}
        <button>Edit</button>
        <button onClick={handleDeleteClick(channel.id)}>Delete</button>
    </li>
}

export default withRouter(ChannelItem)