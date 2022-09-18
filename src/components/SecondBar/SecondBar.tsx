import "./secondbar.css"
import EMOJI from "../../assets/🎉 😍 😁 🔥 😘 😉 😎 👩 🙄.svg"
import LeftArrow from "../../assets/leftarrow.svg"
import RightArrow from "../../assets/rightarrow.svg"
import TodaySch from "../../assets/TodaySch"

const SecondBar = () => {
    return (
        <div className='secondbar'>
            <div className='sideHeader'>

                <p>Today's Scheudle</p>

                <TodaySch />
            </div>

            <div>
                <h3>New Task</h3>
                <div className="secondbarInputBody">
                    <div className="secondbarInput">
                        <label htmlFor="task title">Task Title</label>
                        <input type="text" name="search" placeholder="Create new" />
                        <i className="bx bx-search"></i>
                    </div>


                    <p>Add collaborators</p>

                    <p>Time To Complete</p>

                    <div className="emoji">
                        <img src={LeftArrow} alt="" />
                        <img src={EMOJI} alt="emoji" />
                        <img src={RightArrow} alt="" />
                    </div>

                </div>

                    <div className="secondbarInput">
                        {/* <label htmlFor="task title">Task Title</label> */}
                        <input type="text" name="search" placeholder="Start Date" />
                        <i className="bx bx-search"></i>
                    </div>

                    
            </div>
        </div>
    )
}

export default SecondBar
