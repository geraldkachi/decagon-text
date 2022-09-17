import React from 'react'
import "./navtop.css"

const NavTop = () => {
    return (
        <div className="topnav">
            <div  className="topnav__right"></div>
            <div className="topnav__search">
                <input type="text" name="search" placeholder="Search  anything..." />
                <i className="bx bx-search"></i>
            </div>

            <div className="topnav__right">
                <div className="topnav__right-item">
                    <a href="#">Click</a>
                </div>

                <div className="topnav__right-item">
                    {/* dropdown here  */}
                    <a href="#">ClickAble</a>
                </div>

                <div className="topnav__right-item">
                    <a href="#">ClickAble</a>
                </div>
            </div>
        </div>
    )
}

export default NavTop
