import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/Cards/BlogCard";
import ProductCard from "../components/Cards/ProductCard";
import SpecialProductCard from "../components/Cards/SpecialProductCard";

export default function Home() {
  return (
    <main>
      <section className="py-5 home-wrapper-1 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6 col-12 ">
              <div className="p-3 main-banner h-100 w-100 position-relative ">
                <img
                  src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt="banner image"
                  className="z-0 img-fluid rounded-3 h-100 w-100 "
                />
                <div className="main-banner-content position-absolute ">
                  <h4>Supercharged for pros.</h4>
                  <h5>IPad S13+ Pro</h5>
                  <p>From ₹10,000 or ₹500/mo.</p>
                  <Link to={"/"} className="button">
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-12 ">
              <div className="row">
                <div className="flex-wrap d-flex justify-content-between align-items-center col-md-6 ">
                  <div className="p-3 small-banner h-100 w-100 position-relative ">
                    <img
                      src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt="banner image"
                      className="z-0 img-fluid rounded-3 h-100 w-100 "
                    />
                    <div className="small-banner-content position-absolute ">
                      <h4>Supercharged for pros.</h4>
                      <h5>IPad S13+ Pro</h5>
                      <p>From ₹10,000 or ₹500/mo.</p>
                    </div>
                  </div>
                </div>
                <div className="flex-wrap d-flex justify-content-between align-items-center col-md-6 ">
                  <div className="p-3 small-banner h-100 w-100 position-relative ">
                    <img
                      src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt="banner image"
                      className="z-0 img-fluid rounded-3 h-100 w-100 "
                    />
                    <div className="small-banner-content position-absolute ">
                      <h4>Supercharged for pros.</h4>
                      <h5>IPad S13+ Pro</h5>
                      <p>From ₹10,000 or ₹500/mo.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="flex-wrap d-flex justify-content-between align-items-center col-md-6 ">
                  <div className="p-3 small-banner h-100 w-100 position-relative ">
                    <img
                      src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt="banner image"
                      className="z-0 img-fluid rounded-3 h-100 w-100 "
                    />
                    <div className="small-banner-content position-absolute ">
                      <h4>Supercharged for pros.</h4>
                      <h5>IPad S13+ Pro</h5>
                      <p>From ₹10,000 or ₹500/mo.</p>
                    </div>
                  </div>
                </div>
                <div className="flex-wrap d-flex justify-content-between align-items-center col-md-6 ">
                  <div className="p-3 small-banner h-100 w-100 position-relative ">
                    <img
                      src="https://images.pexels.com/photos/1037992/pexels-photo-1037992.jpeg?auto=compress&cs=tinysrgb&w=1600"
                      alt="banner image"
                      className="z-0 img-fluid rounded-3 h-100 w-100 "
                    />
                    <div className="small-banner-content position-absolute ">
                      <h4>Supercharged for pros.</h4>
                      <h5>IPad S13+ Pro</h5>
                      <p>From ₹10,000 or ₹500/mo.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 home-wrapper-2 ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between ">
                <div className="gap-10 d-flex align-items-center">
                  <img src="assets/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all orers over ₹1000</p>
                  </div>
                </div>
                <div className="gap-10 d-flex align-items-center">
                  <img src="assets/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprise Offers</h6>
                    <p className="mb-0">Save up to 25% off</p>
                  </div>
                </div>
                <div className="gap-10 d-flex align-items-center">
                  <img src="assets/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/7</h6>
                    <p className="mb-0">Shop with an expert</p>
                  </div>
                </div>
                <div className="gap-10 d-flex align-items-center">
                  <img src="assets/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0">Get Factory direct price</p>
                  </div>
                </div>
                <div className="gap-10 d-flex align-items-center">
                  <img src="assets/service-05.png" alt="services" />
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected Payments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 home-wrapper-2 ">
        <div className="overflow-hidden container-xxl ">
          <div className="row">
            <div className="col-12 ">
              <div className="flex-wrap categories d-flex align-items-center ">
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6>Computers & Laptop</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="assets/laptop.jpg"
                    alt=""
                    className="h-100 w-100 "
                  />
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6>Cameras & Videos</h6>
                    <p>10 Items</p>
                  </div>
                  <img
                    src="assets/camera.jpg"
                    alt=""
                    className="h-100 w-100 "
                  />
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6>Smart Television</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/tv.jpg" alt="" className="h-100 w-100 " />
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6>Smartwatches</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/watch.jpg" alt="" className="h-100 w-100 " />
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/watch.jpg" alt="" className="h-100 w-100 " />
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/watch.jpg" alt="" className="h-100 w-100 " />
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/watch.jpg" alt="" className="h-100 w-100 " />
                </div>
                <div className="d-flex gap-30 align-items-center ">
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src="assets/watch.jpg" alt="" className="h-100 w-100 " />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 featured-wrapper home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Featured Collection</h3>
            </div>

            <div className="row">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 special-wrapper home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Special Products</h3>
            </div>

            <div className="row">
              <SpecialProductCard />
              <SpecialProductCard />
              <SpecialProductCard />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 marquee-wrapper home-wrapper-2">
        <div className="conatiner-xxl">
          <div className="row">
            <div className="col-12">
              <div className="p-3 bg-white marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex ">
                  <div className="mx-4 w-25 ">
                    <img src="assets/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="assets/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="assets/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="assets/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="assets/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="assets/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="assets/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25 ">
                    <img src="assets/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 blog-wrapper home-wrapper-2">
        <div className="container-xxl ">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest Blogs</h3>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>
    </main>
  );
}
