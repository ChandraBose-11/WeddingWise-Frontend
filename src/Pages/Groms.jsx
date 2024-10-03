import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from "flowbite-react";

const Groms = () => {
    return (
        <div>
        <div className="flex flex-wrap border-2 dark:bg-black bg-red-100">
          <div className="flex-col ml-2 flex-grow">
            <h1 className="font-bold text-4xl mt-10"></h1>
            <h3 className="flex font-bold text-2xl mt-5">
              There Are Many Plans in Wedding:-
             
            </h3>
          </div>
          {/* <div className="flex justify-center items-center sm:ml-0 mt-3">
          <img
            className="rounded-full max-w-full h-auto "
          src=""
          alt=""
          />
        </div> */}
        </div>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-secondary bg-red-100 p-5 dark:bg-black text-white">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link>
              <img
                className="rounded-t-lg p-5 w-80 ml-4"
                src='https://blog.getyourvenue.com/wp-content/uploads/2019/07/wedding-sherwanis-1.jpg'
                alt='sherwani'
              />
            </Link>
            <div className="p-5">
              <Link>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               Sherwani
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A sherwani is a long, full-sleeved, button-down coat that is worn by men in South Asia, especially for weddings and other festive occasions. It is a formal ensemble that is often made from rich fabrics and embellished with embroidery.
              </p>
              <Link
                to="/sherwani"
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
              </Link>
            </div>
          </div>
          </div>
      </div>
    );
};

export default Groms;