import React from 'react'
import "./main.css"
import Cards from '../Cards/Cards'

const Main = () => {
    return (
        <div style={{ flex: 1, background: '', gap: "10px", margin: '20px' }}>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <Cards />
                </div>
                <div style={{ flex: 1 }}>
                    <Cards />
                </div>
                <div style={{ flex: 1 }}>
                    <Cards />
                </div>
            </div>



            <table>
                
            </table>

        </div>
    )
}

export default Main
