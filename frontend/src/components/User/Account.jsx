import { useEffect } from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Layouts/Loader";
import MinCategory from "../Layouts/MinCategory";
import MetaData from "../Layouts/MetaData";

const Account = () => {
  const navigate = useNavigate();

  const { user, loading, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  const getLastName = () => {
    const nameArray = user.name.split(" ");
    return nameArray[nameArray.length - 1];
  };

  return (
    <>
      <MetaData title="My Profile" />

      {loading ? (
        <Loader />
      ) : (
        <>
          <MinCategory />
          <main className="w-full mt-12 sm:mt-0">
            {/* <!-- row --> */}
            <div className="flex gap-3.5 sm:w-11/12 sm:mt-4 m-auto mb-7">
              <Sidebar activeTab={"profile"} />

              {/* <!-- details column --> */}
              <div className="flex-1 overflow-hidden bg-white shadow">
                {/* <!-- edit info container --> */}
                <div className="flex flex-col gap-12 m-4 sm:mx-8 sm:my-6">
                  {/* <!-- personal info --> */}
                  <div className="flex flex-col items-start gap-5">
                    <span className="text-lg font-medium">
                      Personal Information{" "}
                      <Link
                        to="/account/update"
                        className="ml-8 text-sm font-medium cursor-pointer text-primary-blue">
                        Edit
                      </Link>
                    </span>

                    <div
                      className="flex flex-col items-center gap-3 sm:flex-row"
                      id="personalInputs">
                      <div className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                        <label className="text-xs text-gray-500">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={user.name.split(" ", 1)}
                          className="text-sm text-gray-500 border-none outline-none cursor-not-allowed"
                          disabled
                        />
                      </div>
                      <div className="flex flex-col gap-0.5 w-64 px-3 py-1.5 rounded-sm border inputs cursor-not-allowed bg-gray-100 focus-within:border-primary-blue">
                        <label className="text-xs text-gray-500">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={getLastName()}
                          className="text-sm text-gray-500 border-none outline-none cursor-not-allowed"
                          disabled
                        />
                      </div>
                    </div>

                    {/* <!-- gender --> */}
                    <div className="flex flex-col gap-2">
                      <h2 className="text-sm">Your Gender</h2>
                      <div className="flex items-center gap-8" id="radioInput">
                        <div className="flex items-center gap-4 text-gray-500 cursor-not-allowed inputs">
                          <input
                            type="radio"
                            name="gender"
                            checked={user.gender === "male"}
                            id="male"
                            className="w-4 h-4 cursor-not-allowed"
                            disabled
                          />
                          <label htmlFor="male" className="cursor-not-allowed">
                            Male
                          </label>
                        </div>
                        <div className="flex items-center gap-4 text-gray-500 cursor-not-allowed inputs">
                          <input
                            type="radio"
                            name="gender"
                            checked={user.gender === "female"}
                            id="female"
                            className="w-4 h-4 cursor-not-allowed"
                            disabled
                          />
                          <label
                            htmlFor="female"
                            className="cursor-not-allowed">
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                    {/* <!-- gender --> */}
                  </div>
                  {/* <!-- personal info --> */}

                  {/* <!-- email address info --> */}
                  <div className="flex flex-col items-start gap-5">
                    <span className="text-lg font-medium">
                      Email Address
                      <Link
                        to="/account/update"
                        className="ml-3 text-sm font-medium cursor-pointer text-primary-blue sm:ml-8">
                        Edit
                      </Link>
                      <Link
                        to="/password/update"
                        className="ml-3 text-sm font-medium text-primary-blue sm:ml-8">
                        Change Password
                      </Link>
                    </span>

                    <div className="flex items-center gap-3">
                      <div className="flex flex-col gap-0.5 sm:w-64 px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                        <label className="text-xs text-gray-500">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={user.email}
                          className="text-sm text-gray-500 border-none outline-none cursor-not-allowed"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- email address info --> */}

                  {/* <!-- mobile number info --> */}
                  <div className="flex flex-col items-start gap-5">
                    <span className="text-lg font-medium">
                      Mobile Number
                      <span
                        className="ml-3 text-sm font-medium cursor-pointer text-primary-blue sm:ml-8"
                        id="mobEditBtn">
                        Edit
                      </span>
                    </span>

                    <div className="flex items-center gap-3">
                      <div className="flex flex-col gap-0.5 sm:w-64 px-3 py-1.5 rounded-sm border bg-gray-100 cursor-not-allowed focus-within:border-primary-blue">
                        <label className="text-xs text-gray-500">
                          Mobile Number
                        </label>
                        <input
                          type="tel"
                          value="+919876543210"
                          className="text-sm text-gray-500 border-none outline-none cursor-not-allowed"
                          disabled
                        />
                      </div>
                    </div>
                  </div>
                  {/* <!-- mobile number info --> */}
                </div>
                {/* <!-- edit info container --> */}

                <img
                  draggable="false"
                  className="object-contain w-full"
                  src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/myProfileFooter_4e9fe2.png"
                  alt="footer"
                />
              </div>
              {/* <!-- details column --> */}
            </div>
          </main>
        </>
      )}
    </>
  );
};

export default Account;
