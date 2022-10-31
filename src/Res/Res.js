import React from 'react'
import './Res.css'

const Res = ({ id, name, date, time, number }) => {
    return (
        <div className='res-card'>
            <h4 className='card-name'>{name}</h4>
            <p className='card-text'>{date}</p>
            <p className='card-text'>{time}pm</p>
            <p className='card-text>'>Number of Guests: {number}</p>
            <button className='card-cancel'>Cancel</button>
        </div>
    )
}

export default Res