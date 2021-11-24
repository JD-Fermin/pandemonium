import React from "react";

class MessageForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {content: "", author_id: this.props.currentUser.id}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleSubmit(e) {
        e.preventDefault()
        this.props.submitForm(this.state)
        this.setState({content: "", author_id: this.props.currentUser.id})
    }
    handleChange(e) {
        this.setState({content: e.target.value})
    }
    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <textarea onChange={this.handleChange} value={this.state.content}></textarea>
                <input type="submit" value="Send"/>
            </form>
        )
        
    }
}

export default MessageForm