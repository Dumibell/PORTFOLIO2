import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

export const Main = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <About />
      <Skills />
      <Projects />
    </div>
  );
};
