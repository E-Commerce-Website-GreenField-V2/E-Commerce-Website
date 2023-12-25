import { useEffect } from "react";
import { TabTitle } from "../../../src/utils/genral";
import ShopCategory from "./Container/ShopCategory";
import "./Shop.css";
import ReactLoading from "react-loading";
import { useFeaturedCategories } from "../../Context/FeaturedCategoryContext.js";

const Shop = () => {
  TabTitle("Shop");
  const { featuredCategories } = useFeaturedCategories();
  // console.log("featr", featuredCategories); get well from global context

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shop__contianer">
      {featuredCategories ? (
        featuredCategories.map((category) => (
          <ShopCategory key={category.id} name={category.name} category={category} />
        ))
      ) : (
        <ReactLoading
          type="balls"
          color="#6c757d"
          height={100}
          width={100}
          className="container h-100 w-10 justify-self-center align-self-center m-auto"
        />
      )}
    </div>
  );
};

export default Shop;
