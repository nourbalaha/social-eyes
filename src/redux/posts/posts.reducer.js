import { mock_data } from '../../mock_data'
// Initial State
const initial_state = {
    posts: mock_data,
  };
  
// Reducer
function postsReducer(state = initial_state, action) {
    switch (action.type) {  
        default:
        return state;
    }
}
  
export default postsReducer;