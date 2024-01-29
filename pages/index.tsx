import type { NextPage } from "next";
import { Main } from "../components/Main";
import React from "react";
import { styled } from "styled-components";
import { Nav } from "../components/Nav/Nav";
import { useStore } from "../stores/store";
import { darkTheme, lightTheme } from "../styles/theme";

const Index: NextPage = () => {
  const { lightMode, changeMode } = useStore();
  return (
    <Container lightMode={lightMode}>
      <>
        <Nav />
        <Main />
      </>
    </Container>
  );
};

const Container = styled.div<{ lightMode: boolean }>`
  width: 100vw;
  background-color: ${(props) =>
    props.lightMode ? lightTheme.background : darkTheme.background};
  color: ${(props) =>
    props.lightMode ? lightTheme.textColor : darkTheme.textColor};
`;

export default Index;
