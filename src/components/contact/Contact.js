import React from "react";
import emailjs from "emailjs-com";
import { useRef } from "react";

import "./contact.css";

function contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uzncg9k",
        "template_5dfsmho",
        form.current,
        "XLIiDapd85Wq9wq23"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <h2>
        contact<span>.</span>
      </h2>
      <div className="contactForm">
        <div className="info">
          <form ref={form} onSubmit={sendEmail} id="myForm">
            <div className="infoSend">
              <label>Nom :</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="infoSend">
              <label>Email :</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="message">
              <label className="textarea">Message :</label>
              <textarea name="message" id="message" />
            </div>
            <input type="submit" value="Envoyer" className="button" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default contact;
