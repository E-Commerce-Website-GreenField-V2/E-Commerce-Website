import React, { useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

function Cloudinary({ setImages }) {
  const cloudName = "dubduh12x";
  const presetName = "qncgi1tt";
  const [previewImages, setPreviewImages] = useState([]);

  const handleUpload = async (e) => {
    const files = e.target.files;

    try {
      const uploadedImages = await Promise.all(
        Array.from(files).map(async (file) => {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("upload_preset", presetName);

          const response = await fetch(
            `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
            {
              method: "POST",
              body: formData,
            }
          );

          const data = await response.json();
          return data.secure_url;
        })
      );

      setPreviewImages((prevImages) => [...prevImages, ...uploadedImages]);
      setImages((prevImages) => [...prevImages, ...uploadedImages]);
    } catch (error) {
      console.error("Error uploading images: ", error);
    }
  };

  return (
    <div className="cloudinary">
      <label>
        <MdOutlineAddPhotoAlternate style={{ fontSize: "3em" }} />
        <input
          type="file"
          onChange={handleUpload}
          style={{ display: "none" }}
          multiple
        />
      </label>

      <div className="preview">
        {previewImages.map((url, index) => (
          <img key={index} src={url} alt={`Uploaded ${index}`} />
        ))}
      </div>
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
