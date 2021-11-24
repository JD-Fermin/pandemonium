import React from "react";
import EditMessageContainer from "./edit_message_container"
class MessagesIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {editing: false}
        this.handleDelete = this.handleDelete.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
    }
    handleDelete() {
        this.props.deleteMessage(this.props.message.id)
    }
    toggleEdit() {
        this.setState({editing: this.state.editing  ? false : true})
    }

    render(){
        let modifyButtons = <><button onClick={()=>{this.toggleEdit(); this.props.toggleCreate();}}>Edit</button><button onClick={this.handleDelete}>Delete</button></>;
        let normalItem = <>
            <li>
                {`${this.props.message.content}`} 
                <br />
                {`===> ${this.props.author.username}`}
                {this.props.author.id === this.props.currentUser.id ? modifyButtons : null}
            </li>
        </>;

    
        return (
            this.state.editing ? <EditMessageContainer toggleCreate={this.props.toggleCreate} toggleEdit={this.toggleEdit} message={this.props.message}/> : normalItem
        )
    }
} 

export default MessagesIndexItem


