import React from 'react'
import VideoDetails from '../components/VideoDetails'
import VideoComments from '../components/VideoComments'


function Video({videoData}) {
  return (
    <div>
    <iframe
    width="919"
    height="525"
    src= {videoData.embedUrl}
    frameBorder="0"
    allowFullScreen
    title="Thinking in React"
  />
  <VideoDetails 
  title= {videoData.title} 
  viewCount= {videoData.views} 
  createdAt= {videoData.createdAt}
  upvotes={videoData.upvotes} 
  downvotes={videoData.downvotes}
  />
  <VideoComments comments={videoData.comments} videoData= {videoData}/>
  </div>
  )
}

export default Video