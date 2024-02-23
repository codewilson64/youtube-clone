import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY, value_converter } from "../../data";
import moment from "moment";

const Recommended = ({ categoryId }) => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    const relatedVideo_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=15&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recommended lg:basis-[38%] basis-full">
      {apiData.map((item, index) => {
        return (
          <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="side-video-list flex justify-between mb-[8px]">
            <img src={item.snippet.thumbnails.medium.url} alt="" className="basis-[49%] w-[50%]" />
            <div className="vid-info basis-[48%]">
              <h4 className="text-[13px] font-semibold text-white mb-[5px]">{item.snippet.title}</h4>
              <p className="text-[12px] text-white">{item.snippet.channelTitle}</p>
              <p className="text-[12px] text-neutral-400">
                {value_converter(item.statistics.viewCount)} Views<span className="text-[12px] text-neutral-400 font-medium ml-[8px]">&bull; {moment(item.snippet.publishedAt).fromNow()}</span>
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
