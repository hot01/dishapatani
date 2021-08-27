import React from "react";
import "../css/home.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import PinterestIcon from '@material-ui/icons/Pinterest';
import homebanner from '../images/5';
import {Link} from 'react-router-dom';
import Sex from '../components/Sex';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

const Home = () => {
  return (
    <div>
       <Sex /> 
      <div className="main">
        <div className="left">
        <h3><span style={{color: "white"}}>Disha.</span>me</h3>
        <div className="details">
            <h4>HELLO</h4>
            <h1>I'm Disha patani</h1>
            <p>Actress, Model, bikini lover, love in chudai</p>
            <button>Explore</button>
        </div>

        <div className="social-media">
            <li><TwitterIcon className="icons"/></li>
            <li><InstagramIcon className="icons"/></li>
            <li><FacebookIcon className="icons"/></li>
            <li><PinterestIcon className="icons"/></li>
        </div>
        </div>

        <div className="center">
        <div className="banner-img">
        <img src={homebanner}alt="banner" />
        </div>
        <div className="texts">
            <p>Hi i'm disha patani waiting for a new boy to fuck me. You always loves me to fuck because i have big boobs(dudh) and big vagina(bur) . I can take 8ft penis(land). se my big and quality boobs from above.</p>
            <button>Fuck me</button>
        </div>
        </div>
        <div className="right">
<MenuOpenIcon className="menu"/>
            <div className="links">
            <Link to="/"><li className="active">HOME</li></Link>
                <Link to="/gallery"><li>GALLERY</li></Link>
                <Link to="/contact"><li>CONTACT</li></Link>
               <Link to="/service"><li>SERVICE</li></Link>
                <Link to="/about"><li>ABOUT</li></Link>
            </div>
        </div>
  
      </div>
      
  
    </div>
  );
};

export default Home;
