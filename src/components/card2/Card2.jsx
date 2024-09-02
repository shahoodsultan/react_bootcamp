import React from 'react'
import './Card2.css'
import img1 from '../../assets/imgs/img1.png'


export default function Card2({ image, types, details }) {
    return (
        <>
            <div className='card2' >
                <div className="card2-img">

                    <img src={image} alt="" />

                </div>

                <div className="card2-content">
                    <div className="type"> {types}</div>
                    <div className="details">{details}</div>
                </div>
            </div>
        </>
    )
}