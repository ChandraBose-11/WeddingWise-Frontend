import { Button, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";

import { Link } from "react-router-dom";

const BridalJewellary = () => {
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
      <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full bg-red-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="p-8 rounded-t-lg h-96 max-w-96"
            src="https://i.pinimg.com/736x/8f/1b/50/8f1b50daf1cf82d68888c887e4d5d270.jpg"
            alt="BridalJewellary"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Kalyan Jewellers
            </h5>
          </Link>
          <br />
          <p>
            Kalyan Jewellers, based out of Anna Nagar in Chennai, is a premium
            jewellery store, and is the brainchild of Mr T. S. Kalyanaraman
            Iyer, who started this business with the creative vision of becoming
            a safe haven for all brides who were tying the knot and wanted to
            indulge into buying jewellery that will forever remind them of their
            home and cultural heritage. Indian weddings are the purest form of
            beauty and each bride wishes her bridal persona to be class apart.
            Investing in a bridal jewellery set is an emotional journey for
            every woman and this jewellery outlet pampers you with unbound love
            and support and helps you find a jewellery set that sits wonderfully
            with your aesthetic appeal, values and sentiments. Experience Kalyan
            Jewellers is the creative vision of his founder, who laid the stone
            of this premium jewellery store in the year 1993. With more than 2
            decades of being in the industry of being a premium bridal jewellery
            provider, this enterprise has carved a niche for itself in the
            industry of bridal jewellery. Started with the vision of curating
            and designing jewellery that matches up to the expectations of every
            bride-to-be, each of their jewellery piece are a careful
            amalgamation of creative thought, artistic vision, supreme and
            artisanal craftsmanship and quality and finesse. They have made a
            mark in around 135 cities across the nation and the Middle East and
            pride's itself on being the true showcase of Indian, it's rich
            cultural heritage, diverse culture.
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
              From Price ₹15,000
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
      <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full bg-red-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="p-8 rounded-t-lg h-96 max-w-96"
            src="https://i.pinimg.com/564x/44/00/b9/4400b9e4a9c7166f9bb570a552b66c3f.jpg"
            alt="BridalJewellary"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Sai Creative Silk Thread Jewellery
            </h5>
          </Link>
          <br />
          <p>
            Based out of Chennai, Sai Creative Silk Thread Jewellery brings to
            you their uniquely designed bridal jewellery. They are better known
            for offering highly alluring designs in crafting real as well as
            imitation or artificial jewellery to their clients. They mould the
            ideas and concepts you have in mind, in order to transform it into
            reality through their unique designs and their gorgeously detailed
            craftsmanship. Sai Creative Silk Thread Jewellery is your go-to
            jeweller if you want your wedding jewellery to be customised in
            stunning designs and if you are looking for thread jewellery.
            Designs Offered Sai Creative Silk Thread Jewellery deals in bridal
            jewellery and is known for their craftsmanship of unique jewellery.
            They are professionally equipped artists who indulge in delivering
            perfection to their clients in lieu of the importance that jewellery
            holds in a wedding. Making jewellery designs from silk threads, you
            can use the ornaments for any of you haldi or mehendi function. The
            designs are also suitable for the bridesmaids and other family
            members.
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
              From Price ₹400
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
      <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full bg-red-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="p-8 rounded-t-lg h-96 max-w-96"
            src="https://i.pinimg.com/736x/05/76/82/0576825ccd6487a6441efce3a625eb10.jpg"
            alt="BridalJewellary"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Bharath Jewel
            </h5>
          </Link>
          <br />
          <p>
            Bharath Jewel is a jewellery store located in the Chennai city.
            Jewellery is a fashion statement and is one of the major elements in
            completing the bridal look. If you are looking for a great jewellery
            store to get your wedding imitation jewellery then,Bharath Jewel is
            the choice that you should definitely make. It offers artificial
            jewellery designs which are suitable for all your wedding related
            ceremonies for the bride as well as the bridesmaids. they will
            ensure to make you look magnificent as a bride. Designs offered The
            bride is supposed to look unique and elegant for all the
            pre-wedding, and in coordination with the bridal attire. The designs
            created byBharath Jewel will look beautiful in your bridal avatar
            and will ensure reflect and compliment your personality and sense of
            style. Their team fo craftsmen aim to deliver maximum client
            satisfaction by crafting your jewellery as per the way you desired
            it to be and will ensure that you get what you want.
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
              From Price ₹100
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
      <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full bg-red-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="p-8 rounded-t-lg h-96 max-w-96"
            src="https://i.pinimg.com/736x/1a/1a/3a/1a1a3a4f58e3d2a9aa9164033e5983f9.jpg"
            alt="BridalJewellary"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Bipin Jewellers
            </h5>
          </Link>
          <br />
          <p>
            Bipin Jewellers is a jewellery store located on the NSC Bose Road of
            the Chennai city. It offers a wide range of unique and exquisite
            imitation and artificial jewellery which is suitable for any of your
            wedding related functions. Jewellery is not only a piece of
            accessory but also something which defines your personality. If you
            are looking for a jewellery store to get your ornaments for your
            wedding functions, then Bipin Jewellers is the choice to make. They
            have a wonderful collection for the bride, bridesmaids and the
            family members as well. Designs offered Be it a haldi ceremony or a
            reception party, the designs offered by this company will look
            absolutely stunning with any of your outfits. Bipin Jewellers has
            come to be known for their imitation or artificial jewellery
            adornments and metal jewellery collections which will spoil you for
            choice. They also offer designer and vintage jewellery which you can
            choose as per your sense of style and choice.
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
              From Price ₹1000
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
      <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full bg-red-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="p-8 rounded-t-lg h-96 max-w-96"
            src="https://i.pinimg.com/736x/5f/d8/c6/5fd8c64866e4d609d5ae44fca038e446.jpg"
            alt="BridalJewellary"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Khazanchi Jewellers
            </h5>
          </Link>
          <br />
          <p>
            Khazanchi Jewellers is located in the city of Chennai. Planning a
            perfect and grand Indian wedding is an exhausting as well as
            exhilarating task. The bride is the center of attention for all and
            has to look her best at all times. When it comes to jewellery,
            brides are all about making a statement. From Navratan sets to Polki
            designs, the brides curate a perfect collection of jewellery for
            each of their wedding functions. If you are planning your wedding
            and looking at the latest trends in bridal jewellery, then Khazanchi
            Jewellers is one name that you cannot miss. Services offered They
            are a name associated with trust, reliability and the latest
            jewellery designs, everything which we look for in a jeweller. Their
            company is best known for their gold, silver and diamond jewellery,
            whose each design is made with the extensive finish and beautiful
            designs that they appear nothing less than a masterpiece. They have
            been providing their quality services since the year 1992 and
            achieving maximum client satisfaction.
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
              From Price ₹5,000
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

export default BridalJewellary;
