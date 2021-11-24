import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {content: "", author_id: ''}
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log('Message Sent!')
    }
    handleChange(e) {
        console.log("Updating local state...")
    }
    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <textarea onChange={this.handleChange}></textarea>
                <input type="submit" value="Send"/>
            </form>
        )
        
    }
}

export default MessageForm