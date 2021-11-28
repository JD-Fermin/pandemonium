import { connect } from "react-redux"
import { deleteMessage, fetchMessage, updateMessage } from "../../actions/message_actions"
import MessagesIndex from "./messages_index"
import { fetchMessages } from "../../actions/message_actions"
const mSTP = (state) => ({
    users: state.entities.users,
    messages: Object.values(state.entities.messages),
    currentUser: state.session.currentUser
})

const mDTP = (dispatch) => ({
    updateMessage: message => dispatch(updateMessage(message)),
    deleteMessage: id => dispatch(deleteMessage(id)),
    fetchMessages: () => dispatch(fetchMessages()),
    fetchMessage: id => dispatch(fetchMessage(id))

})

export default connect(mSTP, mDTP)(MessagesIndex)