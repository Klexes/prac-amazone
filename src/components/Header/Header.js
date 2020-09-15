import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from '../../StateProvider';

const Header = () => {
    const [{basket}, dispatch] = useStateValue()
    return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""/>
            </Link>
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
            <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingCartIcon/>
                    <span className="header__optionBasketCount">{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header
