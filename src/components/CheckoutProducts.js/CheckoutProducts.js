import React from 'react'
import { useStateValue } from '../../StateProvider'
import './CheckoutProducts.css'

const CheckoutProducts = ({item}) => {
    const [{basket}, dipatch] = useStateValue()
    return (
        <div className="checkoutProduct">
            <img src={item.image} alt="" className="checkoutProduct__image"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{item.title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{item.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(item.rating)
                        .fill()
                        .map((_) => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button className="checkoutProduct__button">Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProducts
