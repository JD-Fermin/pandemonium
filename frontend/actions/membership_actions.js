import * as APIUtil from "../util/membership_api_util"

export const CREATE_MEMBERSHIP = "CREATE_MEMBERSHIP";
export const FETCH_USER_MEMBERSHIPS = "FETCH_USER_MEMBERSHIPS";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP"
const _createMembership = (membership) => ({
    type: CREATE_MEMBERSHIP,
    payload: membership
})

const _fetchUserMemberships = (memberships) => ({
    type: FETCH_USER_MEMBERSHIPS,
    payload: memberships
})

const _removeMembership = (membershipId) => ({
    type: REMOVE_MEMBERSHIP,
    payload: membershipId
})

export const createMembership = (membership) => dispatch => (
    APIUtil.createMembership(membership).then(res => dispatch(_createMembership(res)))
)

export const fetchUserMemberships = (userId) => dispatch => (
    APIUtil.fetchUserMemberships(userId).then(res => dispatch(_fetchUserMemberships(res)))
)

export const deleteMembership = (membershipId) => dispatch => (
    APIUtil.deleteMembership(membershipId).then(res => dispatch(_removeMembership(res.id)))
)