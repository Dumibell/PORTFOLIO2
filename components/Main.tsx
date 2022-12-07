import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Internship } from "./Internship";
import { useEffect, useState } from "react";

export const Main = () => {
  return (
    <div className="w-full h-full">
      <About />
      <Skills />
      <Projects />
      <Internship />
    </div>
  );
};
export interface ClickType {
  click: boolean;
  setClick: (x: boolean) => void;
}
