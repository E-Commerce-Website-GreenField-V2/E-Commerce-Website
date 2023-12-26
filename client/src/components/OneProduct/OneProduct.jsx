import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartItemsContext } from "../../Context/CartItemsContext";
import { WishItemsContext } from "../../Context/WishItemsContext.js";
import "../OneProduct/oneProduct.css";
import axios from "axios";

function SingleProduct() {
  const { productId } = useParams();

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const cartItemsContext = useContext(CartItemsContext);
  const wishItemsContext = useContext(WishItemsContext);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductDetails();
  }, []);

  const hanleAddToCart = () => {
    cartItemsContext.addItem(product, 1);
  };
  const handleAddToWishList = () => {
    wishItemsContext.addItem(product);
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  const Img = product.image ? product.image.slice(1, -1) : null;
  const [activeImg, setActiveImage] = useState(null);

  useEffect(() => {
    setActiveImage(Img);
  }, [Img]);

  const formattedPrice =
    product.price !== undefined && typeof product.price === "number"
      ? `$${product.price.toFixed(2)}`
      : "Invalid Price";

  const handleMouseMove = (e) => {
    const imgBox = document.querySelector(".img-big-wrap");
    const x = e.pageX - imgBox.offsetLeft;
    const y = e.pageY - imgBox.offsetTop;

    imgBox.style.backgroundPosition = `${-x}px ${-y}px`;
  };

  const handleMouseEnter = () => {
    const imgBox = document.querySelector(".img-big-wrap");
    imgBox.style.backgroundImage = `url(${activeImg})`;
    imgBox.style.backgroundSize = "cover";
  };

  const handleMouseLeave = () => {
    const imgBox = document.querySelector(".img-big-wrap");
    imgBox.style.backgroundImage = "none";
  };
  const handleGoPayment = () => {
    navigate("/payment");
  };
  return (
    <div className="home-section">
      <section class="padding-y">
        <div class="container">
          <div class="row">
            <aside class="col-lg-6">
              <article class="gallery-wrap">
                <div
                  class="img-big-wrap img-thumbnail"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a data-fslightbox="mygalley" data-type="image">
                    <img height="560" src={activeImg} />
                  </a>
                </div>
                <div class="thumbs-wrap">
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    class="item-thumb"
                  >
                    <img
                      width="60"
                      height="60"
                      src={product.img2?.slice(1, -1)}
                      onClick={() => setActiveImage(product.img2?.slice(1, -1))}
                    />
                  </a>
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    class="item-thumb"
                  >
                    <img
                      width="60"
                      height="60"
                      src={product.img3?.slice(1, -1)}
                      onClick={() => setActiveImage(product.img3?.slice(1, -1))}
                    />
                  </a>
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    class="item-thumb"
                  >
                    <img
                      width="60"
                      height="60"
                      src={product.img4?.slice(1, -1)}
                      onClick={() => setActiveImage(product.img4?.slice(1, -1))}
                    />
                  </a>
                </div>
              </article>
            </aside>
            <main class="col-lg-6">
              <article class="ps-lg-3">
                <h4 class="title text-dark">{product.name}</h4>
                <div class="rating-wrap my-3">
                  <ul class="rating-stars">
                    <li style={{ width: "80%" }} class="stars-active">
                      {" "}
                      <img
                        src="assets/images/misc/stars-active.svg"
                        alt=""
                      />{" "}
                    </li>
                    <li>
                      {" "}
                      <img
                        src="assets/images/misc/starts-disable.svg"
                        alt=""
                      />{" "}
                    </li>
                  </ul>
                  <b class="label-rating text-warning">
                    {" "}
                    Rate : {product.rate}
                  </b>
                  <i class="dot"></i>
                  <i class="dot"></i>
                  <span class="label-rating text-success">In stock</span>
                </div>

                <div class="mb-3">
                  <var class="price h5"> price : {product.price} $</var>
                  <span class="text-muted"> /per box</span>
                </div>

                <p>{product.description}</p>
                <hr />

                <div class="row mb-4">
                  <div class="col-md-4 col-6 mb-2">
                    <label class="form-label">Size</label>
                    <select class="form-select">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div class="col-md-4 col-6 mb-3">
                    <label class="form-label d-block">{product.quantity}</label>
                    <div class="input-group input-spinner">
                      <button class="btn btn-icon btn-light" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="#999"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13H5v-2h14v2z"></path>
                        </svg>
                      </button>
                      <input
                        class="form-control text-center"
                        placeholder=""
                        value="14"
                      />
                      <button class="btn btn-icon btn-light" type="button">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill="#999"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <a href="#" class="btn  btn-warning" onClick={handleGoPayment}>
                  {" "}
                  Buy now{" "}
                </a>
                <a href="#" class="btn  btn-primary" onClick={hanleAddToCart}>
                  {" "}
                  <i class="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                </a>
                <a
                  href="#"
                  class="btn  btn-light"
                  onClick={handleAddToWishList}
                >
                  {" "}
                  <i class="me-1 fa fa-heart"></i> Save{" "}
                </a>
              </article>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}
export default SingleProduct;
