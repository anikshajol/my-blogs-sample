import React, { useState } from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddBookmark, handleRemoveFromBookmarked }) => {
  const { author, hashtags, cover, title, author_img } = blog;

  const [bookmarked, isBookmarked] = useState(false);

  const handleBookMark = () => {
    const newBookMark = !bookmarked;
    isBookmarked(newBookMark);
    handleAddBookmark(blog, newBookMark);
  };

  const handleRemoveBookmarked = () => {
    const newBookMark = !bookmarked;
    isBookmarked(newBookMark);
    handleRemoveFromBookmarked(blog.id, newBookMark);
  };

  return (
    <div className="mx-2 ">
      {/* card */}

      <div className="card mb-6 bg-base-100  shadow-sm">
        <figure>
          <img src={cover} alt="title" />
        </figure>
        <div className="card-body">
          <section className="flex justify-between">
            <div className="flex items-center gap-3">
              <section className="avatar">
                <img className="w-12" src={author_img} alt="" />
              </section>

              {/*  */}
              <section>
                <h2>{author}</h2>
              </section>
            </div>

            {/****/}
            <div>
              <button onClick={handleBookMark}>
                <FaBookmark color={bookmarked ? "red" : "gray"} />
              </button>
            </div>
          </section>

          <h2 className="card-title"> {title}</h2>

          <div className="card-actions justify-between">
            <div className="flex gap-2">
              {hashtags.map((tag, index) => (
                <p key={index}>#{tag}</p>
              ))}
            </div>
            {!bookmarked ? (
              <button disabled>Mark as read</button>
            ) : (
              <button
                onClick={handleRemoveBookmarked}
                className="btn btn-primary"
              >
                Mark as read
              </button>
            )}
          </div>
        </div>
      </div>

      {/* bookmarks */}
    </div>
  );
};

export default Blog;
