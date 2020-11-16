import React from 'react';
import { Container } from 'react-bootstrap';
import Breadcrumbs from '../../Components/Breadcrumbs/Breadcrumbs';
import ContactForm from '../../Components/ContactForm/ContactForm';
import Header from '../../Components/Header/Header';
import ReviewHousePrice from '../../Components/ReviewHousePrice/ReviewHousePrice';

const Contact = () => {
    return (
        <>
            <Header></Header>
            <Breadcrumbs></Breadcrumbs>

            <Container>
                <div className="row d-flex justify-content-lg-between pb-5">
                    <div className="col-md-7 py-5">
                        <ContactForm></ContactForm>
                    </div>

                    <div className="col-md-5 ">
                        <ReviewHousePrice></ReviewHousePrice>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;