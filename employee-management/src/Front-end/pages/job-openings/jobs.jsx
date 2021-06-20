import React from 'react';

import Table from 'react-bootstrap/Table';
import JobStatus from './jobStatus';

const JobsOpening = () => {
    return (
        <>
            <Table className='table mt-4' style={{ fontSize: '0.90rem' }}>
                <thead>
                    <tr>
                        <th scope='col'>Job Title</th>
                        <th scope='col'>Departments</th>
                        <th scope='col'>Start Date</th>
                        <th scope='col'>Expire Date</th>
                        <th scope='col'>Job Types</th>
                        <th scope='col'>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope='row'>Web Developer</th>
                        <td>Development</td>
                        <td>5 Sep 2021</td>
                        <td>20 Sep 2021</td>
                        <td>
                            <JobStatus />
                        </td>
                        <td>
                            <JobStatus />
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default JobsOpening;
