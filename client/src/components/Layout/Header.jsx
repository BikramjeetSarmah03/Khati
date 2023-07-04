import { Link, NavLink } from "react-router-dom";
import { BsCart, BsHeart, BsSearch } from "react-icons/bs";
import { FiRefreshCw } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { BiMenuAltLeft } from "react-icons/bi";

export default function Header() {
  return (
    <>
      <header className="py-3 header-top-strip">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="mb-0 text-white ">
                Free Shipping over {`₹`}2000 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p className="mb-0 text-white text-end ">
                Hotline:{" "}
                <a href="tel:+91 1234567890" className="text-white">
                  +91 1234567890
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>

      <header className="py-3 header-upper">
        <div className="container-xxl">
          <div className="row align-items-center ">
            <div className="col-2">
              <h2>
                <Link to={"/"} className="text-white ">
                  Khati
                </Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="py-2 form-control "
                  placeholder="Search Product Here..."
                  aria-label="Search Product Here..."
                  aria-describedby="basic-addon2"
                />
                <span className="p-2 input-group-text " id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="text-white header-upper-links d-flex align-items-center justify-content-between ">
                <div className="gap-10 text-white d-flex align-items-center ">
                  <FiRefreshCw size={24} />
                  <p className="mb-0">
                    Compare <br /> Products
                  </p>
                </div>
                <div className="gap-10 text-white d-flex align-items-center ">
                  <BsHeart size={24} />
                  <p className="mb-0">
                    Favourite <br /> Products
                  </p>
                </div>
                <div className="gap-10 text-white d-flex align-items-center ">
                  <CiUser size={24} />
                  <p className="mb-0">
                    Login My <br /> Account
                  </p>
                </div>
                <div className="gap-10 text-white d-flex align-items-center ">
                  <BsCart size={24} />
                  <div className=" d-flex flex-column">
                    <span className="bg-white badge text-dark ">0</span>
                    <p className="mb-0">{`₹`}500</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="py-3 header-bottom ">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div className="dropdown">
                  <button
                    className="bg-transparent border-0 btn btn-secondary dropdown-toggle "
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <BiMenuAltLeft size={24} className="mx-2 " />

                    <span className="me-4 d-inline-block ">
                      Shop Categories
                    </span>
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <Link
                        to={"/"}
                        className="text-white dropdown-item "
                        href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/"}
                        className="text-white dropdown-item "
                        href="#">
                        Action
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/"}
                        className="text-white dropdown-item "
                        href="#">
                        Action
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/"}>Our Store</NavLink>
                    <NavLink to={"/"}>Blogs</NavLink>
                    <NavLink to={"/"}>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
