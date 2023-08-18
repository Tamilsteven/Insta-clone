import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VolumeUpRoundedIcon from '@mui/icons-material/VolumeUpRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
// import SendRoundedIcon from '@mui/icons-material/SendRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import message from "../images/message.jpg.png";
import photo from "../images/profile.jpg.jpg";
import img1 from "../images/img1.jpg.jpg";
import img2 from "../images/img2.jpg.jpg";
import img3 from "../images/img3.jpg.jpg";
import img4 from "../images/img4.jpg.jpg";
import img5 from "../images/img5.jpg.jpg";
import img6 from "../images/img6.jpg.jpg";
import img7 from "../images/img7.jpg.jpg";
import send from "../images/send.png";
import chats from "../images/chats.jpg.png";

import "../styles/home.css";
const Home = () => {

    return (
        <>
            <body className='body'>
                <header>
                    <nav className="navbar navbar-expand-lg bg-body-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/">Instagram</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                </header>

                <main>
                    <div className="sidebar">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="hom"><HomeIcon className='icon' /> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="sea"><SearchIcon className='icon' /> Search</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="exp"><ExploreOutlinedIcon className='icon' /> Explore</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="ree"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" id="instagram-reel">
                                    <path fill="white" fillRule="white" d="M1.5 6.5a5 5 0 0 1 5-5h11a5 5 0 0 1 5 5v11a5 5 0 0 1-5 5h-11a5 5 0 0 1-5-5v-11Zm5-4a4 4 0 0 0-4 4v11a4 4 0 0 0 4 4h11a4 4 0 0 0 4-4v-11a4 4 0 0 0-4-4h-11Z" clipRule="evenodd"></path><path fill="white" fill-rule="white" d="M9.27 10.556a.5.5 0 0 1 .517.034l5 3.5a.5.5 0 0 1 0 .82l-5 3.5A.5.5 0 0 1 9 18v-7a.5.5 0 0 1 .27-.444zM10 11.96v5.08l3.628-2.54L10 11.96zM1.5 8a.5.5 0 0 1 .5-.5h20a.5.5 0 0 1 0 1H2a.5.5 0 0 1-.5-.5z" clip-rule="evenodd">
                                    </path><path fill="#000" fillRule="evenodd" d="M7.842 1.526a.5.5 0 0 1 .632.316l2 6a.5.5 0 0 1-.948.316l-2-6a.5.5 0 0 1 .316-.632zm6 0a.5.5 0 0 1 .633.316l2 6a.5.5 0 0 1-.95.316l-2-6a.5.5 0 0 1 .317-.632z" clipRule="evenodd"></path></svg> Reels</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="mes"><img src={message} alt='' id='chat' /> Message</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="not"><FavoriteBorderOutlinedIcon className='icon' /> Notification</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="cre"><AddBoxOutlinedIcon className='icon' /> Create</a>
                            </li>
                            <li className="nav-item">

                                <a className='nav-link' href='pro'><img src={photo} alt='' id='photo' /> Profile</a>
                            </li>
                            <div className="d-flex">
                                <div class="menu-icon ">
                                    <div class="bar"></div>
                                    <div class="bar"></div>
                                    <div class="bar"></div>
                                </div>
                                <a className='nav-link' href='mor' id='more'>More</a>
                            </div>
                        </ul>
                    </div>
                </main>
                <section className='section-1'>
                    <div className="feed">
                        <div className="imgs">
                            <img src={photo} alt='' id='story' />
                            <p>ste_ve...</p>
                        </div>
                        <div className="imgs">
                            <img src={img1} alt='' id='story' />
                            <p>Ma_dren...</p>
                        </div>
                        <div className="imgs">
                            <img src={img2} alt='' id='story' />
                            <p>An_derson...</p>
                        </div>
                        <div className="imgs">
                            <img src={img3} alt='' id='story' />
                            <p>Hen_ry...</p>
                        </div>
                        <div className="imgs">
                            <img src={img4} alt='' id='story' />
                            <p>jos_eph...</p>
                        </div>
                        <div className="imgs">
                            <img src={img5} alt='' id='story' />
                            <p>And_riya...</p>
                        </div>
                        <div className="imgs">
                            <img src={img6} alt='' id='story' />
                            <p>Jo_el...</p>
                        </div>
                        <div className="imgs">
                            <img src={img7} alt='' id='story' />
                            <p>Yen_nifer...</p>
                        </div>
                    </div>
                </section>
                <section >
                    <div className='section-2'>
                        <div className="insta">
                            <div className='image'>
                            <img src={img7} alt='' id='insta-profile'/>
                            </div>            
                            <div>
                                <p className='para'> Yen_nifer.. 1h <span className='dot'>...</span></p>
                                <p className='para'>Original_audio</p>
                            </div>
                            <div className="cards">
                                <img src={img7} alt='' id='yeni' />
                                <p id='sound'><VolumeUpRoundedIcon sx={{ fontSize: "14px" }} /></p>
                                <div className="like">
                                    <span><FavoriteBorderRoundedIcon sx={{ fontSize: "24px" }} /></span>
                                    <div id='send'>
                                    <img src={chats} alt=''  height="14px" width="14px" style={{ transform: "rotateY(180deg)", marginTop: "3px" }} />
                                    <img src={send} alt=''  height="14px" width="14px" style={{ marginTop: "3px" }} />
                                    </div>
                                   
                                    <div>
                                        <span className='book'><BookmarkBorderRoundedIcon sx={{ fontSize: "24px" }} /></span>
                                    </div>
                                </div>
                                <div className='add'>
                                    <h6>1.2M Likes</h6>
                                    <div>
                                        <h6>Looks Awesome</h6>
                                        <h6>Gorgeous</h6>
                                        <h6>Hello</h6>
                                        <input type='text' className='inpt' placeholder='Add Coments'/>
                                    </div>
                                </div>
                                
                            </div>
                       </div>
                    </div>
                    <article>
                       <div className="card-body">
                        <img src={img2} alt='' id="story"/>
                        <div className='group'>
                        <p className='para'>Yen_nifer <span className='switch'><a href='sw' alt="#" style={{textDecoration:"none"}}>Switch</a></span></p>  
                        <p className='para'>Yennifer</p>
                        </div>    
                       </div>
                       <div className="suggested">
                        <div className=''>
                        <p className='para'>Suggested for you<span className='switch' ><a href='sw' alt="#" style={{textDecoration:"none",color:"white"}}>See All</a></span></p>  
                        
                        </div>    
                       </div>
                       <div className="card-body">
                        <img src={img5} alt='' id="story"/>
                        <div className='group'>
                        <p className='para'>Ali_ya<span className='switch'><a href='sw' alt="#" style={{textDecoration:"none"}}>Follow</a></span></p>  
                        <p className='para'>Following</p>
                        </div>
                       </div>
                       <div className="card-body">
                        <img src={img1} alt='' id="story"/>
                        <div className='group'>
                        <p className='para'>Mag_roon<span className='switch'><a href='sw' alt="#" style={{textDecoration:"none"}}>Follow</a></span></p>  
                        <p className='para'>Following</p>
                        </div>
                       </div>
                       <div className="card-body">
                        <img src={img4} alt='' id="story"/>
                        <div className='group'>
                        <p className='para'>Pet_er<span className='switch'><a href='sw' alt="#" style={{textDecoration:"none"}}>Follow</a></span></p>  
                        <p className='para'>Following</p>
                        </div>
                       </div>
                       <div className="card-body">
                        <img src={img6} alt='' id="story"/>
                        <div className='group'>
                        <p className='para'>Jam_es<span className='switch'><a href='sw' alt="#" style={{textDecoration:"none"}}>Follow</a></span></p>  
                        <p className='para'>Following</p>
                        </div>
                       </div>
                        <div className='final'>
                          <span className='abt'>About.Help.Press.Api.Job.privacy.Terms.Location
                            .Languages.Media verified
                          </span><br/>
                          <span className='abt'> &copy; 2023 INSTAGRAM FROM META</span>
                            </div>  
                    </article>
                </section>
               
            </body>




        </>
    )
}

export default Home;