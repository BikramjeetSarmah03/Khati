import { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import MenuIcon from "@mui/icons-material/Menu";

const Dashboard = ({ activeTab, children }) => {
  const [onMobile, setOnMobile] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const closeSidebar = () => {
    setToggleSidebar(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) {
        setOnMobile(true);
      } else {
        setOnMobile(false);
      }
    });

    return () =>
      window.removeEventListener("resize", () => {
        if (window.innerWidth < 600) {
          setOnMobile(true);
        } else {
          setOnMobile(false);
        }
      });
  }, []);

  return (
    <>
      <main className="flex min-h-screen mt-14 sm:min-w-full">
        {!onMobile && <Sidebar activeTab={activeTab} />}
        {toggleSidebar && (
          <Sidebar activeTab={activeTab} closeSidebar={closeSidebar} />
        )}

        <div className="w-full min-h-screen sm:w-4/5 sm:ml-[20%]">
          <div className="flex flex-col gap-6 p-2 pb-6 overflow-hidden sm:m-8">
            <button
              onClick={() => setToggleSidebar(true)}
              className="flex items-center justify-center w-10 h-10 text-white bg-gray-700 rounded-full shadow sm:hidden">
              <MenuIcon />
            </button>
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
