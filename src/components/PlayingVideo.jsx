import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { fetchData } from '../utils/rapidapi';
import ReactPlayer from 'react-player';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { abbreviateNumber } from 'js-abbreviation-number';
import SuggestedVideo from './SuggestedVideo';

function PlayingVideo() {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, [id]);

  const fetchVideoDetails = async () => {
    try {
      const res = await fetchData(`video/details/?id=${id}`);
      console.log('Video details:', res);
      setVideo(res);
    } catch (error) {
      console.error('Error fetching video details:', error);
    }
  };

  const fetchRelatedVideos = async () => {
    try {
      const res = await fetchData(`video/related-contents/?id=${id}`);
      console.log('Related videos:', res);
      setRelatedVideos(res?.contents || []);
    } catch (error) {
      console.error('Error fetching related videos:', error);
    }
  };

  return (
    <div className='flex justify-center flex-row h-[calc(100%-56px)] mt-16'>
      <div className='w-full max-w-[1580px] flex flex-col lg:flex-row'>
        <div className='flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6'>
          <div className='h-[200px] md:h-[700px] ml-28 mr-[-16px] lg:ml-8 lg:mr-0'>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              height="85%"
              width="90%"
              controls
              style={{ backgroundColor: "#000000" }}
              playing={true}
            />
          </div>
          {video && (
            <>
              <div className='font-bold text-sm md:text-xl mt-[-70px]  ml-8 line-clamp-2'>
                {video?.title}
              </div>
              <div className='flex justify-between flex-col md:flex-row mt-4 ml-6'>
                <div className='flex'>
                  <div className='flex items-start'>
                    <div className='flex h-11 w-11 rounded-full overflow-hidden'>
                      <img className='h-full w-full object-cover' src={video?.author?.avatar?.[0]?.url} alt={video?.author?.title} />
                    </div>
                  </div>
                  <div className='flex space-x-5'>
                    <div className='flex flex-col ml-3'>
                      <div className='text-md font-semibold flex items-center'>
                        {video?.author?.title}
                        {video?.author?.badges?.[0]?.type === "VERIFIED_CHANNEL" && (
                          <BsFillCheckCircleFill className='text-white/[0.5] text-[12px] ml-1' />
                        )}
                      </div>
                      <div className='text-sm'>
                        {video?.author?.stats?.subscribersText}
                      </div>
                    </div>
                    <span className='mt-1 text-center bg-red-500 px-3 pt-2 rounded-full text-white cursor-pointer hover:bg-red-700'>
                      Subscribe
                    </span>
                  </div>
                </div>
                <div className='flex mt-4 md:mt-0'>
                  <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15]'>
                    <AiOutlineLike className='text-xl mr-1' />
                    {`${abbreviateNumber(video?.stats?.likes, 2)} Likes`}
                  </div>
                  <div className='ml-4 mt-2.5'>
                    {`${abbreviateNumber(video?.stats?.views, 2)} Views`}
                  </div>
                </div>
              </div>
              <div className='p-4 bg-gray-100 rounded-xl mt-4 text-sm ml-6'>
                {video?.description}
              </div>
              <div className='flex gap-x-6 font-semibold rounded-xl mt-4 text-xl ml-6'>
                {video?.stats?.comments} <p>Comments</p>
              </div>
            </>
          )}
        </div>
        <div className='flex flex-col px-4 py-6 h-[calc(100vh-4.625rem)] overflow-y-scroll overflow-x-hidden lg:w-[350px] xl:w-[400px]'>
          {relatedVideos?.map((item, index) => {
            if (item?.type !== "video") return null;
            return <SuggestedVideo key={index} video={item?.video} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default PlayingVideo;
