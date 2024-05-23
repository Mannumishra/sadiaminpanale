import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Testimonial = () => {
    const [data, setData] = useState([]);

    const deleteRecord = async (_id) => {
        try {
            const res = await axios.delete(`https://sadibackend.onrender.com/api/success/${_id}`)
            if (res.status === 200) {
                toast.success("Success Story Deleted Successfully");
                getApiData();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getApiData = async () => {
        try {
            const res = await axios.get("https://sadibackend.onrender.com/api/success");
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div className="container-fluid" style={{ marginTop: 80 }}>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9 mb-5">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h5 className='bg-dark p-2 text-light text-center'>Success Story</h5>
                        <Link to='/createsuccess' className='btn btn-dark'>Create Success Story</Link>
                    </div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Husband Name</th>
                                <th>Wife Name</th>
                                <th>Description</th>
                                <th>Image</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{item.husbandname}</td>
                                    <td>{item.wifename}</td>
                                    <td>{item.successmess}</td>
                                    <td><img src={item.image} alt="" style={{ height: 50 }} /></td>
                                    <td><Link to={`/updatesuccess/${item._id}`} className='btn btn-success'>Edit</Link></td>
                                    <td><button className='btn btn-danger' onClick={() => deleteRecord(item._id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
