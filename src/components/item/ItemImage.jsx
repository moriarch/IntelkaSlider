const ItemImage = ({ data }) => {
  return (
    <a href={data.url} className="productItemImg">
     
     <img
        src={data.image}
        className="productItemPicture"
        width="268"
        height="268"
        alt=""
        
      />
      {data.brand && (
        <img src={data.brand} className="brandLogo" alt="" />
      )} 
    </a>
  );
};
export default ItemImage;
