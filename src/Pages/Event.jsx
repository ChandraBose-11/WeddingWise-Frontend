import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";

const Event = () => {
  const [event, setEvent] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch("http://localhost:5000/api/post/getposts");
    const data = await response.json();
    setEvent(data);
    console.log(data);
  };
  return (
    <div>
      {event.map((ele, index) => {
        return (
          <div key={index}>
            <div className="flex flex-wrap border-2 dark:bg-black bg-red-100">
              <div className="flex-col ml-2 flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-secondary bg-red-100 p-5 dark:bg-black text-white">
                  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"></div>
                  <Card className="max-w-sm" imgAlt="image" imgSrc={ele.image}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {ele.title}
                    </h5>
                    <h4 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {ele.category}
                    </h4>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                      {ele.content}
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Event;
