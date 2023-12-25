import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartItemsContext } from "../../Context/CartItemsContext";
import { WishItemsContext } from "../../Context/WishItemsContext.js";
import "../OneProduct/oneProduct.css";
function SingleProduct() {
  // const [images, setImages] = useState({
  //   img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  //   img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  //   img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  //   img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  // });
  const { productId } = useParams();

  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImage] = useState(product.image);
  const cartItemsContext = useContext(CartItemsContext);
  const wishItemsContext = useContext(WishItemsContext);
  const hanleAddToCart = () => {
    cartItemsContext.addItem(product, 1);
    // console.log(props.item);
  };
  const handleAddToWishList = () => {
    wishItemsContext.addItem(product);
    // console.log(product);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/products/${productId}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        setProduct(responseData);
        console.log("data", product);

        console.log(responseData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }
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
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    // href="assets/images/items/10.webp"
                  >
                    <img height="560" src={activeImg} />
                  </a>
                </div>
                <div class="thumbs-wrap">
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    // href="assets/images/items/10.webp"
                    class="item-thumb"
                  >
                    <img
                      width="60"
                      height="60"
                      src={product.img1}
                      onClick={() => setActiveImage(product.img1)}
                    />
                  </a>
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    // href="assets/images/items/10.webp"
                    class="item-thumb"
                  >
                    <img
                      width="60"
                      height="60"
                      src={product.img2}
                      onClick={() => setActiveImage(product.img2)}
                    />
                  </a>
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    // href="assets/images/items/10.webp"
                    class="item-thumb"
                  >
                    <img
                      width="60"
                      height="60"
                      src={product.img3}
                      onClick={() => setActiveImage(product.img3)}
                    />
                  </a>
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    // href="assets/images/items/10.webp"
                    class="item-thumb"
                  >
                    <img
                      width="60"
                      height="60"
                      src={product.img4}
                      onClick={() => setActiveImage(product.img4)}
                    />
                  </a>
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    // href="assets/images/items/10.webp"
                    class="item-thumb"
                  >
                    <img
                      width="60"
                      height="60"
                      src="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
                    />
                  </a>
                </div>
              </article>
            </aside>
            <main class="col-lg-6">
              <article class="ps-lg-3">
                <h4 class="title text-dark">
                  Quality Men's Sneaker for Sports, Men's Fashion <br /> Casual
                  Sneakers{" "}
                </h4>
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
                  <span class="label-rating text-muted">
                    {" "}
                    <i class="fa fa-shopping-basket"></i> 154 orders{" "}
                  </span>
                  <i class="dot"></i>
                  <span class="label-rating text-success">In stock</span>
                </div>

                <div class="mb-3">
                  <var class="price h5"> price : {product.price} $</var>
                  <span class="text-muted"> /per box</span>
                </div>

                <p>{product.description}</p>

                {/* <dl class="row">
                  <dt class="col-3">Type:</dt>
                  <dd class="col-9">Regular</dd>

                  <dt class="col-3">Color</dt>
                  <dd class="col-9">Brown</dd>

                  <dt class="col-3">Material</dt>
                  <dd class="col-9">Cotton, Jeans </dd>

                  <dt class="col-3">Brand</dt>
                  <dd class="col-9">Reebook </dd>
                </dl> */}

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
                    <label class="form-label d-block">
                      {" "}
                      Quantity :{product.quantity}
                    </label>
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

                <a href="#" class="btn  btn-warning">
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

      {/* <section class="padding-y bg-light border-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="card">
                <header class="card-header">
                  <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item"> */}
      {/* <a
                        href="#"
                        data-bs-target="#tab_specs"
                        data-bs-toggle="tab"
                        class="nav-link active"
                      >
                        Specification
                      </a> */}
      {/* </li> */}
      {/* <li class="nav-item"> */}
      {/* <a
                        href="#"
                        data-bs-target="#tab_warranty"
                        data-bs-toggle="tab"
                        class="nav-link"
                      >
                        Warranty info
                      </a> */}
      {/* </li> */}
      {/* <li class="nav-item"> */}
      {/* <a
                        href="#"
                        data-bs-target="#tab_shipping"
                        data-bs-toggle="tab"
                        class="nav-link"
                      >
                        Shipping info
                      </a> */}
      {/* </li> */}
      {/* <li class="nav-item"> */}
      {/* <a
                        href="#"
                        data-bs-target="#tab_seller"
                        data-bs-toggle="tab"
                        class="nav-link"
                      >
                        Seller profile
                      </a> */}
      {/* </li>
                  </ul>
                </header> */}
      {/* <div class="tab-content">
                  <article
                    id="tab_specs"
                    class="tab-pane show active card-body"
                  > */}
      {/* <p>
                      With supporting text below as a natural lead-in to
                      additional content. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur.{" "}
                    </p> */}
      {/* <ul class="list-check cols-two">
                      <li>Some great feature name here </li>
                      <li>Lorem ipsum dolor sit amet, consectetur </li>
                      <li>Duis aute irure dolor in reprehenderit </li>
                      <li>Optical heart sensor </li>
                      <li>Easy fast and ver good </li>
                      <li>Some great feature name here </li>
                      <li>Modern style and design</li>
                    </ul> */}
      {/* <table class="table border table-hover">
                      <tr>
                        <th> Display: </th>{" "}
                        <td> 13.3-inch LED-backlit display with IPS </td>
                      </tr>
                      <tr>
                        <th> Processor capacity: </th>{" "}
                        <td> 2.3GHz dual-core Intel Core i5 </td>
                      </tr>
                      <tr>
                        <th> Camera quality: </th>{" "}
                        <td>720p FaceTime HD camera </td>
                      </tr>
                      <tr>
                        <th> Memory </th> <td> 8 GB RAM or 16 GB RAM </td>
                      </tr>
                      <tr>
                        <th> Graphics </th>{" "}
                        <td> Intel Iris Plus Graphics 640 </td>
                      </tr>
                    </table> */}
      {/* </article> */}
      {/* <article id="tab_warranty" class="tab-pane card-body">
                    Tab content or sample information now <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum. Lorem ipsum dolor sit
                    amet, consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi
                    ut aliquip ex ea commodo
                  </article> */}
      {/* <article id="tab_shipping" class="tab-pane card-body">
                    Another tab content or sample information now <br />
                    Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
                  </article> */}
      {/* <article id="tab_seller" class="tab-pane card-body">
                    Some other tab content or sample information now <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </article> */}
      {/* </div>
              </div>
            </div>
            <aside class="col-lg-4">
              <div class="card">
                <div class="card-body"> */}
      {/* <h5 class="card-title">Other items you may like : </h5> */}

      {/* <article class="itemside mb-3"> */}
      {/* <a href="#" class="aside">
                      <img
                        src="https://godashsports.com/wp-content/uploads/cache/2023/10/On-Cloud-Shoes-Black/3077995554.png"
                        width="96"
                        height="96"
                        class="img-md img-thumbnail"
                      /> */}
      {/* </a> */}
      {/* <div class="info">
                      <a href="#" class="title mb-1">
                        {" "}
                        Rucksack Backpack Large <br /> Line Mounts{" "}
                      </a>
                      <strong class="price"> $38.90</strong>
                    </div> */}
      {/* </article> */}

      {/* <article class="itemside mb-3"> */}
      {/* <a href="#" class="aside">
                      <img
                        src="https://5.imimg.com/data5/SELLER/Default/2022/3/AT/JU/NS/145847198/shopee-e15830dd985a18d205c34a5fc3119e1a.jpg"
                        width="96"
                        height="96"
                        class="img-md img-thumbnail"
                      />
                    </a> */}
      {/* <div class="info">
                      <a href="#" class="title mb-1">
                        {" "}
                        Summer New Men's Denim <br /> Jeans Shorts{" "}
                      </a>
                      <strong class="price"> $29.50</strong>
                    </div> */}
      {/* </article> */}

      {/* <article class="itemside mb-3"> */}
      {/* <a href="#" class="aside">
                      <img
                        src="https://d2j6dbq0eux0bg.cloudfront.net/images/50694034/2123451926.jpg"
                        width="96"
                        height="96"
                        class="img-md img-thumbnail"
                      /> */}
      {/* </a> */}
      {/* <div class="info">
                      <a href="#" class="title mb-1">
                        {" "}
                        T-shirts with multiple colors, for men and lady{" "}
                      </a>
                      <strong class="price"> $120.00</strong>
                    </div> */}
      {/* </article> */}

      {/* <article class="itemside mb-3"> */}
      {/* <a href="#" class="aside">
                      <img
                        src="https://d2j6dbq0eux0bg.cloudfront.net/images/50694034/2123437421.jpg"
                        width="96"
                        height="96"
                        class="img-md img-thumbnail"
                      />
                    </a> */}
      {/* <div class="info">
                      <a href="#" class="title mb-1">
                        {" "}
                        Blazer Suit Dress Jacket for Men, Blue color{" "}
                      </a>
                      <strong class="price"> $339.90</strong>
                    </div> */}
      {/* </article> */}
      {/* </div> */}
      {/* // </div> */}
      {/* // </aside> */}
      {/* // </div> */}

      {/* // <br /> */}
      {/* // <br /> */}
      {/* // </div> */}
      {/* // </section> */}
    </div>
  );
}
export default SingleProduct;
