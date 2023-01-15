import React,{Fragment,useEffect} from 'react'
import Signin from './Account/Signin'
import Header from './Header';
import Footer from './Footer';
function Main() {
    useEffect(()=>{
        // QUESTION 1
const targetDiv = document.getElementById("answer1");
const btn = document.getElementById("question1");
btn.onclick = function () {
    targetDiv.classList.toggle("login_visible")
};

// QUESTION 2
const question2 = document.getElementById("answer2");
const question2btn = document.getElementById("question2");
question2btn.onclick = function () {	
    question2.classList.toggle("visible")   
};

// QUESTION 3
const question3 = document.getElementById("answer3");
const question3btn = document.getElementById("question3");
question3btn.onclick = function () {	
    question3.classList.toggle("visible")
};

// QUESTION 4
const question4 = document.getElementById("answer4");
const question4btn = document.getElementById("question4");
question4btn.onclick = function () {
    question4.classList.toggle("visible")
};

// QUESTION 5
const question5 = document.getElementById("answer5");
const question5btn = document.getElementById("question5");
question5btn.onclick = function () {
    question5.classList.toggle("visible")
};

// QUESTION 6
const question6 = document.getElementById("answer6");
const question6btn = document.getElementById("question6");
question6btn.onclick = function () {
    question6.classList.toggle("visible")
};
    })

    useEffect(()=>{
        let login_buttton = document.getElementById('login_buttton')
        let login = document.querySelector('.login')
        let handlelogin = (event)=>{
          event.preventDefault();
        //   console.log("login")
        //   console.log(login)
          login.classList.add("visible")
        //   console.log(login)
        }  
        login_buttton.addEventListener('click',handlelogin)
        return ()=>{ login_buttton.addEventListener('click',handlelogin) }
      })

      useEffect(()=>{
        let buttton = document.getElementById('l-fa-arrow-left')
        let login = document.querySelector('.login')
        let handlelogin = (event)=>{
          event.preventDefault();
          login.classList.remove("visible")
        }  
       buttton.addEventListener('click',handlelogin)
        return ()=>{ buttton.addEventListener('click',handlelogin) }
      })

      useEffect(()=>{
        // localStorage.removeItem('userInfo')
        let profile = localStorage.getItem('userInfo')
        if(profile !== null){
            window.location = "/show"
        }
        // console.log(profile);
      })

  return (
    
   <Fragment>
   <Signin/>
   <Header/>
     {/* <!-- LANDING PAGE START --> */}
 <div className="display_container">
 <div className="main-text-area">
     
     {/* <!-- QUICK START START --> */}
     <div className="container display_card">
         <div className="container d-flex">
             <h1>Unlimited movies, TV shows and more.</h1>
             <h2>Watch anywhere. Cancel anytime.</h2>
             <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
             <form action="">
                 <input type="email" name="user-mail" id="user-mail" placeholder="Email adderss"/>
                 <button id="get-start" type="submit"> Get Started &gt; </button>
             </form>
         </div>
     </div>
      {/* <!-- QUICK START END --> */}
 </div>  
</div>
{/* <!-- LANDING PAGE END --> */}

{/* <!-- MAIN SECTION STARTS --> */}
<section className="main-section">
 {/* <!-- ENJOY ON YOUR TV --> */}
 <div className="section-container">
     <div className="left-column">
         <h1>Enjoy on your TV.</h1>
         <h3>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h3>
     </div>
     <div className="right-column">
         <img loading="lazy" src="assets/images/tv.png" alt='img'/>
         <video className="video-1" autoPlay="" playsInline="" muted="" loop="">
             <source src="assets/videos/video1.m4v" type="video/mp4"/>
         </video>
     </div>
 </div>
 {/* <!-- DOWNLOAD YOU SHOW TO WATCH OFFLINE --> */}
 <div className="section2-container">
     <div className="left-column">
         <img loading="lazy" src="assets/images/download.jpg" alt='img'/>
         <div className="box">
             <img loading="lazy"  className="boxshot" src="assets/images/boxshot.png" alt='img' />
             <p>
                 Stranger Things
                 <br/>
                 <a href="/">Downloading...</a>
             </p>
             <img loading="lazy" className="download-gif" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif" alt='img'/>
         </div>
     </div>
     <div className="right-column">
         <h1>Download your shows to watch offline.</h1>
         <h3>Save your favorites easily and always have something to watch.</h3>
     </div>
 </div>
 {/* <!-- WATCH EVERY WHERE --> */}
 <div className="section-container">
     <div className="left-column">
         <h1>Watch everywhere.</h1>
         <h3>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.</h3>
     </div>
     <div className="right-column">
         <img loading="lazy" src="assets/images/computer.png" alt='img'/>
         <video className="video-2" autoPlay="" playsInline="" muted="" loop="">
             <source src="assets/videos/video2.m4v" type="video/mp4"/>
         </video>
     </div>
 </div>
 {/* <!-- CREATE PROFILE FOR KIDS --> */}
 <div style={{"paddingTop":"50px"}} className="section2-container">
     <div className="left-column">
         <img loading="lazy" src="assets/images/create_profile.png" alt='img'/>
     </div>
     <div className="right-column">
         <h1>Create profiles for kids.</h1>
         <h3>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h3>
     </div>
 </div>
</section>
{/* <!-- QUESTION SECTION STARTS --> */}
<section className="question-container">
 <h1>Frequently Asked Questions</h1>
 {/* <!-- QUESTION 1 --> */}
     <button id="question1" type="button">
         What is Netflix?
         <img loading="lazy" src="assets/images/plus.png" alt='img'/>
     </button>
     <div id="answer1" className="answer1">
         <p>
             Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
             <br/><br/>
             You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!
         </p>
     </div>
     <br/>
     {/* <!-- QUESTION 2 --> */}
     <button id="question2" type="button">
         How much does Netflix cost?
         <img loading="lazy" src="assets/images/plus.png" alt='img'/>
     </button>
     <div id="answer2" className="answer2">
         <p>
             Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD7.99 to USD14.99 a month. No extra costs, no contracts.
         </p>
     </div>
     <br/>
     {/* <!-- QUESTION 3 --> */}
     <button id="question3" type="button">
         Where can I watch?
         <img loading="lazy" src="assets/images/plus.png" alt='img'/>
     </button>
     <div id="answer3" className="answer3">
         <p>
             Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
             <br/><br/>
             You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
         </p>
     </div>
     <br/>
     {/* <!-- QUESTION 4 --> */}
     <button id="question4" type="button">
         How do I cancel?
         <img loading="lazy" src="assets/images/plus.png" alt='img'/>
     </button>
     <div id="answer4" className="answer4">
         <p>
             Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
         </p>
     </div>
     <br/>
     {/* <!-- QUESTION 5 --> */}
     <button id="question5" type="button">
         What can I watch on Netflix?
         <img loading="lazy" src="assets/images/plus.png" alt='img'/>
     </button>
     <div id="answer5" className="answer5">
         <p>
             Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
         </p>
     </div>
     <br/>
     {/* <!-- QUESTION 6 --> */}
     <button id="question6" type="button">
         Is Netflix good for kids?
         <img loading="lazy" src="assets/images/plus.png" alt='img'/>
     </button>
     <div id="answer6" className="answer6">
         <p>
             The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.
             <br/><br/>
             Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
         </p>
     </div>
</section>

{/* <!-- QUESTION SECTION ENDS --> */}

{/* <!-- EMAIL ADDRESS STARTS--> */}
<div className="email-address-container">
     <p>Ready to watch? Enter your email to create or restart your membership.</p>
     <input type="text" name="email" placeholder="Email Address"/>
     <button type="submit">Get Started &gt;</button>
</div>
{/* <!-- EMAIL ADDRESS ENDS--> */}


    <Footer/>
   </Fragment>
  )
}

export default Main