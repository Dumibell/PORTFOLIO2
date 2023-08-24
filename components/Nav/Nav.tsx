import { Link } from "react-scroll";
import { styled } from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { SideMenu } from "./SideMenu";
import { color, mobile } from "../../styles/theme";
import { useSelector } from "react-redux";

export interface NavListType {
  id: number;
  name: string;
  offset?: string;
}

export const NAV_LIST: NavListType[] = [
  { id: 1, name: "ABOUT", offset: "1" },
  { id: 2, name: "SKILLS", offset: "2" },
  { id: 3, name: "EXPERIENCES", offset: "3" },
  { id: 4, name: "PROJECTS", offset: "4" },
  { id: 5, name: "CONTACTS", offset: "5" },
];

export const Nav = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);

  const contactsInView = useSelector((state: boolean) => state);

  const inView = useSelector((state: boolean) => state);

  return (
    <NavContainer className={contactsInView ? "black" : ""}>
      {sideMenuOpen && <SideMenu setSideMenuOpen={setSideMenuOpen} />}
      <div className="pc">
        {NAV_LIST.map((list) => {
          return (
            <List key={list.id}>
              <Link
                to={list.offset || ""}
                spy={true}
                smooth={true}
                key={list.id}
              >
                <p>{list.name}</p>
              </Link>
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
  background-color: ${color.background};
  height: 80px;
  width: 100%;
  z-index: 10;

  &.black {
    background-color: black;
    color: white;
  }

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
