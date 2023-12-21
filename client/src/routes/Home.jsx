import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Landing from "../components/Landing/Landing";
import FeaturedItems from "../components/Featured/Items/FetauredItems";
import FeaturedCategories from "../components/Featured/Categories/FeaturedCategories";
import { TabTitle } from "../utils/genral.js";

const Home = () => {
  const [featuredItems, setFeaturedItems] = useState();
  TabTitle("Home");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/items")
      .then((res) => setFeaturedItems(res.data))
      .catch((err) => console.log(err));

    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <Landing />
      <FeaturedCategories />
      <FeaturedItems items={featuredItems} />
    </Fragment>
  );
};

export default Home;
