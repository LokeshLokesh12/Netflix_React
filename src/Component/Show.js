import React, { Fragment, useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Show() {
  // const settings = {
  //     dots: false,
  //     infinite: false,
  //     speed: 500,
  //     slidesToShow: 4,
  //     slidesToScroll: 1
  //   };
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  const [crimemovielist, setcrimemovielist] = useState([{
    "_id": "",
    "genre": "",
    "title": "",
    "thumbnail": "",
    "year": 0,
    "synopsis": "",
    "duration": 0,
    "poster": ""

  }])
  const [actionmovielist, setactionmovielist] = useState([{
    "_id": "",
    "genre": "",
    "title": "",
    "thumbnail": "",
    "year": 0,
    "synopsis": "",
    "duration": 0,
    "poster": ""

  }])
  const [Thrillermovielist, setThrillermovielist] = useState([{
    "_id": "",
    "genre": "",
    "title": "",
    "thumbnail": "",
    "year": 0,
    "synopsis": "",
    "duration": 0,
    "poster": ""

  }])
  const [Internationalmovielist, setInternationalmovielist] = useState([{
    "_id": "",
    "genre": "",
    "title": "",
    "thumbnail": "",
    "year": 0,
    "synopsis": "",
    "duration": 0,
    "poster": ""

  }])
  const [Comediesmovielist, setComediesmovielist] = useState([{
    "_id": "",
    "genre": "",
    "title": "",
    "thumbnail": "",
    "year": 0,
    "synopsis": "",
    "duration": 0,
    "poster": ""

  }])
  const [Sci_Fimovielist, setSci_Fimovielist] = useState([{
    "_id": "",
    "genre": "",
    "title": "",
    "thumbnail": "",
    "year": 0,
    "synopsis": "",
    "duration": 0,
    "poster": ""

  }])
  const [Children_Familymovielist, setChildren_Familymovielist] = useState([{
    "_id": "",
    "genre": "",
    "title": "",
    "thumbnail": "",
    "year": 0,
    "synopsis": "",
    "duration": 0,
    "poster": ""

  }])
  const [Music_Musicalsmovielist, setMusic_Musicalsmovielist] = useState([{
    "_id": "",
    "genre": "",
    "title": "",
    "thumbnail": "",
    "year": 0,
    "synopsis": "",
    "duration": 0,
    "poster": ""

  }])
  // const[movielist, setmovielist]=useState([{
  //     "_id":"",
  //     "genre": "",
  //     "title": "",
  //     "thumbnail": "",
  //     "year": 0,
  //     "synopsis": "",
  //     "duration": 0,
  //     "poster": ""

  // }])
  useEffect(() => {
    fetch('https://netflix-backend-x710.onrender.com/movies/Action', { method: 'GET' })
      .then((res) => res.json())
      .then((data => {
        console.log(data);
        setactionmovielist(data)
      }))
  }, [])
  useEffect(() => {
    fetch('https://netflix-backend-x710.onrender.com/movies/Crime', { method: 'GET' })
      .then((res) => res.json())
      .then((data => {
        console.log(data);
        setcrimemovielist(data)
      }))
  }, [])
  useEffect(() => {
    fetch('https://netflix-backend-x710.onrender.com/movies/Thriller', { method: 'GET' })
      .then((res) => res.json())
      .then((data => {
        console.log(data);
        setThrillermovielist(data)
      }))
  }, [])
  useEffect(() => {
    fetch('https://netflix-backend-x710.onrender.com/movies/International', { method: 'GET' })
      .then((res) => res.json())
      .then((data => {
        console.log(data);
        setInternationalmovielist(data)
      }))
  }, [])
  useEffect(() => {
    fetch('https://netflix-backend-x710.onrender.com/movies/Comedies', { method: 'GET' })
      .then((res) => res.json())
      .then((data => {
        console.log(data);
        setComediesmovielist(data)
      }))
  }, [])
  useEffect(() => {
    fetch('https://netflix-backend-x710.onrender.com/movies/Sci-Fi', { method: 'GET' })
      .then((res) => res.json())
      .then((data => {
        console.log(data);
        setSci_Fimovielist(data)
      }))
  }, [])
  useEffect(() => {
    fetch('https://netflix-backend-x710.onrender.com/movies/Children & Family', { method: 'GET' })
      .then((res) => res.json())
      .then((data => {
        console.log(data);
        setChildren_Familymovielist(data)
      }))
  }, [])
  useEffect(() => {
    fetch('https://netflix-backend-x710.onrender.com/movies/Music & Musicals', { method: 'GET' })
      .then((res) => res.json())
      .then((data => {
        console.log(data);
        setMusic_Musicalsmovielist(data)
      }))
  }, [])

  useEffect(()=>{

      let movie = document.getElementById('movie')
      let handle = (event)=>{
        event.preventDefault();
        if (event.target.id !== 'movie' && event.target.id !== 'gener' ) {
          console.log(event.target.closest('section'));
          window.location = `/show-information?_id=${event.target.closest('section').id}`
          // window.location = `/show-information`
        }
        // console.log(event.target.id);
      }
      movie.addEventListener('click',handle) 
      return()=>{ movie.removeEventListener('click',handle) }
  })
  return (
    <Fragment>
      <Header />
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img  src="https://i.cdn.newsbytesapp.com/images/l55220220922105016.jpeg" className="d-block w-100 h-100 carousel_image" alt="..." />
            {/* <img  src="http://get.imglarger.com:8887/results/idYKhbao.jpg" className="d-block w-100 h-100 carousel_image" alt="..." /> */}
            <div class="carousel-caption d-none d-md-block ">
              <h1>Thunivu</h1>
              <h3>No Guts No Glory</h3>
              <p>Thunivu is a mystery thriller movie that begins with a bank robbery, which leads to a sense of revenge against the government and the police. They threaten the government and police that if they let them go out without any trouble, they will not do any harm to the hostages over there. If they make any trouble, they will kill all the hostages. Some of the gang members stay outside to support them as they run away.</p>
            </div>
          </div>
          <div class="carousel-item ">
            <img src="https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXP8-LlXmyHE7iG6PJB7O1aymCQGWiZpco9k3ft8qYKlOIQkKrHGbAYRazp4sHGNQ58e8pgU_SsDCbJtMgrQ_8-sv2xMl_OmQu-n.jpg?r=e00" className="d-block w-100 h-100 carousel_image" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Kantara (Hindi)</h1>
              <p>A fiery young man clashes with an unflinching forest officer in a <br /> south Indian village where spirituality, fate and folklore rule the lands</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://occ-0-3663-3662.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYZ_9Wml838MQOf9pWOOVLn5TMejp-qMZ6eYoPf-co0gIJzlio8SGd6rgcPrFJPMGMutYsWMoXPm30p-DCNSLc2Ug_I5TDscFq2E.jpg?r=615" className="d-block w-100 h-100 carousel_image" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h1>Wednesday</h1>
              <p className='w-70'>Wednesday is an American coming-of-age supernatural comedy horror streaming television series based on the character Wednesday Addams by Charles Addams. Created by Alfred Gough and Miles Millar, it stars Jenna Ortega as the titular character, with Catherine Zeta-Jones, Luis Guzmán, Isaac Ordonez, Gwendoline Christie, Riki Lindhome, Jamie McShane, Fred Armisen, and Christina Ricci appearing in supporting roles.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div className='bg_black' id='movie'>

        <h2 id='gener'>ACTION </h2>
        <div className="movie_list">
          <Slider {...settings}>
            {
              actionmovielist.map((data) => {
                return (
                  <section className='bg_bl' id={data._id} key={data._id}>
                    <div className="info">
                      <h4>{data.title}</h4>
                      <p>{data.year} | {data.duration} Mins</p>
                      <p className="synopsis"> {data.synopsis}</p>
                      {/* <p>{data._id}</p> */}
                    </div>
                    <img src={data.poster} alt="" loading='lazy'/>
                  </section>
                )
              })
            }
          </Slider>
        </div>


        <h2 id='gener'>CRIME</h2>
        <div className="movie_list">
          <Slider {...settings}>
            {
              crimemovielist.map((data) => {
                return (

                  <section className='bg_bl' id={data._id} key={data._id}>
                    <div className="info">
                      <h4>{data.title}</h4>
                      <p>{data.year} | {data.duration} Mins</p>
                      <p className="synopsis"> {data.synopsis}</p>
                      {/* <p>{data._id}</p> */}
                    </div>
                    <img src={data.poster} alt="" loading='lazy'/>
                  </section>

                )
              })
            }
          </Slider>
        </div>


        <h2 id='gener'>Thriller</h2>
        <div className="movie_list">
          <Slider {...settings}>
            {
              Thrillermovielist.map((data) => {
                return (
                  <section className='bg_bl' id={data._id} key={data._id}>
                    <div className="info">
                      <h4>{data.title}</h4>
                      <p>{data.year} | {data.duration} Mins</p>
                      <p className="synopsis"> {data.synopsis}</p>
                      {/* <p>{data._id}</p> */}
                    </div>
                    <img src={data.poster} alt=""  loading='lazy'/>
                  </section>
                )
              })
            }
          </Slider>
        </div>


        <h2 id='gener' >Sci-Fi</h2>
        <div className="movie_list">
          <Slider {...settings}>
            {
              Sci_Fimovielist.map((data) => {
                return (
                  <section className='bg_bl' id={data._id} key={data._id}>
                    <div className="info">
                      <h4>{data.title}</h4>
                      <p>{data.year} | {data.duration} Mins</p>
                      <p className="synopsis"> {data.synopsis}</p>
                      {/* <p>{data._id}</p> */}
                    </div>
                    <img src={data.poster} alt=""  loading='lazy'/>
                  </section>
                )
              })
            }
          </Slider>
        </div>


        <h2 id='gener'>International</h2>
        <div className="movie_list">
          <Slider {...settings}>
            {
              Internationalmovielist.map((data) => {
                return (
                  <section className='bg_bl' id={data._id} key={data._id}>
                    <div className="info">
                      <h4>{data.title}</h4>
                      <p>{data.year} | {data.duration} Mins</p>
                      <p className="synopsis"> {data.synopsis}</p>
                      {/* <p>{data._id}</p> */}
                    </div>
                    <img src={data.poster} alt=""  loading='lazy'/>
                  </section>
                )
              })
            }
          </Slider>
        </div>


        <h2 id='gener'>Comedies</h2>
        <div className="movie_list">
          <Slider {...settings}>
            {
              Comediesmovielist.map((data) => {
                return (
                  <section className='bg_bl' id={data._id} key={data._id}>
                    <div className="info">
                      <h4>{data.title}</h4>
                      <p>{data.year} | {data.duration} Mins</p>
                      <p className="synopsis"> {data.synopsis}</p>
                      {/* <p>{data._id}</p> */}
                    </div>
                    <img src={data.poster} alt=""  loading='lazy'/>
                  </section>
                )
              })
            }
          </Slider>
        </div>


        <h2 id='gener'>Children & Family</h2>
        <div className="movie_list">
          <Slider {...settings}>
            {
              Children_Familymovielist.map((data) => {
                return (
                  <section className='bg_bl' id={data._id} key={data._id}>
                    <div className="info">
                      <h4>{data.title}</h4>
                      <p>{data.year} | {data.duration} Mins</p>
                      <p className="synopsis"> {data.synopsis}</p>
                      {/* <p>{data._id}</p> */}
                    </div>
                    <img src={data.poster} alt=""  loading='lazy'/>
                  </section>
                )
              })
            }
          </Slider>
        </div>


        <h2 id='gener'>Music & Musicals</h2>
        <div className="movie_list">
          <Slider {...settings}>
            {
              Music_Musicalsmovielist.map((data) => {
                return (
                  <section className='bg_bl' id={data._id} key={data._id}>
                    <div className="info">
                      <h4>{data.title}</h4>
                      <p>{data.year} | {data.duration} Mins</p>
                      <p className="synopsis"> {data.synopsis}</p>
                      {/* <p>{data._id}</p> */}
                    </div>
                    <img src={data.poster} alt=""  loading='lazy'/>
                  </section>
                )
              })
            }
          </Slider>
        </div>
      </div>
    
    <Footer/>
    </Fragment>
  )
}

export default Show