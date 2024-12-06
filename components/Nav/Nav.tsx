import { Link } from "react-scroll";
import { styled } from "styled-components";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { SideMenu } from "./SideMenu";
import { color, mobile } from "../../styles/theme";
import { useSelector } from "react-redux";
import { useStore } from "../../stores/store";
import { useRouter } from "next/router";

export interface NavListType {
  id: number;
  name: string;
  offset?: string;
}

export const NAV_LIST: NavListType[] = [
  { id: 1, name: "ABOUT", offset: "1" },
  // { id: 2, name: "SKILLS", offset: "2" },
  { id: 3, name: "EXPERIENCES", offset: "3" },
  { id: 4, name: "PROJECTS", offset: "4" },
  { id: 5, name: "CONTACTS", offset: "5" },
];

export const Nav = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const { lightMode, changeMode } = useStore();
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const contactsInView = useSelector((state: boolean) => state);

  /** locale 변경 */
  const toggleLanguage = (locale: string) => {
    router.push({ pathname, query }, asPath, {
      locale,
      scroll: false,
    });
  };

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

      <SwitchContainer>
        <div className="localeWrapper">
          <LocaleButton
            onClick={() => toggleLanguage("en")}
            selected={locale === "en"}
          >
            EN
          </LocaleButton>
          <span>|</span>
          <LocaleButton
            onClick={() => toggleLanguage("ko")}
            selected={locale === "ko"}
          >
            KO
          </LocaleButton>
        </div>
        {!contactsInView && (
          <button onClick={changeMode} className="iconBtn">
            <FontAwesomeIcon
              icon={lightMode ? faMoon : faSun}
              className="icon"
            />
          </button>
        )}
      </SwitchContainer>

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
    width: 75%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
  }

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

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  top: 0px;
  right: 20px;
  position: absolute;
  height: 80px;

  .localeWrapper {
    display: flex;
    gap: 5px;
  }

  .iconBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
  }

  @media (max-width: ${mobile}) {
    right: 80px;
  }
`;

const LocaleButton = styled.button<{ selected: boolean }>`
  &:hover {
    font-weight: 600;
  }
  font-weight: ${(props) => props.selected && 600};
`;

export default Nav;
