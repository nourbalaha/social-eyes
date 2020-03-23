import { firestore } from "../../firebase/firebase.config"

export const getUserData = () => {
    return async (dispatch, getState) => {
        const currentUserRef = getState().auth.currentUser.displayName; 
        const userRef = firestore.collection("users").doc(currentUserRef);
        const userSnap = await userRef.get();
        let result = userSnap.data();
        
        dispatch({
            type: "GET_USER_DATA",
            payload: result,
        })
    }
}