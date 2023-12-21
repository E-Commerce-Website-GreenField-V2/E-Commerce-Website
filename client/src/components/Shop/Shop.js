import { useEffect, useState } from "react";
import { TabTitle } from "../../../src/utils/genral";
import axios from "axios";
import ShopCategory from "./Container/ShopCategory";
import "./Shop.css";
import ReactLoading from "react-loading";

const Shop = () => {
  TabTitle("Shop - SHEMA");
  const [menItems, setMenItems] = useState();
  const [womenItems, setWomenItems] = useState();
  const [kidsItems, setKidsItems] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://shema-backend.vercel.app/api/items")
      .then((res) => {
        setMenItems(res.data.filter((item) => item.name === "men"));
        setKidsItems(res.data.filter((item) => item.name === "kids"));
        setWomenItems(res.data.filter((item) => item.name === "women"));
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
      {menItems && <ShopCategory name="Men" key="men" items={menItems} />}
      {womenItems && (
        <ShopCategory name="Women" key="women" items={womenItems} />
      )}
      {kidsItems && <ShopCategory name="Kids" key="kids" items={kidsItems} />}
    </div>
  );
};

export default Shop;
