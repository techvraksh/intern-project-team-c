import React from 'react';
import Button from 'react-bootstrap/Button';

const EmployeeRole = () => {
    return (
        <>
            <div className='dropdown'>
                <Button className='btn dropdown-toggle' type='button'>
                    Web Developer
                </Button>
                <div
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton'
                >
                    <p className='dropdown-item'>Team Leader</p>
                    <p className='dropdown-item'>iOS Developer</p>
                    <p className='dropdown-item'>Android Developer</p>
                </div>
            </div>
        </>
    );
};

export default EmployeeRole;
