import React from 'react'
import MessagesIndexItem from './messages_index_item'
class MessagesIndex extends React.Component {
    componentDidMount() {
        this.props.fetchMessages();
        App.cable.subscriptions.create(
            {channel: "ChatChannel"},
            {
                received: function(data) {
                    console.log('wtf')
                    this.props.messages.push(data)
                
                }, 

                speak: function(data){
                    return this.perform("speak", data)
                }
            }
        )
    
    }

    
   
    render() {
       
        return (
            <div className="messages-list-container">
                <ul className="messages-list">
                    {/* <h3>Messages</h3> */}
                    {
                        this.props.messages.map((message, i) => (
                            <MessagesIndexItem key={i}  message={message} currentUser={this.props.currentUser} author={this.props.users[message.authorId]} updateMessage={this.props.updateMessage} deleteMessage={this.props.deleteMessage} />
                        ))
                    }
                </ul>
            </div>
            
        )
    }
}

export default MessagesIndex