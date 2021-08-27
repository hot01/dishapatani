import React,{useState} from 'react'
import '../css/contact.css';

import {Link} from 'react-router-dom';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import img3 from '../images/1.png';

import CallIcon from '@material-ui/icons/Call';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import HotelIcon from '@material-ui/icons/Hotel';
import Sex from '../components/Sex';
const Contact = () => {
 
    const DB= process.env.REACT_APP_WEATHER_API_KEY;


    const [data, setData] = useState({

fullname:"",
penies:"",
bedroom: "",
address:"",
boobs:"",
rating:""                
    })

    let name,value;
    const getValue=(e)=>{
       
name=e.target.name;
value=e.target.value;
        setData({...data,[name]:value})
    }

    const sendData=async(e)=>{
        e.preventDefault();
  const {fullname,penies,bedroom,address,boobs,rating}=data;
if(fullname&&penies&&bedroom&&address&&boobs&&rating){
    const res=await fetch(DB,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({fullname,penies,bedroom,address,boobs,rating})
    })
    if(res){
        setData({
          fullname:"",
          penies:"",
          bedroom: "",
          address:"",
          boobs:"",
          rating:""    
        })
        alert('successfully send, make your land clean without hairs')
    }
}
else{
    alert('please fill all fields')
}
  
    }
    return (
        <div className="contact">
            <Sex />
            <div className="data">
{/* forms */}
<div className="forms">
<h1>CONTACT ME FOR FUCK</h1>
<form method="POST">
    <input type="text" name="fullname" value={data.fullname} onChange={getValue} placeholder="Your Full Name"/>
    <input type="text" name="penies" value={data.penies} onChange={getValue} placeholder="Penis (land) size"/>
    <input type="text" name="bedroom" value={data.bedroom} onChange={getValue} placeholder="Bedroom number"/>
    <input type="text" name="address" value={data.address} onChange={getValue} placeholder="Address"/>
     <input type="text" name="boobs" value={data.boobs} onChange={getValue} placeholder="Do you Like my boobs size ?"/>
     <textarea name="rating" value={data.rating} onChange={getValue} placeholder="Give rating to my body parts (?/10)

     1.Boobs 
     2.Vagina(bur)
     3.Stomach
     4.Any other you want "></textarea>
     <button onClick={sendData}>Ready to Fuck</button>
</form>
</div>

{/* image */}
<div className="con-img">

    <img src={img3} alt={img3} />
</div>

<div className="address">
<li>
<CallIcon className="icon"/> <h5>Call On</h5>
<p>+91-1720-1222-1223</p>
</li>


<li>
<LocationOnIcon className="icon"/><h5>My Location</h5>
<p>I'will give you privately</p>
</li>


<li>
<HotelIcon className="icon"/><h5>Book oyo Hotel</h5>
<p>I love sex (chudai) in oyo most</p>
</li>
</div>
            </div>


            <div className="right">
<MenuOpenIcon className="menu"/>
            <div className="links">
            <Link to="/"><li >HOME</li></Link>
                <Link to="/gallery"><li>GALLERY</li></Link>
                <Link to="/contact"><li className="active">CONTACT</li></Link>
                <Link to="/service"><li>SERVICE</li></Link>
                <Link to="/about"><li>ABOUT</li></Link>
            </div>
        </div>
        </div>
    )
}

export default Contact
