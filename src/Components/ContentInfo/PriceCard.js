import { Button } from 'react-bootstrap';
import React from 'react';
import star from '../../images/star-1.png'

import PriceInfo from './PriceInfo';

const PriceCard = () => {
    return (
        <div className="price-card">
            <h3><span className="text-black-50">$34/</span> night</h3>
            <div className="flex flex-column">
                <img src={star} alt="review" /> <span style={{ fontWeight: 'bold' }}> 4.9</span> (20 reviews)
            </div>
            <PriceInfo></PriceInfo>

            <Button className="btn btn-primary w-100 mt-3">Reserve</Button>
        </div>
    );
};

export default PriceCard;