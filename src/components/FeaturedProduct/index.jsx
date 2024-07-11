import React from 'react';
import featured from '../../assets/image/featured.svg';
import Button from '../Button';

function FeaturedSection() {
    return (
        <>
            <div className="container">
                <div className="featured_section_container">
                    <div className="featured_product_detail">
                        <h3>Category</h3>
                        <p>Enhance Your Music Experience</p>
                        <div className="shop_now">
                            <Button title='Shop Now' />
                        </div>
                    </div>
                    <img src={featured} alt="featured_product" className="featured_product" />
                </div>
            </div>
        </>
    );
}

export default FeaturedSection;