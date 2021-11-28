import { connect } from "react-redux"
import { deleteMessage,  updateMessage } from "../../actions/message_actions"
import MessagesIndex from "./messages_index"
import { fetchMessages } from "../../actions/message_actions"
const mSTP = (state) => ({
    users: state.entities.users,
    messages: Object.values(state.entities.messages),
    currentUser: state.session.currentUser,
    activeChannelId:  (state.entities.channels.activeChannel || {}).id
})

const mDTP = (dispatch) => ({
    updateMessage: message => dispatch(updateMessage(message)),
    deleteMessage: messageId => dispatch(deleteMessage(messageId)),
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    

})

export default connect(mSTP, mDTP)(MessagesIndex)