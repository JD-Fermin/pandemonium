import { connect } from "react-redux";
import Home from "./home";
import { fetchUser, fetchUsers } from "../../util/user_api_util";

const mSTP = (state) => ({
    currentUser: state.session.currentUser
})

const mDTP = (dispatch) => ({
    fetchUser: (id) => dispatch(fetchUser(id))
})

export default connect(mSTP, mDTP)(Home)