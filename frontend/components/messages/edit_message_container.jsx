import { connect } from "react-redux"
import { updateMessage } from "../../actions/message_actions"
import MessageForm from "./message_form"

const mSTP = () => ({
    formType: "edit"
})

const mDTP = (dispatch) => ({

    submitForm: (message) => dispatch(updateMessage(message))
})


export default connect(mSTP, mDTP)(MessageForm)