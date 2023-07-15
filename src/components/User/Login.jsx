import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loginUser } from "../../actions/userAction";
import { useSnackbar } from "notistack";
import BackdropLoader from "../Layouts/BackdropLoader";
import MetaData from "../Layouts/MetaData";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const location = useLocation();

  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(email, password));
  };

  const redirect = location.search ? location.search.split("=")[1] : "account";

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate(`/${redirect}`);
    }
  }, [dispatch, error, isAuthenticated, redirect, navigate, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Login | Khati" />

      {loading && <BackdropLoader />}
      <main className="w-full mt-12 sm:pt-20 sm:mt-0">
        {/* <!-- row --> */}
        <div className="flex m-auto bg-white shadow-lg sm:w-4/6 sm:mt-4 mb-7">
          {/* <!-- sidebar column  --> */}
          <div className="flex-col hidden w-2/5 gap-4 p-10 pr-12 loginSidebar bg-primary-blue sm:flex">
            <h1 className="text-3xl font-medium text-white">Login</h1>
            <p className="text-lg text-gray-200">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
          {/* <!-- sidebar column  --> */}

          {/* <!-- login column --> */}
          <div className="flex-1 overflow-hidden">
            {/* <!-- edit info container --> */}
            <div className="px-4 py-10 text-center sm:px-14">
              {/* <!-- input container --> */}
              <form onSubmit={handleLogin}>
                <div className="flex flex-col w-full gap-4">
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <TextField
                    fullWidth
                    id="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  {/* <span className="text-xxs text-red-500 font-medium text-left mt-0.5">Please enter valid Email ID/Mobile number</span> */}

                  {/* <!-- button container --> */}
                  <div className="flex flex-col gap-2.5 mt-2 mb-32">
                    <button
                      type="submit"
                      className="w-full py-3 font-medium text-white rounded-sm shadow bg-primary-orange hover:shadow-lg">
                      Login
                    </button>
                    <Link
                      to="/password/forgot"
                      className="w-full py-3 font-medium text-center border rounded-sm shadow hover:bg-gray-50 text-primary-blue">
                      Forgot Password?
                    </Link>
                  </div>
                  {/* <!-- button container --> */}
                </div>
              </form>
              {/* <!-- input container --> */}

              <Link
                to="/register"
                className="text-sm font-medium text-primary-blue">
                New to Khati? Create an account
              </Link>
            </div>
            {/* <!-- edit info container --> */}
          </div>
          {/* <!-- login column --> */}
        </div>
        {/* <!-- row --> */}
      </main>
    </>
  );
};

export default Login;
