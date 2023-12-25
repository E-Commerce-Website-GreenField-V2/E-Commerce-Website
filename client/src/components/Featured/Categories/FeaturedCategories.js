import React, { useState, useEffect } from "react";
import axios from "axios";
import CategoryCard from "../../Card/FeaturedCard/CategoryCard";
import { useFeaturedCategories } from "../../../Context/FeaturedCategoryContext.js"
import './FeaturedCategories.css'

const Categories = () => {
    const { featuredCategories, updateFeaturedCategories } = useFeaturedCategories();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
          .get("http://localhost:8000/categories/")
          .then((res) => {
            updateFeaturedCategories(res.data);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
          });
        window.scrollTo(0, 0);
    }, []);

    console.log("category", featuredCategories);

    return (
        <div className="featured__categories__container">
            <div className="featured__categories">
                <div className="featured__categories__header">
                    <h1 className='featured__header__big'>Featured Categories </h1>
                    <div className="featured__categories__header__line"></div>
                </div>
                <div className="featured__categories__card__container">
                    {loading ? (
                        <p>Loading...</p>
                    ) : (
                        featuredCategories.map((category) => (
                            <CategoryCard key={category.id} category={category} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}

export default Categories;
