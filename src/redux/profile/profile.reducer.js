// Initial State
const initial_state = {
    imageURL:null,
  }
  
  // Reducer
  function profileReducer (state = initial_state, action) {
    switch (action.type) {
      case "SET_IMAGE":
        return {
          ...initial_state,
          imageURL: action.payload
        }
      default:
        return state;
    }
  }
  
  export default profileReducer;