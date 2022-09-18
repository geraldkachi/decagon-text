import React from 'react'
import "./sidebar.css"
import TODO from "../../assets/todo.svg"
import SIDE1 from "../../assets/side1.svg"
import SIDE2 from "../../assets/side2.svg"
import SIDE3 from "../../assets/side3.svg"
import SIDE4 from "../../assets/side4.svg"
import SIDE5 from "../../assets/side5.svg"
import SIDE6 from "../../assets/side6.svg"

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div style={{ display: "flex", alignItems: 'center', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>

                <div className="sidebar__logo">
                    <img src={TODO} alt="company logo" className='comapnylogo' />
                    TO-DO
                </div>

                <div>
                    <a href="#">
                        <div className="sidebar__item">
                            <img className="" src={SIDE1} />
                        </div>
                    </a>
                    <a href="#">
                        <div className="sidebar__item">
                            <img className="" src={SIDE2} />
                        </div>
                    </a>
                    <a href="#">
                        <div className="sidebar__item">
                            <img className="" src={SIDE3} />
                        </div>
                    </a>
                    <a href="#">
                        <div className="sidebar__item">
                            <img className="" src={SIDE4} />
                        </div>
                    </a>
                    <a href="#">
                        <div className="sidebar__item">
                            <img className="" src={SIDE5} />
                        </div>
                    </a>
                    <a href="#">
                        <div className="sidebar__item">
                            <img className="" src={SIDE6} />
                        </div>
                    </a>
                </div>

                <div></div>
            </div>

        </div>
    )
}

export default Sidebar
