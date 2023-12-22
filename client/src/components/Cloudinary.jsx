import React, { useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

function Cloudinary({ setImg }) {
  const cloudName = "dubduh12x";
  const presetName = "qncgi1tt";
  const [image, setImage] = useState("");

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", presetName);

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      setImage(data.secure_url);
      setImg(data.secure_url);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };
  console.log(image);
  return (
    <div className="cloudinary">
      <label>
        <MdOutlineAddPhotoAlternate />
        <input
          type="file"
          onChange={handleUpload}
          style={{ display: "none" }}
        />
      </label>
    </div>
  );
}

export default Cloudinary;

// //example of using
// import React, { useState } from "react";
// import Cloudinary from "./Cloudinary";

// function Addproduct() {
//   const [image, setImage] = useState("");
//   const [img, setImg] = useState("");

//   const uploadImage = () => {
//     // Define the logic to upload the image here
//     // You can use 'img' state to get the uploaded image URL
//     console.log("Image uploaded:", img);
//   };

//   return (
//     <div>
//       <div>
//         <Cloudinary setImg={setImg} />
//         <button onClick={uploadImage}>Upload</button>
//       </div>
//       <div>
//         <h1>Uploaded image will be displayed here</h1>
//         <img src={img} alt="Uploaded" />
//       </div>
//     </div>
//   );
// }

//export default Addproduct;
