import { useSnackbar } from "notistack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  clearErrors,
  getUserDetails,
  updateUser,
} from "../../actions/userAction";
import {
  UPDATE_USER_RESET,
  REMOVE_USER_DETAILS,
} from "../../constants/userConstants";
import Loading from "./Loading";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import TextField from "@mui/material/TextField";
import MetaData from "../Layouts/MetaData";
import BackdropLoader from "../Layouts/BackdropLoader";

const UpdateUser = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const params = useParams();
  const navigate = useNavigate();

  const { user, error, loading } = useSelector((state) => state.userDetails);
  const {
    isUpdated,
    error: updateError,
    loading: updateLoading,
  } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const userId = params.id;

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("gender", gender);
    formData.set("role", role);

    dispatch(updateUser(userId, formData));
  };

  useEffect(() => {
    if (user && user._id !== userId) {
      dispatch(getUserDetails(userId));
    } else {
      setName(user.name);
      setEmail(user.email);
      setGender(user.gender);
      setRole(user.role);
      setAvatarPreview(user.avatar.url);
    }
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (updateError) {
      enqueueSnackbar(updateError, { variant: "error" });
      dispatch(clearErrors());
    }
    if (isUpdated) {
      enqueueSnackbar("User Updates Successfully", { variant: "success" });
      dispatch({ type: UPDATE_USER_RESET });
      dispatch({ type: REMOVE_USER_DETAILS });
      navigate("/admin/users");
    }
  }, [
    dispatch,
    error,
    userId,
    user,
    navigate,
    isUpdated,
    updateError,
    enqueueSnackbar,
  ]);

  return (
    <>
      <MetaData title="Admin: Update User | Khati" />

      {updateLoading && <BackdropLoader />}

      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="flex flex-col max-w-xl mx-auto bg-white rounded-lg shadow-lg w-lg">
            <h2 className="mt-6 text-2xl font-medium text-center text-gray-800">
              Update Profile
            </h2>

            <form onSubmit={updateUserSubmitHandler} className="p-5 sm:p-10">
              <div className="flex flex-col items-start gap-3">
                {/* <!-- input container column --> */}
                <div className="flex flex-col items-center justify-between w-full gap-3 sm:flex-col">
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {/* <!-- input container column --> */}

                {/* <!-- gender input --> */}
                <div className="flex items-center gap-4">
                  <h2 className="text-md">Your Gender :</h2>
                  <div className="flex items-center gap-6" id="radioInput">
                    <RadioGroup
                      row
                      aria-labelledby="radio-buttons-group-label"
                      name="radio-buttons-group">
                      <FormControlLabel
                        name="gender"
                        value="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                        control={<Radio required />}
                        label="Male"
                      />
                      <FormControlLabel
                        name="gender"
                        value="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                        control={<Radio required />}
                        label="Female"
                      />
                    </RadioGroup>
                  </div>
                </div>
                {/* <!-- gender input --> */}

                <div className="flex flex-col items-center justify-between w-full gap-3 sm:flex-row">
                  <Avatar
                    alt="Avatar Preview"
                    src={avatarPreview}
                    sx={{ width: 56, height: 56 }}
                  />
                  <TextField
                    label="Role"
                    select
                    fullWidth
                    variant="outlined"
                    required
                    value={role}
                    onChange={(e) => setRole(e.target.value)}>
                    <MenuItem value={"user"}>User</MenuItem>
                    <MenuItem value={"admin"}>Admin</MenuItem>
                  </TextField>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 font-medium text-white rounded-sm shadow bg-primary-orange hover:shadow-lg">
                  Update
                </button>
                <Link
                  className="w-full py-3 font-medium text-center border rounded-sm shadow hover:bg-gray-100 text-primary-blue"
                  to="/admin/users">
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </>
      )}
    </>
  );
};

export default UpdateUser;
