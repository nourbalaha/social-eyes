import { firestore } from "../../firebase/firebase.config"

export const setUser = () => {
    return async (dispatch, getState) => {
        const currentUserRef = getState().auth.currentUser.displayName; 
        const userRef = firestore.collection("users").doc(currentUserRef)
        const userSnap = await userRef.get()
        let result = userSnap.data()
        dispatch({
            type: "SET_USER",
            payload: result,
        })
    }
}

export const addPost = (post) => {
    return async (dispatch, getState) => {
        const currentUserRef = getState().auth.currentUser.displayName;
        const ref = await firestore.collection("users").doc(currentUserRef).collection("posts").doc()
        post.postId = ref.id
        post.createdAt = Date.now();
        post.author = currentUserRef;
        console.log(ref.parent.parent.id)
        await ref.set(post);
        dispatch({
            type: "ADD_POST",
            payload: post,
        })
    }
}

export const removeItem = (id) => {
    return async (dispatch, getState) => {
        const uid = getState().auth.currentUser.uid; 
        const ref = firestore.collection("users").doc(uid).collection("cart").doc(id)
        await ref.delete()
        dispatch({
            type: "REMOVE_ITEM",
            payload: {id},
        })
    }
}