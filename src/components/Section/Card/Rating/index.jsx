import React from 'react';
import starFullFilled from '../../../../assets/icon/star-full-filled.svg';
import starFullUnfilled from '../../../../assets/icon/star-full-unfilled.svg';
import starHalfFilled from '../../../../assets/icon/star-half-filled.svg';

const ProductRating = ({ rating, totalRating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  return (
    <>
      <div className="product_rating_star">
        {[...Array(totalStars)].map((_, index) => {
          if (index < fullStars) {
            return <img key={index} src={starFullFilled} alt="rating_star" className="product_rating_star" />;
          } else if (index === fullStars && hasHalfStar) {
            return <img key={index} src={starHalfFilled} alt="rating_star" className="product_rating_star" />;
          } else {
            return <img key={index} src={starFullUnfilled} alt="rating_star" className="product_rating_star" />;
          }
        })}
      </div>
      <h4 className="total_rating">{`(${totalRating})`}</h4>
    </>
  );
};

export default ProductRating;
