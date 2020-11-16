import { Button } from 'react-bootstrap';
import React from 'react';
import './reviewhouse.scss';

import icchild from '../../images/ic_child_friendly_48px.png';
import pets from '../../images/ic_pets_48px.png';
import noparties from '../../images/forbidden.png';
import smooking from '../../images/ic_smoking_rooms_48px.png';

const ReviewHouse = () => {
    return (
        <div className="review-house">
            <h3 className="py-3">Review house rules</h3>
            <h5>3 nights in Dhaka</h5>
            <div className="d-flex justify-content-lg-between py-3">
                <div className="review-date d-flex">
                    <div className="date-small-box">
                        APR <br /> 13
                    </div>
                    <div className="date-text">
                        <p>Monday check-in</p>
                        <p>After 12:00 PM</p>
                    </div>
                </div>
                <div className="review-date d-flex">
                    <div className="date-small-box">
                        APR <br /> 13
                    </div>
                    <div className="date-text">
                        <p>Monday check-in</p>
                        <p>After 12:00 PM</p>
                    </div>
                </div>
            </div>
            <p className="py-3">Self check-in with building staff</p>
            <hr />
            <h4>Things to keep in mind</h4>

            <div className="rules py-3">
                <div className="row rule-box my-1">
                    <div className="col-md-1 d-flex">
                        <div className="img-box">
                            <img src={icchild} alt="" />
                        </div>

                    </div>
                    <div className="col-md-10">
                        <p className="p-1">Suitable for children and infants</p>
                    </div>
                </div>

                <div className="row rule-box my-1">
                    <div className="col-md-1 d-flex">
                        <div className="img-box">
                            <img src={pets} alt="" />
                        </div>

                    </div>
                    <div className="col-md-10">
                        <p className="p-1">Pets allowed</p>
                    </div>
                </div>

                <div className="row rule-box my-1">
                    <div className="col-md-1 d-flex">
                        <div className="img-box">
                            <img src={noparties} alt="" />
                        </div>

                    </div>
                    <div className="col-md-10">
                        <p className="p-1">No parties or events</p>
                    </div>
                </div>

                <div className="row rule-box my-1">
                    <div className="col-md-1 d-flex">
                        <div className="img-box">
                            <img src={smooking} alt="" />
                        </div>

                    </div>
                    <div className="col-md-10">
                        <p className="p-1">Smoking allowed</p>
                    </div>
                </div>
                <a href="#">Read More</a>
            </div>


            <Button className="btn btn-success mt-3">Agree and continue</Button>
        </div>
    );
};

export default ReviewHouse;