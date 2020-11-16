import React from 'react';
import star from '../../images/star-1.png';

const Review = () => {
    return (
        <div className="review py-3">
            <h4>Reviews</h4>
            <div className="flex flex-column">
                <img src={star} alt="review" /> <span style={{ fontWeight: 'bold' }}> 4.9</span> (20 reviews)
            </div>
        </div>
    );
};

export default Review;