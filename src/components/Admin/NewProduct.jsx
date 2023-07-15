import TextField from "@mui/material/TextField";
import { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";
import { createProduct, clearErrors } from "../../actions/productAction";
import ImageIcon from "@mui/icons-material/Image";
import { categories } from "../../utils/constants";
import MetaData from "../Layouts/MetaData";
import BackdropLoader from "../Layouts/BackdropLoader";

const NewProduct = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const { loading, success, error } = useSelector((state) => state.newProduct);

  const [highlights, setHighlights] = useState([]);
  const [highlightInput, setHighlightInput] = useState("");
  const [specs, setSpecs] = useState([]);
  const [specsInput, setSpecsInput] = useState({
    title: "",
    description: "",
  });

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [cuttedPrice, setCuttedPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [warranty, setWarranty] = useState(0);
  const [brand, setBrand] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const [logo, setLogo] = useState("");
  const [logoPreview, setLogoPreview] = useState("");

  const handleSpecsChange = (e) => {
    setSpecsInput({ ...specsInput, [e.target.name]: e.target.value });
  };

  const addSpecs = () => {
    if (!specsInput.title.trim() || !specsInput.title.trim()) return;
    setSpecs([...specs, specsInput]);
    setSpecsInput({ title: "", description: "" });
  };

  const addHighlight = () => {
    if (!highlightInput.trim()) return;
    setHighlights([...highlights, highlightInput]);
    setHighlightInput("");
  };

  const deleteHighlight = (index) => {
    setHighlights(highlights.filter((h, i) => i !== index));
  };

  const deleteSpec = (index) => {
    setSpecs(specs.filter((s, i) => i !== index));
  };

  const handleLogoChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setLogoPreview(reader.result);
        setLogo(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const handleProductImageChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((oldImages) => [...oldImages, reader.result]);
          setImages((oldImages) => [...oldImages, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const newProductSubmitHandler = (e) => {
    e.preventDefault();

    // required field checks
    if (highlights.length <= 0) {
      enqueueSnackbar("Add Highlights", { variant: "warning" });
      return;
    }
    if (!logo) {
      enqueueSnackbar("Add Brand Logo", { variant: "warning" });
      return;
    }
    if (specs.length <= 1) {
      enqueueSnackbar("Add Minimum 2 Specifications", { variant: "warning" });
      return;
    }
    if (images.length <= 0) {
      enqueueSnackbar("Add Product Images", { variant: "warning" });
      return;
    }

    const formData = new FormData();

    formData.set("name", name);
    formData.set("description", description);
    formData.set("price", price);
    formData.set("cuttedPrice", cuttedPrice);
    formData.set("category", category);
    formData.set("stock", stock);
    formData.set("warranty", warranty);
    formData.set("brandname", brand);
    formData.set("logo", logo);

    images.forEach((image) => {
      formData.append("images", image);
    });

    highlights.forEach((h) => {
      formData.append("highlights", h);
    });

    specs.forEach((s) => {
      formData.append("specifications", JSON.stringify(s));
    });

    dispatch(createProduct(formData));
  };

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (success) {
      enqueueSnackbar("Product Created", { variant: "success" });
      dispatch({ type: NEW_PRODUCT_RESET });
      navigate("/admin/products");
    }
  }, [dispatch, error, success, navigate, enqueueSnackbar]);

  return (
    <>
      <MetaData title="Admin: New Product | Khati" />

      {loading && <BackdropLoader />}
      <form
        onSubmit={newProductSubmitHandler}
        encType="multipart/form-data"
        className="flex flex-col p-4 bg-white rounded-lg shadow sm:flex-row"
        id="mainform">
        <div className="flex flex-col gap-3 m-2 sm:w-1/2">
          <TextField
            label="Name"
            variant="outlined"
            size="small"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Description"
            multiline
            rows={3}
            required
            variant="outlined"
            size="small"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="flex justify-between">
            <TextField
              label="Price"
              type="number"
              variant="outlined"
              size="small"
              InputProps={{
                inputProps: {
                  min: 0,
                },
              }}
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <TextField
              label="Cutted Price"
              type="number"
              variant="outlined"
              size="small"
              InputProps={{
                inputProps: {
                  min: 0,
                },
              }}
              required
              value={cuttedPrice}
              onChange={(e) => setCuttedPrice(e.target.value)}
            />
          </div>
          <div className="flex justify-between gap-4">
            <TextField
              label="Category"
              select
              fullWidth
              variant="outlined"
              size="small"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}>
              {categories.map((el, i) => (
                <MenuItem value={el} key={i}>
                  {el}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Stock"
              type="number"
              variant="outlined"
              size="small"
              InputProps={{
                inputProps: {
                  min: 0,
                },
              }}
              required
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            <TextField
              label="Warranty"
              type="number"
              variant="outlined"
              size="small"
              InputProps={{
                inputProps: {
                  min: 0,
                },
              }}
              required
              value={warranty}
              onChange={(e) => setWarranty(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between border rounded">
              <input
                value={highlightInput}
                onChange={(e) => setHighlightInput(e.target.value)}
                type="text"
                placeholder="Highlight"
                className="flex-1 px-2 border-none outline-none"
              />
              <span
                onClick={() => addHighlight()}
                className="px-6 py-2 text-white rounded-r cursor-pointer bg-primary-blue hover:shadow-lg">
                Add
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              {highlights.map((h, i) => (
                <div className="flex items-center justify-between px-2 py-1 rounded bg-green-50">
                  <p className="text-sm font-medium text-green-800">{h}</p>
                  <span
                    onClick={() => deleteHighlight(i)}
                    className="p-1 text-red-600 rounded-full cursor-pointer hover:bg-red-100">
                    <DeleteIcon />
                  </span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="font-medium">Brand Details</h2>
          <div className="flex items-start justify-between gap-4">
            <TextField
              label="Brand"
              type="text"
              variant="outlined"
              size="small"
              required
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <div className="flex items-center justify-center w-24 h-10 border rounded-lg">
              {!logoPreview ? (
                <ImageIcon />
              ) : (
                <img
                  draggable="false"
                  src={logoPreview}
                  alt="Brand Logo"
                  className="object-contain w-full h-full"
                />
              )}
            </div>
            <label className="rounded bg-gray-400 text-center cursor-pointer text-white py-2 px-2.5 shadow hover:shadow-lg">
              <input
                type="file"
                name="logo"
                accept="image/*"
                onChange={handleLogoChange}
                className="hidden"
              />
              Choose Logo
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-2 m-2 sm:w-1/2">
          <h2 className="font-medium">Specifications</h2>

          <div className="flex items-center gap-2 justify-evenly">
            <TextField
              value={specsInput.title}
              onChange={handleSpecsChange}
              name="title"
              label="Name"
              placeholder="Model No"
              variant="outlined"
              size="small"
            />
            <TextField
              value={specsInput.description}
              onChange={handleSpecsChange}
              name="description"
              label="Description"
              placeholder="WJDK42DF5"
              variant="outlined"
              size="small"
            />
            <span
              onClick={() => addSpecs()}
              className="px-6 py-2 text-white rounded cursor-pointer bg-primary-blue hover:shadow-lg">
              Add
            </span>
          </div>

          <div className="flex flex-col gap-1.5">
            {specs.map((spec, i) => (
              <div className="flex items-center justify-between px-2 py-1 text-sm rounded bg-blue-50">
                <p className="font-medium text-gray-500">{spec.title}</p>
                <p>{spec.description}</p>
                <span
                  onClick={() => deleteSpec(i)}
                  className="p-1 text-red-600 bg-red-100 rounded-full cursor-pointer hover:bg-red-200">
                  <DeleteIcon />
                </span>
              </div>
            ))}
          </div>

          <h2 className="font-medium">Product Images</h2>
          <div className="flex h-32 gap-2 overflow-x-auto border rounded">
            {imagesPreview.map((image, i) => (
              <img
                draggable="false"
                src={image}
                alt="Product"
                key={i}
                className="object-contain w-full h-full"
              />
            ))}
          </div>
          <label className="p-2 my-2 font-medium text-center text-white bg-gray-400 rounded shadow cursor-pointer hover:shadow-lg">
            <input
              type="file"
              name="images"
              accept="image/*"
              multiple
              onChange={handleProductImageChange}
              className="hidden"
            />
            Choose Files
          </label>

          <div className="flex justify-end">
            <input
              form="mainform"
              type="submit"
              className="w-1/3 p-3 font-medium text-white uppercase rounded shadow cursor-pointer bg-primary-orange hover:shadow-lg"
              value="Submit"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default NewProduct;
