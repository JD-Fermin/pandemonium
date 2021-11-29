export const ChannelApi = {
    list: () => (
        $.ajax({
            method: 'GET',
            url: 'api/channels'
        }) 
        
        // .then(
        //     res => Object.values(res)
        // )
    ),
    
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


