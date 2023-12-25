import "../OneProduct/oneProduct.css";

import { useState, useRef } from "react";
function SingleProduct() {
  const [images, setImages] = useState({
    img1: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,b_rgb:f5f5f5/3396ee3c-08cc-4ada-baa9-655af12e3120/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img2: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img3: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/44fc74b6-0553-4eef-a0cc-db4f815c9450/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
    img4: "https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/d3eb254d-0901-4158-956a-4610180545e5/scarpa-da-running-su-strada-invincible-3-xk5gLh.png",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const imgRef = useRef(null);

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
      <section className="padding-y">
        <div className="container">
          <div className="row">
            <aside className="col-lg-6">
              <article className="gallery-wrap">
                <div
                  className="img-big-wrap img-thumbnail"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    // href="assets/images/items/10.webp"
                  >
                    <img ref={imgRef} height="560" src={activeImg} alt="" />
                  </a>
                </div>
                <div className="thumbs-wrap">
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    // href="assets/images/items/10.webp"
                    className="item-thumb"
                  >
                    <img
                      width="60"
                      height="60"
                      src={images.img1}
                      onClick={() => setActiveImage(images.img1)}
                      alt=""
                    />
                  </a>
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    // href="assets/images/items/10.webp"
                    className="item-thumb"
                  >
                    <img
                      width="60"
                      height="60"
                      src={images.img2}
                      onClick={() => setActiveImage(images.img2)}
                      alt=""
                    />
                  </a>
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    // href="assets/images/items/10.webp"
                    className="item-thumb"
                  >
                    <img
                      width="60"
                      height="60"
                      src={images.img3}
                      onClick={() => setActiveImage(images.img3)}
                      alt=""
                    />
                  </a>
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    // href="assets/images/items/10.webp"
                    className="item-thumb"
                  >
                    <img
                      width="60"
                      height="60"
                      src={images.img4}
                      onClick={() => setActiveImage(images.img4)}
                      alt=""
                    />
                  </a>
                  <a
                    data-fslightbox="mygalley"
                    data-type="image"
                    // href="assets/images/items/10.webp"
                    className="item-thumb"
                  >
                    <img
                      alt=""
                      width="60"
                      height="60"
                      src="https://static.nike.com/a/images/f_auto,b_rgb:f5f5f5,w_440/e44d151a-e27a-4f7b-8650-68bc2e8cd37e/scarpa-da-running-su-strada-invincible-3-xk5gLh.png"
                    />
                  </a>
                </div>
              </article>
            </aside>
            <main className="col-lg-6">
              <article className="ps-lg-3">
                <h4 className="title text-dark">
                  Quality Men's Sneaker for Sports, Men's Fashion <br /> Casual
                  Sneakers{" "}
                </h4>
                <div className="rating-wrap my-3">
                  <ul className="rating-stars">
                    <li style={{ width: "80%" }} className="stars-active">
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
                  <b className="label-rating text-warning"> 4.5</b>
                  <i className="dot"></i>
                  <span className="label-rating text-muted">
                    {" "}
                    <i className="fa fa-shopping-basket"></i> 154 orders{" "}
                  </span>
                  <i className="dot"></i>
                  <span className="label-rating text-success">In stock</span>
                </div>

                <div className="mb-3">
                  <var className="price h5">$75.00</var>
                  <span className="text-muted">/per box</span>
                </div>

                <p>
                  Modern look and quality demo item is a streetwear-inspired
                  collection that continues to break away from the conventions
                  of mainstream fashion. Made in Italy, these black and brown
                  clothing low-top shirts for men.
                </p>

                <dl className="row">
                  <dt className="col-3">Type:</dt>
                  <dd className="col-9">Regular</dd>

                  <dt className="col-3">Color</dt>
                  <dd className="col-9">Brown</dd>

                  <dt className="col-3">Material</dt>
                  <dd className="col-9">Cotton, Jeans </dd>

                  <dt className="col-3">Brand</dt>
                  <dd className="col-9">Reebook </dd>
                </dl>

                <hr />

                <div className="row mb-4">
                  <div className="col-md-4 col-6 mb-2">
                    <label className="form-label">Size</label>
                    <select className="form-select">
                      <option>Small</option>
                      <option>Medium</option>
                      <option>Large</option>
                    </select>
                  </div>
                  <div className="col-md-4 col-6 mb-3">
                    <label className="form-label d-block">Quantity</label>
                    <div className="input-group input-spinner">
                      <button className="btn btn-icon btn-light" type="button">
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
                        className="form-control text-center"
                        placeholder=""
                        value="14"
                      />
                      <button className="btn btn-icon btn-light" type="button">
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

                <a href="#!" className="btn  btn-warning">
                  {" "}
                  Buy now{" "}
                </a>
                <a href="#!" className="btn  btn-primary">
                  {" "}
                  <i className="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                </a>
                <a href="#!" className="btn  btn-light">
                  {" "}
                  <i className="me-1 fa fa-heart"></i> Save{" "}
                </a>
              </article>
            </main>
          </div>
        </div>
      </section>

      <section className="padding-y bg-light border-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <header className="card-header">
                  <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                      <a
                        href="#!"
                        data-bs-target="#tab_specs"
                        data-bs-toggle="tab"
                        className="nav-link active"
                      >
                        Specification
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#!"
                        data-bs-target="#tab_warranty"
                        data-bs-toggle="tab"
                        className="nav-link"
                      >
                        Warranty info
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#!"
                        data-bs-target="#tab_shipping"
                        data-bs-toggle="tab"
                        className="nav-link"
                      >
                        Shipping info
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#!"
                        data-bs-target="#tab_seller"
                        data-bs-toggle="tab"
                        className="nav-link"
                      >
                        Seller profile
                      </a>
                    </li>
                  </ul>
                </header>
                <div className="tab-content">
                  <article
                    id="tab_specs"
                    class="tab-pane show active card-body"
                  >
                    <p>
                      With supporting text below as a natural lead-in to
                      additional content. Lorem ipsum dolor sit amet,
                      consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad
                      minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur.{" "}
                    </p>
                    <ul class="list-check cols-two">
                      <li>Some great feature name here </li>
                      <li>Lorem ipsum dolor sit amet, consectetur </li>
                      <li>Duis aute irure dolor in reprehenderit </li>
                      <li>Optical heart sensor </li>
                      <li>Easy fast and ver good </li>
                      <li>Some great feature name here </li>
                      <li>Modern style and design</li>
                    </ul>
                    <table class="table border table-hover">
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
                    </table>
                  </article>
                  <article id="tab_warranty" class="tab-pane card-body">
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
                  </article>
                  <article id="tab_shipping" class="tab-pane card-body">
                    Another tab content or sample information now <br />
                    Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim
                    ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                    non proident, sunt in culpa qui officia deserunt mollit anim
                    id est laborum.
                  </article>
                  <article id="tab_seller" class="tab-pane card-body">
                    Some other tab content or sample information now <br />
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </article>
                </div>
              </div>
            </div>
            <aside className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Similar items</h5>

                  <article className="itemside mb-3">
                    <a href="#!" className="aside">
                      <img
                        src="https://godashsports.com/wp-content/uploads/cache/2023/10/On-Cloud-Shoes-Black/3077995554.png"
                        width="96"
                        height="96"
                        className="img-md img-thumbnail"
                        alt=""
                      />
                    </a>
                    <div className="info">
                      <a href="#!" className="title mb-1">
                        {" "}
                        Rucksack Backpack Large <br /> Line Mounts{" "}
                      </a>
                      <strong className="price"> $38.90</strong>
                    </div>
                  </article>

                  <article className="itemside mb-3">
                    <a href="#!" className="aside">
                      <img
                        src="https://5.imimg.com/data5/SELLER/Default/2022/3/AT/JU/NS/145847198/shopee-e15830dd985a18d205c34a5fc3119e1a.jpg"
                        width="96"
                        height="96"
                        classNameName="img-md img-thumbnail"
                        alt=""
                      />
                    </a>
                    <div className="info">
                      <a href="#!" className="title mb-1">
                        {" "}
                        Summer New Men's Denim <br /> Jeans Shorts{" "}
                      </a>
                      <strong className="price"> $29.50</strong>
                    </div>
                  </article>

                  <article className="itemside mb-3">
                    <a href="#!" className="aside">
                      <img
                        src="https://d2j6dbq0eux0bg.cloudfront.net/images/50694034/2123451926.jpg"
                        width="96"
                        height="96"
                        classNameName="img-md img-thumbnail"
                        alt=""
                      />
                    </a>
                    <div className="info">
                      <a href="#!" className="title mb-1">
                        {" "}
                        T-shirts with multiple colors, for men and lady{" "}
                      </a>
                      <strong className="price"> $120.00</strong>
                    </div>
                  </article>

                  <article className="itemside mb-3">
                    <a href="#!" className="aside">
                      <img
                        src="https://d2j6dbq0eux0bg.cloudfront.net/images/50694034/2123437421.jpg"
                        width="96"
                        height="96"
                        className="img-md img-thumbnail"
                        alt=""
                      />
                    </a>
                    <div className="info">
                      <a href="#!" className="title mb-1">
                        {" "}
                        Blazer Suit Dress Jacket for Men, Blue color{" "}
                      </a>
                      <strong className="price"> $339.90</strong>
                    </div>
                  </article>
                </div>
              </div>
            </aside>
          </div>

          <br />
          <br />
        </div>
      </section>
    </div>
  );
}
export default SingleProduct;
