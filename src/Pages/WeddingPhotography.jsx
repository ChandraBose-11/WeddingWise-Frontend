import { Button, Modal, TextInput } from "flowbite-react";
import { useRef, useState } from "react";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";

const WeddingPhotography = () => {
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
            src="https://i.pinimg.com/236x/e6/11/fe/e611fe461ea55280c7d362d0f4130449.jpg"
            alt="Wedding-Resorts"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Elite5V Photography
            </h5>
          </Link>
          <br />
          <p>
            Elite5V Photography is a wedding photographer located in Chennai.
            Indian weddings are celebrated with much grandiosity and fervour
            wherein the bride, groom, and anyone associated with the wedding
            forge new bonds and memories that will stay with them for life. If
            you are looking for someone who can chronicle these happy moments
            most beautifully, then your search can end here. They will ensure
            that your wedding is one of a kind and the most beautiful event of
            your life. If you are looking for a talented team of photographers
            who can chronicle these memories in the best way possible, your
            search can end here. Services Offered Elite4U Photography can travel
            anywhere within the city and outside to provide their wedding
            photography assistance and assure that your wedding and its related
            ceremonies are snapped perfectly and in the most beautiful fashion.
            Their team will be with you at every step to ensure that not even a
            single one of your wedding moments are missed from their lens. They
            will deliver you the best in class services and a treasure trove of
            happy memories to cherish for life.
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
              From 1 Day Wedding Package ₹35,000
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
            src="https://i.pinimg.com/736x/08/67/6c/08676ca018ce62916e6d22ba9012e8ba.jpg"
            alt="Wedding-Resorts"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              ArtsStudio
            </h5>
          </Link>
          <br />
          <p>
            ArtsStudio is a photography company from Mumbai. With over two
            twenty of experience in the field, this photography company has a
            team of skilled and professional photographers and cinematographers
            who have been carving a niche for themselves in the wedding
            photography industry. This passionate photographer near you believes
            in capturing your raw and natural moments and freezing them forever.
            The team here pays attention to detail, and unique angles will help
            you get the best out of your wedding with an essence of style. How
            will ArtsStudio work with you ArtsStudio is an enterprise you can
            trust. They love your special moments just as much as you would.
            Their wedding photography packages are flexible and customisable.
            With so much experience under their belts, they have become experts
            in recognising the special moments that deserve to be framed
            forever.
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
              From 1 Day Wedding Package ₹70,000
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
            src="https://i.pinimg.com/564x/ed/a6/eb/eda6eb9fc992c4924cdee69c11649bfb.jpg"
            alt="Wedding-Resorts"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              AS5 Studios
            </h5>
          </Link>
          <br />
          <p>
            AS5 Studios is a wedding photography and cinematography service
            based in Anna Nagar West, Chennai. This exceptional team is formed
            by a bunch of creative professionals who make each shot
            breathtakingly beautiful. They also offer their services for wedding
            events and capture it in a way which is not at all typical or
            ordinary. So if you care to fill your wedding album with some
            offbeat and creative picture shots, then reach out to this amazing
            studio and book it for your special day. Services Offered: A team of
            professional photographers and camera people can be one of your best
            investments to create eternal memories which you will happily visit
            again and again.AS5 Studios is one such team. they shoot everything
            while taking care of details and quality. You can even get to have a
            quirky photo booth at your wedding with their services which will
            make your pictures more fun. Even your guests can enjoy it.
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
              From 1 Day Wedding Package ₹85,000
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
            src="https://i.pinimg.com/564x/f1/ab/d6/f1abd6752dcf12e62f2b282d0ca4b071.jpg"
            alt="Wedding-Resorts"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              Knight Studio
            </h5>
          </Link>
          <br />
          <p>
            Knight Studio is a photography and videography service provider
            based out of Chennai. Weddings are the most remarkable events for
            every couple, which need to be captured by an artistic and
            innovative photographer who can give you a treasure trove of
            beautiful memories. If you are looking for a trustworthy wedding
            photography company that can offer you a wide range of
            photography-related services. Then your search ends with them.
            Knight Studio strives hard to capture all the raw emotions and
            experiences you can cherish forever. Services Offered Regardless of
            your wedding destination,Knight Studio's team is ready to travel to
            any place and render their picture-taking and videography services
            at your wedding stop. They will be present with you consistently and
            give you the best wedding album, a lifetime remembrance. The
            professionals will leave no stone unturned in providing the best
            experience with their skills and professionalism. Knight Studio
            provides its services for various occasions, ranging from your
            pre-wedding and wedding to post-wedding functions. The tailor-made
            services whichKnight Studio can offer you include the following:
            Candid Photography Traditional Photography Pre-wedding shoots
            Cinematography Traditional Videography Albums
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
              From 1 Day Wedding Package ₹50,000
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
            src="https://i.pinimg.com/736x/50/d6/1d/50d61d2eb53ebf8258fe1755a4df189a.jpg"
            alt="Wedding-Resorts"
          />
        </Link>
        <div className="px-5 pb-5 ">
          <Link to="#">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              ViRa Photography
            </h5>
          </Link>
          <br />
          <p>
            ViRa Photography is a wedding photography and videography
            company based in the city of Chennai. Weddings are one of the most
            special occasions for the bride and groom and if you are looking for
            a company that plans each wedding function with full perfection then
            you should opt for them. If you are looking for a skilled team of
            professional wedding photographers in the city, then your search can
            stop here. They have been professional in the business since 2011.
            You can trust them for all your important wedding functions and get
            the most fanatic wedding night of your lives. Services Offered They
            can offer you a range of services which are provided with great
            benefits and perfections so that you can have a wonderful time. With
            the reliable services of photographers, you can even receive the
            final set of your wedding photographs within a month. They are also
            ready to travel with you around the cities to give you a mindblowing
            wedding experience.
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
              From 1 Day Wedding Package ₹1,35,000
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

export default WeddingPhotography;
