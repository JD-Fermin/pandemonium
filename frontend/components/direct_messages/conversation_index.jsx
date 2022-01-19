import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { fetchConversationList } from "../../actions/conversation_actions";
class ConversationIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.fetchConversations()
    }
    // componentDidUpdate() {
        
    // }
    render() {
        if (!this.props.conversations) return null;
        return (
            <ul>
                {
                    Object.values(this.props.conversations).map( (conversation) => {
                        return (
                            <li onClick={() => this.props.history.push(`/conversations/${conversation.id}`)} key={conversation.id}>{conversation.members.username}</li>
                        )
                    } )
                }
            </ul>
        )
    }
}

const mSTP = (state) => ({
    conversations: state.entities.conversations
})

const mDTP = (dispatch) => ({
    fetchConversations: () => dispatch(fetchConversationList())
})

export default withRouter(connect(mSTP, mDTP)(ConversationIndex))