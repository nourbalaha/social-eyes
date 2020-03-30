import { firestore } from "../../firebase/firebase.config"

export const getFeed = () => {
    return async (dispatch, getState) => {
        const postsRef = firestore.collection("users");
        const postsSnap = await postsRef.get();
        let posts = postsSnap.docs.map(doc=>doc.id);

        const newsFeed = posts.map(async post=>{
            const postRef = firestore.collection("users").doc(post).collection("posts");
            const postSnap = await postRef.get();
                return postSnap;
        })

        let feed = await Promise.all(newsFeed).then(data=>{
            return data.map(result=>result.docs);
        })

        let result = {}
        feed.forEach(top=>{
            top.forEach(bottom=>{
                result[bottom.id]=bottom.data();
            })
        })

        dispatch({
            type: "GET_FEED",
            payload: result,
        })
    }
}

export const likeFeedPost = (post) => {
    return async (dispatch, getState) => {
        const currentUserRef = getState().auth.currentUser.displayName; 
        const ref = await firestore.collection("users").doc(post.userRef).collection("posts").doc(post.postId);
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
            type:"LIKE_FEED_POST", 
            payload: post
        })
    }
}