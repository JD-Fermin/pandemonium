import * as APIUtil from "../util/conversation_api_util";

export const FETCH_CONVERSATION_LIST = "FETCH_CONVERSATION_LIST";
export const CREATE_CONVERSATION = "CREATE_CONVERSATION";
export const DELETE_CONVERSATION = "DELETE_CONVERSATION";

const _fetchConversationList = (conversationList) => ({
    type: FETCH_CONVERSATION_LIST,
    payload: conversationList
})

const _createConversation = (conversation) => ({
    type: CREATE_CONVERSATION,
    payload: conversation
})

const _deleteConversation = (conversationId) => ({
    type: DELETE_CONVERSATION,
    payload: conversationId
})

export const fetchConversationList = () => dispatch => (
    APIUtil.fetchConversations().then(res => dispatch(_fetchConversationList(res)))
)

export const createConversation = (conversation) => dispatch => (
    APIUtil.createConversation(conversation).then(res => dispatch(_createConversation(res)))
)

export const deleteConversation = (conversationId) => dispatch => (
    APIUtil.deleteConversation(conversationId).then(res => dispatch(_deleteConversation(res.id)))
)