import React,{Fragment,useEffect,useState} from 'react'
import Header from './Header'
import { useSearchParams } from 'react-router-dom'
function Showinfo() {
    
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
    useEffect(()=>{
        let handle = ()=>{
            console.log("n");
            window.location = `/video?_id=${_id}`
            
        }
        let watch = document.getElementById('watch')
        watch.addEventListener('click',handle)
    })
    // console.log(movie);
  return (
    <Fragment>
        <Header/>
        {movie.map((data)=>{
            return(
                <div className="movieinfo">
    
                    <img className='movie_background' src={data.poster} alt="" />
                    <div className="container m_content ">
                        <div className="left">
                            <img src={data.poster} alt="" />
                        </div>
                        <div className="right">
                            <h1>
                                {data.title}
                            </h1>
                            <h4>{data.year}</h4>
                            <p>{data.duration} Mins</p>
                            <h2>{data.genre}</h2>
                            <p className='synopsis_movie'>{data.synopsis}</p>
                            <button id='watch'> Watch Now</button>
                        </div>
                    </div>
                </div>
            )
        })}
    </Fragment>
  )
}

export default Showinfo