import { useSelector } from "react-redux";
import MetaData from "../Layouts/MetaData";
import MinCategory from "../Layouts/MinCategory";
import Sidebar from "../User/Sidebar";
import Product from "./Product";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.wishlist);

  return (
    <>
      <MetaData title="Wishlist | Khati" />

      <MinCategory />
      <main className="w-full mt-12 sm:mt-0">
        <div className="flex gap-3.5 sm:w-11/12 sm:mt-4 m-auto mb-7">
          <Sidebar activeTab={"wishlist"} />

          <div className="flex-1 bg-white shadow">
            {/* <!-- wishlist container --> */}
            <div className="flex flex-col">
              <span className="px-4 py-4 text-lg font-medium border-b sm:px-8">
                My Wishlist ({wishlistItems.length})
              </span>

              {wishlistItems.length === 0 && (
                <div className="flex flex-col items-center gap-2 m-6">
                  <img
                    draggable="false"
                    className="object-contain"
                    src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/mywishlist-empty_39f7a5.png"
                    alt="Empty Wishlist"
                  />
                  <span className="mt-6 text-lg font-medium">
                    Empty Wishlist
                  </span>
                  <p>You have no items in your wishlist. Start adding!</p>
                </div>
              )}

              {wishlistItems
                .map((item, index) => <Product {...item} key={index} />)
                .reverse()}
            </div>
            {/* <!-- wishlist container --> */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Wishlist;
