import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Internship } from "./Internship";
import { useState } from "react";

export const Main = () => {
  const [click, setClick] = useState<boolean>(false);

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <About />
      <Skills />
      <Projects click={click} setClick={setClick} />
      <Internship click={click} setClick={setClick} />
    </div>
  );
};
export interface ClickType {
  click: boolean;
  setClick: (x: boolean) => void;
}
