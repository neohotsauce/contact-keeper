import React from "react";
import PropTypes from "prop-types";

const ContactItem = ({ contact }) => {
  const { id, name, email, phone, type } = contact;
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
        <button className="btn-dark btn-sm mr-2">Edit</button>
        <button className="btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired
};

export default ContactItem;
