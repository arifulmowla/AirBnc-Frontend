import React from 'react';
import { Container } from 'react-bootstrap';

import img1 from '../../images/photo-1560347876-aeef00ee58a1.png';
import img2 from '../../images/photo-1522708323590-d24dbb6b0267.jpeg';
import './headslide.css';

const HeadSlide = () => {
    return (
        <div className="head-slide">
            <Container fluid>
                <div className="row">
                    <div className="col-md-6">
                        <img src={img1} className="w-100" alt="" />
                    </div>
                    <div className="col-md-6">
                        <img src={img2} className="w-100" alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default HeadSlide;