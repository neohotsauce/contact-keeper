import React, { useContext } from "react";
import PropTypes from "prop-types";
import ContactContext from "../../context/contact/contactContext";

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { id, name, email, phone, type } = contact;
  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };
  return (
    <div className="card bf-light p-3 my-2">
      <h4 className="text-primary text-left">
        {name}{" "}
        <span
          className={
            "badge float-right " +
            (type === "professional" ? " badge-success" : " badge-primary")
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h4>
      <ul>
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn-dark btn-sm mr-2"
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className="btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
