import { Link } from "react-router-dom";

export default function BlogCard() {
  return (
    <div className="col-3 ">
      <div className="blog-card">
        <div className="card-image">
          <img src="assets/blog-1.jpg" alt="blogImg" className="img-fluid " />
        </div>
        <div className="blog-content">
          <p className="date">1 Dec 2023</p>
          <h5 className="title">A beautiful sunday morning renaisance</h5>
          <p className="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dicta
          </p>
          <Link className="button">Read More</Link>
        </div>
      </div>
    </div>
  );
}
