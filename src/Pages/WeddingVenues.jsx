import { Blockquote } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const WeddingVenues = () => {
  const[malls,setMalls]=useState([])
  const navigate =useNavigate()
  useEffect(()=>{
    fecthmall()
  },
  [])
  const navigateMall=(id)=>{
    console.log(id);
    
navigate(`/restaurant/${id}`)
  }
 
  const fecthmall=async()=>{
     const response = await axios.get(
          "http://localhost:5000/api/malls/get"
     )
     setMalls(response.data)
     console.log(response);
     
  }
  return (
    <div>
      <div className="flex flex-wrap border-2 dark:bg-black">
        <div className="flex-col ml-2 flex-grow">
          <h1 className="font-bold text-4xl m-2">WEDDING-VENUES</h1>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-secondary p-5 dark:bg-black text-white">
       
          {malls.length>0 ? (
            malls.map((mall)=>(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src={mall.mallImages[0]}
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {mall.mallName}
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400" >
            {mall.mallDescription}
            </p>
            <button
              onClick={()=>navigateMall(mall._id)}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </div>
        </div>
          ))):<h1>no malls</h1>}
        
      </div>
      <br />
  </div>
  );
};

export default WeddingVenues;
