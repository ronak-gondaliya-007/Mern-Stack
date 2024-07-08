import React from 'react'
import banner from '../../assets/image/banner.png'
import apple from '../../assets/image/apple.svg'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <body>
            <div className="container">
                <div className="home_inner">
                    <div className="hero_section">
                        <img src={banner} alt="banner_image" />
                        <div className="banner_text">
                            <img src={apple} alt="apple_icon" />
                            <h4>iPhone 14 Series</h4>
                        </div>
                        <h6>Up to 10% off Voucher</h6>
                        <div onClick={() => navigate('/home')}>Shop Now</div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Home
