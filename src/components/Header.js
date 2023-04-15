import React from "react";
import "./Header.scss";
import logo from "../images/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import Fade from 'react-reveal/Fade';
import CloseIcon from '@mui/icons-material/Close';
export default function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <Fade big>
    <div id="headerContainer" >
      <a href="#">
        <img src={logo} alt="" />
      </a>
      <div id="menu">
        <p>
          {" "}
          <a href="#">Model S</a>
        </p>
        <p>
          {" "}
          <a href="#">Model 3</a>
        </p>
        <p>
          {" "}
          <a href="#">Model X</a>
        </p>
        <p>
          {" "}
          <a href="#">Model Y</a>
        </p>
      </div>
      <div id="rightMenu">
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <MenuIcon onClick={()=>setOpen(true)} id='hamIcon'/>
      </div>
     
      <div id='burgerNav' style={open?{transform:"translateX(0)"}:{transform:"translateX(100%)"}}>
        <div>
          <CloseIcon onClick={()=>setOpen(false)} id='closeIcon'/>
        </div>
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Use Inventory</a></li>
        <li><a href="#">Trade-in</a></li>
        <li><a href="#">Cybertruck</a></li>
        <li><a href="#">Roadster</a></li>
        <li><a href="#">Utilities</a></li>
        <li><a href="#">Test Drive</a></li>
        <li><a href="#">Demo Drive</a></li>
        <li><a href="#">Charging</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Account</a></li>
      </div>
     
    </div>
    </Fade>
  );
}
