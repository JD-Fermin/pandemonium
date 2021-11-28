import React from 'react'
import MessagesIndexItem from './messages_index_item'
// import { EventEmitter } from "events"

// const em = new EventEmitter()
class MessagesIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        // const em = new EventEmitter()
        this.props.fetchMessages();
        // App.cable.subscriptions.create(
        //     {channel: "ChatChannel"},
        //     {
        //         received: (data) => {
        //             // console.log(data)
        //             this.props.fetchMessages()
        //             // this.props.fetchMessage(data.id)

                    
        //         }, 

        //         speak: function(data){
        //             return this.perform("speak", data)
        //         }
        //     }
        // )
        // em.on("message", () => {
        //     console.log('ha')
        //     this.props.fetchMessages()
        // })
        // setInterval(() => {
        //     em.emit("message")
        // }, 3000)
    }
    
    
   
    render() {
       
        return (
            <div className="messages-list-container">
                <ul className="messages-list">
                    {/* <h3>Messages</h3> */}
                    {
                        this.props.messages.map((message) => (
                            <MessagesIndexItem key={message.id}  message={message} currentUser={this.props.currentUser} author={this.props.users[message.authorId]} updateMessage={this.props.updateMessage} deleteMessage={this.props.deleteMessage} />
                        ))
                    }
                </ul>
            </div>
            
        )
    }
}

export default MessagesIndex