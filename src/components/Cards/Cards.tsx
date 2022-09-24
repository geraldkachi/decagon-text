import "./cards.css"
import CardChart from "../../assets/cardlineicon.svg"
import Star from "../../assets/cardstar.svg"
import Project from "../../assets/card2icon.svg"
import Task from "../../assets/cardtask.svg"
import CardChart2 from "../../assets/cardline2.svg"
import CardChart3 from "../../assets/cardline3.svg"

interface CardsTypes {
    title: string
    number: number
    icon: any
    subtext: string
}

const Cards = () => {
    return (
        <div className="">
            <div className='cardpareent row'>
                <div className='card col-3'>
                    <div className='cardbody'>
                        <div className="cardinner teg" style={{ display: 'flex', alignItems: 'center', borderBottom: 'solid', borderColor: '#E8EDF1', borderWidth: '1px' }}>
                            <p style={{ display: 'flex', alignItems: 'center', }}>
                                <img src={Star} alt="star" className="cardline" />
                                Task Completed</p>
                            <p>10</p>
                        </div>
                        <div className='space' />
                        <div className="cardinner next">
                            <img src={CardChart} alt="" />
                            <div>
                                <p><span className='ten'>10+</span> <span>more</span></p>
                                <p>from last week</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card col-3'>
                    <div className='cardbody'>
                        <div className="cardinner teg" style={{ display: 'flex', alignItems: 'center', borderBottom: 'solid', borderColor: '#E8EDF1', borderWidth: '1px' }}>
                            <p style={{ display: 'flex', alignItems: 'center', }}>
                                <img src={Task} alt="star" className="cardline" />
                                Task Completed</p>
                            <p>10</p>
                        </div>
                        <div className='space' />
                        <div className="cardinner next">
                            <img src={CardChart2} alt="" />
                            <div>
                                <p><span className='ten'>10+</span> <span>more</span></p>
                                <p>from last week</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card col-3'>
                    <div className='cardbody'>
                        <div className="cardinner teg" style={{ display: 'flex', alignItems: 'center', borderBottom: 'solid', borderColor: '#E8EDF1', borderWidth: '1px' }}>
                            <p style={{ display: 'flex', alignItems: 'center', }}>
                                <img src={Project} alt="star" className="cardline" />
                                Task Completed</p>
                            <p>10</p>
                        </div>
                        <div className='space' />
                        <div className="cardinner next">
                            <img src={CardChart3} alt="" />
                            <div>
                                <p><span className='ten'>08+</span> <span>more</span></p>
                                <p>from last week</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Cards
