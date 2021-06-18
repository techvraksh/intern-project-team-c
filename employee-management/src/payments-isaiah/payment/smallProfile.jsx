import React from 'react';
import Image from 'react-bootstrap/Image';

const EmployeeMiniProfile = () => {
    return (
        <>
            <div className='table_mini_profile'>
                <div className='profile_image'>
                    <Image
                        src='https://randomuser.me/api/portraits/med/women/34.jpg'
                        roundedCircle
                    />
                </div>
                <div className='profile_details'>
                    <p>John Doe</p>
                    <span>Web Developer</span>
                </div>
            </div>
        </>
    );
};

export default EmployeeMiniProfile;
