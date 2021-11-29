import { ChannelApi } from "../util/channel_api_util"
export const FETCH_CHANNEL_LIST = "FETCH_CHANNEL_LIST"
export const SET_ACTIVE_CHANNEL = "SET_ACTIVE_CHANNEL"
export const CREATE_CHANNEL = "CREATE_CHANNEL"
export const UPDATE_CHANNEL = "UPDATE_CHANNEL"
export const DELETE_CHANNEL = "DELETE_CHANNEL"

const _fetchChannelList = (channelList) => ({
    type: FETCH_CHANNEL_LIST,
    payload: channelList
})

const _setActiveChannel = (channel) => ({
    type: SET_ACTIVE_CHANNEL,
    payload: channel
})

const _createChannel = (channel) => ({
    type: CREATE_CHANNEL,
    payload: channel
})

const _updateChannel = (channel) => ({
    type: UPDATE_CHANNEL,
    payload: channel
})

const _deleteChannel = (channelId) => ({
    type: DELETE_CHANNEL,
    payload: channelId
})

export const setActiveChannel = (activeChannel) => (dispatch) => (
    dispatch(_setActiveChannel(activeChannel))
)

export const fetchChannelList = () => (dispatch) => (
    ChannelApi.list().then(channelList => dispatch(_fetchChannelList(channelList)))
)

export const initFetchChannelList = () => dispatch => (
    ChannelApi.list().then(channelList => {
        dispatch(_fetchChannelList(channelList))
        // if (channelList && channelList.length) {
        //     dispatch(_setActiveChannel(channelList[0]))
        // }
        if (channelList !== Object.keys(channelList).length > 0) {
            dispatch(_setActiveChannel(Object.values(channelList)[0]))
        }
    })
)

export const createChannel = (channel) => dispatch => (
    ChannelApi.create(channel).then(res => dispatch(_createChannel(res)))
)

export const updateChannel = (channel) => dispatch => (
    ChannelApi.update(channel).then(res => dispatch(_updateChannel(res)))
)

export const deleteChannel = (channelId) => dispatch => (
    ChannelApi.delete(channelId).then(res => {
        // dispatch(_setActiveChannel())
        console.log(res, 'RESPONSE')
        dispatch(_deleteChannel(res.id))
    })
)