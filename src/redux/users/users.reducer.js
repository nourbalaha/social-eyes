import { mock_data } from '../../mock_data'
// Initial State
const initial_state = {
    users: mock_data,
  };
  
// Reducer
function usersReducer(state = initial_state, action) {
    switch (action.type) {  
        default:
        return state;
    }
}
  
export default usersReducer;