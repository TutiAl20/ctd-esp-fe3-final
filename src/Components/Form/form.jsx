import React, { useState } from "react";
import Message from "./Message";
import Confirmation from "./Confirmation";
import "../../Styles/Form.css";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState([]);
  const [confirm, setConfirm] = useState(false);
  const handleName = (e) => {
    setContact({ ...contact, name: e.target.value });
  };
  const handleEmail = (e) => {
    setContact({ ...contact, email: e.target.value });
  };
  const handleMessage = (e) => {
    setContact({ ...contact, message: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = [];

    if (contact.name.trim().length < 2) {
      validationErrors.push("Name must be at least 2 characters long.");
    }
    if (!emailRegex.test(contact.email.trim())) {
      validationErrors.push("Email is not valid.");
    }
    if (contact.message.trim().length < 10) {
      validationErrors.push("Message must be at least 10 characters long.");
    }

    if (validationErrors.length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors([]);
      setConfirm(true);
      console.log("Sending to server: ",contact);
      setTimeout(() => {
        setContact({ name: "", email: "", message: "" });
        setConfirm(false);
      }, 3000);
    }
  };
  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        {confirm && <Confirmation email={contact.name} />}
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" value={contact.name} onChange={handleName} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" value={contact.email} onChange={handleEmail} />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={contact.message}
            onChange={handleMessage}
            rows="4"
          ></textarea>
        </div>
        <button>Send</button>
        {errors.length > 0 && <Message errors={errors} />}
      </form>
    </>
  );
};

export default Form;