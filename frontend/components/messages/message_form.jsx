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
        
        if (this.props.formType === 'create') {
            this.setState({
                content: "",
                author_id: this.props.currentUser.id
            })
        } else {
            this.props.toggleEdit()
            this.props.toggleCreate()
        }
    }
    handleChange(e) {
        this.setState({content: e.target.value})
    }
    render () {
        return(
            <form onSubmit={this.handleSubmit}>
                <textarea onChange={this.handleChange} value={this.state.content} ></textarea>
                <button type="submit"><img src="https://img.icons8.com/external-kmg-design-flat-kmg-design/50/000000/external-send-user-interface-kmg-design-flat-kmg-design.png"/></button>
            </form>
        )
        
    }
}

export default MessageForm