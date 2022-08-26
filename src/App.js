import "./App.css";

import Video from "./video/Video";

function App() {
  const posts = [
    {
      url: "./video1.mp4",
      channel: "golden.311",
      description:
        "«واصبر على ما يقولون» - سورة المزمل #قران #quran #قران_كريم #القران #قرآن #القرآن #ماهرالمعيقلي #ماهر_المعيقلي",
      song: "  القرآن الكريم سورة المزمل -  𓆩♡𓆪",
      likes: 3547,
      messages: 213,
      shares: 33,
    },
    {
      url: "./video2.mp4",
      channel: "azizxj",
      description: "#quran #عبدالرحمن_مسعد",
      song: "القرآن الكريم  سورة العنكبوت -𓆩♡𓆪",
      likes: 4647,
      messages: 213,
      shares: 33,
    },
    {
      url: "./video3.mp4",
      channel: "9flt",
      description:
        "{عبد الرحمن مسعد} {سورة ابراهيم} #islam#quran #ارح_سمعك #مصحف #قران #قرآن #تلاوات #القران_الكريم #آيات #الله #صلي_على_محمد #خشوع #راحة_نفسية#fyp",
      song: "القرآن الكريم  سورة ابراهيم -𓆩♡𓆪",
      likes: 6547,
      messages: 213,
      shares: 33,
    },
    {
      url: "./video4.mp4",
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
