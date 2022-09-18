import "./secondbar.css"

const SecondBar = () => {
    return (
        <div className='secondbar'>
            <div className='sideHeader'>

                <p>Today's Scheudle</p>

                <i>ICON</i>
            </div>

            <div>
                <h3>New Task</h3>
                <div className="secondbarInput">
                    <label htmlFor="task title">Task Title</label>
                    <input type="text" name="search" placeholder="Create new" />
                    <i className="bx bx-search"></i>
                </div>



                <p>Add collaborators</p>
            </div>
        </div>
    )
}

export default SecondBar
