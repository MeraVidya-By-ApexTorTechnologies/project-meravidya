// import React from 'react'
import VideoDoc from '../../assets/videos/homeBg.mp4';

const homeScreenVideoBg = () => {
  return <video src={VideoDoc} loop muted autoPlay className="m-0 p-0 w-screen opacity-20 object-cover" />;
};

export default homeScreenVideoBg;
