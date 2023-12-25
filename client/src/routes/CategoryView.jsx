import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReactLoading from "react-loading";
import Category from "../components/Category/Category"; // complete the component category

const CategoryView = () => {
  const param = useParams();
  const [menItems, setMenItems] = useState();
  const [womenItems, setWomenItems] = useState();
  const [kidsItems, setKidsItems] = useState();
  const [babiesItems, setBabiesItems] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // you cann add other categories
    axios
    .get("http://localhost:8000/categories/")
    .then((res) => {
      setMenItems(res.data.filter((item) => item.name === "Men"))
      setKidsItems(res.data.filter((item) => item.name === "Kids"));
      setWomenItems(res.data.filter((item) => item.name === "Women"));
      setBabiesItems(res.data.filter((item) => item.name === "Babies"));
      // console.log("id", res.data);
      setLoading(false);
    })
    .catch((err) => console.log(err));

  window.scrollTo(0, 0);
}, [param.id]);
  console.log("menID",menItems);
  


  return (
    <div className="d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto">
      {loading && (
        <ReactLoading
          type="balls"
          color="#6c757d"
          height={100}
          width={100}
          className="m-auto"
        />
      )}
      {menItems && param.id === "men" && (
        <Category name="Men's Fashion" products={menItems} category="men" />
      )}
      {womenItems && param.id === "women" && (
        <Category name="Kids Fashion" products={womenItems} category="women" />
      )}
      {kidsItems && param.id === "kids" && (
        <Category name="Women's Fashion" products={kidsItems} category="kids" />
      )}
      {babiesItems && param.id === "babies" && (
        <Category name="Babies's Fashion" products={babiesItems} category="men" />
      )}
    </div>
  );
};

export default CategoryView;
