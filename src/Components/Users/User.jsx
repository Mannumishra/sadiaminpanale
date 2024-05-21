import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'

const User = () => {
  const [data, setData] = useState([])

  const getApiData = async () => {
    try {
      let res = await axios.get("https://sadibackend.onrender.com/api/user")
      setData(res.data.data)
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
                      <td><button className='btn btn-success'>See Detals</button></td>
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