import "./layout.css"
import Sidebar from '../Sidebar/Sidebar'
import NavTop from '../NavTop/NavTop'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <div className='layout'>
                <Sidebar />
                <div className="layout__content">
                    <NavTop />
                    <div className="layout__content-main">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
