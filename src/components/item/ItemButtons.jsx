import { useRef } from "react";

const ItemButtons = ({id}) => {
  const heart = useRef(null);
  const compare = useRef(null)
  const handleFavorite = ({target}) => addToFav(heart.current, id);
  const handleCompare = ({target}) => addToCompare(compare.current, id)

  return (
    <div className="productItemWishBtns">
      <button
        data-uk-icon="heart"
        className="addToFavBtn uk-icon"
        data-uk-tooltip="Избранное"
        ref={heart}
        onClick={(event) => handleFavorite(event)}
        title=""
        aria-expanded="false"
      ></button>
      <button
        data-uk-icon="compare"
        className="uk-icon"
        data-uk-tooltip="Сравнение"
        ref={compare}
        onClick={(event) => handleCompare(event)}
        title=""
        aria-expanded="false"
      ></button>
    </div>
  );
};
export default ItemButtons;
