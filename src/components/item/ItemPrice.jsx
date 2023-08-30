import Sceleton from "../Sceleton";

const ItemPrice = ({ data, loading }) => {
  return (
    <>
      <div className="productItemPriceTitle">Цена</div>
      <div className="productItemPrice">
        {loading ? <Sceleton height="27px" className="productItemCurrentPrice"/> : <div className="productItemCurrentPrice">{data.price}</div>}
        {loading ? <Sceleton height="27px" /> : data.show_ratio_base_price && (
          <div className="productItemOldPrice">{data.ratio_base_price}</div>
        )}
      </div>
    </>
  );
};
export default ItemPrice;
