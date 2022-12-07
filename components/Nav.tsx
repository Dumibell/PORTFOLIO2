import { Link } from "react-scroll";
import { ModalType } from "../pages";

export const Nav = ({ setModal }: ModalType) => {
  return (
    <div className="h-20 w-screen fixed flex justify-between items-center z-10 px-10 bg-[#e1dfdd]">
      {NAV_LIST.map((list) => {
        return (
          <div className="px-5">
            <Link to={list.offset} spy={true} smooth={true} key={list.id}>
              <button className="text-xl font-ligth font-Roboto hover:translate-y-[-3px]">
                {list.name}
              </button>
            </Link>
          </div>
        );
      })}
      <div className="px-3">
        <button
          className="text-xl font-ligth font-Roboto hover:font-bold hover:translate-y-[-3px]"
          onClick={() => {
            setModal(true);
          }}
        >
          CONTACTS
        </button>
      </div>
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
  { id: 1, name: "ABOUT", offset: "1" },
  { id: 2, name: "SKILLS", offset: "2" },
  { id: 3, name: "PROJECTS", offset: "3" },
  { id: 3, name: "INTERNSHIP", offset: "4" },
];
