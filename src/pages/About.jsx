import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

function About() {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  function increment() {
    if (counter >= 10) {
      navigate("/");
    }

    setCounter(counter + 1);
  }
  return (
    <>
      <h1>About Page</h1>
      <Link to="/">
        <h3>Link to home page</h3>
      </Link>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment count</button>
    </>
  );
}

export default About;
