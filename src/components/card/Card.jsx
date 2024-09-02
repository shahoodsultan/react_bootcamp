import React from 'react'
import './Card.css'
import Btn from '../../components/btn/Btn'
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Card({image,status,investment,roi,text1,text2,text3,location}) {
    return (
        <>
        <div className='card' >
            <div className="card-img"
                style={{ backgroundImage: `url(${image})` }}
                
            >
                <span className='card-status'>{status}</span>
            </div>
            <div className="card-distribution">
                <div className='card-section' >
                    <div className="card-text">Initial Investment</div>
                    <div className="card-figures">{investment}</div>
                </div>
                <hr />
                <div className='card-section' >
                    <div className="card-text">Potential ROI</div>
                    <div className="card-figures">{roi}</div>
                </div>

            </div>
            <div className="card-content">
                <div className="text1"> {text1}</div>
                <div className="text2">{text2}</div>
                <div className="text3">{text3}</div>
                <div className="location">
                    <LocationOnIcon
                        fontSize='small'
                        color='#4DAD4'
                    />
                    {location}
                </div>
                <div className="card-btn">
                    <Btn
                        label='Login To Make An Offer!' 
                    />
                </div>
            </div>
        </div>
        </>
    )
}
