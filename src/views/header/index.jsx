import React from 'react';
import brandLogo from '../../assets/image/Logo.svg';
import Cart from '../../assets/icon/Cart.svg';
import Search from '../../assets/icon/Search.svg';
import User from '../../assets/icon/User.svg';
import Wishlist from '../../assets/icon/Wishlist.svg';

export const Header = () => {
    return (
        <>
            <div className='announcement_contanier'>
                
            </div>
            <div className='container'>
                <div className='header_inner'>
                    <div className='brand_logo'>
                        <img src={brandLogo} alt='brand_logo' />
                    </div>
                    <ul className='menu_bar'>
                        <li className='menu_item'>Home</li>
                        <li className='menu_item'>Category</li>
                        <li className='menu_item'>Contact</li>
                        <li className='menu_item'>About</li>
                        <li className='menu_item'>Sign Up</li>
                    </ul>
                    <div className='action_container'>
                        <img src={Search} alt='cart_action' />
                        <img src={Wishlist} alt='cart_action' />
                        <img src={Cart} alt='cart_action' />
                        <img src={User} alt='cart_action' />
                    </div>
                </div>
            </div>
        </>
    )
}
