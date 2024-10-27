import { Button, Modal } from "flowbite-react";
import { useContext, useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { FormControl } from "@mui/material";
import { Form, message, Input } from "antd";
import axios from "axios";
import LoadingButton from "@mui/lab/LoadingButton";
import { SaveFilled } from "@ant-design/icons";
import { HiCurrencyRupee } from "react-icons/hi";

const Restaurant = () => {
  const [openModal, setOpenModal] = useState(false);
  const { singleMall, setSingleMall } = useContext(AppContext);
  const [btnLoading, setBtnLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const NameInputRef = useRef(null);
  useEffect(() => {
    fetchSingleMall();
  }, []);

  const fetchSingleMall = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/malls/get/${id}`
      );
      setSingleMall(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClose=()=>{
    setOpenModal(false);
  }
  const onFinish = async (values) => {
    setBtnLoading(true);
    try {
      const response = await axios.post(
        `http://localhost:5000/api/malls/book/${id}`,
        values,
        {
          headers: {
            Authorization: localStorage.getItem("Token"),
          },
        }
      );
      message.success(response.data.message);
      setBtnLoading(false);
    } catch (e) {
      message.error(e.response.data.message);
      setBtnLoading(false);
    }
  };
  const handleBook = (djs) => {
    setModal(true);

    console.log(id);
  };
  const onFinishFailed = () => {};
  return (
    <div>
      {singleMall && (
        <div class="my-2 flex flex-col lg:flex-row w-full h-max max-w-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link to="#">
            <img
              class="p-8 rounded-t-lg h-96 max-w-96"
              src={singleMall.mallImages[0]}
               width="100%"
                  height="300px"
              alt="Restaurant image"
            />
          </Link>
          <div class="px-5 pb-5 ">
            <Link to="#">
              <h5 class="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-7">
              MallName:{singleMall.mallName}
              </h5>
            </Link>
            <br/>
            <p>Description:{singleMall.mallDescription}</p>
            <br/>
            <p>Address:{singleMall.mallAddress}</p>
            <br/>
            <p>Contact : {singleMall.mallContact}</p>
            <br />
            Price :<HiCurrencyRupee/> {singleMall.Price}
            <br/>
            <div class="flex items-center mt-24">
              <div class="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  class="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                5.0
              </span>
            </div>
            <br />
            <div class="flex items-center justify-between">
              <span class="text-xl text-gray-900  font-bold dark:text-white">
                {`from ${singleMall.Price}`}
              </span>

              <Button onClick={() => setOpenModal(true)}>
                Request Pricing
              </Button>
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

                    <Form
                      style={{ marginTop: 40, minWidth: 300 }}
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      onFinishFailed={onFinishFailed}
                      autoComplete="off"
                    >
                      <Form.Item
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter Event name",
                            type: "text",
                          },
                        ]}
                      >
                        <Input placeholder="Enter your name" type="text" />
                      </Form.Item>

                      <Form.Item
                        name="eventDate"
                        rules={[
                          {
                            required: true,
                            message: "Please enter Event date",
                            type: "date",
                          },
                        ]}
                      >
                        <Input
                          placeholder="date"
                          type="date"
                          suffix={<SaveFilled />}
                        />
                      </Form.Item>
                      <FormControl className="d-flex">
                        <Form.Item>
                          <LoadingButton
                            fullWidth
                            loading={btnLoading}
                            loadingPosition="start"
                            size="large"
                            startIcon={<SaveFilled />}
                            variant="contained"
                            color="success"
                            type="Submit"
                            placeholder="Book"
                            name="eventName"
                          >
                            <span>Book</span>
                          </LoadingButton>
                        </Form.Item>
                        <Form.Item>
                          <LoadingButton
                            fullWidth
                            size="large"
                            type="button"
                            value="Close"
                            variant="outlined"
                            color="error"
                            onClick={handleClose}
                          >
                            CLose
                          </LoadingButton>
                        </Form.Item>
                      </FormControl>
                    </Form>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Restaurant;
