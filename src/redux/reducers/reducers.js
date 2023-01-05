const initialState = {
    users: []
}
export const allUsers = (state = initialState, {type,payload}) =>{
    switch(type){
        case "set_users":
            return {...state, users: payload};
        default:
            return state;
    }
}

export const selectedUserReducer = (state = {}, {type, payload}) => {
    switch(type){
        case "selected_user":
            return {...state, ...payload};
        case "remove_selected_user":
            return {};
        default:
            return state;
    }
}
