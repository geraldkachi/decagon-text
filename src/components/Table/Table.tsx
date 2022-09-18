

import { useState, useEffect } from 'react'
import './table.css'

interface Props<T = any> {
    limit?: number
    headData?: string[]
    bodyData?: any;
    renderBody?: (n: any, b: number) => JSX.Element
    renderHead?: (n: any, b: number) => JSX.Element
    isSuccess?: boolean
    isFetching?: boolean
}

const Table = ({ limit, renderHead, bodyData, headData, renderBody, isFetching }: Props) => {

    return (
        <>
            <div className="table-wrapper">
                <table>
                    {
                        headData && renderHead ? (
                            <thead>
                                <tr>
                                    {
                                        headData.map((item: any, index: number) => renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {isFetching ? <td className='text-center w-full p-5 text-2l font-bold'>Fetching Data</td> : <>
                        {bodyData ? (
                            <tbody>
                                {
                                    // dataShow?.map((item: any, index: number) => renderBody(item, index))
                                    bodyData?.map((item: any, index: number) => renderBody(item, index))
                                }
                            </tbody>
                        ) : (
                            <tbody className=''>
                                <tr>
                                    <td className='text-center w-full p-5 text-2l font-bold'>No Data</td>
                                </tr>
                            </tbody>
                        )
                        }
                    </>}
                </table>
            </div>

        </>
    )
}

export default Table
