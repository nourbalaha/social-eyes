const functions = require('firebase-functions');
const admin = require("firebase-admin");

admin.initializeApp();

const firebaseConfig = {
    apiKey: "AIzaSyB_xkFzhVpVr9QC2k33P5CccxFG19xfb18",
    authDomain: "socia1eyes.firebaseapp.com",
    databaseURL: "https://socia1eyes.firebaseio.com",
    projectId: "socia1eyes",
    storageBucket: "socia1eyes.appspot.com",
    messagingSenderId: "973196236998",
    appId: "1:973196236998:web:9d85d953310f3cfb631fc7",
    measurementId: "G-BC9B2WSVJG"
  };

const express = require("express");
const app = express(); 

const firebase = require("firebase");
firebase.initializeApp(firebaseConfig)

const db = admin.firestore()

app.get("/screams", (req, res) => {
    db
    .collection("screams")
    .get()
    .orderBy("createdAt", "desc")
    .then(data => {
        const screams = [];
        data.forEach(doc => {
            screams.push({
                screamId: doc.id,
                body: doc.data().body,
                userHandle: doc.data().userHandle,
                createdAt: doc.data().createdAt
            });
        })
        return res.json(screams);
    })
    .catch(err => console.error(err));
})

app.post("/scream", (req, res) => {
    const newScream = {
        body: req.body.body,
        userHandle: req.body.userHandle,
        createdAt: newDate().toISOString(),
    }

    db
    .collection("screams")
    .add(newScream)
    .then(doc => {
        res.json({ message: `document ${doc.id} created successfuly`})
    })
    .catch(err => {
        res.status(500).json({ error: "something went wrong"});
        console.log(err);
    })
});

// Signup route
app.post("/signup",(req,res)=>{
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        handle: req.body.handle,
    }

    let token, userId;
    db.doc(`/users/${newUser.handle}`)
        .get()
        .then(doc => {
            if(doc.exists){
                res.status(400).json({ handle: "this handle is already taken"})
            } else {
                return firebase
                .auth()
                .createUserWithEmailAndPassword(newUser.email, newUser.password)
            }
        })
        .then(data => {
            userId = data.user.uid;
            return data.user.getIdToken()
        })
        .then(idToken => {
            token = idToken;
            const userCredentials = {
                handle: newUser.handle,
                email: newUser.email,
                createdAt: new Date().toISOString(),
                userId
            }
            return db.doc(`/users/${newUser.handle}`).set(userCredentials);
        })
        .then(()=>{
            return res.status(201).json({ token });
        })
        .catch(err => {
            console.error(err);
            if(err.code === "auth/email-already-in-use"){
                return res.status(400).json({ email: "email is already in use"});
            } else {
                return res.status(500).json({ error: err.code })
            }
        })
})
exports.api = functions.https.onRequest(app);