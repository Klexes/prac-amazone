import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header = () => {
    return (
        <div className="header">
            <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""/>
            <div className="header__search">
                <input />
                <SearchIcon/>
            </div>
            <div className="header__nav">
                <div className="header__option">
                    <span className="header__option1">Hello</span>
                    <span className="header__option2">User</span>
                </div>
                <div className="header__option">
                    <span className="header__option1">Returns</span>
                    <span className="header__option2">& Orders</span>
                </div>
                <div className="header__option">
                    <span className="header__option1">Your</span>
                    <span className="header__option2">Prime</span>
                </div>
            </div>
            <div className="header__optionBasket">
                <ShoppingCartIcon/>
                <span className="header__optionBasketCount">0</span>
            </div>
        </div>
    )
}

export default Header
