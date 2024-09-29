import React from 'react';
import { Link } from 'react-router-dom';
import Time from './loader/Time';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { abbreviateNumber } from 'js-abbreviation-number';

function Video({ video }) {
  console.log(video);
  return (
    <div>
      <Link to={`/video/${video?.videoId}`}>
        <div className='flex flex-col'>
          {/* Thumbnail and Time*/}
          <div className='relative h-48 md:h-42 md: rounded-xl hover:rounded-none duration-200 overflow-hidden'>
            <img
              className='h-full w-full'
              src={video?.thumbnails[0]?.url} />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* Channel Logo and Title */}
          <div className='flex mt-3 space-x-2'>
            <div className='flex items-start'>
              <div className='flex h-8 w-8 rounded-full overflow-hidden border'>
                <img src={video?.author?.avatar[0].url} />
              </div>
            </div>
            <div>
              <span className='text-sm font-bold line-clamp-2'>
                {video?.title}
              </span>
              <span className='flex items-center font-semibold mt-1 text-[14px] text-gray-500'>
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (<BsFillCheckCircleFill className='text-gray-500 ml-1 text-[12px]' />
                )}
              </span>
              <div className='flex text-gray-500 text-[13px]'>
                <span>{`${abbreviateNumber(video?.stats?.views,2)} views`}</span>
                <span className='flex text-[24px] leading-none font-bold relative top-[-10px] mx-1'>.</span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;