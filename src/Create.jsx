import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    axios.post("https://67567a9d11ce847c992ce542.mockapi.io/CRUD", {
      name: name,
      email: email,
    });
    history("/read");
  };
  return (
    <div className="p-20">
      <h1 className="p-8 font-serif font-bold text-4xl">Create</h1>
      <form onSubmit={handlesubmit}>
        <label className="px-4">Name:</label>
        <input
          type="text"
          className="mx-14 border-2"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <br />
        <br />
        <label className="px-4">Email Address:</label>
        <input
          type="email "
          className="border-2 "
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <br />
        <br />

        <button
          type="submit"
          className="bg-blue-700 text-white rounded-md px-2 py-1 hover:bg-blue-500 mx-5"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
