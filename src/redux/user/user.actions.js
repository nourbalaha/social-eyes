import firebase, { firestore } from "../../firebase/firebase.config"

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

export const setImage = (file) => {
    return async (dispatch, getState) => {
        // store profile image on firebase storage
        const storageRef = firebase.storage().ref();
        const thisRef = storageRef.child(`profileImages/${getState().auth.currentUser.uid}`);
        await thisRef.put(file)
        // update currentUser.photoURL
        const url = await storageRef.child(`profileImages/${getState().auth.currentUser.uid}`).getDownloadURL()
        await getState().auth.currentUser.updateProfile({photoURL: url});
        // add photoURL to firebase user ref
        const userRef = firestore.collection("users").doc(getState().auth.currentUser.displayName);
        await userRef.set({
            photoURL: url
          }, {merge: true});

        dispatch({
            type: "SET_IMAGE",
            payload: url,
        })
    }
}