import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import employees from "./utils/employees";


class DefaultSortTable extends React.Component {
  constructor(props) {
    super(props);

    this.options = {
      defaultSortName: 'firstName', // default sort column name
      defaultSortOrder: 'desc', // default sort order
    };
  }
  render() {

    const selectRow = {
      mode: 'checkbox',  // multi select
      clickToSelect: true,
      bgColor: 'lightBlue'
    };

    const cellEdit = { // click cell to edit
      mode: 'click',
      blurToSave: true
    };

    return (
      <div className="App">
        <div className="App-header">
          <h2>Employee Directory w/React!</h2>
        </div>
        <BootstrapTable data={employees} options={this.options} selectRow={selectRow} cellEdit={cellEdit} hover>
          <TableHeaderColumn dataField='firstName' dataSort filter={{ type: 'TextFilter', delay: 500 }}>First Name</TableHeaderColumn>
          <TableHeaderColumn dataField='lastName' dataSort>Last Name</TableHeaderColumn>
          <TableHeaderColumn dataField='role' dataSort>Role</TableHeaderColumn>
          <TableHeaderColumn dataField='telephone' isKey>Telephone</TableHeaderColumn>
          <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
          <TableHeaderColumn dataField='address' filter={{ type: 'TextFilter', delay: 500 }}>Address</TableHeaderColumn>
          <TableHeaderColumn dataField='tenure' filter={{ type: 'TextFilter', delay: 500 }}>Tenure</TableHeaderColumn>
        </BootstrapTable>
        <p className="hint">Click on FirstName, LastName, and Role categories to sort by those fields.</p>
      </div>
    );
  }
}

export default DefaultSortTable;

