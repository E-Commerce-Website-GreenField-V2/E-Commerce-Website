import React, { useState } from "react";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

function Cloudinary({ setImageUrls }) {
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
      console.log(uploadedImages, "uploadedImages");
      setPreviewImages(uploadedImages);
      setImageUrls((prevData) => ({
        ...prevData,
        image: uploadedImages[0],
      }));
      console.log(uploadedImages, "uploadedImages");
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
