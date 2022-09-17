import { ReactNode } from 'react'
import "./layout.css"
import Sidebar from '../Sidebar/Sidebar'
import NavTop from '../NavTop/NavTop'
import SecondBar from '../SecondBar/SecondBar'
import Main from '../Main/Main'

interface IProps {
    children?: ReactNode
}

const Layout = ({ children }: IProps) => {
    return (
        <>
            <div className={`layout`}>
                <Sidebar />
                <div className="layout__content">
                    <NavTop />
                    <div className="layout__content-main">
                        <Main />
                        {children}
                        <SecondBar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout
