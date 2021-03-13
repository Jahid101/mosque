import React from 'react';
import bg5 from '../../image/bg5.jpg';
import './MidBody.css';

const MidBody = () => {

    const style = {
        marginTop: '25px',
        width: '90%',
        height: '300px',
        marginLeft: '5%',
        borderRadius: '15px',
        marginBottom: '25px',
        backgroundImage: `URL(${bg5})`
    }

    return (
        <div>
            <div style={style} className="ml-5 mt-5">
                <div>
                    <input className="ml-4 mt-2" type="text" name="" id="" placeholder="Fazar" />
                    <input className="ml-1" type="text" name="" id="" placeholder="Juhar" />
                    <input className="ml-1" type="text" name="" id="" placeholder="Asar" />
                    <input className="ml-1" type="text" name="" id="" placeholder="Magriv" />
                    <input className="ml-1" type="text" name="" id="" placeholder="Esha" />
                    <input className="ml-1" type="text" name="" id="" placeholder="Juma" />
                    <button className="ml-4 mt-2 btn btn-success">Change</button>
                </div>

                <div className="d-flex time ml-5 mt-4">
                    <div className="timeMargin">
                        <h3>Fazar: 5.00 am</h3>
                        <h3>juhar: 1.15 pm</h3>
                        <h3>Asar: 4.15 pm</h3>
                    </div>
                    <div className="timeMargin">
                        <h3>Magriv: 6.05 pm</h3>
                        <h3>Esha: 8.15 pm</h3>
                        <h3>Juma: 1.30 pm</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MidBody;
