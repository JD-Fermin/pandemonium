import { connect } from "react-redux"
import { createMessage } from "../../actions/message_actions"
import MessageForm from "./message_form"
import { withRouter } from "react-router"

const mSTP = (state, ownProps) => ({
    currentUser: state.session.currentUser,
    formType: "create",
    activeChannelId: ownProps.match.params.channelId
})

const mDTP = (dispatch) => ({
    submitForm: message => dispatch(createMessage(message))
})

export default withRouter(connect(mSTP, mDTP)(MessageForm))