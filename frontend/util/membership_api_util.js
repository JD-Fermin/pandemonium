export const createMembership = async (membership) => {
    if (!membership) return {}
    const res = await $.ajax({
        method: 'post',
        url: 'api/memberships',
        data: { membership }
    })
    return res;
}

export const fetchUserMemberships = async (userId) => {
    if (!userId) return {};
    const res = await $.ajax({
        method: 'get',
        url: `api/users/${userId}/memberships`,
    })
    return res;
}

export const deleteMembership = async (membershipId) => {
    if (!membershipId) return {}
    const res = await $.ajax({
        method: 'delete',
        url: `api/memberships/${membershipId}`
    })
    return res;
}
    
