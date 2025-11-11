import { Suspense, useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const fetchBlogs = async () => {
    const res = await fetch("blogs.json");
    return res.json();
  };
  const fetchPromise = fetchBlogs();

  const handleAddBookmark = (blog, isBookmarked) => {
    const found = bookmarks.find((bookmark) => bookmark.id === blog.id);
    setBookmarks((prev) => {
      if (isBookmarked) {
        if (!found) {
          // console.log([...prev, blog]);
          return [...prev, blog];
        }
      } else {
        const remaining = bookmarks.filter(
          (bookmark) => bookmark.id !== blog.id
        );
        // console.log(remaining);
        return remaining;
      }
    });
  };

  const handleRemoveFromBookmarked = (id) => {
    console.log("hello", id);
    const remaining = bookmarks.filter((b) => b.id !== id);
    setBookmarks(remaining);
  };

  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Blogs
          handleAddBookmark={handleAddBookmark}
          fetchPromise={fetchPromise}
          bookmarks={bookmarks}
          handleRemoveFromBookmarked={handleRemoveFromBookmarked}
        />
      </Suspense>
    </>
  );
}

export default App;
