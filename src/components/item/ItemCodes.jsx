import Sceleton from "../Sceleton";

const ItemCodes = ({ data, loading }) => {
  return (
    <div className="productItemCodes">
      {loading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          Арт. <Sceleton height="21px" width="50%" />
        </div>
      ) : (
        data?.artnumber && <div>Арт. {data.artnumber}</div>
      )}
      {loading ? (
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          Код товара: <Sceleton height="21px" width="50%" />
        </div>
      ) : (
        data?.product_code && <div>Код товара: {data.product_code}</div>
      )}
    </div>
  );
};
export default ItemCodes;
