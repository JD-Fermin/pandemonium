export const createMembership = (membership) => (
    $.ajax({
        method: 'post',
        url: 'api/memberships',
        data: { membership }
    })
)

export const fetchUserMemberships = async (userId) => {
    if (!userId) return {};
    const res = await $.ajax({
        method: 'get',
        url: `api/users/${userId}/memberships`,
    })
    return res;
}
    
