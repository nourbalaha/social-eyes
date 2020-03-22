import { firestore } from "../../firebase/firebase.config"

export const setPosts = () => {
    return async (dispatch, getState) => {
        const currentUserRef = getState().auth.currentUser.displayName; 
        const postsRef = firestore.collection("users").doc(currentUserRef).collection("posts");
        const postsSnap = await postsRef.get();
        let posts = postsSnap.empty?[]:postsSnap.docs.map(doc=>Object.assign({},doc.data()));
        let obj = {}
        posts.forEach(post=>obj[post.postId]=post)
        dispatch({
            type: "SET_POSTS",
            payload: obj,
        })
    }
}

export const addPost = (post) => {
    return async (dispatch, getState) => {
        const currentUserRef = getState().auth.currentUser.displayName;
        const ref = await firestore.collection("users").doc(currentUserRef).collection("posts").doc()
        post.postId = ref.id
        post.createdAt = Date.now();
        post.userref = currentUserRef;
        post.likes = [];
        await ref.set(Object.assign({},post));

        dispatch({
            type: "ADD_POST",
            payload: post,
        })
    }
}

export const updatePost = (post) => {
    return async (dispatch, getState) => {
        const currentUserRef = getState().auth.currentUser.displayName; 
        const ref = await firestore.collection("users").doc(currentUserRef).collection("posts").doc(post.postId);
        await ref.update(post)
    
        dispatch({
            type:"UPDATE_POST", 
            payload: post
        })
    }
}

export const likePost = (post) => {
    return async (dispatch, getState) => {
        const currentUserRef = getState().auth.currentUser.displayName; 
        const ref = await firestore.collection("users").doc(currentUserRef).collection("posts").doc(post.postId);
        let result = await ref.get()
        result = result.data();
        const likes = result["likes"];

        if(!likes.includes(currentUserRef)){
            likes.push(currentUserRef);
        } else {    
            let index = likes.indexOf(currentUserRef);
            likes.splice(index, 1);
        }

        await ref.update(result)
    
        dispatch({
            type:"LIKE_POST", 
            payload: post
        })
    }
}

export const deletePost = (postId) => {
    return async (dispatch, getState) => {
        const currentUserRef = getState().auth.currentUser.displayName; 
        const ref = await firestore.collection("users").doc(currentUserRef).collection("posts").doc(postId);
        await ref.delete()

        dispatch({
            type: "DELETE_POST",
            payload: {postId},
        })
    }
}