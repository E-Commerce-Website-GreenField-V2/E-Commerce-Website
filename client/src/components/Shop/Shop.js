import { useEffect, useState } from "react";
import { TabTitle } from "../../../src/utils/genral";
import axios from "axios";
import ShopCategory from "./Container/ShopCategory";
import "./Shop.css";
import ReactLoading from "react-loading";

const Shop = () => {
  TabTitle("Shop");
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8000/categories/")
      .then((res) => {
        setCategories(res.data)
        setLoading(false);
      })
      .catch((err) => console.log(err));
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shop__contianer">
      {loading && (
        <ReactLoading
          type="balls"
          color="#6c757d"
          height={100}
          width={100}
          className="container h-100 w-10 justify-self-center align-self-center m-auto"
        />
      )}
      {categories && categories.map((category) => (
        <ShopCategory key={category.id} name={category.name} category={category} />
      ))}
    </div>
  );
};

export default Shop;
