import React from "react";
import { render } from "react-dom";
import Image from "./../../src";
// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      imgList: [
        {
          enter: "show",
          exit: "hide",
          mode: "fill"
        },
        {
          enter: "animate__animated animate__backInUp",
          exit: "animate__animated animate__backOutUp",
          mode: "contain"
        },
        {
          enter: "animate__animated animate__flipInX",
          exit: "animate__animated animate__flipOutY",
          mode: "cover"
        },
        {
          enter: "animate__animated animate__lightSpeedInRight",
          exit: "animate__animated animate__lightSpeedOutLeft",
          mode: "none"
        },
        {
          enter: "animate__animated animate__zoomInDown",
          exit: "animate__animated animate__zoomOutDown",
          mode: "scale-down"
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>纵向/portrait</h2>
        <div style={{
          height: '500px',
          overflow: 'hidden auto',
          width: '100%',
        }}>
        {this.state.imgList.map((n, i) => (
          <div key={i}>
            <p style={{ textAlign: "center" }}>mode:{n.mode || '默认'}  <br />enter:{n.enter} <br />exit:{n.exit}</p>
            <Image
              enter={n.enter}
              exit={n.exit}
              style={{
                height: "400px",
                width: "400px",
                margin: "10px auto",
                border: '1px solid #ccc'
              }}
              mode={n.mode}
              src={`http://iph.href.lu/600x200?text=portrait${i}.jpg`}
              placeholde="http://iph.href.lu/400x400?text=placeholde.jpg"
              title={`sample${i}`}
              alt={`sample${i}`}
            />
          </div>
        ))}
        </div>
        <h2>横向/landscape</h2>
        <div style={{
          height: '300px',
          overflow: 'auto hidden ',
          width: '100%',
          whiteSpace: 'nowrap',
        }}>
          {this.state.imgList.map((n, i) => (
            <Image
              enter={n.enter}
              exit={n.exit}
              key={i}
              style={{
                height: "300px",
                width: "600px",
                display:"inline-block",
                marginRight: '10px'
              }}
              mode={n.mode}
              src={`http://iph.href.lu/600x300?text=landscape${i}.jpg`}
              placeholde="http://iph.href.lu/600x300?text=placeholde.jpg"
              title={`sample${i}`}
              alt={`sample${i}`}
            />
          ))}
        </div>
      </div>

    );
  }
}

render(<App />, document.getElementById("root"));
