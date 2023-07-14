import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FolderIcon from "@mui/icons-material/Folder";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import PersonIcon from "@mui/icons-material/Person";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../actions/userAction";

const Sidebar = ({ activeTab }) => {
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
    <div className="flex-col hidden w-1/4 gap-4 px-1 sm:flex">
      {/* <!-- profile card --> */}
      <div className="flex items-center gap-4 p-3 bg-white rounded-sm shadow">
        {/* <!-- user icon --> */}
        <div className="w-12 h-12 rounded-full">
          <img
            draggable="false"
            className="object-cover w-full h-full rounded-full"
            src={user.avatar.url}
            alt="Avatar"
          />
        </div>
        {/* <!-- user icon --> */}
        <div className="flex flex-col gap-1">
          <p className="text-xs">Hello,</p>
          <h2 className="font-medium">{user.name}</h2>
        </div>
      </div>
      {/* <!-- profile card --> */}

      {/* <!-- nav tiles --> */}
      <div className="flex flex-col bg-white rounded-sm shadow">
        {/* <!-- my orders tab --> */}
        <div className="flex items-center gap-5 px-4 py-4 border-b">
          <span className="text-primary-blue">
            <FolderIcon />
          </span>
          <Link
            className="flex justify-between w-full font-medium text-gray-500 hover:text-primary-blue"
            to="/orders">
            MY ORDERS
            <span>
              <ChevronRightIcon />
            </span>
          </Link>
        </div>
        {/* <!-- my orders tab --> */}

        {/* <!-- account settings tab --> */}
        <div className="flex items-center gap-5 px-4 py-4">
          <span className="text-primary-blue">
            <PersonIcon />
          </span>
          <p className="flex justify-between w-full font-medium text-gray-500">
            ACCOUNT SETTINGS
          </p>
        </div>
        <div className="flex flex-col pb-3 text-sm border-b">
          <Link
            to="/account"
            className={`${
              activeTab === "profile"
                ? "bg-blue-50 text-primary-blue font-medium"
                : "hover:bg-blue-50 hover:text-primary-blue"
            } p-3 pl-14`}>
            Profile Information
          </Link>
        </div>
        {/* <!-- account settings tab --> */}

        {/* <!-- my stuff tab --> */}
        <div className="flex items-center gap-5 px-4 py-4">
          <span className="text-primary-blue">
            <FolderSharedIcon />
          </span>
          <p className="flex justify-between w-full font-medium text-gray-500">
            MY STUFF
          </p>
        </div>
        <div className="flex flex-col pb-3 text-sm border-b">
          <Link
            to="/wishlist"
            className={`${
              activeTab === "wishlist"
                ? "bg-blue-50 text-primary-blue font-medium"
                : "hover:bg-blue-50 hover:text-primary-blue"
            } p-3 pl-14`}>
            My Wishlist
          </Link>
        </div>
        {/* <!-- my stuff tab --> */}

        {/* <!-- logout tab --> */}
        <div className="flex items-center gap-5 px-4 py-4 border-b">
          <span className="text-primary-blue">
            <PowerSettingsNewIcon />
          </span>
          <div
            className="flex justify-between w-full font-medium text-gray-500 cursor-pointer hover:text-primary-blue"
            onClick={handleLogout}>
            Logout
            <span>
              <ChevronRightIcon />
            </span>
          </div>
        </div>
        {/* <!-- logout tab --> */}
      </div>
      {/* <!-- nav tiles --> */}

      {/* <!-- frequenty visited tab --> */}
      <div className="flex flex-col items-start gap-2 p-4 bg-white rounded-sm shadow">
        <span className="text-xs font-medium">Frequently Visited:</span>
        <div className="flex gap-2.5 text-xs text-gray-500">
          <Link to="/password/update">Change Password</Link>
          <Link to="/orders">Track Order</Link>
        </div>
      </div>
      {/* <!-- frequenty visited tab --> */}
    </div>
  );
};

export default Sidebar;
