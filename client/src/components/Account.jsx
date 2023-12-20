import React, { useState } from "react";
import { useNavigate, useContext } from "react-router-dom";
import axios from "axios";
import "../style/account.css";

const Account = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  // const updateUser = async () => {
  //   try {
  //     const { userId } = useContext();
  //     const updateUserEndpoint = `http://localhost:8000/users/${userId}`;

  //     const updatedUserData = {
  //       fullName: `${firstName} ${lastName}`,
  //       email: email,
  //     };
  //     if (newPassword) {
  //       updatedUserData.password = newPassword;
  //     }

  //     const response = await axios.put(updateUserEndpoint, updatedUserData);
  //     console.log("User updated:", response.data);
  //   } catch (error) {
  //     console.error("Error updating user:", error);
  //   }
  // };
  const handleNewPasswordChange = (e) => {
    const { value } = e.target;
    setNewPassword(value);
    console.log("New Password Changed:", value);
  };

  const onAboutTextClick = () => {
    navigate("/about");
  };
  const GoHome = () => {
    navigate("/home");
  };
  const goContact = () => {
    navigate("/contact");
  };
  const goSignUp = () => {
    navigate("/signup");
  };

  const handleFirstNameChange = (e) => {
    const { value } = e.target;
    setFirstName(value);
    console.log("First Name Changed:", value);
  };

  const handleLastNameChange = (e) => {
    const { value } = e.target;
    setLastName(value);
    console.log("Last Name Changed:", value);
  };
  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    console.log("Email Changed:", value);
  };
  const handleAdressChange = (e) => {
    const { value } = e.target;
    setAdress(value);
    console.log("Adress Changed:", value);
  };

  return (
    <div className="account">
      <div className="top-header">
        <div className="frame-parent">
          <div className="summer-sale-for-all-swim-suits-parent">
            <div className="summer-sale-for">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </div>
            <div className="shopnow">ShopNow</div>
          </div>
          <div className="english-parent">
            <div className="english">English</div>
            <img className="dropdown-icon" alt="" src="/dropdown@2x.png" />
          </div>
        </div>
      </div>
      <div className="header">
        <div className="logo-parent">
          <div className="logo">
            <b className="exclusive">Exclusive</b>
          </div>
          <div className="header-parent">
            <div className="header1">
              <div className="home" onClick={GoHome}>
                Home
              </div>
            </div>
            <div className="header2">
              <div className="home" onClick={goContact}>
                Contact
              </div>
            </div>
            <div className="header1">
              <div className="about" onClick={onAboutTextClick}>
                About
              </div>
            </div>
            <div className="header4">
              <div className="home" onClick={goSignUp}>
                Sign Up
              </div>
            </div>
          </div>
        </div>
        <div className="search-component-set-parent">
          <div className="search-component-set">
            <div className="what-are-you-looking-for-parent">
              <div className="what-are-you">What are you looking for?</div>
              <img className="dropdown-icon" alt="" src="/component-2@2x.png" />
            </div>
          </div>
          <div className="wishlist-parent">
            <img className="wishlist-icon" alt="" src="/wishlist@2x.png" />
            <img
              className="cart1-with-buy"
              alt=""
              src="/cart1-with-buy@2x.png"
            />
            <img className="user-icon" alt="" src="/user@2x.png" />
          </div>
        </div>
      </div>
      <img className="account-child" alt="" src="/line-3@2x.png" />
      <div className="roadmap">
        <div className="account1" onClick={GoHome}>
          Home
        </div>
        <img className="roadmap-child" alt="" src="/line-13@2x.png" />
        <div className="english">My Account</div>
        <img className="roadmap-item" alt="" src="/line-14@2x.png" />
        <div className="nothing1">Nothing</div>
        <img className="roadmap-item" alt="" src="/line-15@2x.png" />
        <div className="nothing1">Nothing</div>
        <img className="roadmap-item" alt="" src="/line-16@2x.png" />
        <div className="nothing1">Nothing</div>
      </div>
      <div className="welcome-md-rimel-container">
        <span>{`Welcome! `}</span>
        <span className="md-rimel">Md Rimel</span>
      </div>
      <div className="manage-my-account">Manage My Account</div>
      <div className="my-orders">My Orders</div>
      <div className="my-wishlist">My WishList</div>
      <div className="my-profile-parent">
        <div className="my-profile">My Profile</div>
        <div className="address-book">Address Book</div>
        <div className="address-book">My Payment Options</div>
      </div>
      <div className="my-returns-parent">
        <div className="address-book">My Returns</div>
        <div className="address-book">My Cancellations</div>
      </div>
      <div className="edit-your-profile-parent">
        <div className="edit-your-profile">Edit Your Profile</div>
        <div className="frame-group">
          <div className="first-name-parent">
            <div className="first-name">First Name</div>
            <div className="placebox-info">
              <input
                className="place-to-info-box"
                type="text"
                placeholder="New First Name ..."
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </div>
          </div>
          <div className="first-name-parent">
            <div className="first-name">Last Name</div>
            <div className="placebox-info">
              <input
                className="place-to-info-box"
                type="text"
                placeholder="New Last name ..."
                value={lastName}
                onChange={handleLastNameChange}
              />
            </div>
          </div>
        </div>
        <div className="frame-container">
          <div className="first-name-parent">
            <div className="first-name">Email</div>
            <div className="placebox-info">
              <input
                className="place-to-info-box"
                type="text"
                placeholder="New Email here ..."
                value={email}
                onChange={handleEmailChange}
              />
            </div>
          </div>
          <div className="first-name-parent">
            <div className="first-name">Address</div>
            <div className="placebox-info">
              <input
                className="place-to-info-box"
                type="text"
                placeholder="New Adress here ..."
                value={adress}
                onChange={handleAdressChange}
              />
            </div>
          </div>
        </div>
        <div className="frame-div">
          <div className="first-name-parent">
            <div className="first-name">Password Changes</div>
            <div className="placebox-info4">
              <div className="place-to-info-box" />
              <div className="md">Current Passwod</div>
            </div>
          </div>
          <div className="placebox-info4">
            <div className="place-to-info-box" />
            <div className="md">New Passwod</div>
          </div>
          <div className="placebox-info4">
            <div className="place-to-info-box" />
            <div className="md">Confirm New Passwod</div>
          </div>
        </div>
        <div className="cancel-parent">
          <div className="first-name">Cancel</div>
          <div className="button"></div>
          <button className="view-all-products" onClick={updateUser}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
