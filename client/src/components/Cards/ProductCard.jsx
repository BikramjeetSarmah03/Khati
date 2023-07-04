import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

export default function ProductCard() {
  return (
    <div className="col-3">
      <div className="product-card position-relative ">
        <div className="wishlist-icon position-absolute ">
          <Link to={"/"}>
            <img src="assets/wish.svg" alt="wishlistIcon" />
          </Link>
        </div>
        <div className="product-image">
          <img
            src="assets/watch.jpg"
            alt="productImg"
            className="img-fluid h-100 w-100 "
          />
          <img
            src="assets/tv.jpg"
            alt="productImg"
            className="img-fluid h-100 w-100 "
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">Lorem ipsum dolor sit amet.</h5>
          <ReactStars
            count={5}
            size={24}
            value={"3"}
            edit={false}
            activeColor={"#ffd700"}
          />
          <p className="price">₹2,500</p>
        </div>

        <div className="action-bar position-absolute">
          <div className="d-flex flex-column ">
            <Link to={"/"}>
              <img src="assets/view.svg" alt="view" />
            </Link>
            <Link to={"/"}>
              <img src="assets/prodcompare.svg" alt="compare" />
            </Link>
            <Link to={"/"}>
              <img src="assets/add-cart.svg" alt="addcart" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
