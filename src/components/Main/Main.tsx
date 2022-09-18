import React from 'react'
import "./main.css"
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import tableData from '../../data/data.json'
import ThreeDots from "../../assets/threedots.svg"

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
        <div style={{ flex: 1, background: '', gap: "10px", margin: '20px' }}>

            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ flex: 1 }}>
                    <Cards />
                </div>
                {/* <div style={{ flex: 1 }}>
                    <Cards />
                </div>
                <div style={{ flex: 1 }}>
                    <Cards />
                </div> */}
            </div>



            <div className='tablebody'>

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
