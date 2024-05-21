import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Checkout = () => {
    const [data, setData] = useState([])
    // const navigate = useNavigate()
    const getApiData = async () => {
        try {
            let res = await axios.get("https://api.myriccoproducts.com/api/checkout")
            console.log(res)
            setData(res.data.data)
        } catch (error) {  }
    }
    useEffect(() => {
        getApiData()
    }, [])
    return (
        <>
            <div className="container-fluid" style={{ marginTop: 80 }}>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <div className='text-center fs-4 mb-2'>Order List</div>
                        <table className='table table-bordered table-responsive'>
                            <thead>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Order Status</th>
                                    <th>Payment Mode</th>
                                    <th>Payment Status</th>
                                    <th>Total</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.reverse().map((item, index) => {
                                        return <tr key={index}>
                                            <td>{item._id}</td>
                                            <td>{item.orderstatus}</td>
                                            <td>{item.paymentmode}</td>
                                            <td>{item.paymentstatus}</td>
                                            <td>&#8377;{item.total}</td>
                                            <td>{new Date(item.createdAt).toLocaleDateString()}</td>
                                            <td><Link to={`/updatecheckout/${item._id}`}><i className='fa fa-eye text-success'></i></Link></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout