import React from 'react'
import './Checkout.css'

const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._C8423492668_.jpg" alt="ad" className="checkout__ad"/>
                <div>
                    <h1>The basket is Empty</h1>
                    <p>You have no items in the basket click to add more. Click "Add To Basket" to add the items.</p>
                </div>
            </div>
        </div>
    )
}

export default Checkout
