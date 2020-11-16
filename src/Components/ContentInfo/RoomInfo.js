import React from 'react';
import { Card } from 'react-bootstrap';
import { Accordion } from 'react-bootstrap';
import profile from '../../images/47498481-a-portrait-of-a-men-in-studio-gray-background.png';
import home from '../../images/home.png';
import tick from '../../images/checkmark-square-2.png';
import spark from '../../images/solid.png';
import avater from '../../images/single-01.png';



import Review from './Review';

const RoomInfo = () => {
    return (
        <div className="room-info">
            <div className="row">
                <div className="col-md-8">
                    <h2>Light bright airy stylish apt
& safe peaceful stay</h2>
                    <p>Dhaka, Bangladesh</p>
                    <p>4 guests   2 bedrooms   2 beds   2 baths</p>
                </div>
                <div className="col-md-4 d-flex justify-content-start align-items-end flex-column p-3">
                    <img src={profile} alt="profile" className="w-25" />
                    <span>Jhon Doe</span>
                </div>
            </div>

            <hr />

            <div className="room-feature">
                <div className="row my-3">
                    <div className="col-md-1 d-flex justify-content-left align-items-start">
                        <img className="py-2" src={home} alt="home" />
                    </div>
                    <div className="col-md-10">
                        <h4>Entire Home</h4>
                        <p>You’ll have the condominium to yourself.</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-1 d-flex justify-content-left align-items-start">
                        <img className="py-2" src={tick} alt="home" />
                    </div>
                    <div className="col-md-10">
                        <h4>Self check-in</h4>
                        <p>You can check in with the doorman.</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-1 d-flex justify-content-left align-items-start">
                        <img className="py-2" src={spark} alt="home" />
                    </div>
                    <div className="col-md-10">
                        <h4>Sparkling clean</h4>
                        <p>10 recent guests said this place was sparkling clean.</p>
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-1 d-flex justify-content-left align-items-start">
                        <img className="py-2" src={avater} alt="home" />
                    </div>
                    <div className="col-md-10">
                        <h4>Rowdra is a Superhost</h4>
                        <p>Superhosts are experienced, highly rated hosts who
are committed to providing great stays for guests.</p>
                    </div>
                </div>
            </div>

            <hr />

            <p className="my-3">It’s newly constructed 7 storied building maintaining building code by a locally famous architect. Enough lights and natural air are playing here. The place (apartment) is calm and noise free.
            You’ll love my place for its lovely and bright looks comfortable stay.
            Bangladesh is a beauty with its six seasons and green. The people are hospitable and worm.It’s newly constructed 7 storied building maintaining building code by a locally famous architect. Enough lights and natural air are playing here. The place (apartment) is calm and noise free.
            You’ll love my place for its lovely and bright looks comfortable stay.
Bangladesh is a beauty with its six seasons and green. The people are hospitable and worm.</p>

            <Accordion defaultActiveKey="0" className="pt-5 pb-3">
                <Card>
                    <Accordion.Toggle as={Card.Header} eventKey="0">
                        Read more about the space
    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>

            </Accordion>

            <Review></Review>
        </div>
    );
};

export default RoomInfo;