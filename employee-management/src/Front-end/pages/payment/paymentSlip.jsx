import React from 'react';
import Button from 'react-bootstrap/Button';

const PaymentSlip = () => {
    return (
        <>
            <Button variant='danger' className='slip_download'>
                Generate Slip
            </Button>
        </>
    );
};

export default PaymentSlip;
