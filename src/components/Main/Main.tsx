import React, { useState } from 'react'
import "./main.css"
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import tableData from '../../data/data.json'
import ThreeDots from "../../assets/threedots.svg"
import LineChart from '../lineChart.tsx/LineChart'



export const UserData = [
    {
        id: 1,
        day: "Mon",
        adsWatched: 100,
        userLost: 0,
    },
    {
        id: 2,
        day: "Tue",
        adsWatched: 230,
        userLost: 220,
    },
    {
        id: 3,
        day: "Wed",
        adsWatched: 110,
        userLost: 0,
    },
    {
        id: 4,
        day: "Thu",
        adsWatched: 190,
        userLost: 220,
    },
    {
        id: 5,
        day: "Fri",
        adsWatched: 401,
        userLost: 101,
    },
    {
        id: 6,
        day: "Sat",
        adsWatched: 0,
        userLost: 0,
    },
    {
        id: 7,
        day: "Sun",
        adsWatched: 0,
        userLost: 0,
    },
];

export const UserData1 = [
    {
        id: 1,
        day: "Mon",
        adsWatched: 290,
        userLost: 0,
    },
    {
        id: 2,
        day: "Tue",
        adsWatched: 20,
        userLost: 220,
    },
    {
        id: 3,
        day: "Wed",
        adsWatched: 110,
        userLost: 0,
    },
    {
        id: 4,
        day: "Thu",
        adsWatched: 70,
        userLost: 220,
    },
    {
        id: 5,
        day: "Fri",
        adsWatched: 101,
        userLost: 101,
    },
    {
        id: 6,
        day: "Sat",
        adsWatched: 200,
        userLost: 0,
    },
    {
        id: 7,
        day: "Sun",
        adsWatched: 230,
        userLost: 0,
    },
];


const customerTableHead = [
    'Name Of Task',
    'Start Date',
    'End Date',
    'Hours',
    'Hours',
    'Progress',
    "status"
]

const Main = () => {


    const [userData] = useState({
        labels: UserData.map((data) => data.day.toUpperCase()),
        datasets: [
            {
                label: "Green",
                data: UserData.map((data) => data.adsWatched),
                // backgroundColor: "",
                borderColor: "#4BA8A8",
                borderWidth: 2,
            },
            {
                label: "Yellow",
                data: UserData1.map((data) => data.adsWatched),
                // backgroundColor: "",
                borderColor: "#F8B400",
                borderWidth: 2,
            },
        ],

    })

    const renderHead = (item: any, index: number) => <th style={{ color: '#768396', fontSize: '14px' }} key={index}>{item}</th>

    const renderBody = (item: any, index: number) => (
        <tr key={item.id}>
            <td>{item?.name}</td>
            <td>{item?.email}</td>
            <td>{item?.location}</td>
            <td>{item?.hours}</td>
            <td>{item?.total_spend}</td>
            <td className="whitespace-nowrap">{item?.createdAt}</td>
            <td className="whitespace-nowrap"><img src={ThreeDots} alt="" /></td>
        </tr>
    )

    return (
        <div >
            <Cards />

            <div className="tablebody">
                <LineChart chartData={userData} />
            </div>

            <div className='tablebody'>
                <div className="taskseperate">
                    <h3>Task</h3>

                    <select name="" id="" style={{ padding: '10px', borderRadius: '10px', background: '#E8EDF1', borderColor: '#4BA8A8' }}>
                        <option value="" style={{ color: '#738383' }}>Last 7 days</option>
                    </select>
                </div>

                <Table
                    headData={customerTableHead}
                    renderHead={(item: any, index: number) => renderHead(item, index)}
                    bodyData={tableData}
                    renderBody={(item: any, index: number) => renderBody(item, index)}
                />
            </div>

        </div>
    )
}

export default Main
