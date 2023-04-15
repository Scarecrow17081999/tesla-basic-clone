import React from "react";
import "./Home.scss";
import img1 from "../images/model-s.jpg";
import img2 from "../images/model-x.jpg";
import img3 from "../images/model-y.jpg";
import img4 from "../images/model-3.jpg";
import img5 from "../images/solar-panel.jpg";
import img6 from "../images/accessories.jpg";
import Section from "./Section";
let data = [
  {
    id: "1",
    title: "Model S",
    description: "Lowest Cost Solar Panels in America ",
    backgroundImg: img1,
    leftButton: "Custom Order",
    rightButton: "Existing inventory",
  },
  {
    id: "2",
    title: "Model X",
    description: "Lowest Cost Solar Panels in America ",
    backgroundImg: img2,
    leftButton: "Custom Order",
    rightButton: "Existing inventory",
  },
  {
    id: "3",
    title: "Model Y",
    description: "Lowest Cost Solar Panels in America ",
    backgroundImg:  img3,
    leftButton: "Custom Order",
    rightButton: "Existing inventory",
  },
  {
    id: "4",
    title: "Model 3",
    description: "Lowest Cost Solar Panels in America ",
    backgroundImg:  img4,
    leftButton: "Custom Order",
    rightButton: "Existing inventory",
  },
  {
    id: "5",
    title: "Solar Panels",
    description: "Lowest Cost Solar Panels in America ",
    backgroundImg: img5,
    leftButton: "Custom Order",
    rightButton: "Learn More",
  },
  {
    id: "6",
    title: "Accessories",
    description: "Lowest Cost Solar Panels in America ",
    backgroundImg:  img6,
    leftButton: "Shop Now",
    rightButton: "",
  },
];
export default function Home() {
  return (
    <div id="homeContainer">
      {data.map((e) =><Section data={e} key={e.id}/>)}
    </div>
  );
}
