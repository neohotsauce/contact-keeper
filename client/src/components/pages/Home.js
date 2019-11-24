import React from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";

const Home = () => {
  return (
    <div className="row">
      <div className="col-6">
        <ContactForm />
      </div>
      <div className="col-6">
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
