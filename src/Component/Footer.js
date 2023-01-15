import React,{Fragment} from 'react'

function Footer() {
  return (
    <Fragment>
        <footer>
 <h5>Questions? Contact us.</h5>
 <div className="content">
     <div className="middle box">
         <div><a href="/">FAQ</a></div>
         <div><a href="/">Investor Relations</a></div>
         <div><a href="/">Privacy</a></div>
         <div><a href="/">Speed Test</a></div>
         <br/><br/>
         <select>
             <option value="/kw-en/">English</option>
             <option value="/kw/">العربية</option>
         </select>
         <br/><br/>
         <p>Netflix Kuwait</p>
     </div>
     
     <div className="middle box">
       <div><a href="/">Help Center</a></div>
       <div><a href="/">Jobs</a></div>
       <div><a href="/">Cookie Preferences</a></div>
       <div><a href="/">Legal Notices</a></div>
     </div>
     
     <div className="middle box">
         <div><a href="/">Account</a></div>
         <div><a href="/">Ways to Watch</a></div>
         <div><a href="/">Corporate Information</a></div>
         <div><a href="/">Mobile Application Design</a></div>
         <div><a href="/">Only on Netflix</a></div>
     </div>

     <div className="middle box">
         <div><a href="/">Media Center</a></div>
         <div><a href="/">Terms of Use</a></div>
         <div><a href="/">Contact Us</a></div>
     </div>

     </div>
     </footer>
    </Fragment>
  )
}

export default Footer