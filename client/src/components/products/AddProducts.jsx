import React, { useState } from "react";
import axios from "axios";

function AddProducts() {
  const [image, setImage] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      price,
      image,
      description,
      available: 1,
      rate: 0,
      quantity: 10,
      sellerProduct: 1,
    };
    const submitProduct = () => {
      axios
        .post("http://localhost:8000/products/", data)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 card">
        <div className="d-flex flex-row justify-content-center align-self-center">
          <div
            className="toast fade show"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <form
              className="fixdirection mb-3 card-body"
              onSubmit={handleSubmit}
            >
              <label className="form-label">
                <p>name</p>
                <input
                  className="form-control"
                  id="formGroupExampleInputTitle"
                  placeholder="Add a title"
                  type="text"
                  name="Title"
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label className="form-label">
                <p>Description</p>
                <textarea
                  className="form-control"
                  id="formGroupExampleInputDescription"
                  placeholder="Add a detailed description"
                  name="Description"
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
              <label className="form-label">
                <p>Price</p>
                <input
                  className="form-control"
                  id="formGroupExampleInputPrice"
                  placeholder="Add a price"
                  type="number"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <label className="form-label">
                <p>Images (URL)</p>
                <input
                  className="form-control"
                  id="formGroupExampleInputImages"
                  type="text"
                  placeholder="Enter image URLs separated by commas"
                  onChange={(e) =>
                    setImage(e.target.value.split(",").map((url) => url.trim()))
                  }
                />
              </label>
              <button
                type="submit"
                className="btn btn-danger"
                onClick={() => submitProduct()}
              >
                Publish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
