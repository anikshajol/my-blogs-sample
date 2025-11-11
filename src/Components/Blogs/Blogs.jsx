import React, { use } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({
  fetchPromise,
  handleAddBookmark,
  bookmarks,
  handleRemoveFromBookmarked,
}) => {
  const blogs = use(fetchPromise);

  return (
    <div className="flex gap-8">
      <section className="w-[70%]">
        {blogs.map((blog) => (
          <Blog
            handleAddBookmark={handleAddBookmark}
            key={blog.id}
            blog={blog}
            bookmarks={bookmarks}
            handleRemoveFromBookmarked={handleRemoveFromBookmarked}
          ></Blog>
        ))}
      </section>

      {/* bookmarks */}
      <section className="w-[30%]">
        <div>
          Total Count: {bookmarks.length}
          {bookmarks.map((bookmark) => (
            <h1 className="bg-red-300 p-2 mt-3" key={bookmark.id}>
              {bookmark.title}
            </h1>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blogs;
