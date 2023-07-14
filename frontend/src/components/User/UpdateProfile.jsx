import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { Avatar, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useSnackbar } from "notistack";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, loadUser, updateProfile } from "../../actions/userAction";
import { UPDATE_PROFILE_RESET } from "../../constants/userConstants";
import BackdropLoader from "../Layouts/BackdropLoader";
import MetaData from "../Layouts/MetaData";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");

  const updateProfileHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("gender", gender);
    formData.set("avatar", avatar);

    dispatch(updateProfile(formData));
  };

  const handleUpdateDataChange = (e) => {
    const reader = new FileReader();
    setAvatar("");
    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setGender(user.gender);
      setAvatarPreview(user.avatar.url);
    }
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (isUpdated) {
      enqueueSnackbar("Profile Updated Successfully", { variant: "success" });
      dispatch(loadUser());
      navigate("/account");

      dispatch({ type: UPDATE_PROFILE_RESET });
    }
  }, [dispatch, error, user, isUpdated, navigate, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Update Profile | Khati" />

      {loading && <BackdropLoader />}
      <main className="w-full mt-12 sm:pt-20 sm:mt-0">
        {/* <!-- row --> */}
        <div className="flex m-auto bg-white shadow-lg sm:w-4/6 sm:mt-4 mb-7">
          {/* <!-- sidebar column  --> */}
          <div className="flex-col hidden w-2/5 gap-4 py-10 loginSidebar bg-primary-blue px-9 sm:flex">
            <h1 className="text-3xl font-medium text-white">
              Looks like you're new here!
            </h1>
            <p className="pr-2 text-lg text-gray-200">
              Sign up with your mobile number to get started
            </p>
          </div>
          {/* <!-- sidebar column  --> */}

          {/* <!-- signup column --> */}
          <div className="flex-1 overflow-hidden">
            <h2 className="mt-6 text-2xl font-medium text-center text-gray-800">
              Update Profile
            </h2>
            {/* <!-- personal info procedure container --> */}
            <form
              onSubmit={updateProfileHandler}
              encType="multipart/form-data"
              className="p-5 sm:p-10">
              <div className="flex flex-col items-start gap-4">
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
                  <label className="rounded font-medium bg-gray-400 text-center cursor-pointer text-white w-full py-2 px-2.5 shadow hover:shadow-lg">
                    <input
                      type="file"
                      name="avatar"
                      accept="image/*"
                      onChange={handleUpdateDataChange}
                      className="hidden"
                    />
                    Choose File
                  </label>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 font-medium text-white rounded-sm shadow bg-primary-orange hover:shadow-lg">
                  Update
                </button>
                <Link
                  className="w-full py-3 font-medium text-center border rounded-sm shadow hover:bg-gray-100 text-primary-blue"
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

export default UpdateProfile;
