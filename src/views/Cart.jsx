import { useDispatch, useSelector } from 'react-redux';
import { addToCart,removeFromCart } from '../redux/slices/productSlice';
import '../styles/Cart.scss';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
const Cart = ()=>{
    const dispatch = useDispatch();
    const { cart} = useSelector((state) => state.products);

    console.log(cart,"cart ascas")
    const cartTotal = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;
    if(cart.length ==0){
        return(
            <div className='empty-cart'>
                <div>
                    <h1 className='p-bag-empty'>YOUR BAG IS EMPTY</h1>
                    <p>Once you add something to your bag - it will appear here. Ready to get started?</p>

                    <Link to="/outlet"> <div className='Checkout-cont'>
                    <h1>GET STARTED </h1>
                    <ArrowRightAltIcon/>
                    </div>
                    </Link>
                   
                    </div>
                <div>
                </div>
              
            </div>
        )

    }
    return(
        <div className='cart-main-cont'>
            <div className='cart-all-items'>

           
            <h1>YOUR BAG</h1>
            <p>TOTAL ({cart.length} item) <strong>${cartTotal}</strong></p>
            <p>Items in your bag are not reserved — check out now to make them yours.</p>
            {cart.map((item, index) => (
                <div key={index} className='cart-item'>
                    
                    <img src={item.image} className='cart-item-img' alt={item.title} />
                    <div> 
                         <h3>{item.title}</h3>
                         <p>{item.description.slice(0,15)}</p>
                    <p>{item.price}</p>
                    <button onClick={() => dispatch(removeFromCart(item))} className='btnCart'>REMOVE</button>
                        </div>
                  
                </div>
            ))}
            <h2>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</h2>
            <div className='Checkout-cont'>
                   <h1>CHECKOUT </h1>
                   <ArrowRightAltIcon/>
                </div>

            {/* <button onClick={() => dispatch(removeFromCart(index))}>Remove</button> */}

            {/* <button onClick={() => dispatch(clearCart())}>Clear Cart</button> */}

            {/* <button onClick={() => dispatch(applyCoupon('DISCOUNT_CODE'))}>Apply Coupon</button> */}

            </div>
            <div className='order-summary'>
                <div className='Checkout-cont'>
                   <h1>CHECKOUT </h1>
                   <ArrowRightAltIcon/>
                </div>
                <h3>ORDER SUMMARY</h3>
                <div className='cart-item-summery'>
                    <p>{cart.length} item</p>
                    <p>${cartTotal}</p>
                </div>
                <div className='cart-item-summery'>
                    <p>Delivery</p>
                    <p>Free</p>
                </div>

                <div className='cart-item-summery'>
                    <strong>Total</strong>
                    <p>${cartTotal}</p>
                </div>
                <p>(Inclusive of all taxes)</p>
            </div>
        </div>
    )
}

export default Cart