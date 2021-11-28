import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props)
        let {message, currentUser} = this.props
        this.state = {
            id: message ? message.id : null,
            content: this.props.formType === "edit" ? message.content : "",
            author_id: message ? message.authorId : currentUser.id
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.submitForm(this.state)
        // App.cable.subscriptions.subscriptions[0].speak(this.st
        // App.cable.subscriptions.subscriptions[0].received()
        // this.props.submitForm(this.state)
        if (this.props.formType === 'create') {
            this.setState({
                content: "",
                author_id: this.props.currentUser.id
            })
        } else {
            this.props.toggleEdit()
            
        }
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

export default MessageForm