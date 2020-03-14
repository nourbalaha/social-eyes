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

        case "UPDATE_POST":
            const newStateAfterUpdate = {...state};
            const postIdToUpdate = action.payload.postId;
            newStateAfterUpdate["users"]["users"][action.payload.userRef]["posts"][postIdToUpdate]["message"] = action.payload.message;
            return newStateAfterUpdate;

        case "LIKE_POST":
            const newStateAfterLike = {...state};
            const postIdToLike = action.payload.postId;
            const likes = newStateAfterLike["users"]["users"][action.payload.userRef]["posts"][postIdToLike]["likes"];
            const likedPosts = newStateAfterLike["users"]["users"][action.payload.userRef]["likes"];
            if(!likes.includes(action.payload.userRef)){
                likes.push(action.payload.userRef);
                likedPosts.push(postIdToLike);
            } else {    
                let index = likes.indexOf(action.payload.userRef);
                likes.splice(index, 1);
                let postIndex = likedPosts.indexOf(postIdToLike);
                likedPosts.splice(postIndex, 1);
            }
            return newStateAfterLike;

        case "DELETE_POST":
            const postIdToDelete = action.payload.postId
            const newStateAfterDelete = {...state};
            delete newStateAfterDelete["users"]["users"][action.payload.userRef]["posts"][postIdToDelete]
            return newStateAfterDelete;

        default:
            return state;
    }
}
  
export default usersReducer;