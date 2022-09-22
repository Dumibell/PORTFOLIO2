import type { NextPage } from "next";
import { Nav } from "../components/Nav";
import { Main } from "../components/Main";
import { Contacts } from "../components/Contacts";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="w-screen h-screen">
      {modal ? (
        <Contacts setModal={setModal} />
      ) : (
        <>
          <Nav modal={modal} setModal={setModal} />
          <Main />
        </>
      )}
    </div>
  );
};

export default Index;
