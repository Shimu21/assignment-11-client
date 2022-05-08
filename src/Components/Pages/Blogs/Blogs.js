import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container>
            <Row className="my-4">
                <Col sm={12} md={6}>
                    <Card>
                        <Card.Header style={{ backgroundColor: 'lightpink' }} as="h5">Q-1: Differences between Javascript and NodeJS.</Card.Header>
                        <Card.Body>
                            <Card.Title>Javascript</Card.Title>
                            <Card.Text>
                                <p>* Javascript is a programming language, which is used for writing scripts on the website.</p>
                                <p>* Javascript can only be run in the browser.</p>
                                <p>* Javascript is capable add HTML and play with the DOM.</p>
                                <p>* Javascript is used in frontend development.</p>
                                <p>* Javascript is the updated version of ECMA scripts that uses Chrome's V8 engine written in C++.</p>
                                <p>* It is used on the client side.</p>
                            </Card.Text>
                            <Card.Title>NodeJS</Card.Title>
                            <Card.Text>
                                <p>* NodeJs is Javascript run time environment</p>
                                <p>* We can run Javascript outside the browser with the help of NodeJS.</p>
                                <p>* NodeJS doesn't have the capability to add HTML tags.</p>
                                <p>* NodeJS is used in server side development. </p>
                                <p>* NodeJS is written in C,C++ and Javascript.</p>
                                <p>* Mostly used on the server side.</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6}>
                    <Card>
                        <Card.Header style={{ backgroundColor: 'lightpink' }} as="h5">Q-1: Differences between SQL and NoSQL database.</Card.Header>
                        <Card.Body>
                            <Card.Title>SQL</Card.Title>
                            <Card.Text>
                                <p>* SQL Databases are primarily called as Relational Databases (RDBMS) .</p>
                                <p>* SQL database defines and manipulates data based structured query language..</p>
                                <p>* SQL data bases are vertically scalable.</p>
                                <p>* This data bases are best suited for complex queries.</p>
                                <p>* it follows ACID property..</p>
                            </Card.Text>
                            <Card.Title>NoSQL</Card.Title>
                            <Card.Text>
                                <p>* NoSQL databases are primarily called as non-relational or distributed database.</p>
                                <p>* A NoSQL data base has dynamic schema for unstructured data.</p>
                                <p>* Whereas NoSQL data bases are horizontally scalable.</p>
                                <p>* This data bases are not so good for complex queries. </p>
                                <p>* It follows CAP(consistencies, availability and partition tolerance).</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            <Row className="my-4">
                <Col sm={12} md={6}>
                    <Card>
                        <Card.Header style={{ backgroundColor: 'lightpink' }} as="h5">Q-3:When should use NodeJS and Mongodb.</Card.Header>
                        <Card.Body>
                            <h6 className='text-center'>MongoDB and NodeJS are two different technologies:</h6>
                            <Card.Title>NodeJS</Card.Title>
                            <Card.Text>
                                <p>
                                    NodeJs is a platform to write js code.
                                    Node.js is an interpreter or runtime/running environment for Javascript,
                                    built on Chrome's V8 Javascript engine responsibility is especially to
                                    execute your application.
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>MongoDB</Card.Title>
                            <Card.Text>
                                <p>
                                    MongoDB is a database system which gives you a chance to efficiently store documents in a database
                                    and to perform operations like data updates, or to search documents by some criteria.
                                    MongoDB is a database which can be used with node.js.
                                    It is a NoSQL database for storing data, when we need high
                                    availability of data with automatic, fast, and instant data recovery.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6}>
                    <Card>
                        <Card.Header style={{ backgroundColor: 'lightpink' }} as="h5">Q-4: What is the purpose of JWT and how it works?</Card.Header>
                        <Card.Body>
                            <Card.Title>Purpose of JWT</Card.Title>
                            <Card.Text>
                                <p>
                                    JWT, or JSON Web Token, is an open standard used to share security information
                                    between two parties, a client and a server, Each JWT contains encoded JSON objects,
                                    including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that
                                    the claims cannot be altered after the token is issued.The purpose of using JWT is not to hide
                                    data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.
                                </p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Title>How JWT works</Card.Title>
                            <Card.Text>
                                <p>
                                    In short, JWTs are used as a secure way to authenticate users and share information.
                                    JWT, or JSON Web Token, is an open standard used to share security information
                                    between two parties, a client and a server, Each JWT contains encoded JSON objects,
                                    including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that
                                    the claims cannot be altered after the token is issued.
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;