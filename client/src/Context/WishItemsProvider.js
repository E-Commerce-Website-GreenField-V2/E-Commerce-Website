import { useContext, useState } from "react";
import { CartItemsContext } from "./CartItemsContext";
import { WishItemsContext } from "./WishItemsContext";

const WishItemsProvider = (props) => {
  const [wishItems, setWishItems] = useState([]);

  const cartItems = useContext(CartItemsContext);

  const addToCartHandler = (item) => {
    cartItems.addItem(item, 1);
  };

  const addToWishHnadler = (item) => {
    const { id, name, price, image } = item;
    removeFromWishHandler(item);
    setWishItems((prevItems) => [
      ...prevItems,
      { id, name, price, image, itemQuantity: 1 },
    ]);
  };

  const removeFromWishHandler = (item) => {
    setWishItems(wishItems.filter((prevItem) => prevItem.id !== item.id));
  };

  const wishItemsCtx = {
    items: wishItems,
    addItem: addToWishHnadler,
    removeItem: removeFromWishHandler,
    addToCart: addToCartHandler,
  };

  return (
    <WishItemsContext.Provider value={wishItemsCtx}>
      {props.children}
    </WishItemsContext.Provider>
  );
};

export default WishItemsProvider;
