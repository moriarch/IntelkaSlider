import Sceleton from "../Sceleton"

const ItemName = ({data, loading}) => {
    return (
        <div className="productItemNameWrap">
            {loading ? <Sceleton height="70px" className="productItemName"/> : (
                <a href={data.url} className="productItemName">
                    {data.name}
                </a>
            )}
        </div>
    )
}
export default ItemName