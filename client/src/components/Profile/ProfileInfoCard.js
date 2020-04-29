import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profile";
//import { Link } from "react-router-dom";
import "./styles.css";

const ProfileInfoCard = ({
  getCurrentProfile,
  auth: { user },
  profile: { profile },
  match,
}) => {
  useEffect(() => {
    getCurrentProfile();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="profile-info-container">
      <div className="profile-info-card">
        <div className="profile-info-heading">
          <h2>About</h2>
        </div>
        <div className="profile-info-content">
          <div className="info-grid-cards">
            <h3 className="profile-info-basic">Basic Information</h3>
            <div className="profile-info">
              <ul className="profile-info-list">
                <li className="profile-info-li">
                  <span className="profile-info-question_span">First Name</span>
                  <span className="profile-info-answer_span">
                    {profile && profile.firstname}
                  </span>
                </li>
                <li className="profile-info-li">
                  <span className="profile-info-question_span">Last Name</span>
                  <span className="profile-info-answer_span">
                    {profile && profile.lastname}
                  </span>
                </li>
                <li className="profile-info-li">
                  <span className="profile-info-question_span">Birthday</span>
                  <span className="profile-info-answer_span">
                    {profile && profile.birthdate}
                  </span>
                </li>
              </ul>
            </div>
            <h3 className="profile-info-contact">Contact Information</h3>
            <div className="profile-info">
              <ul className="profile-info-list">
                <li className="profile-info-li">
                  <span className="profile-info-question_span">Email</span>
                  <span className="profile-info-answer_span">
                    {user && user.email}
                  </span>
                </li>
                <li className="profile-info-li">
                  <span className="profile-info-question_span">Phone</span>
                  <span className="profile-info-answer_span">
                    {profile && profile.phonenumber}
                  </span>
                </li>
                <li className="profile-info-li">
                  <span className="profile-info-question_span">City</span>
                  <span className="profile-info-answer_span">
                    {profile && profile.city}
                  </span>
                </li>
                <li className="profile-info-li">
                  <span className="profile-info-question_span">State</span>
                  <span className="profile-info-answer_span">
                    {profile && profile.state}
                  </span>
                </li>
                <li className="profile-info-li">
                  <span className="profile-info-question_span">Zip Code</span>
                  <span className="profile-info-answer_span">
                    {profile && profile.zip}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileInfoCard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(ProfileInfoCard);
