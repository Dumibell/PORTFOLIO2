import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { styled } from "styled-components";
import { Experiences } from "./Expreriences";
import { Contacts } from "./Contacts";

export const Main = () => {
  return (
    <MainContainer>
      <About />
      {/* <Skills /> */}
      <Experiences />
      <Projects />
      <Contacts />
    </MainContainer>
  );
};
export interface ClickType {
  click: boolean;
  setClick: (x: boolean) => void;
}

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
