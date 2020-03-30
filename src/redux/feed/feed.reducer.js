// Initial State
const initial_state = [];
  
// Reducer
function feedReducer(state = initial_state, action) {
    switch (action.type) {  
        case "GET_FEED":
            const newState = action.payload;
            return newState;

        default:
            return state;
    }
}
  
export default feedReducer;