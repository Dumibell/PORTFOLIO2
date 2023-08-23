import type { NextPage } from "next";

import { Main } from "../components/Main";
import { Contacts } from "../components/Contacts";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import dynamic from "next/dynamic";
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
