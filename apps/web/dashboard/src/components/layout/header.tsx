import { AuthButtons } from "@/components/auth/auth-buttons";

import { CartButton } from "@/components/cart/cart-button";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <h1 className="font-semibold ">LOGO</h1>

      <nav>
        <ul className="flex items-center gap-4">
          <li>Home</li>
          <li>Products</li>
          <li>Handmade</li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <CartButton />
        <AuthButtons />
      </div>
    </header>
  );
};
