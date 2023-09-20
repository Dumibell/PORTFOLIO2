import { styled } from "styled-components";
import { NAV_LIST, NavListType } from "./Nav";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction } from "react";

import { Link } from "react-scroll";
import { mobile } from "../../styles/theme";

interface SideMenuPropsType {
  setSideMenuOpen: Dispatch<SetStateAction<boolean>>;
}
export const SideMenu = ({ setSideMenuOpen }: SideMenuPropsType) => {
  return (
    <Container>
      <button onClick={() => setSideMenuOpen(false)}>
        <FontAwesomeIcon icon={faXmark} className="xMark" />
      </button>
      <InnerContainer>
        {NAV_LIST.map((list) => {
          return (
            <Link
              key={list.id}
              to={list.offset || ""}
              spy={true}
              smooth={true}
              onClick={() => {
                setSideMenuOpen(false);
              }}
            >
              <List>{list.name}</List>
            </Link>
          );
        })}
      </InnerContainer>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  padding: 30px;
  width: 100%;
  background-color: inherit;
  height: 100vh;
  z-index: 100;

  .xMark {
    position: absolute;
    right: 30px;
    width: 20px;
    height: 20px;
    display: flex;
  }

  @media (min-width: ${mobile}) {
    display: none;
  }
`;

const InnerContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 30px;
`;

const List = styled.li`
  font-size: 20px;

  &:hover {
    cursor: pointer;
    transform: translateY(-3px);
    text-decoration: underline;
  }
`;
