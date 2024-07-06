import React, { useEffect, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";
import "./css/comic.css";

interface ComicData {
  safe_title: string;
  year: number;
  month: number;
  day: number;
  img: string;
  alt: string;
}

const Comic: React.FC = () => {
  const [comicData, setComicData] = useState<ComicData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fwd.innopolis.university/api/hw2?email=a.akhmetova@innopolis.university",
        );
        const id = await response.text();
        const response2 = await fetch(
          `https://fwd.innopolis.university/api/comic?id=${id}`,
        );
        const data = await response2.json();
        setComicData(data);
      } catch (error) {
        console.error("Error fetching comic data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="container" className="Comic">
      <div className="comicText">
        <h1>{comicData?.safe_title}</h1>
        <p>
          {comicData &&
            formatDistanceToNowStrict(
              new Date(comicData.year, comicData.month - 1, comicData.day),
              { addSuffix: true },
            )}
        </p>
      </div>
      <div className="comicImage">
        <img src={comicData?.img} alt={comicData?.alt} />
      </div>
    </div>
  );
};

export default Comic;
