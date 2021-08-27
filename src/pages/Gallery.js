import "../css/gallery.css";
import { Link } from "react-router-dom";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import Sex from '../components/Sex';
// images

import img7 from "../images/7.jpg";
import img4 from "../images/4.jpg";
import img6 from "../images/6.jpg";
import img8 from "../images/8.jpg";
import img9 from "../images/9.jpg";
import img10 from "../images/10.jpg";
import img11 from "../images/11.jpg";
import img12 from "../images/12.webp";
import img13 from "../images/13.jpg";
import img14 from "../images/14.jpg";
import img46 from "../images/46.jpg";
import img48 from "../images/48.jpg";
import img15 from "../images/15.jpg";
import img32 from "../images/32.jpg";
import img21 from "../images/21.jpg";
import img44 from "../images/44.jpg";
import img26 from "../images/26.jpg";
import img34 from "../images/34.jpg";
import img37 from "../images/37.jpg";
import img28 from "../images/28.jpg";
import img36 from "../images/36.jpg";
import img39 from "../images/39.jpg";
import img41 from "../images/41.jpg";
import img57 from "../images/57.jpg";
import img59 from "../images/59.jpg";
import img16 from "../images/16.jpg";
import img17 from "../images/17.jpg";
import img18 from "../images/18.jpg";
import img19 from "../images/19.jpg";
import img20 from "../images/20.jpg";
import img22 from "../images/22.webp";
import img23 from "../images/23.jpg";
import img24 from "../images/24.jpg";
import img25 from "../images/25.jpeg";
import img29 from "../images/29.jpg";
import img30 from "../images/30.jpg";
import img27 from "../images/27.png";
import img31 from "../images/31.jpg";
import img33 from "../images/33.jpg";
import img38 from "../images/38.jpg";
import img35 from "../images/35.jpg";
import img40 from "../images/40.png";
import img42 from "../images/42.webp";
import img43 from "../images/43.webp";
import img45 from "../images/45.jpg";
import img47 from "../images/47.jpg";
import img49 from "../images/49.jpg";
import img50 from "../images/50.jpg";
import img51 from "../images/51.jpg";
import img52 from "../images/52.jpg";
import img53 from "../images/53.jpg";
import img54 from "../images/54.webp";
import img55 from "../images/55.jpg";
import img56 from "../images/56.jpg";
import img58 from "../images/58.jpg";
import img60 from "../images/60.png";
import img61 from "../images/61.webp";
import img62 from "../images/62.jpg";
import img63 from "../images/63.jpg";
import img64 from "../images/64.jpg";
import img65 from "../images/65.jpg";
import img66 from "../images/66.jpg";
import img67 from "../images/67.jpg";
import img68 from "../images/68.jpg";
import img69 from "../images/69.jpg";
import img70 from "../images/70.jpg";
import img71 from "../images/71.jpg";
import img72 from "../images/72.jpeg";
import img73 from "../images/73.jpg";
import img74 from "../images/74.jpg";
import img75 from "../images/75.jpg";
import img76 from "../images/76.jpg";
import img77 from "../images/77.jpg";
import img78 from "../images/78.jpg";
import img79 from "../images/79.jpg";
import img80 from "../images/80.jpg";
import img81 from "../images/81.webp";
import img82 from "../images/82.jpg";
import img83 from "../images/83.jpg";
import img84 from "../images/84.jpg";
import img85 from "../images/85.jpg";
import img86 from "../images/86.jpg";
import img87 from "../images/87.jpg";
import img88 from "../images/88.jpg";
import img89 from "../images/89.jpg";
import img90 from "../images/90.jpg";
import img91 from "../images/91.jpg";
import img92 from "../images/92.jpg";
import img94 from "../images/94.jpg";
import img93 from "../images/93.jpg";
import img95 from "../images/95.jpg";
import img96 from "../images/96.jpg";
import img97 from "../images/97.jpg";
import img98 from "../images/98.jpg";
import img99 from "../images/99.jpg";
import img100 from "../images/100.jpg";
import img101 from "../images/101.jpg";
import img102 from "../images/102.jpg";
import img103 from "../images/103.jpg";
import img104 from "../images/104.jpg";
import img105 from "../images/105.jpg";
import img106 from "../images/106.jpg";
import img107 from "../images/107.jpg";
import img108 from "../images/108.jpg";
import img109 from "../images/109.jpg";
import img110 from "../images/110.jpg";
import img111 from "../images/111.jpg";
import img112 from "../images/112.jpg";
import img113 from "../images/113.jpg";
import img114 from "../images/114.jpg";
import img115 from "../images/115.jpg";
import img116 from "../images/116.jpg";
import img117 from "../images/117.jpg";
import img118 from "../images/118.jpg";
import img119 from "../images/119.jpg";
import img120 from "../images/120.jpg";
import img121 from "../images/121.jpg";
import img122 from "../images/122.jpg";
import img123 from "../images/123.jpg";
import img124 from "../images/124.jpg";
import img125 from "../images/125.jpg";

