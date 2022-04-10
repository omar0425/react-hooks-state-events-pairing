import React from 'react'
import VideoComment from './VideoComment'


const VideoComments = ({comments, videoData}) => {
  //console.log(videoData)
  function renderComments(){
    return videoData.comments.map((comment, index) =>{
   return (<VideoComment key = {comment.id} comment= {comment} />)
  })
    }

  return (
    <div className= "" id= "video-comments-container">
      <hr></hr>
      <h2>{comments.length} Comments</h2>
      {renderComments()}
    </div>
  )
}

export default VideoComments