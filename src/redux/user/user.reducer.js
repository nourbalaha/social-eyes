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
};
  
// Reducer
function userReducer(state = initial_state, action) {
    switch (action.type) {  
        case "GET_USER_DATA":
            const newSetState = action.payload;
            return newSetState;

        default:
            return state;
    }
}
  
export default userReducer;