import * as React from "react";
import SpaceVideo from "../assets/videos/space-video.mp4";

const Video = () => {
	return <video playsInline autoPlay loop muted preload="atuo" webkit-playsinline="true" id="myVideo" src={SpaceVideo}></video>;
};

export default Video;
