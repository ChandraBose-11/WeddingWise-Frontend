import { Button, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const BridalLehenga = () => {
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
            src="https://i.pinimg.com/736x/5e/1f/f5/5e1ff563b7a2177487c52cb2374885d2.jpg"
            alt="Wedding-Resorts"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Kimayann
            </h5>
          </Link>
          <br />
          <p>
            Kimayan is a designer store located in the city of Chennai. It is a
            luxury brand, established by the creative husband and wife duo, Neha
            and Pradeep Hirani. Established in 2002,Kimayan is now a market
            leader in couture and print collections, well supported by good
            merchandising, fine operational expertise, and excellent customer
            management. It offers a wide collection of the latest in fashion by
            countless designers and it is one of the biggest buyers at the
            Indian Fashion Week. Experience Kimaya is a well-known designer
            store. It gave a well-deserving jolt to the fashion retail business,
            adding a much needed professional touch to a chaotic setup. Started
            with a creative group of 26 leading designers, within six years it
            features more than 140 Indian and Italian designers. It opened a new
            store in Dubai, after a year in retail and now has a presence in all
            the major cities of India.
          </p>
          <div className="flex items-center mt-24">
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
            <span className="text-xl text-gray-900 font-bold dark:text-white">
              From Bridal Wear ₹40,000
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
            src="https://i.pinimg.com/originals/1a/03/3d/1a033d7dfb7ddbbec199a08664dafd4f.jpg"
            alt="Wedding-Resorts"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Montage Fashion House
            </h5>
          </Link>
          <br />
          <p>
            Montage Fashion House is a designer store located in Nungambakkam
            which is situated in the city of Chennai. Every girl has an innate
            desire to look fabulous and perfect in her Bridal Avatar and for
            this to happen, everything you wear should be on-point. If you are
            looking for a great designer store to get your bridal attire, then
            the Montage Fashion House is the choice that you should make. It is
            a one-stop shop which offers all types of western and ethnic wear
            for brides and their bridesmaids as well. Designs offered The bride
            needs to look beautiful and elegant for all the pre-wedding, wedding
            and post-wedding functions and the bridal attire should match her
            personality as well as the sense of style for all the ceremonies.
            The creative team of designers at Montage Fashion House have been
            designing stunning outfits ranging in different colours, for a very
            long time and know exactly how to deliver what you demand.
          </p>
          <div className="flex items-center mt-24">
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
            <span className="text-xl text-gray-900 font-bold dark:text-white">
              From Bridal Wear ₹45,000
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
            src="https://i.pinimg.com/736x/4e/6c/b7/4e6cb7678c09d1a2d7a63a4fb17707ef.jpg"
            alt="Wedding-Resorts"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Sionnah
            </h5>
          </Link>
          <br />
          <p>
            Sionnah is a bridal lehenga store based in Nungambakkam, Chennai.
            Being one of the most sought-after couture brands based in the
            metropolitan city of Chennai, they provide you with gorgeous options
            when it comes to your bridal attire. You will certainly get many
            beautiful dresses of your choice and it will be hard to choose a few
            so to not overstuff your closets. So, don't waste your time in
            thinking and head out to this store to start shopping. Designs
            Offered There are quite many ceremonies that happen before and after
            the main wedding ceremony and each of it demands new apparel for the
            bride to look the best and stand apart from the crowd. Keeping this
            in mind, Sionnah creates many gorgeous designs to fulfil its
            clients' need. They have a variety of shades and patterns to satiate
            your inner fashionista.
          </p>
          <div className="flex items-center mt-24">
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
            <span className="text-xl text-gray-900 font-bold dark:text-white">
              From Bridal Wear ₹10,000
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
            src="https://i.pinimg.com/736x/af/15/46/af1546f69c986a1775133a62141042dc.jpg"
            alt="Wedding-Resorts"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Label Ritu Kumar, Chennai
            </h5>
          </Link>
          <br />
          <p>
            Label Ritu Kumar is a high-end couture brand located in Chennai and
            deals with an array of outfit options for every occasion and
            festivity. If you want to wear a lehenga that you always longed for,
            they will have it ready for you. The array of designs that the
            company offers starts from quirky printed Into-western outfits to
            gorgeous bridal lehengas and trousseau wear. The brand is known for
            its rich and distinctive use of colours, exquisite embroideries, and
            outfits which are rich in Indian design. Every outfit that is
            offered by Label Ritu Kumar is a marvellous piece. Experience Since
            its inception in 1969, the brand that was started by Label Ritu
            Kumar has grown in popularity to reach new heights. The designs
            reflect her unique style that is a blend of ancient ethnic tradition
            with a contemporary vibe to it. She has dressed every well-known
            celebrity and walked for all the celebrated fashion weeks of the
            country. Rest assured as she will ensure to make you look phenomenal
            in your bridal avatar. Designs Offered It is not a shocker that the
            brand provides innumerable designs for you to opt for on your
            special day. The talented team of designers who work with Label Ritu
            Kumar also customise your outfits in a way you want it to look like.
            A few of the many designs that they offer for bridal wear are
            lehengas, beautiful sarees, and stunning Indo-western outfits. Be
            ready to look at your jaw-dropping best by choosing them as your
            designer wear for your wedding and pre-wedding events.
          </p>
          <div className="flex items-center mt-24">
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
            <span className="text-xl text-gray-900 font-bold dark:text-white">
              From Bridal Wear ₹2,5000
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
            src="https://i.pinimg.com/236x/a4/11/d5/a411d571111b9906032b8fd62f16d1b5.jpg"
            alt="Wedding-Resorts"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              F2 Designer Boutique
            </h5>
          </Link>
          <br />
          <p>
            F2 Designer Boutique is a well-famed bridal lehenga designer nestled
            in the heart of Ramapuram, Chennai. Renowned for its exquisite
            bridal lehengas, the F2 Designer Boutique is your go-to destination
            for capturing the essence of traditional charm and contemporary
            allure. The F2F team ensures that each bridal lehenga is a
            masterpiece, meticulously crafted to perfection. From intricate
            embroidery to luxurious fabrics, every detail reflects the
            dedication to creating a garment as unique as the bride herself. The
            boutique takes pride in offering a diverse collection that caters to
            individual tastes and preferences, ensuring that every bride finds
            her dream ensemble. What F2 Designer Boutique brings to the table F2
            Designer Boutique offers personalised consultations to bring your
            vision to life. The skilled artisans and designers work tirelessly
            to make your bridal dreams a reality, ensuring you radiate
            confidence and grace on your special day. They also provide rental
            bridal wear options and other party wear dresses for weddings. They
            are expert in designing and offering bespoke bridal lehenga that
            works magic for your dreamy bridal look. From gowns to indo-western
            bridal attires, F2 Designer Boutique has something for all bridal
            garment needs.
          </p>
          <div className="flex items-center mt-24">
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
            <span className="text-xl text-gray-900 font-bold dark:text-white">
              From Bridal Wear ₹15,000
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

export default BridalLehenga;
