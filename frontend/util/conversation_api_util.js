

export const fetchConversations = async () => {
    const res = await $.ajax({
        method: 'get',
        url: 'api/conversations'
    })
    return res
}

export const createConversation = async (conversation) => {
    if (!conversation) return {}
    const res = await $.ajax({
        method: 'post',
        url: 'api/conversations',
        data: { conversation }
    })
    return res
}

export const deleteConversation = async (conversationId) => {
    if (!conversationId) return {}
    const res = await $.ajax({
        method: 'delete',
        url: `api/conversations/${conversationId}`
    })
    return res
}