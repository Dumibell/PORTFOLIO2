import type { NextPage } from "next";
import { Nav } from "../components/Nav";
import { Main } from "../components/Main";
import { Contacts } from "../components/Contacts";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className="w-full h-full flex flex-col">
      {modal ? (
        <Contacts setModal={setModal} />
      ) : (
        <>
          <Nav setModal={setModal} />
          <Main />
        </>
      )}
    </div>
  );
};

export interface ModalType {
  setModal: (x: boolean) => void;
}

export default Index;
