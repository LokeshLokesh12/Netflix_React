import React,{Fragment,useEffect,useState} from 'react'

import { useSearchParams } from 'react-router-dom'

function Video() {
  const  [param] = useSearchParams();
  let _id = param.get('_id')

   const[movie, setmovie]=useState([{
    "_id":"",
    "genre": "",
    "title": "",
    "thumbnail": "",
    "year": 0,
    "synopsis": "",
    "duration": 0,
    "poster": ""

}])
  // console.log(_id);
  useEffect(()=>{
      fetch(`https://netflix-backend-x710.onrender.com/movieid?_id=${_id}`, { method: 'GET' })
      .then((res) => res.json())
      .then((data => {
      //   console.log(data);
        setmovie(data)
      }))
  },[_id])
  return (
    <Fragment>
      {movie.map((data)=>{
        return(
          <div className="video_main">
            <video id='main_video' src={data.thumbnail} controls ></video>
          </div>
        )
      })}
    </Fragment>
  )
}

export default Video