import React from 'react'
import Res from '../Res/Res'
import './Reservations.css'

const Reservations = ({ reservations }) => {
    const resCard = reservations.map(res => {
        return (
            <Res 
                id={res.id}
                name={res.name}
                date={res.date}
                time={res.time}
                number={res.number}
                key={res.id}
            />
        )
    })

    return (
        <div className='res-box'>
            {resCard}
        </div>
    )
}

export default Reservations