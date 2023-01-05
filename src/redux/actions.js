export const setUsers = (users) => {
    return{
        type: "set_users",
        payload: users,
    }
}

export const selectedUser = (user) => {
    return{
        type: "selected_user",
        payload: user,
    }
}

export const removeSelectedUser = () => {
    return{
        type: "remove_selected_user",
    };
};