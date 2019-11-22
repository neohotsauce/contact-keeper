import React from "react";
import Contacts from "../contacts/Contacts";

const Home = () => {
  return (
    <div className="row">
      <div className="col-6"></div>
      <div className="col-6">
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
