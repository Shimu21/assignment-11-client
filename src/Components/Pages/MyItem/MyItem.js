import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase/firebase.init';
import axios from 'axios';

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
        <div style={{ height: "90vh" }}>
            <h2>this is all added my items {myItems.length}</h2>
        </div>
    );
};

export default MyItems;