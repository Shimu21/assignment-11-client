import React from 'react';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Location from '../Location/Location';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ContactUs></ContactUs>
            <Location />
        </div>
    );
};

export default Home;