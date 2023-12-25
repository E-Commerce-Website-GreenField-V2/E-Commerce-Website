import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import ItemCard from "../Card/ItemCard/ItemCard";
import ReactLoading from "react-loading";
import "./FeaturedItems.css";

const FeaturedItems = () => {
  const [products, setProducts] = useState(null);
  const [displayedProducts, setDisplayedProducts] = useState(4);// number item of card to display initially
  const [showAllClicked, setShowAllClicked] = useState(false);


  useEffect(() => {
    axios
      .get(`http://localhost:8000/products/`)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log("products: ",products);

  const handleShowAll = () => {
    setDisplayedProducts(products.length);// Set the number of displayed products to the total number of products
    setShowAllClicked(true)
  };

  return (
    <div className="featured__products__container">
      <div className="featured__products">
        <div className="featured__products__header">
          <h3 className="featured__items__header__big">Featured Items </h3>
          {showAllClicked ? null : (
            <Link  className="featured__header__small show-all-link" onClick={handleShowAll}>
              Show all
              <ArrowRightAltIcon />
            </Link>
          )}
        </div>
        <div className="featured__products__header__line"></div>
        <div className="d-flex min-vh-100 w-100 justify-content-center align-items-center m-auto">
          {!products ? (
            <ReactLoading
              type="balls"
              color="#6c757d"
              height={100}
              width={100}
              className="m-auto"
            />
          ) : (
            <div className="featured__products__card__container">
              {products.slice(0,displayedProducts ).map((product) => (
                <ItemCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeaturedItems;
