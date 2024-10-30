import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Input, Segmented, Popconfirm } from "antd";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { AppContext } from "../Context/AppContext";
import { FormControl, IconButton } from "@mui/material";
import {
  DeleteOutlined,
  EditOutlined,
  SaveFilled,
  UploadOutlined,
} from "@ant-design/icons";
const { Search } = Input;

const WeddingVenues = () => {
  const [malls, setMalls] = useState([]);
  const [filtermalls, setFilterMalls] = useState([]); // The Filtered mall details
  const [formModel, setFormModel] = useState(false); // Mall add model control
  const [editValues, setEditValues] = useState(null); // It contains the details of the mall which going to edit
  const { fetchUserData, setRender } = useContext(AppContext);
  const navigate = useNavigate();
  useEffect(() => {
    fecthmall();
  }, []);
  const navigateMall = (id) => {
    console.log(id);

    navigate(`/restaurant/${id}`);
  };
const handleEdit=(id)=>{
  console.log(id);

  navigate(`/malledit/${id}`);
}
  const fecthmall = async () => {
    const response = await axios.get("http://localhost:5000/api/malls/get");
    setMalls(response.data);
    console.log(response);
  };
  const onSearch = (value) => {
    const filtermall = malls.filter((mall) => {
      return mall.mallName
        .toLowerCase()
        .includes(value.target.value.toLowerCase());
    });
    setFilterMalls(filtermall);
  };
  const handleFilters = (values) => {
    switch (values) {
      case "All":
        setFilterMalls(malls);

        break;

      case "A-Z":
        setFilterMalls(
          malls.sort((a, b) => a.mallName.localeCompare(b.mallName))
        );
        setRender(values);
        break;
      case "Z-A":
        setFilterMalls(
          malls.sort((a, b) => b.mallName.localeCompare(a.mallName))
        );
        setRender(values);
        break;
      case "price-low-high":
        setFilterMalls(malls.sort((a, b) => a.Price - b.Price));
        setRender(values);
        break;

      case "price-hight-low":
        setFilterMalls(malls.sort((a, b) => b.Price - a.Price));
        setRender(values);
        break;
      default:
        setFilterMalls(malls);
    }
  };
  const handleAddMall = () => {
    setFormModel(true);
    setEditValues(null); //we using same form for add and edit to clear previous edit value
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="flex flex-wrap border-2 dark:bg-black">
        <div className="flex-col ml-2 flex-grow">
          <h1 className="font-bold text-4xl m-2">WEDDING-VENUES</h1>
        </div>
      </div>
      <br />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-secondary p-5 dark:bg-black text-white">
        <Search
          className="mt-5"
          style={{ width: "100%" }}
          placeholder="Search Malls..."
          allowClear
          enterButton="Search"
          size="large"
          onChange={onSearch}
        />
        <br />
        <div
          className={
            localStorage.getItem("role") == "User"
              ? "d-flex justify-content-end mt-5"
              : "d-flex justify-content-between mt-5 flex-md-row flex-column-reverse gap-5 "
          }
        >
          <Button
            variant="contained"
            className={
              localStorage.getItem("role") == "Admin" ? "d-block" : "d-none"
            }
            onClick={handleAddMall}
          >
            Add <AddIcon />
          </Button>
          <br />
          <br />
          <Segmented
            options={["All", "A-Z", "Z-A", "price-low-high", "price-hight-low"]}
            onChange={handleFilters}
          />
        </div>

        {filtermalls.length > 0 ? (
          filtermalls.map((mall) => (
            <>
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
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {mall.mallDescription}
                  </p>
                  <div className="card-border-top"></div>
                  <div
                    className={
                      localStorage.getItem("role") == "Admin"
                        ? "d-flex justify-content-end"
                        : "d-none"
                    }
                  >
                    <IconButton
                      color="success"
                      size="small"
                      onClick={handleEdit}
                    >
                      <EditOutlined />Edit
                    </IconButton>
                    &nbsp
                    <Popconfirm
                      title="Delete the task"
                      description="Are you sure to delete this Mall?"
                      okText="Yes"
                      cancelText="No"
                      onConfirm={() => handleDelete(mall)}
                      onCancel={onFinishFailed}
                    >
                      <IconButton color="error" size="small">
                        <DeleteOutlined />
                        Delete
                      </IconButton>
                    </Popconfirm>
                  </div>
                  <button
                    onClick={() => navigateMall(mall._id)}
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
            </>
          ))
        ) : (
          <h1>no malls</h1>
        )}
      </div>

      <br />
    </div>
  );
};

export default WeddingVenues;
