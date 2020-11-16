import React from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import Header from '../../Components/Header/Header';
import ReviewHouse from '../../Components/ReviewHouse/ReviewHouse';
import ReviewHousePrice from '../../Components/ReviewHousePrice/ReviewHousePrice';


const ReviewOrder = () => {
    return (
        <>
            <Header></Header>
            <Breadcrumbs></Breadcrumbs>

            <Container>
                <div className="row d-flex justify-content-lg-between pb-5">
                    <div className="col-md-7">
                        <ReviewHouse></ReviewHouse>
                    </div>

                    <div className="col-md-5 ">
                        <ReviewHousePrice></ReviewHousePrice>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default ReviewOrder;