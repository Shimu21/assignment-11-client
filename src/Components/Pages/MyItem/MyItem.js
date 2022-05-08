import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import axios from 'axios';
import ShowMyItem from '../ShowMyItem/ShowMyItem';
import { Container, Row } from 'react-bootstrap';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            const email = user.email;
            const url = `http://localhost:5000/myItem?email=${email}`;
            console.log(url);
            const { data } = await axios.get(url);
            setMyItems(data);
        }
        getServices();
    }, [user]);

    return (
        <Container style={{ height: "90vh" }}>
            <h2 className='text-center'>My items</h2>
            <Row>
                {
                    myItems.map(item => <ShowMyItem key={item._id} item={item}></ShowMyItem>)
                }
            </Row>
        </Container>
    );
};

export default MyItems;