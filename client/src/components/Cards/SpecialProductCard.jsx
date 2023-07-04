import ReactStars from "react-rating-stars-component";

export default function SpecialProductCard() {
  return (
    <div className="mb-3 col-6">
      <div className="special-product-card">
        <div className="d-flex justify-content-between ">
          <div>
            <img src="assets/watch.jpg" alt="image" className="img-fluid" />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">Lorem ipsum dolor sit amet.</h6>
            <ReactStars
              count={5}
              size={24}
              value={"3"}
              edit={false}
              activeColor={"#ffd700"}
            />
            <p className="price">
              <span className="red-p">₹1,500</span>
              &nbsp;
              <strike className="mx-1">₹2,500</strike>
            </p>
            <div className="gap-10 discount-till d-flex align-items-center ">
              <p className="mb-0 ">
                <b>5 days</b>
              </p>
              <div className="gap-10 d-flex align-items-center ">
                <span className="p-2 badge rounded-circle bg-danger">1</span> :
                <span className="p-2 badge rounded-circle bg-danger">1</span> :
                <span className="p-2 badge rounded-circle bg-danger">1</span>
              </div>
            </div>
            <div className="mt-3 prod-count ">
              <p>Product: 5</p>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin={"0"}
                  aria-valuemax={"100"}></div>
              </div>
            </div>
            <a className="px-4 py-3 mt-4 text-center button w-100 ">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
