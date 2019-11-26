import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, current, clearCurrent, updateContact } = contactContext;

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
  }, [contactContext, current]);

  const { name, email, phone, type } = contact;

  const onChange = e => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
      clearCurrent();
    }
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className="text-primary text-center">
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={onChange}
        required
      />
      <input
        className="form-control mb-2"
        type="email"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Phone"
        name="phone"
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <div className="form-check d-inline-block mr-5">
        <input
          id="personal"
          className="form-check-input"
          type="radio"
          name="type"
          value="personal"
          checked={type === "personal"}
          onChange={onChange}
        />
        <label htmlFor="personal" className="form-check-label">
          Personal
        </label>
      </div>
      <div className="form-check d-inline-block">
        <input
          className="form-check-input"
          id="professional"
          type="radio"
          name="type"
          value="professional"
          checked={type === "professional"}
          onChange={onChange}
        />
        <label htmlFor="professional" className="form-check-label">
          Professional
        </label>
      </div>
      <div className="">
        <input
          type="submit"
          value={current ? "Update Contact" : "Add Contact"}
          className="btn btn-primary btn-block mt-4"
        />
      </div>
      {current && (
        <div>
          <button className="btn btn-light btn-block mt-2" onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
