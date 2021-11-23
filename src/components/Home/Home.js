import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Service from '../Service/Service';


const Home = () => {
    
    const [services, setServices] = useState([]);

    useEffect( () =>{
        fetch('../music.JSON')
        .then(res => res.json())
        .then( data => setServices(data))
    }, [])
    return (
        <div>
            <Header></Header>
           <div className="row">
            {
                services.slice(0, 4).map( service => <Service 
                service={service}
                key={service.id}
                ></Service>)
            }
            </div> 
        </div>
    );
};

export default Home;