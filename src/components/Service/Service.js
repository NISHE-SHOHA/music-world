import React  from 'react';
import { Link } from 'react-router-dom';
import './Service.css';


const Service = (props) => {
   const {name, img, price} = props.service;
    return (
        <div className="mt-5 col-md-4 d-flex justify-content-center">
            <div className="card border border-warning bg-info text-dark fw-bold" style={{width: '18rem'}}>
            <img src={img} className="card-img-top" alt="..." />
            <div className="card-body">
            <h4>Name: {name}</h4>
            <p className="card-text">Price: {price}</p>
            <br />
            <Link className="button-info" to="/contact">Enroll Now</Link>
            </div>
            </div>
        </div>
    );
};

export default Service;