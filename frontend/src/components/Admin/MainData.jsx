import "chart.js/auto";
import { Bar, Doughnut, Line, Pie } from "react-chartjs-2";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../actions/orderAction";
import { getAdminProducts } from "../../actions/productAction";
import { getAllUsers } from "../../actions/userAction";
import { categories } from "../../utils/constants";
import MetaData from "../Layouts/MetaData";

const MainData = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { orders } = useSelector((state) => state.allOrders);
  const { users } = useSelector((state) => state.users);

  let outOfStock = 0;

  products?.forEach((item) => {
    if (item.stock === 0) {
      outOfStock += 1;
    }
  });

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = orders?.reduce(
    (total, order) => total + order.totalPrice,
    0
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const lineState = {
    labels: months,
    datasets: [
      {
        label: `Sales in ${date.getFullYear() - 2}`,
        borderColor: "#8A39E1",
        backgroundColor: "#8A39E1",
        data: months.map((m, i) =>
          orders
            ?.filter(
              (od) =>
                new Date(od.createdAt).getMonth() === i &&
                new Date(od.createdAt).getFullYear() === date.getFullYear() - 2
            )
            .reduce((total, od) => total + od.totalPrice, 0)
        ),
      },
      {
        label: `Sales in ${date.getFullYear() - 1}`,
        borderColor: "orange",
        backgroundColor: "orange",
        data: months.map((m, i) =>
          orders
            ?.filter(
              (od) =>
                new Date(od.createdAt).getMonth() === i &&
                new Date(od.createdAt).getFullYear() === date.getFullYear() - 1
            )
            .reduce((total, od) => total + od.totalPrice, 0)
        ),
      },
      {
        label: `Sales in ${date.getFullYear()}`,
        borderColor: "#4ade80",
        backgroundColor: "#4ade80",
        data: months?.map((m, i) =>
          orders
            ?.filter(
              (od) =>
                new Date(od.createdAt).getMonth() === i &&
                new Date(od.createdAt).getFullYear() === date.getFullYear()
            )
            .reduce((total, od) => total + od.totalPrice, 0)
        ),
      },
    ],
  };

  const statuses = ["Processing", "Shipped", "Delivered"];

  const pieState = {
    labels: statuses,
    datasets: [
      {
        backgroundColor: ["#9333ea", "#facc15", "#4ade80"],
        hoverBackgroundColor: ["#a855f7", "#fde047", "#86efac"],
        data: statuses?.map(
          (status) =>
            orders?.filter((item) => item.orderStatus === status).length
        ),
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "In Stock"],
    datasets: [
      {
        backgroundColor: ["#ef4444", "#22c55e"],
        hoverBackgroundColor: ["#dc2626", "#16a34a"],
        data: [outOfStock, products?.length - outOfStock],
      },
    ],
  };

  const barState = {
    labels: categories,
    datasets: [
      {
        label: "Products",
        borderColor: "#9333ea",
        backgroundColor: "#9333ea",
        hoverBackgroundColor: "#6b21a8",
        data: categories?.map(
          (cat) => products?.filter((item) => item?.category === cat).length
        ),
      },
    ],
  };

  return (
    <>
      <MetaData title="Admin Dashboard | Khati" />

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-6">
        <div className="flex flex-col gap-2 p-6 text-white bg-purple-600 shadow-lg rounded-xl hover:shadow-xl">
          <h4 className="font-medium text-gray-100">Total Sales Amount</h4>
          <h2 className="text-2xl font-bold">
            ₹{totalAmount?.toLocaleString()}
          </h2>
        </div>
        <div className="flex flex-col gap-2 p-6 text-white bg-red-500 shadow-lg rounded-xl hover:shadow-xl">
          <h4 className="font-medium text-gray-100">Total Orders</h4>
          <h2 className="text-2xl font-bold">{orders?.length}</h2>
        </div>
        <div className="flex flex-col gap-2 p-6 text-white bg-yellow-500 shadow-lg rounded-xl hover:shadow-xl">
          <h4 className="font-medium text-gray-100">Total Products</h4>
          <h2 className="text-2xl font-bold">{products?.length}</h2>
        </div>
        <div className="flex flex-col gap-2 p-6 text-white bg-green-500 shadow-lg rounded-xl hover:shadow-xl">
          <h4 className="font-medium text-gray-100">Total Users</h4>
          <h2 className="text-2xl font-bold">{users?.length}</h2>
        </div>
      </div>

      <div className="flex flex-col justify-between min-w-full gap-3 sm:flex-row sm:gap-8">
        <div className="w-full h-auto p-2 bg-white shadow-lg rounded-xl">
          <Line data={lineState} />
        </div>

        <div className="p-4 text-center bg-white shadow-lg rounded-xl">
          <span className="font-medium text-gray-800 uppercase">
            Order Status
          </span>
          <Pie data={pieState} />
        </div>
      </div>

      <div className="flex flex-col justify-between min-w-full gap-3 mb-6 sm:flex-row sm:gap-8">
        <div className="w-full h-auto p-2 bg-white shadow-lg rounded-xl">
          <Bar data={barState} />
        </div>

        <div className="p-4 text-center bg-white shadow-lg rounded-xl">
          <span className="font-medium text-gray-800 uppercase">
            Stock Status
          </span>
          <Doughnut data={doughnutState} />
        </div>
      </div>
    </>
  );
};

export default MainData;
