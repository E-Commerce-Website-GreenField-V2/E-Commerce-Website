import Account from "../Account";
import { useState, useEffect } from "react";
import "./MyAccount.css";
import { Link } from "react-router-dom";
import { useUserId } from "../../../Context/userContext.js";
import LogoutUtility from "../../authentification/Logout.js";

const MyAccount = () => {
  const { userId } = useUserId();
  const handleLogout = LogoutUtility();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/users/${userId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
          // console.log(userData);
        } else {
          throw new Error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    if (userId) {
      fetchUserData();
    }
  }, [userId]);

  return (
    <Account>
      <div className="order__history__container">
        <div className="order__history">
          <div className="order__history__header">Order History</div>
          <div className="order__history__detail">
            You have not placed any orders yet
          </div>
        </div>
      </div>
      <div className="account__details__container">
        <div className="account__details__header">
          <div className="details__header">Account Details</div>
          <button
            className="logout__action"
            onClick={() => {
              handleLogout();
              console.log("Logout clicked");
            }}
          >
            Logout
          </button>
        </div>
        <div className="account__details">
          <div className="account__holder__name">
            User Name: {user?.fullName || "Loading..."}
          </div>
          <div className="account__holder__email">
            User Email: {user?.email || "Loading..."}
          </div>
          <div className="account__holder__Role">
            User Role: {user?.role || "Loading..."}
          </div>
          <div className="manage__account__action">
            <Link to="/account/manage">Manage account</Link>
          </div>
          <div className="manage__account__action">
            <Link to="/admin">Admin Dashbord</Link>
          </div>
        </div>
      </div>
    </Account>
  );
};

export default MyAccount;
