import { Home } from "./Home";
import { About } from "./About";

import { Experience } from "./Experience";
import { Projects } from "./Projects";

export const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <Home />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};
