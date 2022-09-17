import React from 'react'
import "./main.css"
import Cards from '../Cards/Cards'

const Main = () => {
    return (
        <div style={{ flex: 1, background: '', gap: "0px", width: "100%", margin: '20px' }}>

            <div style={{ display: 'flex', alignItems: 'center' }}>


                <Cards />
                <Cards />
                <Cards />
                {/* <div className='card'>
                    <div className="cardbody">
                        <p>Task Completed</p>
                        <p>10</p>
                    </div>
                    <br className='space' />
                    <div className="cardbody">
                        <p>ICON</p>
                        <div>
                            <p>10+ <span>more</span></p>
                            <p>from last week</p>
                        </div>
                    </div>
                </div> */}

            </div>


        </div>
    )
}

export default Main
