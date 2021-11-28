import { connect } from "react-redux"
import { updateMessage } from "../../actions/message_actions"
import MessageForm from "./message_form"

const mSTP = (state) => ({
    formType: "edit",
    activeChannelId:  (state.entities.channels.activeChannel || {}).id
})

const mDTP = (dispatch) => ({
    
    submitForm: (message) => dispatch(updateMessage(message))
})


export default connect(mSTP, mDTP)(MessageForm)