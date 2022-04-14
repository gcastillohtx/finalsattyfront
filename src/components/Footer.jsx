import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaInstagram,
  FaPhone,
  FaSpotify,
  FaMailBulk,
  FaTwitter,
  FaSearchLocation,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation size={20} style={{ color: "#ffffff", marginRight: "2rem" }}/>
            <div>
              <p>6922 Harrisburg Blvd.</p>
              <h4>Houston, TX 77011</h4>
            </div>
          </div>
          <div className='phone'>
              <h4><FaPhone size={20} style={{ color: "#ffffff", marginRight: "2rem" }} /> 832-364-2568</h4>
          </div>
          <div className='email'>
              <h4><FaMailBulk size={20} style={{ color: "#ffffff", marginRight: "2rem" }} /> satellitehtx@gmail.com</h4>
          </div>
        </div>
          <div className='right'>
              <h4>About Us</h4>
              <p>Founded in 2015 in the heart of Houston's Greater East End, we are commited to hosting the best up and coming touring artists, as well as showcasing local musicians. We have two stages and two full bars; Indoor and Outdoor, and feature local rotating food vendors on our sprawling patio. Open Thurs-Sun from 7pm-2am!</p>
              <div className='social'>
                  <FaFacebook size={30} style={{ color: "#ffffff", marginRight: "3rem" }} />
                  <FaInstagram size={30} style={{ color: "#ffffff", marginRight: "3rem" }} />
                  <FaSpotify size={30} style={{ color: "#ffffff", marginRight: "3rem" }} />
                  <FaTwitter size={30} style={{ color: "#ffffff", marginRight: "1rem" }} />
              </div>
          </div>
        </div>
      </div>
    
  );
}

export default Footer;
