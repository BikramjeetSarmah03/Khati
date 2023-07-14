import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const categories = [
  "Electronics",
  "TVs & Appliances",
  "Men",
  "Women",
  "Baby & Kids",
  "Home & Furniture",
  "Sports, Books & More",
  "Flights",
  "Offer Zone",
  "Grocery",
];

const MinCategory = () => {
  return (
    <section className="hidden w-full px-2 overflow-hidden bg-white border-b sm:block sm:px-12 mt-14">
      <div className="flex items-center justify-between p-0.5">
        {categories.map((el, i) => (
          <Link
            to="/products"
            key={i}
            className="text-sm p-2 text-gray-800 font-medium hover:text-primary-blue flex items-center gap-0.5 group">
            {el}{" "}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MinCategory;
