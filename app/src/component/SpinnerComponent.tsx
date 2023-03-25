import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
const SpinnerComponent = () => {
    return (
        <Spinner animation="border" role="status" className="position-absolute top-50" style={{left: '50%', width: '100px', height: '100px'}}   >
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    );
};

export default SpinnerComponent;