// Initial State
const initial_state = {
    currentUser: null,
    imageURL:null,
  }
  
  // Reducer
  function authReducer (state = initial_state, action) {
    switch (action.type) {
      case "ADD_USER":
        return {
          ...initial_state,
          currentUser: action.payload
        }
      case "SET_IMAGE":
        return {
          ...initial_state,
          imageURL: action.payload
        }
      default:
        return state;
    }
  }
  
  export default authReducer;