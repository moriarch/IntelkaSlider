import ItemButtons from "./item/ItemButtons";
import Sceleton from "./Sceleton";
import ItemCodes from "./item/ItemCodes";
import ItemImage from "./item/ItemImage";
import ItemLabels from "./item/ItemLabels";
import ItemName from "./item/ItemName";
import ItemOrder from "./item/ItemOrder";
import ItemPrice from "./item/ItemPrice";

const Item = ({ data, loading }) => {
  return (
    <div>
      <div className="productItem">
        <ItemCodes data={data} loading={loading} />
        <ItemButtons id={data?.id} />
        {loading ? <div className="productItemImg"> <Sceleton width={null} height="268px" className="productItemPicture" style={{aspectRatio: 'auto 268 / 268', maxWidth:'100%'}}/></div> : <ItemImage data={data} loading={loading}/>}
        <ItemName data={data} loading={loading}/>
        <ItemLabels data={data} loading={loading}/>
        <ItemPrice data={data} loading={loading}/>
        <ItemOrder data={data} loading={loading}/>
      </div>
    </div>
  );
};

export default Item;
