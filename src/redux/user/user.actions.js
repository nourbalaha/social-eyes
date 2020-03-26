import { firestore } from "../../firebase/firebase.config"

export const getUserData = (newUserRef) => {
    return async (dispatch, getState) => {
        const currentUserRef = newUserRef?newUserRef:getState().auth.currentUser.displayName; 
        const userRef = firestore.collection("users").doc(currentUserRef);
        const userSnap = await userRef.get();
        let result = userSnap.data();
        
        dispatch({
            type: "GET_USER_DATA",
            payload: result,
        })
    }
}