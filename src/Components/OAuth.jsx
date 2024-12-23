import { Button } from 'flowbite-react';
import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import { signinSuccess,signinFailure } from '../Redux/Slice/userSlice';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';


const OAuth = () => {
    const auth = getAuth(app)
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const handleSubmit = async()=>{
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({prompt:'select_account'})
      try {
        const result = await signInWithPopup(auth,provider)
        const res = await fetch("http://localhost:5000/api/auth/google",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
              name:result.user.displayName,
              email:result.user.email,
              profilePic:result.user.photoURL
            })
          
        })
        const data = await res.json();
        const user={...data.rest}
        if(res.ok){
          localStorage.setItem("Token",data.token)
            dispatch(signinSuccess(user))
            navigate('/')
            //console.log(user);
        }
      } catch (error) {
        dispatch(signinFailure(error.message))
      }
   }
    return (
       <Button type='button' gradientDuoTone="pinkToOrange" onClick={handleSubmit} pill className='hover:scale-105'>
        <AiFillGoogleCircle className='w-6 h-6 mr-2'/>
        Continue with Google
       </Button>
    );
};

export default OAuth;