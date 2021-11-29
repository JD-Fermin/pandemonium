import React from "react";
import EditMessageContainer from "./edit_message_container"
class MessagesIndexItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {editing: false, rightClicked: false}
        this.handleDelete = this.handleDelete.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
        this.toggleButtons = this.toggleButtons.bind(this)
    }
    handleDelete() {
        this.props.deleteMessage(this.props.message)
    }
    toggleEdit() {
        this.setState({editing: this.state.editing  ? false : true})
    }
    toggleButtons(e) {
        // e.preventDefault();
        this.setState({rightClicked: this.state.rightClicked  ? false : true})
    }
    render(){
        let modifyButtons = <><button onClick={()=>{this.toggleEdit();}}>Edit</button><button onClick={this.handleDelete}>Delete</button></>;
        let normalItem = <>
            <li onMouseEnter={this.toggleButtons} onMouseLeave={this.toggleButtons}>
                {`${this.props.author.username}: ${this.props.message.content}`} 
                <br />
                {this.props.author.id === this.props.currentUser.id && this.state.rightClicked ? modifyButtons : null}
            </li>
        </>;

    
        return (
            this.state.editing ? <EditMessageContainer  toggleEdit={this.toggleEdit} message={this.props.message}/> : normalItem
        )
    }
} 

export default MessagesIndexItem


