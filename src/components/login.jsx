import React from 'react';
import "../styles/login.css";
import img from "../images/playstore.jpg.png";
import img1 from "../images/microsoft.jpg.png";
import imgs from "../images/phone.jpg.png";
import insta from "../images/instagram.jpg.png";
import { useNavigate } from 'react-router';
//import {Link} from "react-router-dom";
// import {useHistory} from "react-router-dom";
const Login = () => {
     const navigate = useNavigate()
     const handlesubmit=()=>{
             navigate('/home')

     }
    return (
        <>
            <div className="flex-container">
                <section className='section1'>
                  <div className="cols md4 sm-7">
                       <img src={imgs} alt=''/>
                  </div>
                </section>
                 <section className='section-insta'>  
                <div className="box">
                    <img src={insta}alt='' id='insta'/>
                    <form action='' id='form' >
                        <input type='text' name='name' id='name' placeholder='Phone number,username or email address' required />
                        <input type='password' name='password' id='password' placeholder='Password' required />
                    <button type='submit' className='btn' onClick={handlesubmit}>Log in</button>
                        {/* <button type='submit' className='btn' >Log in</button> */}
                        <div className='line '>
                            <hr></hr>
                            <span className='or'>OR</span>
                            <hr></hr>
                        </div>
                        <div className='fb-logo d-flex'>
                            <svg fill="#3b5998" width="12" height="12" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                <path d="M59.5 1H4.5C2.5 1 1 2.6 1 4.5V59.5C1 61.5 2.6 63 4.5 63H34.1V38.9H26.1V29.6H34.1V22.7C34.1 14.7 38.9 10.3 46.1 10.3C48.5 10.3 50.9 10.4 53.3 10.7V19H48.5C44.7 19 43.9 20.8 43.9 23.5V29.4H53L51.7 38.8H43.7V62.6H59.5C61.5 62.6 63 61.1 63 59.1V4.5C62.9 2.5 61.3 1 59.5 1Z" /></svg>
                            <p className='log'>Log in with facebook</p>
                        </div>
                        <p className='pass'>Forgetten your password?</p>
                    </form>
                </div>
                </section>
            </div>
            <aside className='art-1'>
            <div className='wrap'>
                <div className="signup">
                    <p className='text'>Don't have an account? <span className='sign'>Signup</span></p>
                </div>
            </div>
            <div className="ads">
                <p>Get the app.</p>
                <div className='imgs flex-wrap'>
                    <img src={img} alt='' id='' />
                    <img src={img1} alt='' id="mc" />
                </div>
            </div>
            </aside>
            {/* <div className='wrap'>
                <div className="signup">
                    <p>Don't have an account? <span className='sign'>Signup</span></p>
                </div>
            </div>
            <div className="ads">
                <p>Get the app.</p>
                <div className='imgs flex-wrap'>
                    <img src={img} alt='' />
                    <img src={img1} alt='' id="mc" />
                </div>
            </div> */}

        
            <footer>
                <div className="foot">
                    <ul>
                        <li>Meta</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                        <li>Help</li>
                        <li>API</li>
                        <li>Privacy</li>
                        <li>Terms</li>
                        <li>Top accounts</li>
                        <li>Locations</li>
                        <li>Instagram Lite</li>
                        <li>Threads</li>
                        <li>Contact uploading and non-users </li>
                        <li>Meta Verified</li>
                    </ul>
                </div>
                <div className='cp'>
                    <ul>
                        <li>English (UK)
                            <select>
                                <option value=""></option>
                            </select>
                            </li>
                        <li>© 2023 Instagram from Meta</li>
                    </ul>
                </div>
            </footer>

        </>
    )
}
export default Login;