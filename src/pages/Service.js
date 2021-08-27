import '../css/services.css';
import { Link } from "react-router-dom";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import img20 from '../images/17.jpg';
import boobs from '../images/ads/boobs.gif';
import bur from '../images/ads/bur.webp';
import bow from '../images/ads/bow.gif';
import gand from '../images/ads/gand.webp';
import blowing from '../images/ads/blowing.webp';
import burtaste from '../images/ads/bur-taste.gif';
import playland from '../images/ads/play-land.webp';
import Sex from '../components/Sex';
const Service = () => {

    const ServiceCard=(props)=>{
        return(
            <>
       
<li>

<div className="left">

<h2>{props.H2}</h2>
<p>{props.P1}<br />
{props.P2}<br />
{props.P3}<br />
{props.P4}<br />
{props.P5} <br />
{props.P6}<br />
</p>
<AttachMoneyIcon className="icons"/> <h3>= {props.PRICE}</h3>
<a href=""><button>BOOK</button></a>
</div>

<div className="ims">
    <img src={props.IMG} alt={props.ALTS} />
</div>
</li>
            </>
        )
    }
    return (
        <>
             <Sex />  
        <div className="service">
            
            <div className="left-container">

<div className="div1">
<h1>My FUCK SERVICES</h1>
<p>I offers many services for fuck. I will give my chut on rent.<br/>
Please read all the introduction carefully so that their will be no pause during my sex.<br />

Deep details for my services is given below.<br/>

</p>
<a href="#services-offers"><button>MY SERVICES</button></a>





</div>


 <div className="div2">
<img src={img20} alt={img20} />

 </div>



            </div>

            </div>

     
            <div className="right">
        <MenuOpenIcon className="menu" />
        <div className="links">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/gallery">
            <li >GALLERY</li>
          </Link>
          <Link to="/contact"><li>CONTACT</li></Link>
          <Link to="/service"><li className="active">SERVICE</li></Link>
                <Link to="/about"><li>ABOUT</li></Link>
        </div>
      </div>



        <div id="services-offers">
        <ServiceCard H2="BOOBS TOUCH" P1="please touch my boobs." P2="Please please come and put your penis(land) between my both boobs." P3="Taste my sweet milk." P4="Take my nipples inside your mouth." PRICE="130000" IMG={boobs} ALTS={boobs}/> 

        <ServiceCard H2="BUR PAADE" P1="I can take 10'inc land easily." P2="I LOVE BIG LAND" P3="I PRODUCE SWEET SOUND DURING SEX like 'aah-aah-aah'." P4="Take my nipples inside your mouth." PRICE="390000" IMG={bur} ALTS={bur}/> 

        <ServiceCard H2="BUR FINGERING" P1="I LOVE FINGERING." P2="PLEASE PUT YOUR LAND ONE TIME DURING FINGERING." PRICE="120000" IMG={bow} ALTS={bow}/>


        <ServiceCard H2="BLOWING" P1="I LOVE TO TASTE YOUR LAND." P2="I CAN ALSO TAKE 8'INC LAND INSIDE MY MOUTH."  P3="PLEASE CLEAN YOUR LAND BEFORE BLOWING." PRICE="25000" IMG={blowing} ALTS={blowing}/>

        <ServiceCard H2="TASTE MY BUR" P1="Wow what a feeling when you taste my bur." P2="Please do slowly." P3="DON'T PUT YOUR LAND DURING THIS." PRICE="128000" IMG={burtaste} ALTS={burtaste}/>


        <ServiceCard H2="PLAY WITH YOUR LAND" P1="i love play with big land." P2="please come with tablets if you have small land." P3="DON'T mine if i kiss your land during this." PRICE="8000" IMG={playland} ALTS={playland}/>


        <ServiceCard H2="LAND INSIDE MY GAND" P1="PLEASE FUCK INSIDE MY GAND." P2="I ALSO TAKE BIG LAND INSIDE MY GAND." P3="PLEASE PUT LAND INSIDE MY BUR ONE TIME DURING THIS." PRICE="108000" IMG={gand} ALTS={gand}/>






        </div>

</>
    )
}

export default Service;
