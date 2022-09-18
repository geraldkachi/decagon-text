import React from 'react'
import "./navtop.css"
import SearchIcon from "../../assets/searchicon.svg"
import BELL from "../../assets/notifybell.svg"
import PROFILE from "../../assets/profileicon.svg"

const NavTop = () => {
    return (
        <div className="topnav">
            <div className="topnav__right"></div>
            <div className="topnav__search">
                <input type="text" name="search" placeholder="Search  anything..." />
                <img src={SearchIcon} alt="" className="bx bx-search" style={{paddingRight:'20px'}} />
            </div>

            <div className="topnav__right">
                <div className="topnav__right-item">
                    <img src={BELL} alt="" />
                </div>

                <div className="topnav__right-item">
                    <img src={PROFILE} alt="" />
                </div>

                {/* <div className="topnav__right-item">
                    <a href="#">icon</a>
                </div> */}
            </div>
        </div>
    )
}

export default NavTop
