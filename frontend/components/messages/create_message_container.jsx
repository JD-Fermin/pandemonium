import { connect } from "react-redux"
import { createMessage } from "../../actions/message_actions"
import MessageForm from "./message_form"


const mSTP = (state) => ({
    currentUser: state.session.currentUser
})

const mDTP = (dispatch) => ({
    submitForm: message => dispatch(createMessage(message))
})

export default connect(mSTP, mDTP)(MessageForm)