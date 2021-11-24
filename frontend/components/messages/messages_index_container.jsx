import { connect } from "react-redux"
import { deleteMessage, updateMessage } from "../../actions/message_actions"
import MessagesIndex from "./messages_index"
const mSTP = (state) => ({
    users: state.entities.users,
    messages: Object.values(state.entities.messages),
    currentUser: state.session.currentUser
})

const mDTP = (dispatch) => ({
    updateMessage: message => dispatch(updateMessage(message)),
    deleteMessage: id => dispatch(deleteMessage(id))
})

export default connect(mSTP, mDTP)(MessagesIndex)