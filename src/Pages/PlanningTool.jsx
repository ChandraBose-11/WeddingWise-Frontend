import React from "react";
import { Link } from "react-router-dom";
const PlanningTool = () => {
  return (
    <div>
      <div className="flex flex-wrap border-2 dark:bg-black">
        <div className="flex-col ml-2 flex-grow">
          <h1 className="font-bold text-4xl m-2">PLANNING TOOL</h1>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-secondary p-5 dark:bg-black text-white">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link>
            <img
              className="rounded-t-lg p-5 w-80 ml-4"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzM7Ctmx9SyaouYpseMN--Mq5Jchamn--7gA&s"
              alt="weddingcake"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                WeddingCake
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A wedding cake is a traditional cake served at wedding receptions,
              usually after dinner. It is typically a multi-tiered cake that is
              decorated and covered in white icing
            </p>
            <Link
              to="/cake"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2JkgD20ipVOb_7lXghFQKo44_D5nwSSYrjA&s"
              alt="Budget"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Budget
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A wedding budget is a plan for the financial costs of a wedding,
              which can help you avoid debt and ensure you have money left over
              for other goals. When creating a wedding budget, you can consider
              Here are some things to consider when creating a wedding budget:
              Venue and catering: These are usually the biggest expenses, and
              can account for up to 50% of the budget. 
            </p>
            <Link
              to="/budget"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP1tdp0yFF-Y8NR-fDFLCFaVm8hx_RcAqgI2cOOMHYfSncTASaveaVR9TuzdktpTv9GYA&usqp=CAU"
              alt="weddingVendors"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                WeddingVendors
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wedding vendors are people or businesses that provide products and
              services for a wedding. Some examples of wedding vendors include:
              Venue, Caterer, Photographer, Florist,Entertainment, Wedding
              planner, Baker, designer, makeup artists,Provides attire services
            </p>
            <Link
              to="/weddingVendors"
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
              src="https://media.weddingz.in/images/5439e85e8ff807003b9552eaef6c1d0f/uyW72h96IIoz1i6OVgO1MGbBTJ-a55GCdFYcu6O8HaliHqU3yozwk-qehDrSZ5wDSMG61dYj1JFuhO3ENZTGMY0cy8JwLgqS4fOsg0dXCfm_2BJRjAw3KUhZjrf0yMNtD06MKhO7.jpg"
              alt="honeymoon"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Honeymoon
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A honeymoon is a vacation or trip that a newly married couple
              takes to celebrate their marriage. It can also refer to a period
              of harmony that follows marriage, or the early phase of a
              relationship before a couple gets used to living together.
            </p>
            <Link
              to="/honeymoon"
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh4_nHHOYG1TInaqr0sdtJiYoElz4X1WRAQQ&s"
              alt="Decoration"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Decoration
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Wedding decor can set the tone and ambiance for a wedding, and can
              help reflect the couple's personality and vision. Some common
              elements of wedding decor include: Flowers
            </p>
            <Link
              to="/decoration"
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
              src="https://imgmedia.lbb.in/media/2018/09/5b9f48e4cedb1e76b83a2b6a_1537165540674.jpg"
              alt="weddingchoreographers"
            />
          </Link>
          <div className="p-5">
            <Link>
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Choreographers
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              A wedding choreographer creates dance routines and movements for
              couples and other performers at weddings. They can also interpret
              existing dances for a specific group of performers
            </p>
            <Link
              to="/weddingchoreographers"
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

export default PlanningTool;
