import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../actions/userAction";
import { useSnackbar } from "notistack";
import BackdropLoader from "../Layouts/BackdropLoader";
import MetaData from "../Layouts/MetaData";
import FormSidebar from "./FormSidebar";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { error, message, loading } = useSelector(
    (state) => state.forgotPassword
  );

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("email", email);
    dispatch(forgotPassword(formData));
    setEmail("");
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (message) {
      enqueueSnackbar(message, { variant: "success" });
    }
  }, [dispatch, error, message, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Forgot Password" />

      {loading && <BackdropLoader />}
      <main className="w-full mt-12 sm:pt-20 sm:mt-0">
        {/* <!-- row --> */}
        <div className="flex m-auto bg-white shadow-lg sm:w-4/6 sm:mt-4 mb-7">
          <FormSidebar
            title="Forgot Your Password?"
            tag="Enter the email address associated with your account."
          />

          {/* <!-- login column --> */}
          <div className="flex-1 overflow-hidden">
            <h2 className="mt-6 text-2xl font-medium text-center text-gray-800">
              Forgot Password
            </h2>

            {/* <!-- edit info container --> */}
            <div className="px-4 py-10 text-center sm:px-14">
              {/* <!-- input container --> */}
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col w-full gap-4">
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  {/* <!-- button container --> */}
                  <div className="flex flex-col gap-2.5 mt-2 mb-32">
                    <button
                      type="submit"
                      className="w-full py-3 font-medium text-white rounded-sm shadow bg-primary-orange">
                      Submit
                    </button>
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

export default ForgotPassword;
