import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateTestimonial = () => {
    const { _id } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState({
        husbandname: "",
        wifename: "",
        successmess: "",
        image: ""
    });

    const getApiData = async () => {
        try {
            const res = await axios.get(`https://sadibackend.onrender.com/api/success/${_id}`);
            setData(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getInputData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const getFileData = (e) => {
        const { name, files } = e.target;
        setData({ ...data, [name]: files[0] });
    };

    const formData = new FormData();
    formData.append("husbandname", data.husbandname);
    formData.append("wifename", data.wifename);
    formData.append("successmess", data.successmess);
    formData.append("image", data.image);

    const postData = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`https://sadibackend.onrender.com/api/success/${_id}`, formData);
            console.log(res)
            if (res.status === 200) {
                toast.success("Testimonial Updated Successfully");
                navigate("/success");
            }
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
                <div className="col-md-9">
                    <h5 className='bg-dark p-2 text-light text-center'>Update Success Story</h5>
                    <div className="form-container">
                        <form onSubmit={postData}>
                            <div className="mb-2">
                                <label htmlFor="name" className="form-label">Husband Name</label>
                                <input type="text" name="husbandname" value={data.husbandname} className="form-control" onChange={getInputData} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="name" className="form-label">Wife Name</label>
                                <input type="text" name="wifename" value={data.wifename} className="form-control" onChange={getInputData} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="message" className="form-label">Story</label>
                                <input type="text" name="successmess" value={data.successmess} className="form-control" onChange={getInputData} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="image" className="form-label">Image</label>
                                <input type="file" name="image" className="form-control" onChange={getFileData} />
                            </div>
                            <button type="submit" className="btn btn-dark w-100">Update Success Story</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateTestimonial;
