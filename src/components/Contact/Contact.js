import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillFacebook,AiFillTwitterSquare} from "react-icons/ai";

const Contact = () => {
    return (
        <div className="border border-primary bg-warning mt-10px pb-10 pt-5 text-bold text-light">
            <h1 className="fw-bold"> Contact us</h1>
            <p>Fully accredited, Berklee Online is the renowned curriculum of Berklee College of Music at a fraction of the cost of the campus experience. Whether you’re interested in transferring in or out, Berklee Online ensures you get credit where it’s deserved with our generous transfer policy. Discover how Berklee Online can help you exceed the demands of the music industry.</p>
            <Link className="btn btn-primary p-2 mt-2  fw-bold" to="/services">Contact Us</Link>
            <div className="icons-container d-flex text-center align-items-center justify-content-center">
            <div className="icon">
                <AiFillFacebook />
            </div>
            <div className="icon">
                <AiFillTwitterSquare />
            </div>
            </div>
        </div>
        
    );
};

export default Contact;