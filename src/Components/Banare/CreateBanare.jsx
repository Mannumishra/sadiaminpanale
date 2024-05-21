import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateBanare = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    image: ""
  });

  const getFileData = (e) => {
    const { name, files } = e.target;
    setData({ ...data, [name]: files[0] });
  };

  const formData = new FormData();
  formData.append("image", data.image);

  const postData = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("https://api.myriccoproducts.com/api/banare", formData)
      console.log(res)
      if (res.status === 200) {
        toast.success("Banare Created Successfully");
        navigate("/banare");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid"  style={{marginTop:80}}>
      <div className="row">
        <div className="col-md-3">
          <Sidebar />
        </div>
        <div className="col-md-9">
          <h2 className='  text-dark text-center'>Create New Banare</h2>
          <div className="form-container">
            <form onSubmit={postData}>
              <input type="file" name="image" id="" onChange={getFileData} className='form-control' /><br />
              <button className='btn btn-dark w-100'>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBanare;
