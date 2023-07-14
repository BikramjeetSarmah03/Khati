import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Searchbar from "./Searchbar";
import PrimaryDropDownMenu from "./PrimaryDropDownMenu";
import SecondaryDropDownMenu from "./SecondaryDropDownMenu";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const { cartItems } = useSelector((state) => state.cart);

  const [togglePrimaryDropDown, setTogglePrimaryDropDown] = useState(false);
  const [toggleSecondaryDropDown, setToggleSecondaryDropDown] = useState(false);

  return (
    <header className="bg-primary-blue fixed top-0 py-2.5 w-full z-10">
      {/* <!-- navbar container --> */}
      <div className="relative flex items-center justify-between w-full px-1 m-auto sm:w-9/12 sm:px-4">
        {/* <!-- logo & search container --> */}
        <div className="flex items-center flex-1">
          <Link className="mr-1 h-7 sm:mr-4" to="/">
            <h1 className="font-serif text-2xl text-white">Khati</h1>
          </Link>

          <Searchbar />
        </div>
        {/* <!-- logo & search container --> */}

        {/* <!-- right navs --> */}
        <div className="flex items-center justify-between ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative">
          {isAuthenticated === false ? (
            <Link
              to="/login"
              className="px-3 sm:px-9 py-0.5 text-primary-blue bg-white border font-medium rounded-sm cursor-pointer">
              Login
            </Link>
          ) : (
            <span
              className="flex items-center gap-1 font-medium text-white cursor-pointer userDropDown"
              onClick={() => setTogglePrimaryDropDown(!togglePrimaryDropDown)}>
              {user.name && user.name.split(" ", 1)}
              <span>
                {togglePrimaryDropDown ? (
                  <ExpandLessIcon sx={{ fontSize: "16px" }} />
                ) : (
                  <ExpandMoreIcon sx={{ fontSize: "16px" }} />
                )}
              </span>
            </span>
          )}

          {togglePrimaryDropDown && (
            <PrimaryDropDownMenu
              setTogglePrimaryDropDown={setTogglePrimaryDropDown}
              user={user}
            />
          )}

          <span
            className="items-center hidden gap-1 font-medium text-white cursor-pointer moreDropDown sm:flex"
            onClick={() =>
              setToggleSecondaryDropDown(!toggleSecondaryDropDown)
            }>
            More
            <span>
              {toggleSecondaryDropDown ? (
                <ExpandLessIcon sx={{ fontSize: "16px" }} />
              ) : (
                <ExpandMoreIcon sx={{ fontSize: "16px" }} />
              )}
            </span>
          </span>

          {toggleSecondaryDropDown && <SecondaryDropDownMenu />}

          <Link
            to="/cart"
            className="relative flex items-center gap-2 font-medium text-white">
            <span>
              <ShoppingCartIcon />
            </span>
            {cartItems.length > 0 && (
              <div className="absolute flex items-center justify-center w-5 h-5 p-2 text-xs bg-red-500 border rounded-full -top-2 left-3">
                {cartItems.length}
              </div>
            )}
            Cart
          </Link>
        </div>
        {/* <!-- right navs --> */}
      </div>
      {/* <!-- navbar container --> */}
    </header>
  );
};

export default Header;
