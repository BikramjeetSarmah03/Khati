import { Link, useNavigate } from "react-router-dom";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import InventoryIcon from "@mui/icons-material/Inventory";
import GroupIcon from "@mui/icons-material/Group";
import ReviewsIcon from "@mui/icons-material/Reviews";
import AddBoxIcon from "@mui/icons-material/AddBox";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import CloseIcon from "@mui/icons-material/Close";
import Avatar from "@mui/material/Avatar";
import { useDispatch, useSelector } from "react-redux";
import "./Sidebar.css";
import { useSnackbar } from "notistack";
import { logoutUser } from "../../../actions/userAction";

const navMenu = [
  {
    icon: <EqualizerIcon />,
    label: "Dashboard",
    ref: "/admin/dashboard",
  },
  {
    icon: <ShoppingBagIcon />,
    label: "Orders",
    ref: "/admin/orders",
  },
  {
    icon: <InventoryIcon />,
    label: "Products",
    ref: "/admin/products",
  },
  {
    icon: <AddBoxIcon />,
    label: "Add Product",
    ref: "/admin/new_product",
  },
  {
    icon: <GroupIcon />,
    label: "Users",
    ref: "/admin/users",
  },
  {
    icon: <ReviewsIcon />,
    label: "Reviews",
    ref: "/admin/reviews",
  },
  {
    icon: <AccountBoxIcon />,
    label: "My Profile",
    ref: "/account",
  },
  {
    icon: <LogoutIcon />,
    label: "Logout",
  },
];

const Sidebar = ({ activeTab, closeSidebar }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useSelector((state) => state.user);

  const handleLogout = () => {
    dispatch(logoutUser());
    enqueueSnackbar("Logout Successfully", { variant: "success" });
    navigate("/login");
  };

  return (
    <aside
      className={`fixed left-0 z-10 block w-3/4 max-h-screen min-h-screen overflow-x-hidden text-white bg-gray-800 border-r sidebar sm:z-0 pb-14 sm:w-1/5 `}>
      <div className="flex items-center gap-3 bg-gray-700 p-2 rounded-lg shadow-lg my-4 mx-3.5">
        <Avatar alt="Avatar" src={user.avatar.url} />
        <div className="flex flex-col gap-0">
          <span className="text-lg font-medium">{user.name}</span>
          <span className="text-sm text-gray-300">{user.email}</span>
        </div>
        <button
          onClick={closeSidebar}
          className="flex items-center justify-center w-10 h-10 ml-auto bg-gray-800 rounded-full sm:hidden">
          <CloseIcon />
        </button>
      </div>

      <div className="flex flex-col w-full gap-0 my-8">
        {navMenu.map((item, index) => {
          const { icon, label, ref } = item;
          return (
            <>
              {label === "Logout" ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 px-4 py-3 font-medium hover:bg-gray-700"
                  key={index}>
                  <span>{icon}</span>
                  <span>{label}</span>
                </button>
              ) : (
                <Link
                  to={ref}
                  className={`${
                    activeTab === index ? "bg-gray-700" : "hover:bg-gray-700"
                  } flex gap-3 items-center py-3 px-4 font-medium`}
                  key={index}>
                  <span>{icon}</span>
                  <span>{label}</span>
                </Link>
              )}
            </>
          );
        })}
      </div>

      <div className="flex flex-col gap-1 bg-gray-700 p-3 rounded-lg shadow-lg mb-6 mt-28 mx-3.5 overflow-hidden">
        <h5>Developed with ❤️ by:</h5>
        <div className="flex flex-col gap-0">
          <a
            href="https://github.com/bikramjeetSarmah03/"
            target="_blank"
            rel="noreferrer"
            className="text-lg font-medium hover:text-blue-500">
            Bikramjeet Sarmah
          </a>
          <a
            href="mailto:dev.bikramjeet@gmail.com"
            className="text-sm text-gray-300 hover:text-blue-500">
            dev.bikramjeet@gmail.com
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
