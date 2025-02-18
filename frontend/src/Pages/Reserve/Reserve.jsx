import React from "react";
import "./Reserve.css";
import Header from "../../Components/Header/Header";

const Reserve = () => {
  return (
    <>
    <Header/>
    <div className="form-container">
      <div className="form-wrapper">
        <h2 className="form-title">Event Request</h2>
        <p className="form-subtext">
          To enter an Event Request, please fill out the following form.
        </p>

        <h3 className="section-title">Your Contact Information</h3>
        <form>
          <div className="input-group">
            <label>First Name</label>
            <input type="text" required />
          </div>

          <div className="input-group">
            <label>Last Name</label>
            <input type="text" required />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" required />
          </div>

          <div className="input-group-row">
            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" required />
            </div>
            <div className="input-group small">
              <label>Ext.</label>
              <input type="text" />
            </div>
          </div>

          <div className="input-group">
            <label>Company</label>
            <input type="text" />
          </div>

          <h3 className="section-title">Select Your Desired Event Style</h3>

          <div className="input-group">
            <label>Event Style</label>
            <select>
              <option>On-Premise Event</option>
              <option>Off-Premise Event</option>
              <option>Private Dining</option>
            </select>
          </div>

          {/* Event Details Section */}
          <h3 className="section-title">Your Event Details</h3>

          <div className="input-group">
            <label>Nature of this Event (e.g., Birthday Party or Business Dinner)</label>
            <textarea rows="3"></textarea>
          </div>

          <div className="input-group">
            <label>Event Date</label>
            <input type="date" />
          </div>

          <div className="input-group">
            <label>Start Time</label>
            <input type="time" />
          </div>

          <div className="input-group">
            <label>End Time</label>
            <input type="time" />
          </div>

          <div className="input-group">
            <label>Number of People</label>
            <input type="number" />
          </div>

          <div className="input-group">
            <label>Is there any additional information you would like to add?</label>
            <textarea rows="3"></textarea>
          </div>

          <div className="input-group">
            <label>How did you hear about us?</label>
            <select>
              <option>Select an option</option>
              <option>Social Media</option>
              <option>Friend/Referral</option>
              <option>Website</option>
              <option>Other</option>
            </select>
          </div>

          <button type="submit" className="submit-button">Submit Request</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Reserve;

