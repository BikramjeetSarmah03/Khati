import ProductMain from "@/components/product/ProductMain";
import Reviews from "@/components/product/Reviews";
import Category from "@/models/CategoryModel";
import Product from "@/models/ProductModel";
import SubCategory from "@/models/SubCategory";
import User from "@/models/UserModel";
import db from "@/utils/db";

async function getProductDetails(params, searchParams) {
  const slug = params.slug;
  const style = searchParams.style;
  const size = searchParams.size || 0;

  await db.connectDb();

  const product = await Product.findOne({ slug })
    .populate({ path: "category", model: Category })
    .populate({ path: "subCategories", model: SubCategory })
    .populate({ path: "reviews.reviewBy", model: User })
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
    ratings: [
      {
        percentage: calculatePercentage("5"),
      },
      {
        percentage: calculatePercentage("4"),
      },
      {
        percentage: calculatePercentage("3"),
      },
      {
        percentage: calculatePercentage("2"),
      },
      {
        percentage: calculatePercentage("1"),
      },
    ],
    reviews: product.reviews.reverse(),
    allSizes: product.subProducts
      .map((p) => p.sizes)
      .flat()
      .sort((a, b) => a.size - b.size)
      .filter(
        (element, index, array) =>
          array.findIndex((el2) => el2.size === element.size) === index
      ),
  };

  const related = await Product.find({ category: product.category._id }).lean();

  function calculatePercentage(num) {
    return (
      (product.reviews.reduce((a, review) => {
        return (
          a +
          (review.rating == Number(num) || review.rating == Number(num) + 0.5)
        );
      }, 0) *
        100) /
      product.reviews.length
    ).toFixed(1);
  }

  db.disconnectDb();
  return {
    product: JSON.parse(JSON.stringify(newProduct)),
    related: JSON.parse(JSON.stringify(related)),
  };
}

export async function generateMetadata({ params }) {
  const slug = params.slug;

  const product = await Product.findOne({ slug });

  return {
    title: `Khati: ${product.name}`,
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

        <Reviews product={product} />

        {/* Related Product Swiper */}
      </div>
    </div>
  );
}
