import React, { Component } from "react";
import { Table } from 'reactstrap';
import { connect } from 'react-redux';

class App extends Component {

  handleClick(id) {
    console.log('Funciona', id)
  }

  render() {
    const { vehicles } = this.props.vehicles;
    console.log(vehicles)
    console.log(vehicles.length)
    const listTable = vehicles.length ? (
      vehicles.map(vehicle => {
        return (
          <tr key={vehicle.id}>
            <td>{vehicle.make}</td>
            <td>{vehicle.model}</td>
            <td>{vehicle.year}</td>
            <td>{vehicle.status}</td>
          </tr>
        )
      })
    ) : (
        <tr><td>No Data..</td></tr>
    )

    return (
      <div className="App">
        <h2 className="text-center pt-3">This is all the vehicle in taller</h2>
        <p className="text-center pb-3">Click on the links to be taken to a different part of the app!</p>
        <Table>
        <thead>
          <tr>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {listTable}
        </tbody>
      </Table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    vehicles: state.vehicles
  }
}

export default connect(mapStateToProps)(App);
