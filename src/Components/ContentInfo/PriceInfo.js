import React from 'react';
import arrow from '../../images/arrow-forward-outline-1.png';
import arrowDown from '../../images/arrow-ios-downward-outline-1.png'

const PriceInfo = () => {
    return (
        <>
            <div className="date-box py-2">
                <span>Dates</span>
                <div className="round-box d-flex flex-row rounded justify-content-between px-3">
                    <h5>4/13/2020</h5><img src={arrow} alt="" className="h-100 p-2 px-4" /><h5>4/13/2020</h5>
                </div>
            </div>
            <div className="date-box py-2">
                <span>Guests</span>
                <div className="round-box d-flex flex-row rounded justify-content-between px-3">
                    <h5>3 Guests</h5><img src={arrowDown} alt="" className="p-1 py-2" />
                </div>
            </div>


            <ul className="price-fare">
                <li><p>$34 x 4 nights</p> <span>$136</span></li>
                <li><p>Cleaning fee</p> <span>$136</span></li>
                <li><p>Service fee</p> <span>$136</span></li>
                <li><p>Total</p> <span>$166</span></li>
            </ul>
        </>
    );
};

export default PriceInfo;