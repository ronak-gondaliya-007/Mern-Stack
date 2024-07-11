import React from "react";
import Slider from "react-slick";
import banner from '../../assets/image/banner.png'
import apple from '../../assets/image/apple.svg'

export default function HeroSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      );
    // return (
    //     <Slider {...settings}>
    //         <div>
    //             <div className="hero_section">
    //                 <img src={banner} alt="banner_image" className='banner_image' />
    //                 <div className="text_container">
    //                     <div className="banner_text">
    //                         <img src={apple} alt="apple_icon" />
    //                         <h4>iPhone 14 Series</h4>
    //                     </div>
    //                     <div className="announcement">
    //                         <h6 className='announcement_text'>Up to 10% off Voucher</h6>
    //                     </div>
    //                     <div className="shop_btn">
    //                         <button class="shop_now_btn">
    //                             <span class="circle" aria-hidden="true">
    //                                 <span class="icon arrow"></span>
    //                             </span>
    //                             <span class="button-text">Shop Now</span>
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //         {/* <div>
    //             <div className="hero_section">
    //                 <img src={banner} alt="banner_image" className='banner_image' />
    //                 <div className="text_container">
    //                     <div className="banner_text">
    //                         <img src={apple} alt="apple_icon" />
    //                         <h4>iPhone 14 Series</h4>
    //                     </div>
    //                     <div className="announcement">
    //                         <h6 className='announcement_text'>Up to 10% off Voucher</h6>
    //                     </div>
    //                     <div className="shop_btn">
    //                         <button class="shop_now_btn">
    //                             <span class="circle" aria-hidden="true">
    //                                 <span class="icon arrow"></span>
    //                             </span>
    //                             <span class="button-text">Shop Now</span>
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div> */}
    //     </Slider>
    // );
}