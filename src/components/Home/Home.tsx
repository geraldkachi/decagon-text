import React from 'react'
import Main from '../Main/Main'
import SecondBar from '../SecondBar/SecondBar'

const Home = () => {
    return (
        <div style={{ display:'flex'}}>

        <div style={{ flex:1}}>
            <Main />
            <SecondBar />
        </div>
        </div>
    )
}

export default Home
