import "./secondbar.css"
import EMOJI from "../../assets/🎉 😍 😁 🔥 😘 😉 😎 👩 🙄.svg"
import LeftArrow from "../../assets/leftarrow.svg"
import RightArrow from "../../assets/rightarrow.svg"
import StartDate from "../../assets/datasvg.svg"

import MSGSvg1 from "../../assets/msgimg1.svg"
import MSGSvg2x from "../../assets/msgimg2.svg"

import PlusChip from "../../assets/chipplus.svg"
import RightChip from "../../assets/chipright.svg"
import CancelP from "../../assets/xchipP.svg"
import CancelB from "../../assets/xchipb.svg"
import ChipImg1 from "../../assets/chipimg1.svg"
import ChipImg2 from "../../assets/chipimg2.svg"

import TodaySch from "../../assets/TodaySch"

import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import { FormEvent, RefObject, useEffect, useRef, useState } from "react"



const getValue = localStorage.getItem('inputValue')


// const

const SecondBar = () => {

    // const [formInput, setFormInput] = useState({})
    const formInput = useRef<HTMLInputElement>(null)

    const onFinish = (e: FormEvent)=> {
        e.preventDefault();
        const isExists = localStorage.getItem('todo') as unknown as { allTodos: [{ new: string, start: string, end: string, hours: string }] };
        const arr = isExists?.allTodos || [];
        const values = {
            // new: formInput.current["new"].value,
            new:  e.target['new'].value,
            start: e.target["start"].value,
            end: e.target["end"].value,
            hours: e.target["hours"].value,
        }
        arr.push(values);
        localStorage.setItem("todo", JSON.stringify(arr))
        console.log(values, 'values')
    }

    useEffect(() => {
        console.log(localStorage.getItem('values'))
    }, [localStorage.getItem('values')])


    return (
        <div className='secondbar'>
            <div className='sideHeader'>

                <p style={{ color: "#005555", fontSize: '20px', margin: '20px 0' }}>Today's Scheudle</p>

                <TodaySch />
            </div>

            <form onSubmit={onFinish} style={{ borderBottom: '5px', borderColor: '#E8EDF1', margin: '0px 0' }}>
                <h3 style={{ color: '#005555', fontSize: '20px' }}>New Task</h3>
                <div className="secondbarInputBody">
                    <div style={{ marginTop: '20px' }}>
                        <div className="inputBody">
                            <input type="text" ref={formInput} name="new" placeholder="Create new" />
                        </div>
                    </div>


                    <p className="sideSubtitle">Add collaborators</p>

                    <div className="chipscroll">

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

                    <div style={{ borderBottom: '3px solid #E8EDF1', margin: '10px 0' }} />

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
                            <input type="date" ref={formInput} name="start" placeholder="Start Date" />
                            {/* <Datetime
                                closeOnSelect
                                timeFormat={false}
                                className="text-black"
                                //@ts-ignore
                                // isValidDate={validBookingDate}
                                dateFormat="DD-MM-YYYY"
                                // onChange={onDateChange}
                                renderInput={(props, open) => {
                                    return (
                                        <input
                                            {...{ ...props }}
                                            // @ts-ignore
                                            onChange={e => {
                                                props.onChange(e);
                                            }}
                                            // disabled
                                            onClick={open}
                                            label="Date"
                                            activeInput={!!props.value}
                                            TrailingIcon={() => (
                                                // @ts-ignore
                                                <span className="relative" onClick={open}>
                                                    <img src={StartDate} alt="" className="bx bx-search" style={{ paddingRight: '20px' }} />
                                                </span>
                                            )}
                                        />
                                    );
                                }}
                            /> */}

                            <img src={StartDate} alt="" className="bx bx-search" style={{ paddingRight: '20px' }} />
                        </div>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                        <div className="inputBody">
                            <input type="date" ref={formInput} name="end" placeholder="End Date" />
                            <img src={StartDate} alt="" className="bx bx-search" style={{ paddingRight: '20px' }} />
                        </div>
                    </div>

                    <p className="sideSubtitle">Hours Budgeted</p>

                    <div style={{ marginTop: '20px' }}>
                        <div className="inputBody">
                            <input type="text" ref={formInput} name="hours" placeholder="Enter Hours" />
                        </div>
                    </div>
                </div>


                <div className="buttonleft">
                    <button type="submit">Save</button>
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



            </form>
        </div>
    )
}

export default SecondBar
