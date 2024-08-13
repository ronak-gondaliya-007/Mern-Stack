import React from 'react'
import logo from '../../assets/image/logo.svg'
import search from '../../assets/icon/search.svg'
import wishlist from '../../assets/icon/wishlist.svg'
import cart from '../../assets/icon/cart.svg'
import user from '../../assets/icon/user.svg'
import down from '../../assets/icon/down.svg'
import { useNavigate } from 'react-router-dom'

const HeaderLayout = ({ children }) => {
    const navigate = useNavigate();

    return (
        <>
            <div className='announcement'>
                <div className='container'>
                    <div className='discount_bar'>
                        <div className="discount">
                            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                        </div>
                        <div onClick={() => navigate('/home')}>Shop Now</div>
                    </div>
                </div>
            </div>
            <header>
                <div className="container">
                    <div className="header_inner">
                        <div className="brand_icon">
                            <img src={logo} alt="brand-logo" />
                        </div>
                        <div className="header_menu">
                            <ul className="menu_inner">
                                <li className='menu_item' onClick={() => navigate('/')}>
                                    Home
                                </li>
                                <li className='menu_item category_item' onClick={() => navigate('/category')}>
                                    Category
                                    <img src={down} alt='dropdown_icon' />
                                    <ul className="dropdown_menu">
                                        <li className='dropdown_item' onClick={() => navigate('/category/item1')}>
                                            Item 1
                                        </li>
                                        <li className='dropdown_item' onClick={() => navigate('/category/item2')}>
                                            Item 2
                                        </li>
                                        <li className='dropdown_item' onClick={() => navigate('/category/item3')}>
                                            Item 3
                                        </li>
                                    </ul>
                                </li>
                                <li className='menu_item' onClick={() => navigate('/contact')}>
                                    Contact
                                </li>
                                <li className='menu_item' onClick={() => navigate('/about')}>
                                    About
                                </li>
                                <li className='menu_item' onClick={() => navigate('/signUp')}>
                                    Sign Up
                                </li>
                            </ul>
                        </div>
                        <div className="header_action">
                            <div className="search">
                                <img src={search} alt="search-icon" />
                            </div>
                            <div className="favourite">
                                <img src={wishlist} alt="user-icon" />
                            </div>
                            <div className="addToCart">
                                <img src={cart} alt="addtocart-icon" />
                            </div>
                            <div className="user">
                                <img src={user} alt="addtocart-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </header >
            {children}
        </>
    )
}

export default HeaderLayout

