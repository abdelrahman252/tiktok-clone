import { useEffect, useState } from "react";
import "./App.css";

import Video from "./video/Video";

function App() {
  const posts = [
    {
      url: "https://v16-webapp.tiktok.com/3370376fb671d18019141a60409d8405/63088cf9/video/tos/alisg/tos-alisg-pve-0037c001/3d089370762f4429bf8417bf70b1bbf5/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1108&bt=554&cs=0&ds=3&ft=eXd.6HQ2Myq8Zqt30he2Nswwyl7Gb&mime_type=video_mp4&qs=0&rc=NTs6M2Y8aDxnZztoOTw4ZUBpM3c5eWY6ZndtZDMzODczNEBjYC81Mi5iXl8xMjRhYTViYSNoX2VkcjQwZWRgLS1kMS1zcw%3D%3D&l=2022082603050101019204516226099D00&btag=80000",
      channel: "golden.311",
      description:
        "«واصبر على ما يقولون» - سورة المزمل #قران #quran #قران_كريم #القران #قرآن #القرآن #ماهرالمعيقلي #ماهر_المعيقلي",
      song: "  القرآن الكريم سورة المزمل -  𓆩♡𓆪",
      likes: 3547,
      messages: 213,
      shares: 33,
    },
    {
      url: "https://v16-webapp.tiktok.com/848772981d5b4f1d992888929377b651/63045319/video/tos/alisg/tos-alisg-pve-0037c001/ab9f5b3ae8974d35a52779b5130584d4/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1900&bt=950&cs=0&ds=3&ft=eXd.6HQ2Myq8ZiL~Vhe2N7Ewyl7Gb&mime_type=video_mp4&qs=0&rc=aDc5PDo4NzpnNTZoNDk4ZUBpanE3NTU6ZjpmOjMzODczNEA2YDQ1YmNfNi0xMmJgYTYtYSMzMmkvcjRnM21gLS1kMS1zcw%3D%3D&l=202208222209220101902180920B45A424&btag=80000",
      channel: "azizxj",
      description: "#quran #عبدالرحمن_مسعد",
      song: "القرآن الكريم  سورة العنكبوت -𓆩♡𓆪",
      likes: 4647,
      messages: 213,
      shares: 33,
    },
    {
      url: "https://v16-webapp.tiktok.com/14854c3f58348987acaf49142784e5de/63088dbb/video/tos/alisg/tos-alisg-pve-0037/b4652409daad4a3382898fccfb70085a/?a=1988&ch=0&cr=0&dr=0&lr=tiktok&cd=0%7C0%7C1%7C0&cv=1&br=3094&bt=1547&cs=0&ds=3&ft=eXd.6HQ2Myq8Z3O30he2N.B3yl7Gb&mime_type=video_mp4&qs=0&rc=aTo3ZTlpaWUzNmc7ODtmOEBpamVkNDY6Zm94OTMzODgzNEAvNDBjLmAtNV8xYDIwMi4wYSNoYTRqcjRnaS5gLS1kLy1zcw%3D%3D&l=20220826030837010189194163110997CA&btag=80000",
      channel: "9flt",
      description:
        "{عبد الرحمن مسعد} {سورة ابراهيم} #islam#quran #ارح_سمعك #مصحف #قران #قرآن #تلاوات #القران_الكريم #آيات #الله #صلي_على_محمد #خشوع #راحة_نفسية#fyp",
      song: "القرآن الكريم  سورة ابراهيم -𓆩♡𓆪",
      likes: 6547,
      messages: 213,
      shares: 33,
    },
    {
      url: "https://v16-webapp.tiktok.com/b89c42cc5fe71c887571eb3f4746fd8e/63088d36/video/tos/alisg/tos-alisg-pve-0037c001/ea860ddf17f945f5bb776d9fe6e02efa/?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C1%7C0&cv=1&br=1304&bt=652&cs=0&ds=3&ft=eXd.6HQ2Myq8Z0V30he2NjETyl7Gb&mime_type=video_mp4&qs=0&rc=ZjxmODg8aTVkZDs0N2Y1OkBpanNzMzs6ZmRlZTMzODczNEAvLS40NF5hNS8xXzNjLy5gYSNuNl9mcjQwLm1gLS1kMS1zcw%3D%3D&l=202208260306330101890250122209623B&btag=80000",
      channel: "owaisquran",
      description: "اذكرو الله🤍#owaisquran #quran",
      song: "القرآن الكريم  سورة البقره -𓆩♡𓆪",
      likes: 13214,
      messages: 213,
      shares: 33,
    },
  ];

  return (
    <div className="app">
      <h1 className="title">
        <span className="title-word title-word-1">This</span>
        <span className="title-word title-word-2">is</span>
        <span className="title-word title-word-3">TikTok</span>
        <span className="title-word title-word-4">Clone</span>
      </h1>
      <div className="app-videos">
        {posts.map(
          ({ url, channel, description, song, likes, messages, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
