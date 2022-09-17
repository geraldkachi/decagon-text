import React from 'react'
import "./cards.css"

interface CardsTypes {
    title: string
    number: number
    icon: any
    subtext: string
}

const Cards = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center', flexWrap:'wrap' }}>
            <div className='card'>
                <div className='cardbody'>
                    <div className="cardinner">
                        <p>Task Completed</p>
                        <p>10</p>
                    </div>
                    <br className='space' />
                    <div className="cardinner">
                        <p>ICON</p>
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
