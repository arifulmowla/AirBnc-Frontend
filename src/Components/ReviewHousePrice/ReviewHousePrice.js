import React from 'react';
import star from '../../images/star-1.png'

import house1 from '../../images/201916769776917542.png'
import PriceInfo from '../ContentInfo/PriceInfo';
import './reviewhouseprice.scss';


const ReviewHousePrice = () => {

    return (
        <div className="review-house-price">
            <div className="row mb-3">
                <div className="col-md-7">
                    <h4>Light bright airy stylish apt & safe peaceful stay</h4>
                    <div className="flex flex-column">
                        <img src={star} alt="review" /> <span style={{ fontWeight: 'bold' }}> 4.9</span> (20 reviews)
            </div>
                </div>
                <div className="col-md-5">
                    <img src={house1} alt="house" className="w-100" />
                </div>
            </div>

            <PriceInfo></PriceInfo>
        </div>
    );
};

export default ReviewHousePrice;