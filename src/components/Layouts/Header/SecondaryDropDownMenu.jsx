import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import DownloadIcon from "@mui/icons-material/Download";

const SecondaryDropDownMenu = () => {
  const navs = [
    {
      title: "Notification Preferences",
      icon: <NotificationsIcon sx={{ fontSize: "18px" }} />,
      redirect: "#",
    },
    {
      title: "Sell on Khati",
      icon: <BusinessCenterIcon sx={{ fontSize: "18px" }} />,
      redirect: "#",
    },
    {
      title: "24x7 Customer Care",
      icon: <LiveHelpIcon sx={{ fontSize: "18px" }} />,
      redirect: "#",
    },
    {
      title: "Advertise",
      icon: <TrendingUpIcon sx={{ fontSize: "18px" }} />,
      redirect: "#",
    },
    {
      title: "Download App",
      icon: <DownloadIcon sx={{ fontSize: "18px" }} />,
      redirect: "#",
    },
  ];

  return (
    <div className="absolute flex-col text-sm bg-white rounded shadow-2xl w-60 -right-2 top-9">
      {navs.map((item, i) => {
        const { title, icon, redirect } = item;

        return (
          <a
            className="pl-3 py-3.5 border-b flex gap-3 items-center hover:bg-gray-50 rounded-t"
            href={redirect}
            key={i}>
            <span className="text-primary-blue">{icon}</span>
            {title}
          </a>
        );
      })}

      <div className="absolute right-1/2 -top-2.5">
        <div className="arrow_down"></div>
      </div>
    </div>
  );
};

export default SecondaryDropDownMenu;
