import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  clearErrors,
  loadUser,
  updatePassword,
} from "../../actions/userAction";
import { UPDATE_PASSWORD_RESET } from "../../constants/userConstants";
import BackdropLoader from "../Layouts/BackdropLoader";
import MetaData from "../Layouts/MetaData";
import FormSidebar from "./FormSidebar";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePasswordSubmitHandler = (e) => {
    e.preventDefault();

    if (newPassword.length < 8) {
      enqueueSnackbar("Password length must be atleast 8 characters", {
        variant: "warning",
      });
      return;
    }
    if (newPassword !== confirmPassword) {
      enqueueSnackbar("Password Doesn't Match", { variant: "error" });
      return;
    }

    const formData = new FormData();
    formData.set("oldPassword", oldPassword);
    formData.set("newPassword", newPassword);
    formData.set("confirmPassword", confirmPassword);

    dispatch(updatePassword(formData));
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (isUpdated) {
      enqueueSnackbar("Password Updated Successfully", { variant: "success" });
      dispatch(loadUser());
      navigate("/account");

      dispatch({ type: UPDATE_PASSWORD_RESET });
    }
  }, [dispatch, error, isUpdated, navigate, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Password Update | Khati" />

      {loading && <BackdropLoader />}
      <main className="w-full mt-12 sm:pt-20 sm:mt-0">
        {/* <!-- row --> */}
        <div className="flex m-auto bg-white shadow-lg sm:w-4/6 sm:mt-4 mb-7">
          <FormSidebar
            title="Looks like you want to update password!"
            tag="Enter your current and new password to update"
          />

          {/* <!-- signup column --> */}
          <div className="flex-1 overflow-hidden">
            <h2 className="mt-6 text-2xl font-medium text-center text-gray-800">
              Update Password
            </h2>
            {/* <!-- personal info procedure container --> */}
            <form
              onSubmit={updatePasswordSubmitHandler}
              className="p-5 sm:p-14">
              <div className="flex flex-col items-start gap-4">
                {/* <!-- input container column --> */}
                <div className="flex flex-col items-center justify-between w-full gap-3 sm:flex-col">
                  <TextField
                    fullWidth
                    label="Current Password"
                    type="password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                  />
                  <TextField
                    fullWidth
                    label="New Password"
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Confirm New Password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
                {/* <!-- input container column --> */}
                <button
                  type="submit"
                  className="w-full py-3 font-medium text-white rounded-sm shadow bg-primary-orange hover:shadow-lg">
                  Update
                </button>
                <Link
                  className="w-full py-3 mb-8 font-medium text-center border rounded-sm shadow hover:bg-gray-50 text-primary-blue"
                  to="/account">
                  Cancel
                </Link>
              </div>
            </form>
            {/* <!-- personal info procedure container --> */}
          </div>
          {/* <!-- signup column --> */}
        </div>
        {/* <!-- row --> */}
      </main>
    </>
  );
};

export default UpdatePassword;
