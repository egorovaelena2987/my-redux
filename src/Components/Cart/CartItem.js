import { useDispatch } from "react-redux";
import dataClothes from "../../Data/dataClothes";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({cartItem}) => {
   const clothes = dataClothes.find(item => item.id === cartItem.clothId);
   const dispatch = useDispatch();
    return(
        <div>
            <p>{clothes.name}</p>
            <p>{cartItem.item} item(s)</p>
            <p>Price: ${clothes.price * cartItem.item}</p>
            <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
            <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png" alt="icon"/> 
            </span>
        </div>
    )
}
export default CartItem;