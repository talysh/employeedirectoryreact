import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import * as ReactBootStrap from "react-bootstrap";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import employees from "./utils/employees";


class DefaultSortTable extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: 'firstName',  // default sort column name
      defaultSortOrder: 'desc', // default sort order
    };
  }
  render() {
    
    const selectRow = {
      mode: 'checkbox',  // multi select
      clickToSelect: true,
      bgColor: 'lightBlue'
    };

    const cellEdit = {
      mode: 'click',
      blurToSave: true // click cell to edit
    };
    return (
      <div className="App">
        <div className="App-header">
          <h2>Employee Directory w/React!</h2>
        </div>
        <BootstrapTable data={employees} options={this.options} selectRow={selectRow} cellEdit={cellEdit} hover>
          <TableHeaderColumn dataField='firstName' dataSort filter={ { type: 'TextFilter', delay: 500 } }>First Name</TableHeaderColumn>
          <TableHeaderColumn dataField='lastName' dataSort>Last Name</TableHeaderColumn>
          <TableHeaderColumn dataField='role' dataSort>Role</TableHeaderColumn>
          <TableHeaderColumn dataField='telephone' isKey dataSort>Telephone</TableHeaderColumn>
          <TableHeaderColumn dataField='email' dataSort>Email</TableHeaderColumn>
          <TableHeaderColumn dataField='address'>Address</TableHeaderColumn>
          <TableHeaderColumn dataField='tenure' dataSort>Tenure</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

// const App = () => {

//   const employees = [
//     {
//       firstName: "Taleh",
//       lastName: "Aliyev",
//       role: "manager",
//       tenure: "5",
//       telephone: "781-444-3345",
//       email: "taleh@aliyev.com",
//       address: "208 Beaver St. Framingham, MA"
//     },
//     {
//       firstName: "Elias",
//       lastName: "Aliyev",
//       role: "engineer",
//       tenure: "2",
//       telephone: "508-888-9037",
//       email: "elias@aliyev.com",
//       address: "23 Kingsbury St. Framingham, MA"
//     }, {
//       firstName: "Eralda",
//       lastName: "Aliyeva",
//       role: "executive",
//       tenure: "3",
//       telephone: "508-960-2027",
//       email: "eralda@aliyev.com",
//       address: "185 Fulton St. Medford, MA"
//     }
//   ];

//   const renderEmployees = (employee, index) => {
//     return (
//       <tr key="{index}">
//         <td>{employee.firstName}</td>
//         <td>{employee.lastName}</td>
//         <td>{employee.role}</td>
//         <td>{employee.telephone}</td>
//         <td>{employee.email}</td>
//         <td>{employee.address}</td>
//         <td>{employee.tenure}</td>
//       </tr>
//     )

//   }

//   return (

//     <div className="App">
//       <div className="App-header">
//         {/* <img src={logo} className="App-logo" alt="logo" /> */}
//         <h2>Employee Directory w/React!</h2>
//       </div>
//       <p className="App-intro">
//         {/* To get started, edit <code>src/App.js</code> and save to reload. */}
//       </p>

//       <ReactBootStrap.Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Role</th>
//             <th>Telephone</th>
//             <th>Email</th>
//             <th>Address</th>
//             <th>Tenure</th>
//           </tr>
//         </thead>
//         <tbody>
//           {employees.map(renderEmployees)}
//         </tbody>
//       </ReactBootStrap.Table>
//     </div>
//   );
// }

export default DefaultSortTable;
// export default App;
