import React, { useEffect, useState } from "react";
import video1 from "../../assets/video.mp4";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";
import jack from "../../assets/jack.png";
import user_profile from "../../assets/user_profile.jpg";
import moment from "moment";
import { API_KEY, value_converter } from "../../data";
import { useParams } from "react-router-dom";

const PlayVideo = () => {
  const { videoId } = useParams();
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    // Fetching Videos Data
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((response) => response.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchOtherData = async () => {
    // Fetching Channel Data
    const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url)
      .then((response) => response.json())
      .then((data) => setChannelData(data.items[0]));

    // Fetching Comment Data
    const commentData_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=10&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentData_url)
      .then((response) => response.json())
      .then((data) => setCommentData(data.items));
  };

  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchOtherData();
  }, [apiData]);

  return (
    <div className="play-video lg:basis-[60%] basis-full">
      {/* {<video src={video1} controls autoPlay muted className="w-full"></video>} */}
      <iframe
        className="w-full lg:h-[34vw] h-[50vw]"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <h3 className="text-[22px] text-white mt-[10px] font-semibold">{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info flex flex-wrap items-center justify-between text-[14px] text-white mt-[10px]">
        <p>
          {apiData ? value_converter(apiData.statistics.viewCount) : "30K"} Views &bull; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : ""}
        </p>
        <div className="flex">
          <span className="inline-flex items-center lg:ml-[15px] ml-0 lg:mr-[2px] mr-[15px] lg:mt-[5px] mt-[15px]">
            <img src={like} alt="" className="w-[20px] mr-[8px]" />
            {apiData ? value_converter(apiData.statistics.likeCount) : 30}
          </span>
          <span className="inline-flex items-center lg:ml-[15px] ml-0 lg:mr-[2px] mr-[15px] lg:mt-[5px] mt-[15px]">
            <img src={dislike} alt="" className="w-[20px] mr-[8px]" />
          </span>
          <span className="inline-flex items-center lg:ml-[15px] ml-0 lg:mr-[2px] mr-[15px] lg:mt-[5px] mt-[15px]">
            <img src={share} alt="" className="w-[20px] mr-[8px]" /> Share
          </span>
          <span className="inline-flex items-center lg:ml-[15px] ml-0 lg:mr-[2px] mr-[15px] lg:mt-[5px] mt-[15px]">
            <img src={save} alt="" className="w-[20px] mr-[8px]" /> Save
          </span>
        </div>
      </div>
      <hr className="h-px bg-[#ccc] border-none my-[10px] mx-0" />
      <div className="publisher flex items-center mt-[20px]">
        <img src={channelData ? channelData.snippet.thumbnails.default.url : ""} alt="" className="w-[40px] rounded-full mr-[15px]" />
        <div className="grow leading-[18px]">
          <p className="text-[18px] font-semibold text-white">{apiData ? apiData.snippet.channelTitle : "Channel Title"}</p>
          <span className="text-[13px] text-neutral-400 ">{channelData ? value_converter(channelData.statistics.subscriberCount) : "3000"} Subscribers</span>
        </div>
        <button className="bg-red-600 text-white py-[8px] px-[30px] rounded-[4px] border-none outline-none cursor-pointer">Subscribe</button>
      </div>
      <div className="vid-description lg:pl-[55px] pl-0 my-[15px] mx-0">
        <p className="text-[14px] text-white mb-[5px]">{apiData ? apiData.snippet.description.slice(0, 250) : ""}</p>
        <hr className="h-px bg-[#ccc] border-none my-[10px] mx-0" />
        <h4 className="text-[14px] text-white mt-[15px]">{apiData ? value_converter(apiData.statistics.commentCount) : 100} Comments</h4>
        {commentData.map((item, index) => {
          return (
            <div key={index} className="comment flex items-start my-[20px] mx-0">
              <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" className="w-[35px] rounded-full mr-[15px]" />
              <div>
                <h3 className="text-[14px] text-white font-semibold mb-[2px]">
                  {item.snippet.topLevelComment.snippet.authorDisplayName} <span className="text-[12px] text-neutral-400 font-medium ml-[8px]">{moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span>
                </h3>
                <p className="text-[14px] text-white mb-[5px]">{item.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action flex items-center text-[14px] my-[8px] mx-0">
                  <img src={like} alt="" className="w-[20px] rounded-full mr-[5px]" />
                  <span className="text-[#5a5a5a] mr-[20px]">{item.snippet.topLevelComment.snippet.likeCount}</span>
                  <img src={dislike} alt="" className="w-[20px] rounded-full mr-[5px]" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayVideo;
