import React, { useState } from "react";

function Detective() {
  const [sherlock, setSherlock] = useState("психопат");
  const handleClick = () => {
    setSherlock("высокоактивный социопат");
  };
  return (
    <div>
      <p> шерлок - {sherlock}</p>
      <button onClick={handleClick}>узнать правду</button>
    </div>
  );
}
export default Detective;
