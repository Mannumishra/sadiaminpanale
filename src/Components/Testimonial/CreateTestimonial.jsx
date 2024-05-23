import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const CreateTestimonial = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        husbandname: "",
        wifename: "",
        successmess: "",
        image: ""
    });

    const getInputData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const getFileData = (e) => {
        const { name, files } = e.target;
        setData({ ...data, [name]: files[0] });
    };

    const postData = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append("husbandname", data.husbandname);
            formData.append("wifename", data.wifename);
            formData.append("successmess", data.successmess);
            formData.append("image", data.image);

            const res = await axios.post("https://sadibackend.onrender.com/api/success", formData);
            if (res.status === 200) {
                toast.success("Success Story Created Successfully");
                navigate("/success");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container-fluid" style={{ marginTop: 80 }}>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar />
                </div>
                <div className="col-md-9">
                    <h2 className=' bg-dark p-2 text-light text-center'>Create Success Story</h2>
                    <div className="form-container">
                        <form onSubmit={postData}>
                            <div className="mb-2">
                                <label htmlFor="name" className="form-label">Husband Name</label>
                                <input type="text" name="husbandname" className="form-control" onChange={getInputData} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="name" className="form-label">Wife Name</label>
                                <input type="text" name="wifename" className="form-control" onChange={getInputData} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="message" className="form-label">Story</label>
                                <input type="text" name="successmess" className="form-control" onChange={getInputData} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="image" className="form-label">Image</label>
                                <input type="file" name="image" className="form-control" onChange={getFileData} />
                            </div>
                            <button type="submit" className="btn btn-dark w-100">Add Success Story</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateTestimonial;
