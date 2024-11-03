import toast from "react-hot-toast";

const getFavoriteCoffee = () => {
  const all = localStorage.getItem('favorite');
  if (all) {
    return JSON.parse(all);
  } else {
    return [];
  }
};

// Add a coffee to local storage
const addToFavorite = (coffee) => {
  const Favorite = getFavoriteCoffee();
  const isExist = Favorite.find(item => coffee.id === item.id);

  if (isExist) {
    return toast.error('This coffee is already in your favorites!');
  }

  Favorite.push(coffee);
  localStorage.setItem('favorite', JSON.stringify(Favorite));
  toast.success('Successfully added to favorites!');
};

// Remove a coffee from local storage
const removeFavorite = (id) => {
  const favorite = getFavoriteCoffee();
  const remaining = favorite.filter(coffee => coffee.id !== id); 
  localStorage.setItem('favorite', JSON.stringify(remaining)); // 
  toast.success('Successfully removed from favorites');
};

// Export functions
export { addToFavorite, getFavoriteCoffee, removeFavorite };
