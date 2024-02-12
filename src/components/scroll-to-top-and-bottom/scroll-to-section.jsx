import { useRef, useState } from "react";
import React from 'react';

function ScrollToSection(props) {
  const ref = useRef();
  const [flag, setFlag] = useState(false)
  const data = [
    {
      label: "First Card",
      style: {
        width: "100%",
        height: "600px",
        background: "red",
      },
    },
    {
      label: "Second Card",
      style: {
        width: "100%",
        height: "600px",
        background: "grey",
      },
    },
    {
      label: "Third Card",
      style: {
        width: "100%",
        height: "600px",
        background: "blue",
      },
    },
    {
      label: "Fourth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "green",
      },
    },
    {
      label: "Fifth Card",
      style: {
        width: "100%",
        height: "600px",
        background: "orange",
      },
    },
  ];

  function handleScrollToSection() {
    setFlag(true)
    let pos = ref.current.getBoundingClientRect().top;
    document.getElementById("rihtPanel").scrollTo({
      top: pos,
      behavior: "smooth",
    });
  }


  return (
    <div>
      <h1>Scroll to a particular section</h1>
      <button onClick={handleScrollToSection}>Click To Scroll</button>
      {data.map((dataItem, index) => (
        <div ref={index === 3 ? ref : null} style={dataItem.style} key={index}>
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
}
export {ScrollToSection};
