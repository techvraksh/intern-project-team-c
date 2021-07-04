import { createStore } from 'redux';
import Employees from "../frontend/employee";

const initialState = {};
const reducer = (state, action) => {
    return {Employees: employee.Employees};
};

const store = createStore(reducer, initialState);

export default store; 
