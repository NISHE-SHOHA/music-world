import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="border border-primary mt-10 pb-10 pt-5 bg-warning text-bold text-light mb-5 ">
            <h1 className="fw-bold">Study Music from Anywhere with Nishe Online Page</h1>
            <br />
            <p>As the largest provider of worldwide music education, Berklee Online can help you take your music career to the next level through our award-winning courses, certificates, bachelor’s, and master’s degree programs. Sign up now to download free exclusive content from Berklee Online’s 12-week courses, authored by the same instructors who teach at Berklee College of Music.</p>
            <Link className="btn btn-primary p-2 mt-2 fw-bold" to="/services">About Us</Link>
        </div>
    );
};

export default About;