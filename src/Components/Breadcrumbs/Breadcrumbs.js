import React from 'react';
import { Container } from 'react-bootstrap';
import { Breadcrumb } from 'react-bootstrap';
import './breadcrumbs.scss'

const Breadcrumbs = () => {
    return (
        <>
            <Container>
                <Breadcrumb>

                    <Breadcrumb.Item href="#">1. Reviews house rules</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                        2. Who’s coming?
  </Breadcrumb.Item>
                    <Breadcrumb.Item active>3. Confirm and pay</Breadcrumb.Item>

                </Breadcrumb>
            </Container>
        </>
    );
};

export default Breadcrumbs;