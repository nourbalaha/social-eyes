import firebase from "../../firebase/firebase.config";

export const setImage = (file) => {
    return async (dispatch, getState) => {
        const storageRef = firebase.storage().ref();
        const thisRef = storageRef.child(`profileImages/${getState.auth.currentUser.uid}`);
        await thisRef.put(file)
        const url = await storageRef.child(`profileImages/${getState.auth.currentUser.uid}`).getDownloadURL()
        await getState.auth.currentUser.updateProfile({photoURL: url});

        dispatch({
            type: "SET_IMAGE",
            payload: url,
        })
    }
}