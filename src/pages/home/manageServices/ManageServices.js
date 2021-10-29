import React, { useEffect, useState } from 'react';


const ManageServices = () => {

    const [services, setService] = useState([])
    useEffect(() => {
        fetch(`https://frozen-refuge-45390.herokuapp.com/services`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [services])

    const handleDelete = id => {
        const url = `https://frozen-refuge-45390.herokuapp.com/services/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id);
                    setService(remaining);

                }

            })
    }
    return (
        <div>
            <h2>This is manage service</h2>
            {
                services.map(service => <div key={service._id}>

                    <h2>{service.name}</h2>
                    <button onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default ManageServices;