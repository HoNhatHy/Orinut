import React from "react";

const Blog = function ({ blog }) {
  const { day, month, img, link, name, description } = blog;

  return (
    <a href={link} target="_blank" style={{ textDecoration: "none" }}>
      <div className="blog">
        <div className="blog-date flex--column">
          <span className="blog-date-day">{day}</span>
          <span className="blog-date-month">{month}</span>
        </div>
        <img className="blog-img" src={img} alt="Orinut blog" />
        <div className="blog-infor">
          <p className="blog-title">{name}</p>
          <p className="blog-description">{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Blog;
