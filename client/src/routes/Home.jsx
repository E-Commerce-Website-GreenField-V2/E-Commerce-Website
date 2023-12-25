import { Fragment, useEffect, useState } from "react";
// import axios from "axios";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Items/FetauredItems.js";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/genral.js";

const Home = () => {
  // const [featuredItems, setFeaturedItems] = useState();
  // const [categories, setCategories] = useState(null);
  TabTitle("Home");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Landing />
      <FeaturedCategories />
      <FeaturedItems />
    </Fragment>
  );
};

export default Home;
