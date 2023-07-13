import ProductMain from "@/components/product/ProductMain";
import Reviews from "@/components/product/Reviews";
import Category from "@/models/CategoryModel";
import Product from "@/models/ProductModel";
import SubCategory from "@/models/SubCategory";
import db from "@/utils/db";

async function getProductDetails(params, searchParams) {
  const slug = params.slug;
  const style = searchParams.style;
  const size = searchParams.size || 0;

  await db.connectDb();

  const product = await Product.findOne({ slug })
    .populate({ path: "category", model: Category })
    .populate({ path: "subCategories", model: SubCategory })
    .lean();
  const subProduct = product.subProducts[style];
  const prices = subProduct.sizes.map((s) => s.price).sort((a, b) => a - b);
  const newProduct = {
    ...product,
    style,
    images: subProduct.images,
    sizes: subProduct.sizes,
    discount: subProduct.discount,
    sku: subProduct.sku,
    colors: product.subProducts.map((p) => p.color),
    priceRange: subProduct.discount
      ? `From ₹${(prices[0] - prices[0] / subProduct.discount).toFixed(
          2
        )} to ₹${(
          prices[prices.length - 1] -
          prices[prices.length - 1] / subProduct.discount
        ).toFixed(2)}`
      : `From ₹${prices[0]} to ₹${prices[prices.length - 1]}`,
    price:
      subProduct.discount > 0
        ? (
            subProduct.sizes[size].price -
            subProduct.sizes[size].price / subProduct.discount
          ).toFixed(2)
        : subProduct.sizes[size].price,
    priceBefore: subProduct.sizes[size].price,
    quantity: subProduct.sizes[size].qty,
  };

  return { product: JSON.parse(JSON.stringify(newProduct)) };
}

export async function generateMetadata({ params }) {
  const slug = params.slug;

  const product = await Product.findOne({ slug });

  return {
    title: product.name,
  };
}

export default async function ProductPage({ params, searchParams }) {
  const { product } = await getProductDetails(params, searchParams);

  return (
    <div className="min-h-screen">
      <div className="max-w-[1300px] mx-auto p-4">
        <div className="text-sm text-[#666]">
          Home / {product?.category?.name}
          {product?.subCategories?.map((sub) => (
            <span>/{sub.name}</span>
          ))}
        </div>

        <ProductMain product={product} size={searchParams.size} />

        <Reviews />
        {/* Related Product Swiper */}
      </div>
    </div>
  );
}
