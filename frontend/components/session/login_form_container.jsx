import React from "react";
import { connect } from "react-redux";
import { login } from "../../actions/session_actions";
import SessionForm from "./session_form";

const mSTP = (state) => ({
    formType: 'Log In',
    demoUser: {
        email: "iheartmechs@xyz.com",
        password: "password"
    }
})

const mDTP = (dispatch) => ({
    submitForm: (user) => dispatch(login(user))
})

export default connect(mSTP, mDTP)(SessionForm)