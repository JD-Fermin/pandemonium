export const ChannelApi = {
    list: async (serverId) => {
        if (!serverId) return {};
        const res = await $.ajax({
            method: 'GET',
            url: `api/servers/${serverId}/channels`
        })
        return res; 
    },
    
    create: (channel) => (
        $.ajax({
            method: 'POST',
            url: 'api/channels',
            data: { channel }
        })
    ),

    update: (channel) => (
        $.ajax({
            method: 'PATCH',
            url: `api/channels/${channel.id}`,
            data: { channel }
        })
    ),
    
    delete: (id) => (
        $.ajax({
            method: 'DELETE',
            url: `api/channels/${id}`,
        })
    )
}


