import React from 'react'
import MessagesIndexItem from './messages_index_item'
import { withRouter } from 'react-router'
import { fetchUsers } from '../../actions/user_actions'

// const em = new EventEmitter()
class MessagesIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            subscription: null
        }
        this.subscribe = this.subscribe.bind(this)
        this.unsubscribe = this.unsubscribe.bind(this)

    }

    subscribe() {
        const { activeChannelId, fetchMessages } = this.props;
        fetchMessages(activeChannelId);
        const subscription = App.cable.subscriptions.create(
            {
                channel: "ChatChannel",
                id: activeChannelId
            },
            {
                received: (data) => {
                    fetchUsers(this.props.match.params.serverId)
                    fetchMessages(activeChannelId) 
                }
            }
        )

        this.setState({ subscription })
    }

    unsubscribe(subscribe) {
        if (this.state.subscription) {
            this.state.subscription.unsubscribe()
            this.setState({ subscription: null }, subscribe)
        }
    }
    componentDidMount() {
        this.subscribe();
    }

    componentDidUpdate(prevProps) {
        if (this.props.activeChannelId !== prevProps.activeChannelId) {
            this.unsubscribe(this.subscribe);
        }
        
    }
    
    
   
    render() {
        const emptyChat = <div className="empty-chat"><img src="https://i.ytimg.com/vi/tvD4fRHstuU/maxresdefault.jpg" /><h2>Just waiting for peeps&#8230;</h2></div>;
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
                {this.props.match.params.channelId ? null : emptyChat}
            </div>
            
        )
    }
}

export default withRouter(MessagesIndex)