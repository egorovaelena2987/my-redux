import { useState } from "react";
import ChangeItem from "../Cart/ChangeItem";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";

const Cloth = ({cloth}) => {
    const [item, setItem] = useState(1);
    const dispatch = useDispatch()
    return(<div>
        <img src={`./${cloth.img}.avif`} alt='clothes'/>
        <h2>{cloth.name}</h2>
        <p>$ {cloth.price}</p>
        <ChangeItem item={item} setItem={setItem}/>
        <button onClick={() => {dispatch(addItemToCart({cloth, item}));
    }}>Add to cart</button>

        </div>
    )
}
export default Cloth;