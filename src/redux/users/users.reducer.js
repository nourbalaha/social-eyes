// Initial State
const initial_state = {};
  
// Reducer
function usersReducer(state = initial_state, action) {
    switch (action.type) {  
        case "GET_USERS":
            const newSetState = action.payload;
            return newSetState;

        default:
            return state;
    }
}
  
export default usersReducer;