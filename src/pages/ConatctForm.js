import React from "react";
import "./index.css";
import contact from "../Images/contact.jpg";

export default function ConatctForm() {
  return (
    <div className="form">
      <div className="container-fluid ">
        <div className="row">
          <h3 className="contact-title"></h3>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="pos-top">
            {" "}
            <div className="row">
              <div className="col-md-4">
                <input
                  className="input"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  className="input"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="col-md-4">
                <input
                  className="input"
                  type="number"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <textarea
                  className="txt"
                  rows={4}
                  placeholder="Message"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <button className="contact-btn">Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
