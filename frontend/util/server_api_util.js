export const ServerApi = {
    list: async (userId) => {
        
        const res = await $.ajax({
            method: 'GET',
            url: 'api/servers',
            data: { user_id: userId }
        })
        return res;
    },

    grab: async (id) => {
        if (!id) return {};
        const res = await $.ajax({
            method: 'GET',
            url: `api/servers/${id}`
        }) 

        return res;
    },
    
    create: async (server) => {
        if (!server) return {};
        const res = await $.ajax({
            method: 'POST',
            url: 'api/servers',
            data: { server }
        })
        return res
    },

    update: async (server) => {
        if (!server) return {}
        const res = await $.ajax({
            method: 'PATCH',
            url: `api/servers/${server.id}`,
            data: { server }
        })
        return res
    },
    
    delete: async (id) => {
        if (!id) return {}
        const res = await $.ajax({
            method: 'DELETE',
            url: `api/servers/${id}`,
        })
        return res;
    }
}