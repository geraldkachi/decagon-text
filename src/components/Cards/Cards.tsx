import React from 'react'
import "./cards.css"
import CardChart from "../../assets/cardlineicon.svg"
import Star from "../../assets/cardstar.svg"

interface CardsTypes {
    title: string
    number: number
    icon: any
    subtext: string
}

const Cards = () => {
    return (
        <div className='cardpareent'>
            <div className='card'>
                <div className='cardbody'>
                    <div className="cardinner" style={{ display: 'flex', alignItems: 'center', borderBottom: '3px' }}>
                        <p style={{ display: 'flex', alignItems: 'center', }}>
                            <img src={Star} alt="star" />
                            Task Completed</p>
                        <p>10</p>
                    </div>
                    <div className='space' />
                    <div className="cardinner next">
                        <img src={CardChart} alt="" />
                        <div>
                            <p>10+ <span>more</span></p>
                            <p>from last week</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
