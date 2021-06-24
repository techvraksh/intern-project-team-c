import React from 'react';

import NavBar from '../../components/navbar';
import SideBar from '../../components/sidebar';
import GeneratePaymentCard from '../payment-details/generatePaymentCard';
import TableData from './table';

const Payment = () => {
    return (
        <>
            <NavBar />
            <SideBar />
            <TableData />
            <GeneratePaymentCard />
        </>
    );
};

export default Payment;
