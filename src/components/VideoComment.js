import React from 'react'

function VideoComment({comment}) {
  console.log(comment)
  return (
    <div>
      <h3>{comment.user}</h3>
      <p>{comment.comment}</p>
    </div>
  )
}

export default VideoComment