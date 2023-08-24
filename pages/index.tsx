import type { NextPage } from "next";
import { Main } from "../components/Main";
import React from "react";
import { styled } from "styled-components";
import { Nav } from "../components/Nav/Nav";

const Index: NextPage = () => {
  return (
    <Container>
      <>
        <Nav />
        <Main />
      </>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

export default Index;
