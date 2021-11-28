import { ChannelApi } from "../util/channel_api_util"
export const FETCH_CHANNEL_LIST = "FETCH_CHANNEL_LIST"
export const SET_ACTIVE_CHANNEL = "SET_ACTIVE_CHANNEL"

const _fetchChannelList = (channelList) => ({
    type: FETCH_CHANNEL_LIST,
    payload: channelList
})

const _setActiveChannel = (channel) => ({
    type: SET_ACTIVE_CHANNEL,
    payload: channel
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
        if (channelList && channelList.length) {
            dispatch(_setActiveChannel(channelList[0]))
        }
    })
)