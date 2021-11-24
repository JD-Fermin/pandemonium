import React from "react";

class MessagesIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.handleDelete = this.handleDelete.bind(this)
    }
    handleDelete() {
        this.props.deleteMessage(this.props.message.id)
    }
    render(){
        let modifyButtons = <><button>Edit</button><button onClick={this.handleDelete}>Delete</button></>;
        return (
            <li>
                {`${this.props.message.content}`} 
                <br />
                {`===> ${this.props.author.username}`}
                {this.props.author.id === this.props.currentUser.id ? modifyButtons : null}
            </li>
        )
    }
} 

export default MessagesIndexItem


