import React from "react";
import { render } from "react-dom";
import Image from "../../src";
const imgList = [
  {},
  {
    enter: "show",
    exit: "hide",
  },
  {
    enter: "animate__animated animate__bounceIn",
    exit: "animate__animated animate__bounceOut",
  },
  {
    enter: "animate__animated animate__backInUp",
    exit: "animate__animated animate__backOutUp",
  },
  {
    enter: "animate__animated animate__flipInX",
    exit: "animate__animated animate__flipOutY",
  },
  {
    enter: "animate__animated animate__lightSpeedInRight",
    exit: "animate__animated animate__lightSpeedOutLeft",
  },
  {
    enter: "animate__animated animate__zoomInDown",
    exit: "animate__animated animate__zoomOutDown",
  },
];

const App = () =>
  imgList.map((n, i) => (
    <Image
      enter={n.enter}
      exit={n.exit}
      style={{
        height: "400px",
        width: "600px",
        margin: "10px auto",
      }}
      src={`http://iph.href.lu/600x400?text=sample${i}.jpg`}
      placeholde="http://iph.href.lu/600x400?text=placeholde.jpg"
      title={`sample${i}`}
      alt={`sample${i}`}
      key={i}
    />
  ));
render(<App />, document.getElementById("root"));
