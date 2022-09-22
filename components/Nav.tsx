import { Link } from "react-scroll";
import { useState } from "react";
import { Contacts } from "./Contacts";

export const Nav = ({ modal, setModal }) => {
  return (
    <div className="h-20 w-screen fixed flex justify-between items-center z-10">
      {NAV_LIST.map((list) => {
        return (
          <Link to={list.offset} spy={true} smooth={true} key={list.id}>
            <button className="px-20 text-xl font-ligth font-Roboto">
              {list.name}
            </button>
          </Link>
        );
      })}
      <button
        className="px-20 text-xl font-ligth font-Roboto"
        onClick={() => {
          setModal(true);
        }}
      >
        CONTACTS
      </button>
    </div>
  );
};

interface NavListType {
  id: number;
  name: string;
  offset: string;
}
[];

const NAV_LIST = [
  { id: 1, name: "HOME", offset: "1" },
  { id: 2, name: "ABOUT", offset: "2" },
  { id: 3, name: "EXPERIENCE", offset: "3" },
  { id: 4, name: "PROJECTS", offset: "4" },
];
