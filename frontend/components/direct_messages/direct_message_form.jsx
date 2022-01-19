import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createDirectMessage } from "../../actions/direct_message_actions";
class DirectMessageForm extends React.Component {
    constructor(props) {
        super(props)
        let { currentUser } = this.props
        this.state = {
            content: '',
            user_id: currentUser.id,
            conversation_id: this.props.match.params.conversationId
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.createDM(
            {
                ...this.state,
                // channel_id: this.props.message ? this.props.message.channelId : this.props.activeChannelId
            }
        )
        // App.cable.subscriptions.subscriptions[0].speak(this.st
        // App.cable.subscriptions.subscriptions[0].received()
        // this.props.submitForm(this.state)
        // if (this.props.formType === 'create') {
            this.setState({
                content: ""
            })
        // } else {
        //     this.props.toggleEdit()
            
        // }
    }
    handleChange(e) {
        this.setState({content: e.target.value})
    }
    render () {

        return(
            <div className="message-form-container">
                <form className="message-form" onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange} value={this.state.content} placeholder={this.state.content === "" ? "Message here" : null}/>
                </form>
            </div>
            
        )
        
    }
}

const mSTP = (state) => ({
    currentUser: state.session.currentUser
})


const mDTP = (dispatch) => ({
    createDM: (dm) => dispatch(createDirectMessage(dm))
})

export default withRouter(connect(mSTP, mDTP)(DirectMessageForm))
