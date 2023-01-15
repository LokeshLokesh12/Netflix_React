import React,{Fragment} from 'react'
function Header() {
  return (
    
    <Fragment>  
    {/* <!-- HEADER START --> */}
    <header>
    <div className="container">
        <div className="logo" >
            <img src="assets/images/logo.png" id="logo"  alt="netflix"/>
        </div>
        
        <div className="d-flex opt-sin">
            <select name="language" id="head-language" aria-dropeffect="execute" >
                <option value="eng">English</option>
                <option value="hid">Hindi</option>
            </select>
            <a href="/" className="signin-button" id='login_buttton'>sign in</a>
        </div>
    </div>
    </header>
    {/* <!-- HEADER END --> */}
    </Fragment>
  )
}

export default Header