import { Button, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Honeymoon = () => {
  const [openModal, setOpenModal] = useState(false);
  const NameInputRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      alert("Registor Successfully");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="p-8 rounded-t-lg h-96 max-w-96"
            src="https://cdn0.weddingwire.in/vendor/4236/3_2/960/jpg/riya-travel-1_15_224236-1560829559.jpeg"
            alt="Tourist "
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Riya Travel
            </h5>
          </Link>
          <br />
          <p>
            Riya Travel is a travel agency located in Madurai. This company was
            incorporated in the year 1980 and has been making honeymoons easier
            and convenient ever since then. This team has emerged as one of the
            most sought after organisations in India. Headed by Mr. GMJ Thampy,
            today Riya Travel more than 50 branches all over the globe both
            nationally and internationally. They will ensure to make your
            honeymoon an experience to remember and worth cherishing. Not only
            this, but Riya Travel has a wide range of packages and services for
            you to pick as per your requirements and the budget you have in
            mind. Some of the outstanding services offered by this company
            incorporate the following: Accommodation Flights Local
            transportation & transfers Sight-seeing tours
          </p>
          <div className="flex items-center mt-20">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
          <br />
          <div className="flex items-center justify-between">
            <span className="text-xl text-gray-900font-bold dark:text-white">
              From Price ₹30,000
            </span>
            <Button onClick={() => setOpenModal(true)}>Request Pricing</Button>
            <Modal
              show={openModal}
              size="md"
              popup
              onClose={() => setOpenModal(false)}
              initialFocus={NameInputRef}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Request pricing Request pricing.
                    <br /> Fill this form we will contact you shortly. All the
                    information provided will be treated confidentially.
                  </h3>
                  <div>
                    <TextInput
                      id="Name"
                      type="text"
                      placeholder="Enter Your Name"
                      required
                      rightIcon={AiOutlineUser}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="email"
                      type="text"
                      placeholder="name@company.com"
                      required
                      rightIcon={AiOutlineMail}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="number"
                      type="tel"
                      placeholder="Contact No:"
                      required
                      rightIcon={AiOutlinePhone}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="date"
                      type="date"
                      placeholder="date:"
                      required
                    />
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button
                      onClick={handleSubmit}
                      size="md"
                      gradientMonochrome="cyan"
                      className="text-center"
                    >
                      Registor
                    </Button>
                    <Button color="failure" onClick={() => setOpenModal(false)}>
                      Back To Page
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
      <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="p-8 rounded-t-lg h-96 max-w-96"
            src="https://cdn0.weddingwire.in/vendor/1393/3_2/960/jpeg/russia-jpeg2_15_181393.jpeg"
            alt="Tourist "
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Trav-tourist
            </h5>
          </Link>
          <br />
          <p>
            Trav-tourist is a company based in the city of Chennai that can
            offer you a range of travel related services which you can choose as
            per your needs and requirements. They specialise in honeymoon
            packages for the newlywed couples so that they can get away from all
            the wedding frenzy and relax. If you are looking for a good travel
            company in the city that can offer you best in class services as
            well as ensure that you have the most memorable time, then your
            search can end here. They will ensure that your holiday is filled
            with beautiful memories that you can cherish for life. Services
            Offered No matter where in the world that you wish to visit, they
            can offer you domestic as well as International travel packages that
            would be in sync with your travel preferences and choices.
            Travelling is an activity done for the relaxation of your mind as
            well as rejuvenation of the body that becomes imperative if you are
            stuck in the busy schedule of the city life. I-Trav will ensure that
            you get your perfect getaway and the dream holiday with a
            hassle-free experience.
          </p>
          <div className="flex items-center mt-20">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
          <br />
          <div className="flex items-center justify-between">
            <span className="text-xl text-gray-900font-bold dark:text-white">
              From Price ₹20,000
            </span>
            <Button onClick={() => setOpenModal(true)}>Request Pricing</Button>
            <Modal
              show={openModal}
              size="md"
              popup
              onClose={() => setOpenModal(false)}
              initialFocus={NameInputRef}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Request pricing Request pricing.
                    <br /> Fill this form we will contact you shortly. All the
                    information provided will be treated confidentially.
                  </h3>
                  <div>
                    <TextInput
                      id="Name"
                      type="text"
                      placeholder="Enter Your Name"
                      required
                      rightIcon={AiOutlineUser}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="email"
                      type="text"
                      placeholder="name@company.com"
                      required
                      rightIcon={AiOutlineMail}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="number"
                      type="tel"
                      placeholder="Contact No:"
                      required
                      rightIcon={AiOutlinePhone}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="date"
                      type="date"
                      placeholder="date:"
                      required
                    />
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button
                      onClick={handleSubmit}
                      size="md"
                      gradientMonochrome="cyan"
                      className="text-center"
                    >
                      Registor
                    </Button>
                    <Button color="failure" onClick={() => setOpenModal(false)}>
                      Back To Page
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
      <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="p-8 rounded-t-lg h-96 max-w-96"
            src="https://cdn0.weddingwire.in/vendor/4385/3_2/960/jpg/gangtok-15-166825_15_194385-1553775155.jpeg"
            alt="Tourist "
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Gem Tours
            </h5>
          </Link>
          <br />
          <p>
            Gem Tours & Travels Pvt. Ltd. is a travel company located in the
            city of Chennai. They can offer you a plethora of travel related
            services and ensure to provide you with the best in class services
            os that you can have the best travel experience with them. Providing
            their services since the year 1983, they even specialise in
            providing honeymoon packages to the newlywed couples. If you are
            planning your perfect holiday and looking for a travel company that
            can offer you best in class services and travel packages for
            anywhere in the world, then your search can end here. Services
            Offered With their quality services, they would ensure that you have
            the best and most memorable experience where you are able to forge
            many happy memories to cherish for life. An expert and trained
            professional from Gem Tours & Travels Pvt. Ltd. will always be
            available to provide you with the assistance so that you can have a
            hassle-free and stress-free experience. Their services can be
            availed at reasonable prices with tailor-made packages which can be
            customised as per your needs and requirements.
          </p>
          <div className="flex items-center mt-20">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
          <br />
          <div className="flex items-center justify-between">
            <span className="text-xl text-gray-900font-bold dark:text-white">
              From Price ₹35,000
            </span>
            <Button onClick={() => setOpenModal(true)}>Request Pricing</Button>
            <Modal
              show={openModal}
              size="md"
              popup
              onClose={() => setOpenModal(false)}
              initialFocus={NameInputRef}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Request pricing Request pricing.
                    <br /> Fill this form we will contact you shortly. All the
                    information provided will be treated confidentially.
                  </h3>
                  <div>
                    <TextInput
                      id="Name"
                      type="text"
                      placeholder="Enter Your Name"
                      required
                      rightIcon={AiOutlineUser}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="email"
                      type="text"
                      placeholder="name@company.com"
                      required
                      rightIcon={AiOutlineMail}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="number"
                      type="tel"
                      placeholder="Contact No:"
                      required
                      rightIcon={AiOutlinePhone}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="date"
                      type="date"
                      placeholder="date:"
                      required
                    />
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button
                      onClick={handleSubmit}
                      size="md"
                      gradientMonochrome="cyan"
                      className="text-center"
                    >
                      Registor
                    </Button>
                    <Button color="failure" onClick={() => setOpenModal(false)}>
                      Back To Page
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
      <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="p-8 rounded-t-lg h-96 max-w-96"
            src="https://cdn0.weddingwire.in/vendor/9530/3_2/960/jpg/memories-forever0-.jpeg"
            alt="Tourist "
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              WatchBayTravels
            </h5>
          </Link>
          <br />
          <p>
            WatchBayTravels is a boutique travel agency based in the city of
            Chennai. Taking some time off of your busy schedules to visit a
            place where you can relax, explore and rejuvenate is not only good
            for your physical self but also the mind and soul. Traveling
            provides you with a kind of energy that enables you to make your
            soul happy. It becomes important for the newlywed couple to take a
            vacation after the wedding exhaustion just to relax and unwind.
            WatchBayTravels can take care of all your travel needs by providing
            you customized travel solutions. Services offered They provide
            personalized services to inspect and curate a customized itinerary
            for a destination that you want to visit. No matter where you want
            to visit, if it is a domestic destination for a popular Internation
            choice, they can provide you with attract package for anywhere.
            Their hardworking team of professionals will always be present to
            provide you with the best quality services so that you can have a
            memorable experience.
          </p>
          <div className="flex items-center mt-20">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
          <br />
          <div className="flex items-center justify-between">
            <span className="text-xl text-gray-900font-bold dark:text-white">
              From Price ₹25,000
            </span>

            <Button onClick={() => setOpenModal(true)}>Request Pricing</Button>
            <Modal
              show={openModal}
              size="md"
              popup
              onClose={() => setOpenModal(false)}
              initialFocus={NameInputRef}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Request pricing Request pricing.
                    <br /> Fill this form we will contact you shortly. All the
                    information provided will be treated confidentially.
                  </h3>
                  <div>
                    <TextInput
                      id="Name"
                      type="text"
                      placeholder="Enter Your Name"
                      required
                      rightIcon={AiOutlineUser}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="email"
                      type="text"
                      placeholder="name@company.com"
                      required
                      rightIcon={AiOutlineMail}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="number"
                      type="tel"
                      placeholder="Contact No:"
                      required
                      rightIcon={AiOutlinePhone}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="date"
                      type="date"
                      placeholder="date:"
                      required
                    />
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button
                      onClick={handleSubmit}
                      size="md"
                      gradientMonochrome="cyan"
                      className="text-center"
                    >
                      Registor
                    </Button>
                    <Button color="failure" onClick={() => setOpenModal(false)}>
                      Back To Page
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
      <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="p-8 rounded-t-lg h-96 max-w-96"
            src="https://cdn0.weddingwire.in/vendor/8371/3_2/960/jpeg/spain_15_188371.jpeg"
            alt="Tourist "
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Travel Dynamics
            </h5>
          </Link>
          <br />
          <p>
            Travel Dynamicsis a travel company based in the city of Chennai that
            can offer you a plethora of travel services. They specialise in
            honeymoon packages and can offer a wide range of other packages that
            can be suitable for any kind of holiday that you wish to take.
            Travelling is an important activity as you can explore all that this
            world has to offer us and even change our perspective of seeing life
            in a better manner. It let us explore the vibrant cultures, walk the
            life of others as well as help us live stories and forge experiences
            that would forever stay with us. Services Offered If you are looking
            for a good track company in the city that can offer you the most
            memorable experiences as well as quality services, then your search
            can end here. Travel Dynamics India Pvt. Ltd. can be your one-stop
            solution for each and every one of your travel needs and provide you
            with tailor-made packages that would be in perfect sync with all of
            your requirements. Some of the popular tourist destinations that
            they cover include Maldives, Bali, Shimla. and many more.
          </p>
          <div className="flex items-center mt-20">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-yellow-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <svg
                className="w-4 h-4 text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
              5.0
            </span>
          </div>
          <br />
          <div className="flex items-center justify-between">
            <span className="text-xl text-gray-900font-bold dark:text-white">
              From Price ₹10,000
            </span>
            <Button onClick={() => setOpenModal(true)}>Request Pricing</Button>
            <Modal
              show={openModal}
              size="md"
              popup
              onClose={() => setOpenModal(false)}
              initialFocus={NameInputRef}
            >
              <Modal.Header />
              <Modal.Body>
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                    Request pricing Request pricing.
                    <br /> Fill this form we will contact you shortly. All the
                    information provided will be treated confidentially.
                  </h3>
                  <div>
                    <TextInput
                      id="Name"
                      type="text"
                      placeholder="Enter Your Name"
                      required
                      rightIcon={AiOutlineUser}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="email"
                      type="text"
                      placeholder="name@company.com"
                      required
                      rightIcon={AiOutlineMail}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="number"
                      type="tel"
                      placeholder="Contact No:"
                      required
                      rightIcon={AiOutlinePhone}
                    />
                  </div>
                  <div>
                    <TextInput
                      id="date"
                      type="date"
                      placeholder="date:"
                      required
                    />
                  </div>
                  <div className="flex justify-center gap-4">
                    <Button
                      onClick={handleSubmit}
                      size="md"
                      gradientMonochrome="cyan"
                      className="text-center"
                    >
                      Registor
                    </Button>
                    <Button color="failure" onClick={() => setOpenModal(false)}>
                      Back To Page
                    </Button>
                  </div>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Honeymoon;
