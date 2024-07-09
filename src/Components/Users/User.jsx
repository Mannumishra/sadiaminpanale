import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'

const User = () => {
  const [data, setData] = useState([])

  const getApiData = async () => {
    try {
      let res = await axios.get("https://sadibackend.onrender.com/api/user")
      console.log(res)
      setData(res.data.data)
    } catch (error) {
      console.log(error);
    }
  }

  const deleteRecord = async (_id) => {
    try {
      let res = await axios.delete("https://sadibackend.onrender.com/api/user/" + _id)
      if (res.status === 200) {
        toast.success("User Details Deleted Successfully")
      }
      getApiData()
    } catch (error) {
      console.log(error)
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
          <div className="col-md-9">
            <div className='text-center fs-4 mb-2'>Users List</div>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Contact</th>
                  <th>Gender</th>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) =>
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.phone}</td>
                      <td>{item.gender}</td>
                      <td><Link to={`/userdetails/${item._id}`}><button className='btn btn-success'>See Details</button></Link>&nbsp;
                        <Link><button className='btn btn-danger' onClick={() => deleteRecord(item._id)}>Delete</button></Link>
                      </td>
                    </tr>
                  )
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default User