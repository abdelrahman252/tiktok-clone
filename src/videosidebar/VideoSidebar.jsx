import React, { useState } from 'react'
import "./VideoSidebar.scss"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import TextsmsIcon from '@mui/icons-material/Textsms';

const VideoSidebar = ({ likes, messages, shares }) => {
    const [liked, setLiked] = useState(false);

    return (
        <div className="VideoSidebar">
            <div className="VideoSidebarButton" >
                {liked ? <FavoriteIcon onClick={(e) => setLiked(!liked)} className="icon" />
                    : <FavoriteBorderOutlinedIcon onClick={(e) => setLiked(!liked)} className="icon" />}
                <p>{liked ? likes + 1 : likes}</p>
            </div>
            <div className="VideoSidebarButton">
                <TextsmsIcon className="icon" />
                <p>{messages}</p>
            </div>
            <div className="VideoSidebarButton">
                <ShareIcon className="icon" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar