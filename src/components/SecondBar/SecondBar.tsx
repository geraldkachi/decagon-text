import "./secondbar.css"
import EMOJI from "../../assets/🎉 😍 😁 🔥 😘 😉 😎 👩 🙄.svg"
import LeftArrow from "../../assets/leftarrow.svg"
import RightArrow from "../../assets/rightarrow.svg"
import StartDate from "../../assets/datasvg.svg"
import MSGSvg1 from "../../assets/msgscg1.svg"
import MSGSvg2x from "../../assets/msgsvg.svg"
import PlusChip from "../../assets/chipplus.svg"
import RightChip from "../../assets/chipright.svg"
import CancelP from "../../assets/xchipP.svg"
import CancelB from "../../assets/xchipb.svg"
import ChipImg1 from "../../assets/chipimg1.svg"
import ChipImg2 from "../../assets/chipimg2.svg"

import TodaySch from "../../assets/TodaySch"

const SecondBar = () => {
    return (
        <div className='secondbar'>
            <div className='sideHeader'>

                <p>Today's Scheudle</p>

                <TodaySch />
            </div>

            <div style={{ borderBottom: '5px', borderColor: '#E8EDF1', margin: '0px 0' }}>
                <h3 style={{color:'#005555', fontSize:'20px'}}>New Task</h3>
                <div className="secondbarInputBody">
                    <div style={{ marginTop: '20px' }}>
                        <div className="inputBody">
                            <input type="text" name="search" placeholder="Create new" />
                        </div>
                    </div>


                    <p className="sideSubtitle">Add collaborators</p>

                    <div style={{ display: 'flex', alignItems: 'center' }}>

                        <div className="chip" style={{ background: '#E8E8FF', color: '#5051F9' }}>
                            <div className="chip__content">
                                <img src={ChipImg1} alt="" />
                                Angela
                            </div>
                            <img src={CancelP} alt="" />
                        </div>


                        <div className="chip" style={{ background: '#E5F5FF', color: '#1EA7FF' }}>
                            <div className="chip__content">
                                <img src={ChipImg2} alt="" />
                                Chris
                            </div>
                            <img src={CancelB} alt="" />
                        </div>

                        <img src={PlusChip} alt="" className="chipplusright" />
                        <img src={RightChip} alt="" className="chipplusright" />

                    </div>

                    <p className="sideSubtitle">Time To Complete</p>

                    <div className="emoji">
                        <img src={LeftArrow} alt="" />
                        <img src={EMOJI} alt="emoji" />
                        <img src={RightArrow} alt="" />
                    </div>

                </div>

                <div style={{ overflow: 'hidden' }}>

                    <div style={{ marginTop: '20px' }}>
                        <div className="inputBody">
                            <input type="text" name="search" placeholder="Start Date" />
                            <img src={StartDate} alt="" className="bx bx-search" style={{ paddingRight: '20px' }} />
                        </div>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <div className="inputBody">
                            <input type="text" name="search" placeholder="End Date" />
                            <img src={StartDate} alt="" className="bx bx-search" style={{ paddingRight: '20px' }} />
                        </div>
                    </div>

                    <p>Hours Budgeted</p>

                    <div style={{ marginTop: '20px' }}>
                        <div className="inputBody">
                            <input type="text" name="search" placeholder="Enter Hours" />
                        </div>
                    </div>
                </div>


                <div className="buttonleft">
                    <button>Save</button>
                </div>

                <div>
                    <p className="msg">Messages</p>


                    <div className="msgprofile">
                        <img src={MSGSvg1} alt="" />

                        <div className="smgText">
                            <p>Chris Webber</p>
                            <p>Hi Michael! How are You?</p>
                        </div>
                    </div>

                    <div className="msgprofile">
                        <img src={MSGSvg2x} alt="" />

                        <div className="smgText">
                            <p>Chris Webber</p>
                            <p>Do you need that design??</p>
                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default SecondBar
