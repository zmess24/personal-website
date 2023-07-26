import * as React from "react";
import SpaceVideo from "../assets/videos/space-video.mp4";

const Video = () => {
	return (
		<video playsInline autoPlay loop muted preload="atuo" id="myVideo">
			<source src={SpaceVideo} type="video/mp4" />
		</video>
	);
};

export default Video;
