import type { NextPage } from "next";

import { Main } from "../components/Main";
import { Contacts } from "../components/Contacts";
import { useState } from "react";
import { styled } from "styled-components";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Nav } from "../components/Nav/Nav";

const Index: NextPage = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <Container>
      {modal ? (
        <Contacts setModal={setModal} />
      ) : (
        <>
          <Nav setModal={setModal} />
          <Main />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
`;

export default Index;
