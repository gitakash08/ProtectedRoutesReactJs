import React, { useState, useEffect } from "react";
import '../css/home.css';
import axios from 'axios';

const Home = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                const jsonData = await response.data;
                setData(jsonData);
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            }
        };
        fetchData();
        return () => {
            console.log('Cleanup Is Performing...');
        };
    }, []);

    return (
        <>
            <h1>Data From Api:</h1>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {data.map((item) => (
                        <li key={item.id}>{item.title}</li>
                    ))}
                </ul>
            )}
        </>
    )
}

export default Home;