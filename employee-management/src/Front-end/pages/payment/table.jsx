import React from 'react';

import Table from 'react-bootstrap/Table';

//Get Table Data here
import EmployeeMiniProfile from './smallProfile';
import EmployeeRole from './employeeRole';
import PaymentSlip from './paymentSlip';

const TableData = () => {
    return (
        <>
            <Table
                striped
                bordered
                hover
                className='mt-4 col-md-10'
                style={{ marginLeft: '230px', overflowX: 'hidden' }}
            >
                <thead className='px-auto'>
                    <tr>
                        <th>Employee</th>
                        <th>Employee ID</th>
                        <th>Email</th>
                        <th>Join Date</th>
                        <th>Role</th>
                        <th>Salary</th>
                        <th>Payslip</th>
                    </tr>
                </thead>
                <tbody className='px-auto'>
                    <tr>
                        <td>
                            {' '}
                            <EmployeeMiniProfile />{' '}
                        </td>
                        <td>F0001</td>
                        <td>johndoe@example.com</td>
                        <td>1 Jan 2014</td>
                        <td>
                            {' '}
                            <EmployeeRole />{' '}
                        </td>
                        <td>$10000</td>
                        <td>
                            {' '}
                            <PaymentSlip />{' '}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            {' '}
                            <EmployeeMiniProfile />{' '}
                        </td>
                        <td>F0002</td>
                        <td>johndoe@example.com</td>
                        <td>1 Jan 2014</td>
                        <td>
                            {' '}
                            <EmployeeRole />{' '}
                        </td>
                        <td>$12000</td>
                        <td>
                            {' '}
                            <PaymentSlip />{' '}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default TableData;
