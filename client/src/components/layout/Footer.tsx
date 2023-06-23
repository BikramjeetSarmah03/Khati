export default function Footer() {
  return (
    <footer className="py-16 bg-gray-100">
      <div className="container grid grid-cols-1 px-8 mx-auto md:grid-cols-8 lg:max-w-6xl">
        <div className="col-span-4 mb-4 md:mb-0">
          <h1 className="relative my-4 font-bold uppercase md:text-2xl lg:text-3xl">
            Contact Us
            <span className="absolute -bottom-1 left-1 w-14 h-0.5 bg-primary"></span>
          </h1>
          <div className="space-y-2">
            <div className="grid grid-cols-5 text-black-light">
              <div className="col-span-1 font-semibold">Address:</div>
              <div className="col-span-3 ml-4 md:ml-0">
                Tezpur, Assam. Pin: 784001
              </div>
            </div>
            <div className="grid grid-cols-5 text-black-light">
              <div className="col-span-1 font-semibold">Phone:</div>
              <div className="col-span-3 ml-4 md:ml-0">+91 1234567890</div>
            </div>
            <div className="grid grid-cols-5 text-black-light">
              <div className="col-span-1 font-semibold">Email:</div>
              <div className="col-span-3 ml-4 md:ml-0">
                dev.bikramjeet@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <h1 className="relative my-4 font-bold uppercase md:text-2xl lg:text-3xl">
            Accounts
            <span className="absolute -bottom-1 left-1 w-14 h-0.5 bg-primary"></span>
          </h1>

          <ul className="space-y-2 list-disc text-black-light">
            <li className="ml-4">My Account</li>
            <li className="ml-4">My Wishlist</li>
            <li className="ml-4">My Cart</li>
            <li className="ml-4">Sign In</li>
            <li className="ml-4">Check out</li>
          </ul>
        </div>
        <div className="col-span-2">
          <h1 className="relative my-4 font-bold uppercase md:text-2xl lg:text-3xl">
            Shipping
            <span className="absolute -bottom-1 left-1 w-14 h-0.5 bg-primary"></span>
          </h1>

          <ul className="space-y-2 list-disc text-black-light">
            <li className="ml-4">New Products</li>
            <li className="ml-4">Top Sellers</li>
            <li className="ml-4">Manufactirers</li>
            <li className="ml-4">Suppliers</li>
            <li className="ml-4">Specials</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
