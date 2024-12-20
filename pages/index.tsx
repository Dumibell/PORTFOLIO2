import type { NextPage } from "next";
import { Main } from "../components/Main";
import React, { Suspense } from "react";
import { styled } from "styled-components";
import { Nav } from "../components/Nav/Nav";
import { useStore } from "../stores/store";
import { darkTheme, lightTheme } from "../styles/theme";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";

const Index: NextPage = () => {
  const { lightMode, changeMode } = useStore();

  return (
    <Container $lightmode={lightMode}>
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

const Container = styled.div<{ $lightmode: boolean }>`
  width: 100vw;
  background-color: ${(props) =>
    props.$lightmode ? lightTheme.background : darkTheme.background};
  color: ${(props) =>
    props.$lightmode ? lightTheme.textColor : darkTheme.textColor};
`;

export default Index;
