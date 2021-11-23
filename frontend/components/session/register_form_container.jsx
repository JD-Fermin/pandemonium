import React from "react";
import { connect } from "react-redux";
import {signup} from "../../actions/session_actions";
import SessionForm from "./session_form";
import { removeSessionErrors } from "../../actions/session_actions";

const mSTP = (state) => ({
    formType: 'Register',
    errors: state.errors.session
})

const mDTP = (dispatch) => ({
    removeSessionErrors: () => dispatch(removeSessionErrors()),
    submitForm: (user) => dispatch(signup(user))
})

export default connect(mSTP, mDTP)(SessionForm)