import React, { useState } from "react";
import axios from "axios";
import { useUserId } from "../../../Context/userContext.js";
import Account from "../Account";
import "./ManageAccount.css";

const ManageAccount = () => {
  const { userId } = useUserId();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSaveChanges = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/users/${userId}`,
        {
          name,
          email,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  const handleSavePassword = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8000/users/${userId}/update-password`,
        {
          oldPassword,
          newPassword,
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error updating password:", error);
    }
  };

  const handleDeleteAccount = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/users/delete/${userId}`
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <Account>
      <div className="manage__account__container">
        <div className="edit__account__container">
          <div className="edit__account">
            <div className="edit__account__form__container">
              <div className="edit__account__form">
                <h4 className="edit__account__header">Edit account</h4>

                <div className="fname__input__container edit__input__container">
                  <label className="fname__label input__label">name</label>
                  <input
                    type="text"
                    className="fname__input edit__account__input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="lname__input__container edit__input__container">
                  <label className="lname__label input__label">email</label>
                  <input
                    type="text"
                    className="lname__input edit__account__input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="save__changes__button__container">
                  <button
                    className="save__changes__button"
                    onClick={handleSaveChanges}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
            <div className="edit__account__form">
              <h4 className="edit__account__header">Edit password</h4>

              <div className="fname__input__container edit__input__container">
                <label className="fname__label input__label">
                  old password
                </label>
                <input
                  type="text"
                  className="fname__input edit__account__input"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className="lname__input__container edit__input__container">
                <label className="lname__label input__label">
                  new password
                </label>
                <input
                  type="text"
                  className="lname__input edit__account__input"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="save__changes__button__container">
                <button
                  className="save__changes__button"
                  onClick={handleSavePassword}
                >
                  Save Password
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="edit__account__container">
          <div className="edit__account">
            <div className="edit__account__form__container"></div>
          </div>
        </div>
        <div className="separator__line"></div>
        <div className="delete_account__container">
          <div className="delete__account">
            <div className="delete__account__header">Delete account</div>
            <div className="delete__account__prompt">
              Do you want to cancel subscription?
            </div>
            <div className="delete__account__button__container">
              <button
                className="delete__account__button"
                onClick={handleDeleteAccount}
              >
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </Account>
  );
};

export default ManageAccount;
