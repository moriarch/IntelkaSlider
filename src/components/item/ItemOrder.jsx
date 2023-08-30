import { useState } from "react"
import Sceleton from "../Sceleton"

const Icon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none">
      <path
        fill="#fff"
        d="M19.885 3.433a.65.65 0 00-.5-.262L6.98 2.66a.63.63 0 00-.67.586.625.625 0 00.614.64l11.567.477-2.274 6.785H6.097l-1.83-9.52a.62.62 0 00-.396-.46L.877.042A.652.652 0 00.045.39a.606.606 0 00.362.796l2.663 1 1.86 9.687a.635.635 0 00.632.503h.308l-.704 1.872a.492.492 0 00.065.467c.1.137.264.218.438.218h.494a1.786 1.786 0 00-.494 1.227c0 1.015.863 1.841 1.925 1.841 1.061 0 1.925-.826 1.925-1.84 0-.473-.188-.902-.494-1.228h4.197a1.786 1.786 0 00-.495 1.227c0 1.015.864 1.841 1.925 1.841 1.062 0 1.926-.826 1.926-1.84 0-.473-.188-.902-.495-1.228h.602a.523.523 0 00.534-.512.523.523 0 00-.535-.51H6.43l.578-1.535h9.677a.64.64 0 00.611-.426l2.674-7.98a.59.59 0 00-.084-.538zM7.594 16.977c-.472 0-.856-.367-.856-.818 0-.451.384-.818.856-.818s.855.367.855.818c0 .451-.383.819-.855.819zm7.058 0c-.471 0-.855-.367-.855-.818 0-.451.383-.818.855-.818s.856.367.856.818c0 .451-.384.819-.856.819z"
      ></path>
    </svg>
)

const ItemOrder = ({ data, loading }) => {
    if(loading)
        return <Sceleton height="45px" className="productItemActions"/>
    if(!loading && !data.available)
        return <div className="uk-text-center uk-text-bold">Нет в наличии</div>
    
    const [quantity, setQuantity] = useState(1)

    const handleChange = (type) => {
        let q = type ? quantity+1 : quantity-1
        setQuantity(q === 0 ? 1 : q)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        buyForm(event.target)
    }

    return (
			<form action="#" className="productItemActions buyForm" onSubmit={(event)=>handleSubmit(event)}>
				<input type="hidden" name="id" defaultValue={data.id} />
				<div className="productItemCount">
					<div className="prodQuant">
						<div className="minus" onClick={()=>handleChange(false)}>
							<span data-uk-icon="minus"></span>
						</div>
						<div className="quant">
							<input type="text" name="count" value={quantity} min="1" max="999999999999999" onChange={()=>console.log('change')}/>
						</div>
						 <div className="plus" onClick={()=>handleChange(true)}>
							<span data-uk-icon="plus"></span>
						</div> 
					</div>
				</div>
				<div className="productItemBtn">
					<button className="productItemAdd" data-id={data.id}><Icon /></button>
				</div>
			</form>
		
    )
}
export default ItemOrder