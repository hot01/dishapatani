import React from "react";
import "../css/about.css";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";

import stomach from "../images/stomach.png";
import img71 from "../images/boobs.png";
import backless from "../images/backless.png";
import kiss from "../images/kiss.png";
import bur from "../images/bur.png";


import Sex from '../components/Sex';

const About = () => {
  const Card = (props) => {
    return (
      <>
        <div className="data">
          <h5>{props.H1}</h5>
          <p>
            {props.p1}
            <br />
            {props.p2}
            <br />
            {props.p3}
            <br />
            {props.p4}
            <br />
            {props.p5}
            <br />
            {props.p6}
            <br />
            <span style={{ fontSize: "2em" }} className="main">
              {props.main} <span style={{ color: "red" }}>{props.result}</span>
            </span>
          </p>
        </div>
        <div className="imgs">
          <img src={props.imgs} alt={props.alt} />
        </div>
      </>
    );
  };

  const CardRight = (props) => {
    return (
      <>
      <div className="imgss">
      <img src={props.imgs} alt={props.alt} />
        </div>
        <div className="datas">
          <h5>MY HOT STOMACH</h5>
          <p>{props.p1}
            <br />
            {props.p2}
            <br />
            {props.p3}
            <br />
            {props.p4}
            <br />
            {props.p5}
            <br />
            {props.p6}
            <br />
            <span style={{ fontSize: "2em" }} className="main">
              {props.main} <span style={{ color: "red" }}>{props.result}</span>
            </span>
          </p>
        </div>
       
      </>
    );
  };
  return (
     <>
     <Sex />
    <div className="about">
     
      <div className="items">
        <div className="top-heading">About Me</div>

        <li>
          <Card
            H1="MY BOOBS (DUDH) DETAILS"
            p1="1.Hii this is my boobs"
            p2="2.I maintain this from last few year."
            p3="3.I want someone who touch my big and quality boobs."
            p4="4.Please someone taste my boobs."
            p5="5.Please take my nipples inside your mouth."
            p6="6.Please put your penis(land) between my both boobs"
            main="BOOBS-SIZE="
            result="33-B"
            imgs={img71}
            alt={img71}
          />
        </li>
       
        <li>

        <CardRight
            H1="MY HOT STOMACH"
            p1="1.I have slim and smooth stomach"
            p2="2. Please taste my stomach with your toung"
            p3="3.Put your penis(land) over my stomach."
           
            main="SIZE = "
            result=" 25 CM"
            imgs={stomach}
            alt={stomach}
          />
        </li>
        <li>
          <Card
            H1="MY SEXY BACK"
            p1="1.Please fuck me"
            p2="2.I also maintain by back so that man will enjoy with me."
           
            main="BACKLESS ="
            result=" 26"
            imgs={backless}
            alt={backless}
          />
        </li>
        <li>

<CardRight
    H1="MY KISSES"
    p1="1.I also loves kisses"
    p2="2.I'm waiting to kiss your land"
    p3="3.I will take your full land inside my mouth."
    p4="4.I also love to taste your white lace"
    main="Mouth size = "
    result=" 8'fts"
    imgs={kiss}
    alt={kiss}
  />
</li>
    <li>
          <Card
            H1="MY VEGINA (BUR)"
            p1="1.I can take upto 10'cm land easily"
            p2="2.Please someone put your land inside my bur."
            p3="3.I make my vegina ready to take long and fat land"
            main="BUR-SIZE ="
            result=" 36"
            imgs={bur}
            alt={bur}
          />
        </li>
        <li></li>    
      </div>

      <div className="right">
        <MenuOpenIcon className="menu" />
        <div className="links">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/gallery">
            <li>GALLERY</li>
          </Link>
          <Link to="/contact">
            <li>CONTACT</li>
          </Link>
          <Link to="/service">
            <li>SERVICE</li>
          </Link>
          <Link to="/about">
            <li className="active">ABOUT</li>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
