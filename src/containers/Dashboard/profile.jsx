import React from "react";
import Layout from "./layout";

const Profile = () => {
  return (
    <Layout>
      <div>
        <div>
          <div className="deposit_container_header">
            <h4>Your Profile</h4>
          </div>
          <div className="profile_form">
            <div className="row mt-2">
              <div className="form_inputs">
                <label className="labels">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  value=""
                />
              </div>
              <div className="form_inputs">
                <label className="labels">Account Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Account Name"
                  value=""
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="form_inputs">
                <label className="labels">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value=""
                  placeholder="Email"
                />
              </div>
              <div className="form_inputs">
                <label className="labels">Mobile Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  value=""
                />
              </div>
            </div>
            {/* row */}
            <div className="row mt-2">
              <div className="form_inputs">
                <label className="labels">Address Line 1</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Address Line"
                  value=""
                />
              </div>
              <div className="form_inputs">
                <label className="labels">Postcode</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postcode"
                  value=""
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="form_inputs">
                <label className="labels">Email ID</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email id"
                  value=""
                />
              </div>
              <div className="form_inputs">
                <label className="labels">Education</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Education"
                  value=""
                />
              </div>
            </div>
          </div>
        </div>
        <div className="profile_button">
            <button>
                Save
            </button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
