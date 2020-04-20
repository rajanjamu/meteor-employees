import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './components/employee_list';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Employees Directory</h1>
                <EmployeeList />
            </div>
        );
    }
}

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.container'));
})