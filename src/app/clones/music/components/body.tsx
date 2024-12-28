import React from "react";

const tags = [
  "Podcasts",
  "Workout",
  "Relax",
  "Energize",
  "Feel good",
  "Romance",
  "Party",
  "Commute",
  "Sleep",
  "Sad",
  "Focus",
];

const Songs = [
  {
    title: "7 Years",
    artist: "Lukas Graham",
    plays: "2.9B",
    album: "Lukas Graham",
  },
  {
    title: "Die With A Smile",
    artist: "Lady Gaga & Bruno Mars",
    plays: "",
    album: "Die With A Smile",
  },
  {
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    plays: "612M",
    album: "Not Like Us",
  },
  {
    title: "Sunflower (Remix)",
    artist: "Post Malone, Swae Lee, Nicky Jam & Prince Royce",
    plays: "",
    album: "Spider-Man: Into the Spider-Verse",
  },
  {
    title: "FE!N",
    artist: "Travis Scott feat. Playboi Carti",
    plays: "380M",
    album: "UTOPIA",
  },
  {
    title: "Mockingbird",
    artist: "Eminem",
    plays: "1.8B",
    album: "Encore",
  },
  {
    title: "Starboy",
    artist: "The Weeknd feat. Daft Punk",
    plays: "3.4B",
    album: "Starboy",
  },
  {
    title: "God's Plan",
    artist: "Drake",
    plays: "2.2B",
    album: "Scorpion",
  },
  {
    title: "Like That",
    artist: "Future, Metro Boomin, & Kendrick Lamar",
    plays: "",
    album: "WE DON'T TRUST YOU",
  },
  {
    title: "Lucid Dreams",
    artist: "Juice WRLD",
    plays: "1.9B",
    album: "Goodbye & Good Riddance",
  },
  {
    title: "POPSTAR",
    artist: "DJ Khaled feat. Drake",
    plays: "506M",
    album: "KHALED KHALED",
  },
  {
    title: "7 Years",
    artist: "Lukas Graham",
    plays: "2.9B",
    album: "Lukas Graham",
  },
  {
    title: "Die With A Smile",
    artist: "Lady Gaga & Bruno Mars",
    plays: "",
    album: "Die With A Smile",
  },
  {
    title: "Not Like Us",
    artist: "Kendrick Lamar",
    plays: "612M",
    album: "Not Like Us",
  },
  {
    title: "Sunflower (Remix)",
    artist: "Post Malone, Swae Lee, Nicky Jam & Prince Royce",
    plays: "",
    album: "Spider-Man: Into the Spider-Verse",
  },
  {
    title: "FE!N",
    artist: "Travis Scott feat. Playboi Carti",
    plays: "380M",
    album: "UTOPIA",
  },
  {
    title: "Mockingbird",
    artist: "Eminem",
    plays: "1.8B",
    album: "Encore",
  },
  {
    title: "Starboy",
    artist: "The Weeknd feat. Daft Punk",
    plays: "3.4B",
    album: "Starboy",
  },
  {
    title: "God's Plan",
    artist: "Drake",
    plays: "2.2B",
    album: "Scorpion",
  },
  {
    title: "Like That",
    artist: "Future, Metro Boomin, & Kendrick Lamar",
    plays: "",
    album: "WE DON'T TRUST YOU",
  },
  {
    title: "Lucid Dreams",
    artist: "Juice WRLD",
    plays: "1.9B",
    album: "Goodbye & Good Riddance",
  },
  {
    title: "POPSTAR",
    artist: "DJ Khaled feat. Drake",
    plays: "506M",
    album: "KHALED KHALED",
  },
];

const HitSongs = [
  {
    title: "Kollywood Hitlist",
    artists: [
      "Anirudh Ravichander",
      "G.V. Prakash Kumar",
      "A. R. Rahman",
      "Yuvan Shankar Raja",
    ],
  },
  {
    title: "Kollywood Romance Hitlist",
    artists: [
      "G.V. Prakash Kumar",
      "Sean Roldan",
      "Pradeep Kumar",
      "Ananya Bhat",
    ],
  },
  {
    title: "Tollywood Hitlist",
    artists: ["Thaman S", "Anirudh Ravichander", "Nakash Aziz"],
  },
  {
    title: "Mollywood Hitlist",
    artists: ["Sushin Shyam", "Vinayak Sasikumar", "Dabzee", "Vishnu Vijay"],
  },
  {
    title: "I-Pop South",
    artists: ["OfRo", "Vivek–Mervin", "Asal Kolaar", "Sai Abhyankkar"],
  },
  {
    title: "Kollywood Dance Hitlist",
    artists: [
      "Anirudh Ravichander",
      "A. R. Rahman",
      "Deepthi Suresh",
      "Paal Dabba",
    ],
  },
  {
    title: "Tollywood Romance Hitlist",
    artists: ["Anurag Kulkarni", "Thaman S", "Shreya Ghoshal", "Ram Miriyala"],
  },
  {
    title: "Tollywood Dance Hitlist",
    artists: ["Thaman S", "Anirudh Ravichander", "Nakash Aziz"],
  },
  {
    title: "Mollywood Romance Hitlist",
    artists: [
      "Kapil Kapilan",
      "Sam C. S.",
      "Vishnu Vijay",
      "Aruna Mary George",
    ],
  },
  {
    title: "Bollywood Hitlist",
    artists: ["Sachin Jigar", "Arijit Singh", "Amitabh Bhattacharya"],
  },
];

