
import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { signInFailure,signInStart,signInSuccess } from "../Redux/Slice/userSlice";
import OAuth from "../Components/OAuth";
const Signin = () => {
  const [formData, setFormData] = useState({});
 const dispatch = useDispatch();
 const {loading,error:errormessage} = useSelector((state)=>state.user)
  const navigate = useNavigate();
  const handleChange = (e) => {
    // console.log(e.target.value);
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    // console.log(formData);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (  !formData.email || !formData.password) {
      return dispatch(signInFailure(("Please fill out the fields")));
    }
    try {
      dispatch(signInStart());
      const response = await fetch(
        'https://weddingwise-backend-f9kh.onrender.com/api/auth/login-user',
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      if (data.success === false) {
        return dispatch(signInFailure((data.message)));
      }
      if (response.ok) {
        localStorage.setItem('Token',data.token)
        dispatch(signInSuccess(data))
        navigate("/");
      }
    } catch (error) {
      dispatch(signInFailure((error.message)));
    }
  };
  return (
    <div className="min-h-screen pt-20 bg-red-100  dark:bg-black">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <div className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-violet-600 via-fuchsia-700 to-pink-500 rounded-lg text-white">
              Wedding-Wise
            </span>
          </div>
          <p className="text-sm mt-6">
            You can SignIp with your Email and password or you can use the
            Google.
          </p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Email" />
              <TextInput
                type="email"
                placeholder="name@company.com"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div>
              <Label value="Password" />
              <TextInput
                type="password"
                placeholder="Enter your Password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <Button
              gradientDuoTone="purpleToPink"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner
                    color="purple"
                    aria-label="Purple spinner example"
                    size="sm"
                  />
                  <span className="pl-3">Loading...</span>
                </>
              ) : (
                'Sign In'
              )}
            </Button>
            <OAuth/>
          </form>
          <div className="flex gap-2 text-sm mt-6">
            <span>Don't Have An Account ?</span>
            <Link to="/signup" className="text-blue-600">
              SignUp
            </Link>
          </div>
          {errormessage && (
            <Alert
              color="failure"
              withBorderAccent
              icon={HiInformationCircle}
              className="mt-5"
            >
              <span className="font-medium me-2">🤖OOPS!</span> &nbsp;{errormessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};
export default Signin;