import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <footer>
      <section className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center ">
                <FaTelegramPlane size={40} />
                <h2 className="mb-0 text-white">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="py-1 form-control "
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="p-2 input-group-text " id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="mb-4 ">Contact Us</h4>
              <div>
                <address className="fs-6">
                  Hno: 7 Near Vill Borjhar Saikis Chuburi. <br /> Tezpur Assam{" "}
                  <br /> Pin Code: 784001
                </address>

                <a
                  href="tel:+91 1234567890"
                  className="mt-3 mb-3 text-white d-block ">
                  +91 1234567890
                </a>
                <a
                  href="mailto:dev.bikramjeet@gmail.com"
                  className="mt-3 mb-3 text-white d-block ">
                  dev.bikramjeet@gmail.com
                </a>

                <div className="mt-4 social_icons d-flex align-items-center gap-15 ">
                  <a href="">
                    <BsLinkedin size={24} />
                  </a>
                  <a href="">
                    <BsInstagram size={24} />
                  </a>
                  <a href="">
                    <BsGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 ">Information</h4>
              <div className="footer-link d-flex flex-column ">
                <Link to={"/"} className="py-2 mb-1 ">
                  Privacy Policy
                </Link>
                <Link to={"/"} className="py-2 mb-1 ">
                  Refund Policy
                </Link>
                <Link to={"/"} className="py-2 mb-1 ">
                  Shipping Policy
                </Link>
                <Link to={"/"} className="py-2 mb-1 ">
                  Terms & Conditions
                </Link>
                <Link to={"/"} className="py-2 mb-1 ">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="mb-4 ">Account</h4>
              <div className="footer-link d-flex flex-column ">
                <Link to={"/"} className="py-2 mb-1 ">
                  Search
                </Link>
                <Link to={"/"} className="py-2 mb-1 ">
                  About Us
                </Link>
                <Link to={"/"} className="py-2 mb-1 ">
                  Faq
                </Link>
                <Link to={"/"} className="py-2 mb-1 ">
                  Contact
                </Link>
                <Link to={"/"} className="py-2 mb-1 ">
                  Size Cart
                </Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="mb-4 ">Quick Links</h4>
              <div className="footer-link d-flex flex-column ">
                <Link to={"/"} className="py-2 mb-1 ">
                  Accessories
                </Link>
                <Link to={"/"} className="py-2 mb-1 ">
                  Laptops
                </Link>
                <Link to={"/"} className="py-2 mb-1 ">
                  Headphones
                </Link>
                <Link to={"/"} className="py-2 mb-1 ">
                  Smart Watches
                </Link>
                <Link to={"/"} className="py-2 mb-1 ">
                  Tablets
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="mb-0 text-center ">
                &copy; {new Date().getFullYear()}: Powered by Bikramjeet Sarmah{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
