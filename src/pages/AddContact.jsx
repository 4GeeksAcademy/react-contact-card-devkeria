

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { addContact } from "../store";

const AddContact = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addContact(formData, dispatch);
    navigate("/");
  };

  return (
    <div className="container">
      <h1>Add Contact</h1>
      <form onSubmit={handleSubmit}>
        <input name="full_name" value={formData.full_name} onChange={handleChange} placeholder="Full Name" /><br/>
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" /><br/>
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" /><br/>
        <input name="address" value={formData.address} onChange={handleChange} placeholder="Address" /><br/>
        <button type="submit">Save Contact</button>
      </form>
    </div>
  );
};

export default AddContact;


