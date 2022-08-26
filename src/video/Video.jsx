import React, { useRef, useState } from "react";
import VideoFooter from "../videoFooter/VideoFooter";
import VideoSidebar from "../videosidebar/VideoSidebar";
import "./video.scss";

const Video = ({ url, likes, messages, shares, channel, description, song }) => {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
    return (
        <div className="video">
            <video
                className="video-player"
                loop
                ref={videoRef}
                onClick={onVideoPress}
                src={url}
            ></video>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}
            />
            <VideoSidebar
                likes={likes}
                messages={messages}
                shares={shares}
            />
        </div>
    );
};

export default Video;
