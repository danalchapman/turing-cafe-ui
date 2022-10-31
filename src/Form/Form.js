import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            date: '',
            time: '',
            number: ''
        }
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    submitRes = event => {
        event.preventDefault()

        const newRes = {
            id: Date.now(),
            ...this.state
        }

        this.props.addRes(newRes)
        this.clearInputs()
    }

    clearInputs = () => {
        this.setState({ 
            name: '',
            date: '',
            time: '',
            number: ''
         })
    }

    render() {
        return (
            <form className='res-form'>
                <input 
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={this.state.name}
                    onChange={event => this.handleChange(event)}
                />
                <input 
                    type='text'
                    placeholder='Date (mm/dd)'
                    name='date'
                    value={this.state.date}
                    onChange={event => this.handleChange(event)}
                />
                <input 
                    type='text'
                    placeholder='Time (00:00)'
                    name='time'
                    value={this.state.time}
                    onChange={event => this.handleChange(event)}
                />
                <input 
                    type='number'
                    placeholder='Number of Guests'
                    name='number'
                    value={this.state.number}
                    onChange={event => this.handleChange(event)}
                />
                <button 
                    className='make-res-btn'
                    onClick={event => this.submitRes(event)}>Make Reservation</button>
            </form>
        )
    }
}

export default Form