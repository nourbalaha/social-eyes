// Initial State
const initial_state = {};
  
// Reducer
function userReducer(state = initial_state, action) {
    switch (action.type) {  
        case "GET_USER_DATA":
            const newSetState = action.payload;
            return newSetState;

        default:
            return state;
    }
}
  
export default userReducer;