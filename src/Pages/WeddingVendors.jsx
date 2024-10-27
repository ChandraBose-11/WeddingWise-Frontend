import React from "react";
import { Link } from "react-router-dom";

const WeddingVendors = () => {
  return (
    <div>
      <div className="flex flex-wrap border-2 dark:bg-black">
        <div className="flex-col ml-2 flex-grow">
          <h1 className="font-bold text-4xl  m-2">WEDDING-VENDORS</h1>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-secondary p-5 dark:bg-black text-white">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://images.squarespace-cdn.com/content/v1/549ed406e4b031a7658c3dc1/1461496193980-41STQXH1DDV9LINJLK7V/Wedding_Travellers_Destination_Wedding_Photography-230.jpg"
              alt="photography"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding-Photography
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wedding photography is a type of photography that documents all
              the activities and events related to a wedding, from the
              preparations to the reception. The goal is to capture beautiful
              moments and create lasting memories for the couple
            </p>
            <Link
              to="/photography"
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

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEpsSBC_HA4vE9CoLEyzzy5qmQ4TRHWKR1Ow&s"
              alt="videography"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding-Videography
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wedding videography is the process of capturing a wedding on
              video, and the final product is often called a wedding video,
              movie, or film. Wedding videographers use professional equipment
              and storytelling to document the day's highlights, from the vows
              to the first dance.
            </p>
            <Link
              to="/videography"
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

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://cdn0.weddingwire.in/article/3676/original/1280/jpg/76763-best-wedding-entertainment-ideas-the-wedding-salad-games.jpeg"
              alt="Entertainment"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding-Entertainment
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wedding is about two people, it is important you put your guests
              into consideration too. The best thing is to incorporate
              entertainment that will entice your guests to indulge in every
              part of the celebration.
            </p>
            <Link
              to="/entertainment"
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
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-secondary p-5 dark:bg-black text-white">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://www.creatisimo.net/wp-content/uploads/2022/07/Simplicity-Engagement-Invitation.jpg"
              alt="invitation"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding-Invitation
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A wedding invitation is a letter asking the recipient to attend a
              wedding. It is typically written in the formal, third-person
              language and mailed five to eight weeks before the wedding date
            </p>
            <Link
              to="/invitation"
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

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://onehorizonproductions.com/wp-content/uploads/2022/11/Wedding-caterers-in-bangalore-jpg.webp"
              alt="caterers"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding-Caterers
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wedding catering is the service of food and other services for a
              wedding reception and party. Wedding caterers can be hired
              independently or as part of a package from the venue
            </p>
            <Link
              to="/caterers"
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

        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://cdn.prod.website-files.com/61dc1708ea98aa46622ce24a/662f9219298c480cb515da90_Best%20Flowers%20For%20Wedding.webp"
              alt="florits"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Wedding-Florits
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A wedding florist is a specialist who designs and arranges flowers
              for weddings and other events. They work closely with couples to
              understand their vision and create floral arrangements that
              complement the wedding's theme and atmosphere.
            </p>
            <Link
              to="/florits"
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

export default WeddingVendors;
