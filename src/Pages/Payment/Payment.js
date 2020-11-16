import React from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import Header from '../../Components/Header/Header';
import PaymentForm from '../../Components/PaymentForm/PaymentForm';
import ReviewHousePrice from '../../Components/ReviewHousePrice/ReviewHousePrice';

const Payment = () => {
    return (
        <>
            <Header></Header>
            <Breadcrumbs></Breadcrumbs>

            <Container>
                <div className="row d-flex justify-content-lg-between pb-5">
                    <div className="col-md-7 py-5">
                        <PaymentForm></PaymentForm>
                    </div>

                    <div className="col-md-5 ">
                        <ReviewHousePrice></ReviewHousePrice>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Payment;