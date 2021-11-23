import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";
import { removeSessionErrors } from "../../actions/session_actions";
const mSTP = (state) => ({
    formType: 'Log In',
    demoUser: {
        username: "SuperMegaChap",
        email: "iheartmechs@xyz.com",
        password: "password"
    },
    errors: state.errors.session

})

const mDTP = (dispatch) => ({
    removeSessionErrors: () => dispatch(removeSessionErrors()),
    submitForm: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm)