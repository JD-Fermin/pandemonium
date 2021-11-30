import { connect } from "react-redux"
import { deleteMessage,  updateMessage } from "../../actions/message_actions"
import MessagesIndex from "./messages_index"
import { fetchMessages } from "../../actions/message_actions"
import { withRouter } from "react-router"
const mSTP = (state, ownProps) => ({
    users: state.entities.users,
    messages: Object.values(state.entities.messages),
    currentUser: state.session.currentUser,
    activeChannelId:  ownProps.match.params.channelId,

})

const mDTP = (dispatch) => ({
    updateMessage: message => dispatch(updateMessage(message)),
    deleteMessage: message => dispatch(deleteMessage(message)),
    fetchMessages: (channelId) => dispatch(fetchMessages(channelId)),
    

})

export default withRouter(connect(mSTP, mDTP)(MessagesIndex))