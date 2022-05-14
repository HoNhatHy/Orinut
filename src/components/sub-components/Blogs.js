import React from "react";
import { Link } from "react-router-dom";

import blogs from "../../blog";
import Blog from "./Blog";

class Blogs extends React.Component {
  render() {
    return (
      <div>
        <div className="navigate-bar">
          <div className="container navigate-bar-box">
            <span className="navigate-item">
              <Link to="/" className="navigate-item-link">
                Trang chủ
              </Link>
            </span>
            <span className="navigate-item">Blog</span>
          </div>
        </div>
        <div className="blogs-container">
          <div className="blogs--1">
            {blogs.map((item) => {
              return <Blog blog={item} key={item.name} />;
            })}
          </div>
          <div className="blog--2">
            <span className="sub-heading">Bài viết mới</span>
            <div className="news flex--column">
              {blogs
                .filter((_, i) => i <= 4)
                .map((item) => {
                  return (
                    <a
                      className="new"
                      href={item.link}
                      target="_blank"
                      key={item.link}
                      rel="nofollow"
                    >
                      <div className="new-date flex--column">
                        <span className="new-date-day">{item.day}</span>
                        <span className="new-date-month">{item.month}</span>
                      </div>
                      <p className="new-title">{item.name}</p>
                    </a>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;
