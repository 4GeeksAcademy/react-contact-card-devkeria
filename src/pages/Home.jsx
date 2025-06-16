

import React, { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { loadContacts } from "../store";
import { Link } from "react-router-dom";

const Home = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    loadContacts(dispatch);
  }, []);

  return (
    <div className="container">
      <h1>Contact List</h1>
      <Link to="/add">Add New Contact</Link>
      {store.contacts && store.contacts.length > 0 ? (
        <ul>
          {store.contacts.map(contact => (
            <li key={contact.id}>{contact.full_name}</li>
          ))}
        </ul>
      ) : (
        <p>No contacts yet.</p>
      )}
    </div>
  );
};

export default Home;




