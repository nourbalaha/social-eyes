// Initial State
const initial_state = {};
  
// Reducer
function postsReducer(state = initial_state, action) {
    switch (action.type) {  
        case "SET_POSTS":
            const newSetState = action.payload;
            return newSetState;

        case "ADD_POST":
            const newState = {...state};
            const newPost = {
                postId: action.payload.postId,
                author: action.payload.userref,
                message: action.payload.message,
                likes: action.payload.likes,
                createdAt: action.payload.createdAt,
            }
            newState[action.payload.postId] = newPost;
            return newState;

        case "UPDATE_POST":
            const newStateAfterUpdate = {...state};
            const postIdToUpdate = action.payload.postId;
            newStateAfterUpdate[postIdToUpdate] = action.payload;
            return newStateAfterUpdate;

        case "LIKE_POST":
            const newStateAfterLike = {...state};
            const postIdToLike = action.payload.postId;
            const likes = newStateAfterLike[postIdToLike]["likes"];
            if(!likes.includes(action.payload.userRef)){
                likes.push(action.payload.userRef);
            } else {    
                let index = likes.indexOf(action.payload.userRef);
                likes.splice(index, 1);
            }
            return newStateAfterLike;

        case "DELETE_POST":
            const postIdToDelete = action.payload.postId
            const newStateAfterDelete = {...state};
            delete newStateAfterDelete[postIdToDelete]
            return newStateAfterDelete;

        default:
            return state;
    }
}
  
export default postsReducer;