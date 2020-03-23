import { firestore } from "../../firebase/firebase.config"

export const getUsers = () => {
    return async (dispatch, getState) => {
        const currentUserRef = getState().auth.currentUser.displayName; 
        const userRef = firestore.collection("users");
        const userSnap = await userRef.get();
        let result = userSnap.docs.map(doc=>doc.data()).filter(doc=>doc.userRef!==currentUserRef);
        const users = {};
        result.forEach(user=>{
            users[user.userRef]=user;
        })
        dispatch({
            type: "GET_USERS",
            payload: users,
        })
    }
}