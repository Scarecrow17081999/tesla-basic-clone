import React,{useRef} from "react";
import "./Section.scss";
import Fade from 'react-reveal/Fade';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function Section({data}) {
    const scrollRef = useRef(null);
    const scroll= ()=>{
        if( scrollRef.current){

            scrollRef.current.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }

    }
  return (
    <div style={{ backgroundImage: `url(${data.backgroundImg})` }} id="sectionConainer">
         <Fade bottom big>
      <div id="modelDiv">
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
      <div>
        <div id="buttonGroup">
          <button id="leftButton">{data.leftButton}</button>
          {data.rightButton&&<button id="rightButton">{data.rightButton}</button>}
        </div>
        <div id="downArrow">
          <KeyboardArrowDownIcon onClick={scroll} id='iconArrow' sx={{ fontSize: "2.5rem" }} />
        </div>
      </div>
      </Fade>
    </div>
  );
}
