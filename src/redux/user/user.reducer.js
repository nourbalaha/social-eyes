// Initial State
const initial_state = {
    id:"",
    userRef:"",
    createdAt:"",
    description:"",
    email:"",
    likes:[],
    followers:[],
    following:[],
    openProfile:true,
    photoURL: null,
};
  
// Reducer
function userReducer(state = initial_state, action) {
    switch (action.type) {  
        case "GET_USER_DATA":
            const newState = action.payload;
            return newState;

        case "SET_USER_DATA":
            const newSetState = action.payload;
            return newSetState;

        case "SET_IMAGE":
            return {
                ...initial_state,
                photoURL: action.payload
            }

        default:
            return state;
    }
}
  
export default userReducer;