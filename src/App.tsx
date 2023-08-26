import Card from "./Card";
import { useState, useEffect } from "react";
const App = () => {
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);
  const windowResize = () => {
    setwindowWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", windowResize);
    return () => {
      window.removeEventListener("resize", windowResize);
    };
  }, [windowWidth]);

  return (
    <div
      className="bg-Dark-cyan font-Kumbh bg-no-repeat bg-bottom h-screen w-screen flex"
      style={{
        backgroundImage:
          "url(../images/bg-pattern-top.svg), url(../images/bg-pattern-bottom.svg)",
        backgroundPosition: `${
          windowWidth > 700
            ? `right 51vw bottom 20vh, left 45vw top 50vh`
            : `right 31vw bottom 20vh, left 45vw top 30vh`
        }`,
      }}
    >
      <Card />
    </div>
  );
};

export default App;
