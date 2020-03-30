// Initial State
const initial_state = {};
  
// Reducer
function feedReducer(state = initial_state, action) {
    switch (action.type) {  
        case "GET_FEED":
            const newFeedState = action.payload;
            return newFeedState;
    
            case "LIKE_FEED_POST":
                const newStateAfterLike = {...state};
                const postIdToLike = action.payload.postId;
                const likes = newStateAfterLike[postIdToLike]["likes"];
                if(!likes.includes(action.payload.current)){
                    likes.push(action.payload.current);
                } else {    
                    let index = likes.indexOf(action.payload.current);
                    likes.splice(index, 1);
                }
                return newStateAfterLike;

        default:
            return state;
    }
}
  
export default feedReducer;