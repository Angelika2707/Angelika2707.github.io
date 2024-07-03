import React, { useEffect, useState } from 'react';
import './css/comic.css';

const Comic = () => {
    const [comicData, setComicData] = useState(null);

    useEffect(() => {
        const Data = async () => {
            const response = await fetch('https://fwd.innopolis.university/api/hw2?email=a.akhmetova@innopolis.university');
            const id = await response.text();
            const response_2 = await fetch(`https://fwd.innopolis.university/api/comic?id=${id}`);
            const data = await response_2.json();
            setComicData(data);
        };

        Data();
    }, []);

    return (
        <div id="container" className="Comic">
            <div className="comicText">
                <h1>{comicData?.safe_title}</h1>
                <p>{comicData && (new Date(comicData.year, comicData.month - 1, comicData.day)).toLocaleDateString()}</p>
            </div>
            <div className="comicImage">
                <img src={comicData?.img} alt={comicData?.alt} />
            </div>
        </div>
    );
};

export default Comic;