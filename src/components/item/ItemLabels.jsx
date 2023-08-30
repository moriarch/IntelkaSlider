import Sceleton from "../Sceleton";

const ItemLabels = ({ data, loading }) => {
  return loading ? (
    <Sceleton height="27px" width="109px" className='productItemLabels'/>
  ) : (
    <div className="productItemLabels">
      {data.coming && (<div class="inStock"><span data-uk-icon="inStock"></span>Ожидается</div>)}
      {data.quantity ? (
        <div className="inStock">
          <span data-uk-icon="inStock"></span>В наличии
        </div>
      ) : (
        <div className="outStock">Под заказ</div>
      )}

      {data.special_offer && <div className="redLabel">Акция</div>}
      {data.percent!==0 && <div className="redLabel">-{data.percent}%</div>} 
    </div>
  );
};

export default ItemLabels;
