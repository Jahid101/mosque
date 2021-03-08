import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import pic from '../../image/mosque-logo.png';
import './Start.css';

const Start = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={pic} className="App-logo" alt="logo" />
                <br />
                <h1>Mosque Committee Management System</h1>
                <br />
                <Button  variant="contained" color="primary"><Link className="enter-btn" to="/home">Enter</Link></Button>
            </header>
        </div>
    );
};

export default Start;
