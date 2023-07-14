"use client";

import { Rating } from "@mui/material";
import styles from "./styles/review.module.scss";
import { AiOutlineLike } from "react-icons/ai";
import Image from "next/image";
export default function Review({ review }) {
  const { name, image } = review?.reviewBy;
  console.log(review.images);

  return (
    <div className="border-b flex justify-between p-4">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col space-y-2">
          <h4>
            {name.slice(0, 1)}***{name.slice(name.length - 1, name.length)}
          </h4>
          <Image
            src={image}
            alt="profileImg"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        <div className={styles.review__review}>
          <Rating
            name="half-rating-read"
            value={review.rating}
            precision={0.5}
            readOnly
            style={{ color: "#facf19" }}
          />
          <p>{review.review}</p>
          <p>
            <span>Overall Fit:</span>
            {review.fit}
            &nbsp;&nbsp;
            <span>Size:</span>
            {review.size}
            &nbsp;&nbsp;
            <div className={styles.flex}>
              <Image
                src={review.style.image}
                alt=""
                width={100}
                height={100}
                className={styles.review__img}
              />
            </div>
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className={styles.review__images}>
          {review.images.length > 0 &&
            review.images.map((img) => (
              <Image
                src={img?.url}
                alt="reviewImageByUser"
                height={100}
                width={100}
              />
            ))}
        </div>
        <div className={styles.review__extra}>
          <div className={styles.review__extra_likes}>
            {review.likes && review.likes?.likes}
            <AiOutlineLike />
          </div>
          <div className={styles.review__extra_date}>
            {review?.updatedAt?.slice(0, 10)}
          </div>
        </div>
      </div>
    </div>
  );
}
