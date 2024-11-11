import type { NextPage } from "next";
import { Main } from "../components/Main";
import React from "react";
import { styled } from "styled-components";
import { Nav } from "../components/Nav/Nav";
import { useStore } from "../stores/store";
import { darkTheme, lightTheme } from "../styles/theme";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetServerSideProps, GetStaticPropsContext } from "next";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";

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

export const getStaticProps = async ({ locale }: GetStaticPropsContext) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["common"])),
      locale,
    },
  };
};

const Container = styled.div<{ lightMode: boolean }>`
  width: 100vw;
  background-color: ${(props) =>
    props.lightMode ? lightTheme.background : darkTheme.background};
  color: ${(props) =>
    props.lightMode ? lightTheme.textColor : darkTheme.textColor};
`;

export default Index;