const communityPlaylist = [
  {
    title: "love melody",
    creator: "Jumaira Gas",
    views: "25K views",
  },
  {
    title: "beat section 💖",
    creator: "J.Mukesh kumar",
    views: "32K views",
  },
  {
    title: "00s tamil hits",
    creator: "mohanraj chinnusamy",
    views: "312K views",
  },
  {
    title: "Melody 💟",
    creator: "Karthik Raja",
    views: "116K views",
  },
  {
    title: "tamil",
    creator: "Dharani Tharan",
    views: "15K views",
  },
  {
    title: "Travel_ Feel Good",
    creator: "Jagadeesh krishna",
    views: "33K views",
  },
  {
    title: "Tamil melodies",
    creator: "Moksha Soroopa",
    views: "75K views",
  },
  {
    title: "love melody",
    creator: "Jumaira Gas",
    views: "25K views",
  },
  {
    title: "beat section 💖",
    creator: "J.Mukesh kumar",
    views: "32K views",
  },
  {
    title: "00s tamil hits",
    creator: "mohanraj chinnusamy",
    views: "312K views",
  },
  {
    title: "Melody 💟",
    creator: "Karthik Raja",
    views: "116K views",
  },
  {
    title: "tamil",
    creator: "Dharani Tharan",
    views: "15K views",
  },
  {
    title: "Travel_ Feel Good",
    creator: "Jagadeesh krishna",
    views: "33K views",
  },
  {
    title: "Tamil melodies",
    creator: "Moksha Soroopa",
    views: "75K views",
  },
];

const TagSection = () => {
  return (
    <div className="mt-20">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="p-2 border-[1px] border-gray-400 rounded-lg m-2"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

const HeaderSection = () => (
  <div className="flex mt-10 gap-2">
    <div>
      <img
        src="https://i.pravatar.cc/300"
        width="150"
        height="150"
        alt="Avathar"
        className="object-contain w-14 h-auto rounded-full"
      />
    </div>
    <div>
      <p className="opacity-60">MUSIC TO GET STARTED</p>
      <p className="text-4xl font-extrabold">Welcome mE</p>
    </div>
  </div>
);

const SongLists = () => (
  <div className="py-5 h-1/2 grid grid-rows-4 grid-flow-col gap-4 auto-cols-auto overflow-hidden hover:overflow-auto">
    {Songs.map((song, i) => (
      <div key={i} className="flex items-center gap-4 w-96 ">
        <div className="">
          <img
            src="https://i.pravatar.cc/300"
            width="150"
            height="150"
            alt="Avathar"
            className="object-contain w-20 h-auto "
          />
        </div>
        <div className="w-80">
          <p className="font-semibold">{song.title}</p>
          <p className="opacity-60 line-clamp-1">
            <span>{song.artist}</span>-<span>{song.plays}</span>
            <span>{song.album}</span>
          </p>
        </div>
      </div>
    ))}
  </div>
);

const HitSongLists = () => {
  return (
    <div className="mt-5 flex overflow-hidden hover:overflow-auto">
      {HitSongs.map((song, i) => (
        <div key={i} className="min-w-64 p-2">
          <div>
            <img
              src="https://i.pravatar.cc/300"
              width="150"
              height="150"
              alt="Avathar"
              className="object-contain w-64 h-auto"
            />
          </div>
          <div>
            <p className="font-semibold line-clamp-1">{song.title}</p>
            <p className="opacity-60 line-clamp-2">
              {song.artists.map((artist) => (
                <span>{artist}</span>
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const communityList = () => {
  return (
    <div className="my-10">
      <div>
        <p className="text-5xl font-bold mb-5">From the community</p>
      </div>
      <div className="flex gap-6 overflow-hidden hover:overflow-auto">
        {communityPlaylist.map((playlist) => (
          <div>
            <div className="grid grid-cols-2 w-56">
              {Array.from(Array(4)).map((key) => (
                <img
                  key={key}
                  src="https://i.pravatar.cc/300"
                  width="150"
                  height="150"
                  alt="Avathar"
                  className="object-contain w-28 h-auto"
                />
              ))}
            </div>
            <div>
              <p className="font-semibold">{playlist.title}</p>
              <p>
                <span>{playlist.creator}</span>
                <span>{playlist.views}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div>
      <div>
        <TagSection />
        <HeaderSection />
        <SongLists />
      </div>
      <div className="mt-32">
        <div>
          <p className="text-md opacity-80">MUSIC THAT'S HOT AND HAPPENING!</p>
          <p className="text-3xl font-bold">India’s Biggest Hits</p>
        </div>
        <HitSongLists />
      </div>

      {communityList()}
    </div>
  );
};

export default Body;
