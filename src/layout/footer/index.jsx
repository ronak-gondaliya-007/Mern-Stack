import React from 'react'
import qrCode from '../../assets/icon/qrCode.svg'
import appStore from '../../assets/icon/appStore.svg'
import googlePlay from '../../assets/icon/googlePlay.svg'
import facebook from '../../assets/icon/facebook.svg'
import twitter from '../../assets/icon/twitter.svg'
import instagram from '../../assets/icon/instagram.svg'
import linkedin from '../../assets/icon/linkedin.svg'
import send from '../../assets/icon/send.svg'

const FooterLayout = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_inner">
                    <div className="brand_inner">
                        <h3 className='brand_label'>Exclusive</h3>
                        <div className="subscriber">
                            <h4>Subscribe</h4>
                            <h6>Get 10% off your first order</h6>
                            <form className="input_field" method='post'>
                                <input type="text" className="email" placeholder='Enter your email' />
                                <button><img src={send} alt='send_icon' /></button>
                            </form>
                        </div>
                    </div>
                    <div className="support_inner">
                        <h3>Support</h3>
                        <ul>
                            <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh</li>
                            <li>exclusive@gmail.com</li>
                            <li>+88015-88888-9999</li>
                        </ul>
                    </div>
                    <div className="account_inner">
                        <h3>Account</h3>
                        <ul>
                            <li>My Account</li>
                            <li>Login / Register</li>
                            <li>Cart</li>
                            <li>Wishlist</li>
                            <li>Shop</li>
                        </ul>
                    </div>
                    <div className="quick_link_inner">
                        <h3>Quick Link</h3>
                        <ul>
                            <li>Privacy Policy</li>
                            <li>Terms Of Use</li>
                            <li>FAQ</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="downloader_inner">
                        <h3>Download App</h3>
                        <h5>Save $3 with App New User Only</h5>
                        <div className="share_contanier">
                            <div className='qrcode_inner'>
                                <img src={qrCode} alt="qrcode_icon" />
                            </div>
                            <div className='app_icon_inner'>
                                <img src={appStore} alt="appstore_icon" />
                                <img src={googlePlay} alt="googleplay_icon" />
                            </div>
                        </div>
                        <div className="social_media">
                            <img src={facebook} alt="qrcode_icon" />
                            <img src={twitter} alt="qrcode_icon" />
                            <img src={instagram} alt="qrcode_icon" />
                            <img src={linkedin} alt="qrcode_icon" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterLayout
