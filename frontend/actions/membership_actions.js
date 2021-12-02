import * as APIUtil from "../util/membership_api_util"

export const CREATE_MEMBERSHIP = "CREATE_MEMBERSHIP";

const _createMembership = (membership) => ({
    type: CREATE_MEMBERSHIP,
    payload: membership
})

export const createMembership = (membership) => dispatch => (
    APIUtil.createMembership(membership).then(res => dispatch(_createMembership(res)))
)