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

export const setUserData = (updatedUser) => {
    return async (dispatch, getState) => {
        const currentUserRef = getState().auth.currentUser.displayName; 
        const userRef = firestore.collection("users").doc(currentUserRef);
        await userRef.set(updatedUser);
        
        dispatch({
            type: "SET_USER_DATA",
            payload: updatedUser,
        })
    }
}