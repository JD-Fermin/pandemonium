export const fetchMessages = async (channelId) => {
    if (!channelId) return [];
    const res = await $.ajax({
        method: "GET",
        url: `api/channels/${channelId}/messages`
    })
    return Object.values(res)
}



export const createMessage = (message) => (
    $.ajax({
        method: "POST",
        url: `api/channels/${message.channel_id}/messages`,
        data: {message: message}
    })
)

export const updateMessage = (message) => (
    $.ajax({
        method: "PATCH",
        url: `api/channels/${message.channel_id}/messages/${message.id}`,
        data: {message: message}
    })
)

export const deleteMessage = (message) => (
    $.ajax({
        method: "DELETE",
        url: `api/channels/${message.channel_id}/messages/${message.id}`
    })
)