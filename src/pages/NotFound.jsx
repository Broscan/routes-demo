import React, { useEffect } from "react";
import "../App.css";

function Notfound() {
  useEffect(() => {
    const body = document.querySelector("body");

    body.classList.add("bg");

    return () => {
      body.classList.remove("bg");
    };
  }, []);

  return <></>;
}

export default Notfound;
