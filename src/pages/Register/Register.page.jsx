import React, { useState } from 'react';

import './Register.style.scss';

import Logo from '../../assets/owl.png';

import { auth, firestore } from '../../firebase/firebase.config';

function Register({ history }) {

    const [ user, setUser ] = useState({
        userRef:"",
        email:"",
        password: "",
        description: "",
      })    
      
      const handleChange = event => {
          const { name, value } = event.target;
  
          setUser({
              ...user,
              [name]: value
          })
      }
      
      const handleRegister = async ()=>{
        if(user.userRef.length > 0 && user.email.length > 0  && user.password.length > 0 ){
          try {
            await auth.createUserWithEmailAndPassword(user.email, user.password)
            const currentUser = auth.currentUser;
            await currentUser.updateProfile({
                displayName: user.userRef,
              })
            const userRef = firestore.collection("users").doc(user.userRef);
                const data = {};
                data.id= currentUser.uid;
                data.userRef= user.userRef;
                data.email= user.email;
                data.description= user.description;
                data.openProfile= true;
                data.created_at= Date.now();
                data.followers= [];
                data.following= [];
                data.likes= [];
                data.posts= {};
            await userRef.set(data);
          } catch(error) {
            console.log({msg:error.message, type: "error"})
          };
          history.push("/home")
        } else {
          console.log({msg:"please enter required field", type: "error"})
        }
      }

    return (
        <div className='register'>
        <div className='register-container'>
          <img className='register-image' src={Logo} alt='logo' />
          <input
            className='register-user-ref'
            name='userRef'
            type='text'
            placeholder='User Name'
            value={user.userRef}
            onChange={handleChange}
          />
          <input
            className='register-email'
            name='email'
            type='email'
            placeholder='Email'
            value={user.email}
            onChange={handleChange}
          />
          <input
            className='register-password'
            name='password'
            type='password'
            placeholder='Password'
            value={user.password}
            onChange={handleChange}
          />
          <input
            className='register-description'
            name='description'
            type='text'
            placeholder='description'
            value={user.description}
            onChange={handleChange}
          />
          <button className='register-button' onClick={handleRegister}>
            Register
          </button>
          <p className='register-text'>
            Already have an account.{' '}
            <span className='register-login' onClick={()=>history.push("/login")}>Login</span> here.
          </p>
        </div>
      </div>
    )
}

export default Register
