import React,{useState} from 'react'

const VideoDetails = ({title, createdAt, viewCount, upvotes, downvotes}) => {
  const [upVotes, setUpVotes] = useState(upvotes)
  const [downVotes, setDownVotes] = useState(downvotes)
  //const [displayComments, setDisplayComments] = useState()
  
  function handleClick(e){
    switch (e.target.id) {
      case 'upvote-button':
        setUpVotes(upVotes + 1)
      break;
      case 'downvote-button':
        setDownVotes(downVotes + 1)
      break;
      case 'hidecomments-button':
      let commentsContainer = document.getElementById("video-comments-container")
      commentsContainer.classList.toggle("hidden")
      if (e.target.innerText === "Hide Comments" ){
        e.target.innerText ="Show Comments"
      } else{
        e.target.innerText= "Hide Comments"
      }
      break;
    }
  
  }
  
  return (
    <div>
      <h1>{title}</h1>
      <p>{viewCount} | {createdAt}</p>
      <button onClick={handleClick} id= "upvote-button">{upVotes} 👍</button>
      <button onClick={handleClick} id= "downvote-button">{downVotes} 👎</button>
      <br />
      <br />

      <button onClick={handleClick} id= "hidecomments-button">Hide Comments</button>
    </div>
  )
}

export default VideoDetails