import { About } from "./About";
import { Skills } from "./Skills";

import { Experience } from "./Experience";
import { Projects } from "./Projects";

export const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <About />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};
