/** react公式およびサードパーティ製のhooksおよびcompornent */
import React, { useState } from "react";

/** ローカルのhooksおよびcompornent */
import "./App.css";

import { BrowserRouter } from "react-router-dom";

import { useSpring, animated } from "react-spring";
import { Header } from "./compornent/organism/Header";
import { Routing } from "./compornent/router/Routing";
import { Footer } from "./compornent/organism/Footer";

const App = () => {
  const [flip, setFlip] = useState(false);
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: false,
    delay: 1000,
    onRest: () => setFlip(!flip),
  });
  return (
    <div style={{ position: "relative" }} className="App">
      <animated.div style={props}>
        <BrowserRouter>
          <Header />
          <Routing />
          <Footer />
        </BrowserRouter>
      </animated.div>
    </div>
  );
};
export default App;