import img126 from "../images/126.jpg";
import img127 from "../images/127.jpg";
import img128 from "../images/128.jpg";
import img129 from "../images/129.jpg";
import img130 from "../images/130.jpg";
import img131 from "../images/131.jpg";
import img132 from "../images/132.jpg";
import img133 from "../images/133.jpg";

import img134 from "../images/134.jpeg";
import img135 from "../images/135.jpeg";

import img136 from "../images/136.jpg";
import img137 from "../images/137.jpg";
import img138 from "../images/138.jpg";
import img139 from "../images/139.jpg";
import img140 from "../images/140.png";
import img141 from "../images/141.jpg";
import img142 from "../images/142.jpg";
import img143 from "../images/143.jpg";
import img144 from "../images/144.jpg";
import img145 from "../images/145.jpg";
import img146 from "../images/146.jpg";
import img147 from "../images/147.jpeg";
const Gallery = () => {
  return (
    <>
      <Sex />
    <div className="gallery">
    
      <div className="left">
        {/* div1 */}
        <div className="div1">
          <img src={img7} alt={img7} />
          <img src={img8} alt={img8} />
          <img src={img14} alt={img14} />

          <img src={img60} alt={img60} />
          <img src={img6} alt={img6} />
          <img src={img10} alt={img10} />
          <img src={img17} alt={img17} />
          <img src={img18} alt={img18} />
          <img src={img37} alt={img37} />
          <img src={img20} alt={img20} />
          <img src={img24} alt={img24} />
          <img src={img30} alt={img30} />
          <img src={img19} alt={img19} />
          <img src={img27} alt={img27} />
          <img src={img31} alt={img31} />
          <img src={img29} alt={img29} />
          <img src={img40} alt={img40} />
          <img src={img42} alt={img42} />

          <img src={img49} alt={img49} />
          <img src={img47} alt={img38} />
          <img src={img43} alt={img43} />
          <img src={img38} alt={img38} />

          <img src={img51} alt={img51} />
          <img src={img52} alt={img52} />

          <img src={img55} alt={img55} />
          <img src={img56} alt={img56} />
          <img src={img58} alt={img58} />
          <img src={img63} alt={img63} />
          <img src={img68} alt={img68} />
          <img src={img61} alt={img61} />
          <img src={img69} alt={img69} />
          <img src={img75} alt={img75} />
          <img src={img77} alt={img77} />
          <img src={img78} alt={img78} />
          <img src={img81} alt={img81} />
          <img src={img82} alt={img82} />
          <img src={img88} alt={img88} />
          <img src={img90} alt={img90} />
          <img src={img89} alt={img89} />
          <img src={img91} alt={img91} />
          <img src={img92} alt={img92} />
          <img src={img93} alt={img93} />
          <img src={img94} alt={img94} />

          <img src={img96} alt={img96} />
          <img src={img76} alt={img76} />
          <img src={img79} alt={img79} />
          <img src={img83} alt={img83} />
         
          <img src={img101} alt={img101} />
          <img src={img102} alt={img102} />
          <img src={img105} alt={img105} />
          <img src={img106} alt={img106} />
          <img src={img110} alt={img110} />
          <img src={img112} alt={img112} />
          <img src={img109} alt={img109} />
          <img src={img113} alt={img113} />
          <img src={img115} alt={img115} />
          <img src={img116} alt={img116} />
          <img src={img117} alt={img117} />
          <img src={img119} alt={img119} />
          <img src={img125} alt={img125} />
          <img src={img133} alt={img133} />
          <img src={img126} alt={img126} />
          <img src={img128} alt={img128} />
          <img src={img118} alt={img118} />
          <img src={img120} alt={img120} />
          <img src={img132} alt={img132} />
          <img src={img134} alt={img134} />
          <img src={img138} alt={img138} />
          <img src={img140} alt={img140} />
          <img src={img142} alt={img142} />
          <img src={img137} alt={img137} />
          <img src={img146} alt={img146} />
        </div>

        {/* div2 */}
        <div className="div2">
          <img src={img48} alt={img48} />
         
          <img src={img59} alt={img59} />
          <img src={img13} alt={img13} />

          <img src={img9} alt={img9} />
          <img src={img11} alt={img11} />
          <img src={img50} alt={img50} />
          <img src={img25} alt={img25} />
          <img src={img45} alt={img45} />
          <img src={img12} alt={img12} />
          <img src={img46} alt={img46} />
          <img src={img15} alt={img15} />
          <img src={img32} alt={img32} />
          <img src={img21} alt={img21} />
          <img src={img44} alt={img44} />
          <img src={img26} alt={img26} />
          <img src={img4} alt={img4} />
          <img src={img34} alt={img34} />
          <img src={img28} alt={img28} />
          <img src={img36} alt={img36} />
          <img src={img39} alt={img39} />
          <img src={img41} alt={img41} />
          <img src={img57} alt={img57} />
          <img src={img33} alt={img33} />
          <img src={img35} alt={img35} />
          <img src={img22} alt={img22} />
          <img src={img23} alt={img23} />
          <img src={img16} alt={img16} />
          <img src={img17} alt={img17} />
          <img src={img53} alt={img53} />
          <img src={img54} alt={img54} />
          <img src={img62} alt={img62} />
          <img src={img64} alt={img64} />
          <img src={img66} alt={img66} />
          <img src={img67} alt={img67} />
          <img src={img70} alt={img70} />
          <img src={img71} alt={img71} />
          <img src={img72} alt={img72} />
          <img src={img70} alt={img70} />
          <img src={img65} alt={img65} />
          <img src={img73} alt={img73} />
          <img src={img74} alt={img74} />
          <img src={img100} alt={img100} />
          <img src={img80} alt={img80} />

          <img src={img85} alt={img85} />
          <img src={img86} alt={img86} />
          <img src={img87} alt={img87} />
          <img src={img97} alt={img97} />
          <img src={img98} alt={img98} />
          <img src={img95} alt={img95} />
          <img src={img84} alt={img84} />
          <img src={img99} alt={img99} />
          <img src={img103} alt={img103} />
          <img src={img104} alt={img104} />
          <img src={img107} alt={img107} />
          <img src={img108} alt={img108} />
          <img src={img111} alt={img111} />
          <img src={img114} alt={img114} />

          <img src={img121} alt={img121} />
          <img src={img122} alt={img122} />
          <img src={img123} alt={img123} />
          <img src={img127} alt={img127} />
          <img src={img124} alt={img124} />
          <img src={img129} alt={img129} />
          <img src={img130} alt={img130} />
          <img src={img131} alt={img131} />
          <img src={img135} alt={img135} />
          <img src={img136} alt={img136} />
          
          <img src={img139} alt={img139} />
          <img src={img141} alt={img141} />
          <img src={img143} alt={img143} />
          <img src={img145} alt={img145} />
          <img src={img144} alt={img144} />
          <img src={img147} alt={img147} />
        </div>
      </div>

      <div className="right">
    
        <MenuOpenIcon className="menu" />
        <div className="links">
          <Link to="/">
            <li>HOME</li>
          </Link>
          <Link to="/gallery">
            <li className="active">GALLERY</li>
          </Link>
          <Link to="/contact"><li>CONTACT</li></Link>
          <Link to="/service"><li>SERVICE</li></Link>
                <Link to="/about"><li>ABOUT</li></Link>
        </div>
      </div>
    </div>
    </>
  );
};

export default Gallery;
