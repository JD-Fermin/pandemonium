import React from 'react'
import MessagesIndexItem from './messages_index_item'
class MessagesIndex extends React.Component {
   
    render() {
       
        return (
            
            <ul className="messages-list">
                {/* <h3>Messages</h3> */}
                {
                    this.props.messages.map((message, i) => (
                        <MessagesIndexItem key={i} toggleCreate={this.props.toggleCreate} message={message} currentUser={this.props.currentUser} author={this.props.users[message.authorId]} updateMessage={this.props.updateMessage} deleteMessage={this.props.deleteMessage} />
                    ))
                }
            </ul>
        )
    }
}

export default MessagesIndex