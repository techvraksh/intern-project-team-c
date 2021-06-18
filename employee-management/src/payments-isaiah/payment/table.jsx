import React from 'react';
import Table from 'react-bootstrap/Table';

const TableData = () => {
    return (
        <>
            <Table striped bordered hover className='payments_table'>
                <thead>
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
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default TableData;
