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
        if (!this.props.author) return null;
        let modifyButtons = <><span onClick={()=>{this.toggleEdit();}} className="server-settings material-icons">edit</span><span onClick={this.handleDelete} className="server-settings material-icons">delete</span></>;
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


