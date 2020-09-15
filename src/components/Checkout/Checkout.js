import React from 'react'
import { useStateValue } from '../../StateProvider'
import CheckoutProducts from '../CheckoutProducts.js/CheckoutProducts'
import Subtotal from '../Subtotal/Subtotal'
import './Checkout.css'

const Checkout = () => {
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492668_.jpg" alt="ad" className="checkout__ad"/>
                {basket?.length === 0 ? (
                    <div>
                        <h1>The basket is Empty</h1>
                        <p>You have no items in the basket click to add more. Click "Add To Basket" to add the items.</p>
                    </div>
                ) : (
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {basket?.map(item => (
                        <CheckoutProducts item={item}/>
                    ))}
                </div>
                )}
            </div>
            {basket?.length > 0 &&
                <div className="checkout__right">
                    <Subtotal/>
                </div>
            }

        </div>
    )
}

export default Checkout
