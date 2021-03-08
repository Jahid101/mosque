import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import './Home.css'
import MidBody from '../MidBody/MidBody';

const Home = () => {

    return (
        <div>
            <NavBar></NavBar>
            <div className="body">
            <Header></Header>
            </div>
            <MidBody></MidBody>
        </div >
    );
};

export default Home;
