import React from 'react'
import '../css/sex.css';
import gif1 from '../images/ads/1.gif';
import gif2 from '../images/ads/2.gif';
import gif3 from '../images/ads/3.gif';
import gif4 from '../images/ads/4.gif';
import gif5 from '../images/ads/5.gif';
import gif6 from '../images/ads/6.gif';
import gif7 from '../images/ads/7.gif';
import gif8 from '../images/ads/8.gif';
import gif9 from '../images/ads/9.gif';
import gif10 from '../images/ads/10.gif';
import gif11 from '../images/ads/11.gif';
import gif12 from '../images/ads/12.gif';


import CancelSharpIcon from '@material-ui/icons/CancelSharp';
const Sex = () => {
    const fire=()=>{
        let sex=document.getElementById('sex');
        sex.style.display="none"
    }
    return (
        <div className="sex" id="sex">
        <CancelSharpIcon className="wrong" onClick={fire}/>
            <img src={gif1} alt={gif1} />
            <img src={gif12} alt={gif12} />
       
            <img src={gif2} alt={gif2} />
            <img src={gif4} alt={gif4} />
            <img src={gif5} alt={gif5} />
            <img src={gif6} alt={gif6} />
            <img src={gif9} alt={gif9} />
            <img src={gif7} alt={gif7} />
            <img src={gif8} alt={gif8} />
            
             <img src={gif10} alt={gif10} />
             <img src={gif11} alt={gif11} />
             <img src={gif3} alt={gif3} />
        </div>
    )
}

export default Sex;
