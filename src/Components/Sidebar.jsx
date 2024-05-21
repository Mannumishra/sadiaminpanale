import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    const loginvalue = sessionStorage.getItem("login")
    return (
        <>
            <div className="list-group" style={{}}>
               {
                loginvalue? <Link to="/home" className="list-group-item list-group-item-action">Home</Link>:
                <Link to="/" className="list-group-item list-group-item-action">Home</Link>
               }
                <Link to="/banare" className="list-group-item list-group-item-action list-group-item-primary">Banner</Link>
                <Link to="/marquee" className="list-group-item list-group-item-action list-group-item-secondary">Test Upperside</Link>
                <Link to="/bestseller" className="list-group-item list-group-item-action list-group-item-success">Bestseller</Link>
                <Link to="/category" className="list-group-item list-group-item-action list-group-item-danger">Category</Link>
                <Link to="/product" className="list-group-item list-group-item-action list-group-item-light">Product</Link>
                <Link to="/testimonial" className="list-group-item list-group-item-action list-group-item-dark">Testimonial</Link>
                <Link to="/contact" className="list-group-item list-group-item-action list-group-item-warning">Contact</Link>
                <Link to="/newsletter" className="list-group-item list-group-item-action list-group-item-info">Newsletter</Link>
                <Link to="/order" className="list-group-item list-group-item-action list-group-item-danger">Order Section</Link>
                {/* <Link to="/" className="list-group-item list-group-item-action list-group-item-dark"></Link> */}
            </div>
        </>
    )
}

export default Sidebar