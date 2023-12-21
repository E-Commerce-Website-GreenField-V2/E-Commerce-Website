import { useState, useEffect } from "react";
import axios from "axios";
import RelatedCard from "../../Card/RelatedCard/RelatedCard.js";
import "./Related.css";

const Related = (props) => {
  const [menItems, setMenItems] = useState();
  const [womenItems, setWomenItems] = useState();
  const [kidsItems, setKidsItems] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8000/categories/")
      .then((res) => {
        setMenItems(res.data.filter((item) => item.name === "men"));
        setKidsItems(res.data.filter((item) => item.name === "kids"));
        setWomenItems(res.data.filter((item) => item.name === "women"));
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(menItems);
  return (
    <div className="related__products">
      <div className="related__header__container">
        <div className="related__header">
          <h2>Recommended Products</h2>
        </div>
        <div className="related__header__line"></div>
      </div>
      <div className="related__card__container">
        <div className="related__product__card">
          {menItems &&
            props.name === "men" &&
            menItems.map((item) => <RelatedCard item={item} />)}
          {womenItems &&
            props.name === "women" &&
            womenItems.map((item) => <RelatedCard item={item} />)}
          {kidsItems &&
            props.name === "kids" &&
            kidsItems.map((item) => <RelatedCard item={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Related;
