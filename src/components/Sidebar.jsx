import React from 'react';
import { SiYoutubeshorts } from "react-icons/si";
import { LuHistory } from "react-icons/lu";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { BiVideo } from "react-icons/bi";
import { GrChannel } from "react-icons/gr";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineFire } from "react-icons/ai";
import { RiShoppingBag4Line } from "react-icons/ri";
import { MdOutlineMusicNote } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { MdOutlineWifiTethering } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { IoTrophyOutline } from "react-icons/io5";
import { AiOutlineBulb } from "react-icons/ai";
import { GiHanger } from "react-icons/gi";
import { FaYoutube } from "react-icons/fa6";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineOutlinedFlag } from "react-icons/md";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineFeedback } from "react-icons/md";
import { IoGameControllerOutline } from "react-icons/io5";
import { BiLike } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { MdOutlineSubscriptions } from "react-icons/md";

function Sidebar() {
    const slidebarItems = [
        {
            groupName: "",
            groupItems: [
                {
                    id: 1,
                    name: "Home",
                    icon: <GoHome />
                },
                {
                    id: 2,
                    name: "Shorts",
                    icon: <SiYoutubeshorts />
                },
                {
                    id: 3,
                    name: "Subscription",
                    icon: <MdOutlineSubscriptions />
                }
            ],

        },
        {
            groupName: "You",
            groupItems: [
                {
                    id: 4,
                    name: "Your Channel",
                    icon: <GrChannel />
                },
                {
                    id: 5,
                    name: "History",
                    icon: <LuHistory />
                },
                {
                    id: 6,
                    name: "Playlist",
                    icon: <MdOutlinePlaylistPlay />
                },
                {
                    id: 7,
                    name: "Your Videos",
                    icon: <BiVideo />
                },
                {
                    id: 8,
                    name: "Watch Later",
                    icon: <MdOutlineWatchLater />
                },
                {
                    id: 9,
                    name: "Liked Videos",
                    icon: <BiLike />
                }
            ],

        },
        {
            groupName: "Explore",
            groupItems: [
                {
                    id: 10,
                    name: "Trending",
                    icon: <AiOutlineFire />
                },
                {
                    id: 11,
                    name: "Shoping",
                    icon: <RiShoppingBag4Line />
                },
                {
                    id: 12,
                    name: "Music",
                    icon: <MdOutlineMusicNote />
                },
                {
                    id: 13,
                    name: "Movies",
                    icon: <BiMoviePlay />
                },
                {
                    id: 14,
                    name: "Live",
                    icon: <MdOutlineWifiTethering />
                },
                {
                    id: 15,
                    name: "Gaming",
                    icon: <IoGameControllerOutline />
                },
                {
                    id: 16,
                    name: "News",
                    icon: <ImNewspaper />

                },
                {
                    id: 17,
                    name: "Sports",
                    icon: <IoTrophyOutline />
                },
                {
                    id: 18,
                    name: "Courses",
                    icon: <AiOutlineBulb />
                },
                {
                    id: 19,
                    name: "Fashion & Beauty",
                    icon: <GiHanger />
                },
                {
                    id: 20,
                    name: "Prodcast",
                    icon: <MdOutlineWifiTethering />
                }
            ],

        },
        {
            groupName: "More from YouTube",
            groupItems: [
                {
                    id: 21,
                    name: "YouTube Premium",
                    icon: <FaYoutube />
                },
                {
                    id: 22,
                    name: "YouTube Studio",
                    icon: <SiYoutubestudio />
                },
                {
                    id: 23,
                    name: "YouTube Music",
                    icon: <SiYoutubemusic />
                },
                {
                    id: 24,
                    name: "Youtube Kids",
                    icon: <SiYoutubekids />
                }
            ],

        },
        {
            groupName: "",
            groupItems: [
                {
                    id: 25,
                    name: "Settings",
                    icon: <IoSettingsOutline />
                },
                {
                    id: 26,
                    name: "Report History",
                    icon: <MdOutlineOutlinedFlag />
                },
                {
                    id: 27,
                    name: "Help",
                    icon: <AiOutlineQuestionCircle />
                },
                {
                    id: 28,
                    name: "Send feedback",
                    icon: < MdOutlineFeedback />
                }
            ],

        },
    ];

    return (
        <>
        <div className='px-4 w-[30%] h-[calc(100vh-6.625rem)] overflow-y-scroll overflow-x-hidden'>
            
            <div className=' space-y-1 items-center' >
                {slidebarItems.map((group) => {
                    return (
                        <div className='mb-5 font-bold text-xl'>
                            <h1 className='font-bold'>{group.groupName}</h1>
                            {group.groupItems.map((item) => (
                                <div
                                    key={item.id}
                                    className='flex items-center space-x-6 hover:bg-gray-300 duration-200 rounded-xl p-1 my-3'
                                >
                                    <div className='text-xl cursor-pointer'>{item.icon}</div>
                                    <span className='text-sm cursor-pointer'>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    );
                })}
                <br />
                <hr />
            </div>
            <span className='font-semibold text-xs text-gray-600'>
                <p className='mt-4'>&nbsp;About&nbsp; Press&nbsp; Copyright<br />&nbsp;Contact us&nbsp;  Creators<br />&nbsp;Advertise&nbsp; Developers<br /></p>
                <p className='mt-3'>&nbsp;Terms&nbsp; Privacy&nbsp; Policy & Safety <br />&nbsp;How YouTube works <br />&nbsp;Test new features</p>
            </span>
            <p className='font-bold text-xs mt-5 ml-1 text-gray-700'>© Aayush Gupta</p>
        </div>
        </>
    );
}


export default Sidebar;