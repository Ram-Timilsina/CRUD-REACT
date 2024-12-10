import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { deleteItem } from "./Delete";

const Read = () => {
  const [data, setData] = useState([]);

  // Function to fetch data
  const getdata = () => {
    axios
      .get("https://67567a9d11ce847c992ce542.mockapi.io/CRUD")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="p-8">
      <Link to={"/"}>
        <div className="flex justify-end">
          <button
            className="px-2 bg-blue-500 py-1 text-white rounded hover:bg-blue-700
        "
          >
            Back to create
          </button>
        </div>
      </Link>
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Read Operation
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="py-3 px-6 text-left">#</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Email Address</th>
              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-100">
                <td className="py-3 px-6">{item.id}</td>
                <td className="py-3 px-6">{item.name}</td>
                <td className="py-3 px-6">{item.email}</td>
                <td className="py-3 px-6">
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                    onClick={() => deleteItem(item.id, getdata)}
                  >
                    Delete
                  </button>
                  <button className="bg-blue-500 text-white px-2 py-1 rounded">
                    <Link to={`/update/${item.id}`}>Edit</Link>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Read;
