import { connect } from "react-redux"
import { updateMessage } from "../../actions/message_actions"
import MessageForm from "./message_form"
import { withRouter } from "react-router"

const mSTP = (state, ownProps) => ({
    formType: "edit",
    activeChannelId: ownProps.match.params.channelId
})

const mDTP = (dispatch) => ({
    
    submitForm: (message) => dispatch(updateMessage(message))
})


export default withRouter(connect(mSTP, mDTP)(MessageForm))