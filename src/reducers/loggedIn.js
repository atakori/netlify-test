// This reducer is to keep track of whether or not the user is logged in

const loggedInReducer = (state = false, action) => {
    switch(action.type) {
        case "LOGIN":
            return true;
        default:
            return state;
    }
}

export default loggedInReducer;