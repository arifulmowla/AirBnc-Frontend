import React from 'react';
import { Container } from 'react-bootstrap';
import PriceCard from './PriceCard';
import RoomInfo from './RoomInfo';
import './contactinfo.css'
const ContentInfo = () => {
    return (
        <div className="content-info my-3">
            <Container>
                <div className="row mb-5">
                    <div className="col-md-7 pr-sm-3 pr-md-5">
                        <RoomInfo></RoomInfo>
                    </div>
                    <div className="col-md-5">
                        <PriceCard></PriceCard>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ContentInfo;