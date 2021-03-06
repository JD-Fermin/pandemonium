import { withRouter } from "react-router";
import React from "react";

class ChannelItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = { hovered: false }
        this.toggleButtons = this.toggleButtons.bind(this)
        this.handleChannelClick = this.handleChannelClick.bind(this)
        this.handleDeleteClick = this.handleDeleteClick.bind(this)
        this.name = `#${this.props.channel.name}`;
    }

    
    
    handleChannelClick() {

        this.props.history.push(`/servers/${this.props.activeServerId}/channels/${this.props.channel.id}`)
    }

    handleDeleteClick(channelId) {
        return e => {
            e.stopPropagation();
            this.props.deleteChannel(channelId);
            this.props.history.push(`/servers/${this.props.activeServerId}`)
        }
    }
    toggleButtons() {
        this.setState({ hovered: this.state.hovered ? false : true })
    }

    render() {
        return <li onClick={this.handleChannelClick} onMouseEnter={this.toggleButtons} onMouseLeave={this.toggleButtons} className={parseInt(this.props.activeChannelId) === this.props.channel.id ? "active-channel" : ""}>
            { this.name }
            { this.state.hovered && this.props.activeServer.ownerId === this.props.currentUser.id ?  <div>
                <span onClick={() => { this.props.toggleForm(); this.props.toggleEdit() } } className="server-settings material-icons">edit</span>
                <span onClick={this.handleDeleteClick(this.props.channel.id)} className="server-settings material-icons">delete</span>
            </div> :  null }

        </li>
    }

}

export default withRouter(ChannelItem)