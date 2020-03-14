import { mock_data } from '../../mock_data'
// Initial State
const initial_state = {
    users: mock_data,
  };
  
// Reducer
function usersReducer(state = initial_state, action) {
    switch (action.type) {  
        case "ADD_POST":
            const posts = state["users"]["users"][action.payload.userref]["posts"]
            const length = String(Object.keys(posts).length)
            console.log(Object.keys(posts)[length - 1])
            const postId = String(Number(Object.keys(posts)[length - 1]) + 10)
            const newPost = {
                postId,
                author: action.payload.userref,
                message: action.payload.message,
                likes: [],
                createdAt: Date.now(),
            }
            const newState = {...state};
            newState["users"]["users"][action.payload.userref]["posts"][postId] = newPost;
            return newState;

        default:
            return state;
    }
}
  
export default usersReducer;