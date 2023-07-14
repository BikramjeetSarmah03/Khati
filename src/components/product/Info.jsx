"use client";
import styles from "./styles/info.module.scss";
import { TbPlus, TbMinus } from "react-icons/tb";
import { BsHandbagFill, BsHeart } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import Share from "./Share";
import Accordian from "./Accordian";
import SimillarSwiper from "./SimillarSwiper";
import DialogModal from "./DialogModal";

export default function Info({ product, setActiveImg }) {
  const paramSize = useSearchParams().get("size");
  const paramStyle = useSearchParams().get("style");
  const router = useRouter();
  const [size, setSize] = useState(paramSize);
  const [qty, setQty] = useState(1);

  return (
    <div className={`space-y-4 ${styles.infos}`}>
      <DialogModal />

      <div>
        <h1 className={styles.infos__name}>{product.name}</h1>
        <h2 className={styles.infos__sku}>{product.sku}</h2>
        <div className={styles.infos__rating}>
          {/* rating component */}({product.numReviews}
          {product.numReviews == 1 ? " review" : " reviews"})
        </div>
      </div>
      <div className={styles.infos__price}>
        {!size ? <h2>{product.priceRange}</h2> : <h1>{product.price}$</h1>}
        {product.discount > 0 ? (
          <h3>
            {size && <span>{product.priceBefore}$</span>}
            <span>(-{product.discount}%)</span>
          </h3>
        ) : (
          ""
        )}
      </div>
      <span className={styles.infos__shipping}>
        {product.shipping
          ? `+${product.shipping}$ Shipping fee`
          : "Free Shipping"}
      </span>
      <span>
        {size
          ? product.quantity
          : product.sizes.reduce((start, next) => start + next.qty, 0)}{" "}
        pieces available.
      </span>

      <div className={styles.infos__sizes}>
        <h4>Select a Size : </h4>
        <div className={styles.infos__sizes_wrap}>
          {product.sizes.map((size, i) => (
            <Link
              href={`/product/${product.slug}?style=${paramStyle}&size=${i}`}
              key={i}>
              <div
                className={`${styles.infos__sizes_size} ${
                  i == paramSize && styles.active_size
                }`}
                onClick={() => setSize(size.size)}>
                {size.size}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className={styles.infos__colors}>
        {product.colors &&
          product.colors.map((color, i) => (
            <span
              className={i == paramStyle ? styles.active_color : ""}
              onMouseOver={() =>
                setActiveImg(product.subProducts[i].images[0].url)
              }
              onMouseLeave={() => setActiveImg("")}
              key={i}>
              <Link href={`/product/${product.slug}?style=${i}`}>
                <img src={color.image} alt="" />
              </Link>
            </span>
          ))}
      </div>

      <div className={styles.infos__qty}>
        <button onClick={() => qty > 1 && setQty((prev) => prev - 1)}>
          <TbMinus />
        </button>
        <span>{qty}</span>
        <button
          onClick={() => qty < product.quantity && setQty((prev) => prev + 1)}>
          <TbPlus />
        </button>
      </div>

      <div className={styles.infos__actions}>
        <button
          disabled={product.quantity < 1}
          style={{ cursor: `${product.quantity < 1 ? "not-allowed" : ""}` }}
          // onClick={() => addToCartHandler()}
        >
          <BsHandbagFill />
          <b>ADD TO CART</b>
        </button>
        <button
        //   onClick={() => handleWishlist()}
        >
          <BsHeart />
          WISHLIST
        </button>
      </div>

      <Share />
      <Accordian details={[product.description, ...product.details]} />

      <SimillarSwiper />
    </div>
  );
}
