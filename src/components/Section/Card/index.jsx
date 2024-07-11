import React from 'react';
import product1 from '../../../assets/image/product1.png';
import headphone from '../../../assets/icon/headphone.svg';
import ProductRating from './Rating';

function ProductCard({ isProduct }) {
    return (
        <>
            {isProduct > 0 && <div className="product_card">
                <img className='product_card_img' src={product1} alt="product_image" />
                <div className="product_card_detail">
                    <h4 className="product_card_title">HAVIT HV-G92 Gamepad</h4>
                    <div className="product_card_price">
                        <h5 className="discount_price">$120</h5>
                        <h5 className="total_price">$160</h5>
                    </div>
                    <div className="product_card_rating">
                        <ProductRating rating={3.5} totalRating={50} />
                    </div>
                </div>
            </div>}
            {isProduct === 0 && <div className="category_card">
                <img className='category_card_img' src={headphone} alt="category_image" />
                <h4 className="category_card_title">HeadPhone</h4>
            </div>}
        </>
    );
}

export default ProductCard;