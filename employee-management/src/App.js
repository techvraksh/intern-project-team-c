import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import TableData from './payments-isaiah/payment/table';
import EmployeeMiniProfile from './payments-isaiah/payment/smallProfile';

function App() {
    return (
        <>
            <div className='App'>
                <h1>Employee Management System</h1>
            </div>

            <TableData />
            <EmployeeMiniProfile />
        </>
    );
}

export default App;
