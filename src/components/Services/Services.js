import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('../music.JSON')
        .then(res => res.json())
        .then( data => setServices(data))
    }, [])

    
    return (
        <div className="d-flex justify-content-center">
           <div className="row">
            {
                services.map( service => <Service 
                service={service}
                ></Service>)
            }
            </div> 
        </div>
    );
};

export default Services;