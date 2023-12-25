import React, { useState } from "react";
import axios from "axios";
import "./Payment.css";

const Payment = () => {
  const [form, setForm] = useState({});
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onsubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/payment/pay", form)
      .then((res) => {
        console.log(res.data);
        const { result } = res.data;
        window.location.href = result.link;
      })
      .catch((err) => console.log(err));
  };
  console.log(form);

  //   const handleInputChange = (e) => {
  //     const { name, value } = e.target;
  //     setFormData({
  //       ...formData,
  //       [name]: value,
  //     });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Process the form data or perform validation
  //     console.log(form);
  //   };

  return (
    <div>
      <div className="p-4">
        <h2>Amount</h2>
        <form className="m-4" onSubmit={onsubmit}>
          <input
            type="text"
            name="amount"
            className="form-control"
            onChange={handleChange}
          />
          <button className="btn btn-primary mt-4">Submit and continue</button>
        </form>
      </div>
    </div>
  );
};

export default Payment;
