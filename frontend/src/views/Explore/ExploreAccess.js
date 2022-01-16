import React, { Fragment, useEffect } from 'react';
import { Button, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { AiFillTwitterCircle } from 'react-icons/ai';
import './Explore.css';
import NftImg from '../../assets/nft-voyager.png';
import { FaDiscord } from 'react-icons/fa';
import { BsArrowLeft } from 'react-icons/bs';

const ExploreAccess = () => {
    return (
        <Fragment>
            <Row>
                <Col></Col>
                <Col xs="8" className="text-center">
                    <h1 className="mt-5">Access</h1>
                    <div style={{padding: '50px', minHeight: '205px'}}>
                      <h4>NFTs certify your ownership of a digital asset. Certain social media platforms will now even verify your ownership</h4>
                      <h4>For now, let's view our own NFT</h4>
                    </div>
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col></Col>
                <Col className="text-center">
                    <Button variant="primary" href="/explore-ownership"><FaDiscord/> Access Discord Server</Button>
                </Col>
                <Col></Col>
            </Row>

            <Row className="mt-5">
                <Col></Col>
                    <Col className="text-center"><Link to="/explore-utility"><BsArrowLeft size={20} /></Link><span className="text-muted">3 of 3</span></Col>
                <Col></Col>
            </Row>
        </Fragment>
    );
};

export default ExploreAccess;
