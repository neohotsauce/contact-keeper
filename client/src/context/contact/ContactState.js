import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import ContactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_ALERT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Ali Haneen",
        email: "alihanyn@hotmail.com",
        phone: "7898986",
        type: "personal"
      },
      {
        id: 2,
        name: "Mohamed Aslam",
        email: "maonde@hotmail.com",
        phone: "7903045",
        type: "professional"
      },
      {
        id: 3,
        name: "Asima Ali",
        email: "asima@hotmail.com",
        phone: "7745654",
        type: "personal"
      }
    ]
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // add contact

  // delete contact

  // set current contact

  // clear current contact

  // update contact

  // filter contacts

  // clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
