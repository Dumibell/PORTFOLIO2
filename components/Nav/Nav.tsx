import { Link } from "react-scroll";
import { styled } from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dispatch, SetStateAction, useState } from "react";
import { SideMenu } from "./SideMenu";
import { mobile } from "../../styles/theme";

interface NavListType {
  id: number;
  name: string;
  offset?: string;
}

interface NavPropsType {
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const NAV_LIST: NavListType[] = [
  { id: 1, name: "ABOUT", offset: "1" },
  { id: 2, name: "SKILLS", offset: "2" },
  { id: 3, name: "EXPERIENCES", offset: "3" },
  { id: 4, name: "PROJECTS", offset: "4" },
  { id: 5, name: "CONTACTS" },
];

export const Nav = ({ setModal }: NavPropsType) => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  return (
    <NavContainer>
      {sideMenuOpen && (
        <SideMenu setSideMenuOpen={setSideMenuOpen} setModal={setModal} />
      )}
      <div className="pc">
        {NAV_LIST.map((list) => {
          return (
            <List>
              {list.offset ? (
                <Link to={list.offset} spy={true} smooth={true} key={list.id}>
                  <p>{list.name}</p>
                </Link>
              ) : (
                <p onClick={() => setModal(true)}>{list.name}</p>
              )}
            </List>
          );
        })}
      </div>
      <button className="mo">
        <FontAwesomeIcon
          icon={faBars}
          size="2x"
          className="menuBtn"
          onClick={() => setSideMenuOpen(true)}
        />
      </button>
    </NavContainer>
  );
};

const NavContainer = styled.ul`
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #e1dfdd;
  height: 80px;
  width: 100%;
  z-index: 10;

  .mo {
    display: none;
  }

  .pc {
    display: flex;
    width: 80%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

  /* 600px 미만일 때 */
  @media (max-width: ${mobile}) {
    .pc {
      display: none;
    }

    .mo {
      display: block;
      position: absolute;
      right: 0;
      padding: 20px;

      .menuBtn {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
    }
  }
`;

const List = styled.li`
  padding: 10px;

  p {
    font-weight: 300;
    font-size: 20px;

    &:hover {
      cursor: pointer;
      transform: translateY(-3px);
      text-decoration: underline;
    }
  }
`;
