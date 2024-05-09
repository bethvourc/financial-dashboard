// frontend/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/financial-data')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            })
    }, []);

    return (
        <div>
            {data.map(item => (
                <div key={item.id}>
                    {/* Render your data here */}
                    <p>{JSON.stringify(item)}</p>
                </div>
            ))}
        </div>
    );
}

export default Dashboard;
