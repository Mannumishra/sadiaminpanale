import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import axios from 'axios'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const Product = () => {
    const [data, setData] = useState([])

    const getApiData = async () => {
        try {
            let res = await axios.get("https://api.myriccoproducts.com/api/product")
            setData(res.data.data)
        } catch (error) {
            console.log(error);
        }
    }
    const deleteRecord = async (_id) => {
        try {
            let res = await axios.delete("https://api.myriccoproducts.com/api/product/" + _id)
            if (res.status === 200) {
                toast.success("Product deleted successfully")
                getApiData()
            }
        } catch (error) {
            console.log(error);
        }
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
                    <div className="col-md-9 mb-5">
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <h2>Best Seller Product</h2>
                            <span><Link to='/createproduct' className='btn btn-dark'>Create Product</Link></span>
                        </div>
                        <div className="table-responsive">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>S.No.</th>
                                        <th>Name</th>
                                        <th>Category</th>
                                        <th>Description</th>
                                        <th>Productdetails</th>
                                        <th>Tag</th>
                                        <th>Image1</th>
                                        <th>Image2</th>
                                        <th>Image3</th>
                                        <th>Image4</th>
                                        <th>Size/Price/Discount/Final Price/Stock</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data && data.map((item, index) => (
                                        <tr key={index}>
                                            <td>{index+1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.category}</td>
                                            <td>{item.description}</td>
                                            <td>{item.productdetails}</td>
                                            <td>{item.tag}</td>
                                            <td>
                                                <a href={item.pic1} target='_blank' rel="noopener noreferrer">
                                                    <img src={item.pic1} alt="" style={{ height: 50 }} />
                                                </a>
                                            </td>
                                            <td>
                                                <a href={item.pic2} target='_blank' rel="noopener noreferrer">
                                                    <img src={item.pic2} alt="" style={{ height: 50 }} />
                                                </a>
                                            </td>
                                            <td>
                                                <a href={item.pic3} target='_blank' rel="noopener noreferrer">
                                                    <img src={item.pic3} alt="" style={{ height: 50 }} />
                                                </a>
                                            </td>
                                            <td>
                                                <a href={item.pic4} target='_blank' rel="noopener noreferrer">
                                                    <img src={item.pic4} alt="" style={{ height: 50 }} />
                                                </a>
                                            </td>
                                            <td>
                                                {
                                                    item && item.sizes.map((items, index) =>
                                                        <div key={index}>
                                                            <span>{items.size} /</span>
                                                            <span>{items.price} &#8377; /</span>
                                                            <span>{items.discountprice}% /</span>
                                                            <span>{items.finalprice} &#8377; /</span>
                                                            <span>{items.stock} pees</span>
                                                        </div>
                                                    )
                                                }
                                            </td>
                                            <td>
                                                <Link to={`/updateproduct/${item._id}`}>
                                                    <button className='btn btn-success'>Edit</button>
                                                </Link>
                                            </td>
                                            <td>
                                                <button className='btn btn-danger' onClick={() => { deleteRecord(item._id) }}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product
