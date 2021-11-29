import React from "react";
import { connect } from "react-redux";


class ChannelHeader extends React.Component {
   
    render() {
        if (!this.props.activeChannel) return null
        return (
            <div className="channel-header">
                <span>#</span>
                <h2>{this.props.activeChannel.name}</h2>
                <p>{this.props.activeChannel.description}</p>
            </div>
        )
    }
}

const mSTP = (state) => ({
    activeChannel: (state.entities.channels.activeChannel)
})


export default connect(mSTP, null)(ChannelHeader)