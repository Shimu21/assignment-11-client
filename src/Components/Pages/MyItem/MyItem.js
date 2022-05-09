import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import ShowMyItem from '../ShowMyItem/ShowMyItem';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../../api/axiosPrivate';

const MyItems = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);

    useEffect(() => {
        const getServices = async () => {
            const email = user?.email;
            const url = `https://blooming-mountain-38206.herokuapp.com/myItems?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setMyItems(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    navigate('/login');
                    signOut(auth);
                }
            }
        }
        getServices();
    }, [user]);

    return (
        <Container>
            <h2 className='text-center'>My Items</h2>
            <Row>
                {
                    myItems?.map(item => <ShowMyItem key={item._id} item={item}></ShowMyItem>)
                }
            </Row>
        </Container>
    );
};

export default MyItems;