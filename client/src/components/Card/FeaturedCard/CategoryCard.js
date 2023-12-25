import { Link } from "react-router-dom";
import "./CategoryCard.css";
import { Button } from "@mui/material";

const CategoryCard = ({category}) => {
  return (
    <div className="category__card__card">
      <div className="category__image">
        <img src={category.image} alt="" className="product__img" />
      </div>
      <div className="category__card__detail">
        <div className="category__name">
          <span>{category.name}</span>
         
        </div>
        <div className="category__card__action">
          <Link key={category.id} to={`/category/${category.name.toLowerCase()}`}>
            <Button
              variant="outlined"
              sx={[
                {
                  "&:hover": {
                    backgroundColor: "none",
                    borderColor: "#FFE26E",
                    color: "#FFE26E",
                  },
                  borderRadius: "20px",
                  borderColor: "#FFE26E",
                  backgroundColor: "#FFE26E",
                  color: "#000",
                  fontWeight: "700",
                },
              ]}
            >
              SHOP NOW
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
