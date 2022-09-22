import Image from "next/image";
import React, { Component, useState } from "react";
import Slider from "react-slick";
import { Project1 } from "./Project1";

export const Projects = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="w-screen h-screen flex items-center justify-center" id="4">
      <div className="flex m-20">
        <Project1 click={click} setClick={setClick} />
      </div>
    </div>
  );
};
