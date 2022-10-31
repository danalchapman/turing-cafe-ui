import React, { Component } from 'react';
import Reservations from '../Reservations/Reservations'
import Form from '../Form/Form'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(response => response.json())
    .then(data => this.setState({ reservations: data }))
  }

  addRes = (newRes) => {
    this.setState({ reservations: [...this.state.reservations, newRes] })
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form 
          addRes={this.addRes}
        />
        <Reservations 
          reservations={this.state.reservations}
        />
      </div>
    )
  }
}

export default App;
