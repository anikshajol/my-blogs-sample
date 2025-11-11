const getFromLocalStorage = () => {
  const storedItems = localStorage.getItem("bookmarks");
  if (storedItems) {
    return JSON.parse(storedItems);
  } else {
    return [];
  }
};

const removeFromLocalStorage = (id) => {
  const stored = getFromLocalStorage();
  const remaining = stored.filter((store) => store.id !== id);

  saveToLocalStorage(remaining);
};

const saveToLocalStorage = (id) => {
  localStorage.setItem("bookmarks", JSON.stringify(id));
};

const addToLocalStorage = (id, isBookmarked) => {
  const stored = getFromLocalStorage();

  if (isBookmarked) {
    const found = stored.find((store) => store.id === id.id);
    if (!found) {
      const newItems = [...stored, id];
      saveToLocalStorage(newItems);
    }
  } else {
    const remaining = stored.filter((store) => store.id !== id);
    saveToLocalStorage(remaining);
  }
};

export { addToLocalStorage, getFromLocalStorage, removeFromLocalStorage };
