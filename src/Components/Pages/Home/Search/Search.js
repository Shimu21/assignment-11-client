import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';
import './Search.css';

const Search = () => {
    return (
        <Container>
            <Row className='d-flex justify-content-center align-items-center'>
                <Col>
                    <div>
                        <h2>Search Latest Warehouse Packages</h2>
                    </div>
                    <div>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Search"
                                aria-label="Recipient's username"
                                aria-describedby="basic-addon2"
                            />
                            <InputGroup.Text style={{ backgroundColor: 'lightpink', borderColor: '#222' }}>Packages</InputGroup.Text>
                        </InputGroup>
                    </div>
                </Col>
                <Col>
                    <div className='d-flex justify-content-center'>
                        <img style={{ width: "200px" }} src="https://i.ibb.co/qDfRpsq/pngtree-vector-keyword-search-icon-png-image-529912-removebg-preview.png" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Search;