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

        let result = await Promise.all(newsFeed).then(data=>{
            return data.map(result=>result.docs[0].data());
        })


        dispatch({
            type: "GET_FEED",
            payload: result,
        })
    }
}