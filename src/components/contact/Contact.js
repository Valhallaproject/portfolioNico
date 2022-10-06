import React, { useState } from "react";
import "./contact.css";

function contact() {

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => { 
    e.preventDefault();
    console.log("OK ça marche");
    window.location = 'mailto:nicolas.bictel@yahoo.com.com'
  }

  return (
    <div>
      <h2>
        contact<span>.</span>
        <div className="contactForm">
          <div className="info">
            <form onSubmit={submitHandler}>
              <label>
                Nom :
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </label>
              <label>
                Email :
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </label>
            </form>
          </div>
          <div className="message">
            <label className="textarea">
              Message :
              <textarea
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </label>
          </div>
          <input  type="submit" value="Envoyer" className="button" />
        </div>
        <div className="contactText"></div>
      </h2>
    </div>
  );
}

export default contact;
