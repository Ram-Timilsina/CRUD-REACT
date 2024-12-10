import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: "", email: "" });

  useEffect(() => {
    axios
      .get(`https://67567a9d11ce847c992ce542.mockapi.io/CRUD/${id}`)
      .then(({ data }) => setFormData(data))
      .catch((err) => console.error("Error fetching item:", err));
  }, [id]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://67567a9d11ce847c992ce542.mockapi.io/CRUD/${id}`, formData)
      .then(() => navigate("/read"))
      .catch((err) => console.error("Error updating item:", err));
    navigate("/read");
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Update Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          className="border w-full p-2 rounded"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border w-full p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-1 px-4 rounded"
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateForm;
