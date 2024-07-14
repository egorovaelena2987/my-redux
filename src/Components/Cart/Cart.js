import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { getcartItems, getTotalPrice } from "../../redux/cartSlice";

const Cart = () => {
    const cartItems = useSelector(getcartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
             <img className="cartIcon" src="https://img.icons8.com/?size=100&id=44050&format=png&color=000000" alt='icon'/>
             <h3>Total: $ {totalPrice}</h3>
             {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)} 
        </div>
    )
}
export default Cart;