import React from 'react';
import Button from 'react-bootstrap/Button';

const JobStatus = () => {
    return (
        <>
            <div className='dropdown'>
                <Button
                    className='btn dropdown-toggle'
                    type='button'
                    style={{ background: '#fff' }}
                >
                    Open
                </Button>
                <div
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton'
                >
                    <p className='dropdown-item'>Closed</p>
                    <p className='dropdown-item'>Expired</p>
                    <p className='dropdown-item'>Cancelled</p>
                </div>
            </div>
        </>
    );
};

export default JobStatus;
