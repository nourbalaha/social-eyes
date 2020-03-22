// Initial State
const initial_state = {};
  
// Reducer
function userReducer(state = initial_state, action) {
    switch (action.type) {  
        case "SET_USER":
            const newSetState = action.payload;
            return newSetState;

        case "ADD_POST":
            const posts = state["posts"]
            const length = String(Object.keys(posts).length)
            const postId = String(Number(Object.keys(posts)[length - 1]) + 10)
            const newPost = {
                postId,
                author: action.payload.userref,
                message: action.payload.message,
                likes: action.payload.likes,
                createdAt: action.payload.createdAt,
            }
            const newState = {...state};
            newState["posts"][postId] = newPost;
            return newState;

        case "UPDATE_POST":
            const newStateAfterUpdate = {...state};
            const postIdToUpdate = action.payload.postId;
            newStateAfterUpdate["posts"][postIdToUpdate]["message"] = action.payload.message;
            return newStateAfterUpdate;

        case "LIKE_POST":
            const newStateAfterLike = {...state};
            const postIdToLike = action.payload.postId;
            const likes = newStateAfterLike["posts"][postIdToLike]["likes"];
            const likedPosts = newStateAfterLike["likes"];
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
            delete newStateAfterDelete["posts"][postIdToDelete]
            return newStateAfterDelete;

        default:
            return state;
    }
}
  
export default userReducer;