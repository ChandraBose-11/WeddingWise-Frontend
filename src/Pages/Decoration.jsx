import { Button, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const Decoration = () => {
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
      <div className="my-2 flex flex-col lg:flex-row w-full h-max max-w-full  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <Link to="#">
          <img
            className="p-8 rounded-t-lg h-96 max-w-96"
            src="https://cdn0.weddingwire.in/vendor/6393/3_2/960/jpeg/c8a6ab93-db3f-46bc-ad94-1c013fc4eacf_15_396393-164547949727002.jpeg"
            alt="Decoration"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              VSS Decorator Events
            </h5>
          </Link>
          <br />
          <p>
            Get to know your wedding decorator, VSS Decorator Events VSS
            Decorator Events, situated in Chennai, specialises in wedding
            decorations. The key to a successful wedding lies in impeccable
            decor and an ideal venue, and VSS Decorator Events excels in both
            aspects. As the ultimate choice for your grandest celebrations, this
            wedding decorator offers a comprehensive solution for all your
            decoration needs. With a team of highly skilled staff dedicated to
            illuminating the venue with positivity and beauty, VSS Decorator
            Events guarantees an unforgettable ambience for your special day.
            When seeking skilled experts to transform your wedding festivities,
            VSS Decorator Events is a name that simply cannot be overlooked. Why
            trust VSS Decorator Events with your wedding decor With years of
            experience, VSS Decorator Events understands the significance of
            your special occasion and strives for perfection with dedication.
            They are prepared to travel to any destination, ensuring a memorable
            and stress-free experience regardless of the wedding location. Relax
            and enjoy the ceremonies with your loved ones while benefiting from
            the top-notch services offered by VSS Decorator Events. Consider
            them your comprehensive solution for all your wedding decoration
            requirements.
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
            <span className="text-xl text-gray-900 font-bold dark:text-white">
              From Decor:₹15,000
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
            className="p-8 rounded-t-lg h-96 max-w-96 "
            src="https://cdn0.weddingwire.in/vendor/6393/3_2/640/png/weddingdecor-svsdecoratoevents-stagedecor-1_15_396393-164242313359565.jpeg"
            alt="Decoration"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Dream Decors
            </h5>
          </Link>
          <br />
          <p>
            Dream Decors By Vasanth is a wedding planning company based in the
            city of Chennai. Planning a wedding requires proper research and
            knowledge of all the vendors in the wedding industry. So if you are
            looking for one such company that can offer you the best wedding
            planning services then your search finally ends here with Dreamcore
            Decors By Vasanth. Its well-trained staff strives hard in providing
            the best decor solutions and service at budget-friendly rates so
            that you can remember them for a lifetime. Services Offered Dream
            Decors By Vasanth has a skilled team of staff who takes care of all
            your needs and plans each wedding celebration as per your themes and
            ideas. The team of well-trained staff are ready to travel around the
            cities and give a hassle-free experience to your friends and
            relatives in the most perfect manner. They take care of everything
            and are efficient enough in giving you mind-blowing wedding services
            that you can cherish for a lifetime. Dreamcore Decors By Vasanth
            offers an array of services that can be selected according to your
            needs and budget requirements. Some of the services offered by them
            include: Vendor management Event flow management Decor planning and
            execution Guests Management Entertainment Design & choreography
            Transport & logistics management Food & beverage management Signages
            and stationery for the event Wedding stationery Styling & personal
            shopper On-site support staff
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
            <span className="text-xl text-gray-900 font-bold dark:text-white">
              From Decor:₹50,000
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
            src="https://assets-news.housing.com/news/wp-content/uploads/2022/01/28174403/Wedding-stage-decoration-theme-shutterstock_1785913079.jpg"
            alt="Decoration"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Enchant
            </h5>
          </Link>
          <br />
          <p>
            Enchantment is a famous wedding decoration company located in
            Varanasi. Wedding ceremonies should be perfect in order to be a
            successful one and planning should be done with utmost care. The
            most important thing for a good wedding is beautiful decor and if
            you are looking for a renowned wedding decorative company then
            Enchantment is the choice you should make as the company deals in an
            extensive range of varieties which can be opted according to the
            function. Make your wedding ceremonies a memorable one by opting
            this company as they have got you covered with the most exceptional
            services. Services Offered Enchantment offers you with a wide range
            of services which you can choose depending upon your needs and
            preferences. They have a team of well-trained staff who are there
            with you all the time and ensures that all your events are carried
            smoothly without any inconvenience. They also have a team of
            professionals who are ready to travel with you both within the city
            as well as outside for your ease and convenience.
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
            <span className="text-xl text-gray-900 font-bold dark:text-white">
              From Decor:₹50,000
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
            src="https://i.pinimg.com/736x/80/31/b5/8031b517e87ef903c951197ee2e798ee.jpg"
            alt="Decoration"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Mara Events
            </h5>
          </Link>
          <br />
          <p>
            Based in Chennai, Mara Events is a dedicated wedding decorating team
            committed to meticulously curating and designing your most cherished
            moments. With years of expertise in the event management industry,
            they specialise in event design, planning, and flawless execution.
            At Mara Events, the team offers comprehensive end-to-end event
            decoration services, ensuring seamless experiences for various
            occasions, from intimate engagement ceremonies to grand-scale
            weddings. Their passion lies in bringing your visions to life and
            crafting unforgettable celebrations that reflect your unique style
            and personality. What can you expect from the decor of Mara Events
            With a keen eye for detail and a commitment to excellence, Mara
            Events goes above and beyond to exceed your expectations, leaving no
            stone unturned in ensuring the success of your special day. Whether
            you're envisioning an elegant soirée or a lavish affair, Mara Events
            is here to transform your dreams into reality, creating moments that
            will be cherished for a lifetime. Trust them to be your partner in
            crafting unforgettable memories that will leave a lasting impression
            on you and your loved ones.
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
            <span className="text-xl text-gray-900 font-bold dark:text-white">
              From Decor:₹50,000
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
            src="https://5.imimg.com/data5/HW/FC/MY-40326520/traditional-wedding-mandap.jpg"
            alt="Decoration"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Drift Memories
            </h5>
          </Link>
          <br />
          <p>
            Drift Memories, located in Chennai, specialises in wedding
            decoration services, ensuring your chosen venue is beautifully
            adorned for your special day. With unique and exquisite decor
            options, they elevate the ambience of your wedding festivities,
            creating a memorable setting that perfectly complements the
            significance of the occasion. Whether it's creating a romantic
            atmosphere or infusing vibrant energy into the venue, Drift Memories
            is your ultimate destination for creating the perfect backdrop for
            your celebration. How does the decor team of Drift Memories work
            Drift Memories promises to provide you with an awe-inspiring setting
            adorned with exquisite decor and stunning props, ensuring your
            wedding ceremonies are truly unique and unforgettable. With an array
            of beautiful elements meticulously curated to enhance the ambience,
            Drift Memories goes above and beyond to ensure that every detail is
            perfect for your special day.{" "}
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
            <span className="text-xl text-gray-900 font-bold dark:text-white">
              From Decor:₹1,00,000
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

export default Decoration;
