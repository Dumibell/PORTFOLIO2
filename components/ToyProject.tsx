import { ProjectDetail } from "./Projects";
import Image from "next/image";
import { ClickType } from "./Main";
import projectImage from "../public/images/vetflux.gif";
import { useEffect, useState } from "react";

export const ToyProject = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-7xl font-bold font-Roboto ">
          <p>TODO</p>
          <p>LIST</p>
        </div>
        <div
          className="border-b border-black w-20 hover:cursor-pointer"
          onClick={() => {
            setClick(!click);
          }}
        >
          {click ? "Go Back" : "See More"}
        </div>
      </div>
      <div className="flex items-center">
        {click ? (
          <ProjectDetail
            title="🌱 일정관리를 위한 투두리스트"
            period="2022.04.18 ~ 2022.04.22"
            member="프론트/백엔드 1명"
            skills="HTML/CSS, JavaScript, React.js, TailwindCss, Firebase"
            myJob="전체 페이지 기획 및 개발"
            text1="- 개인별로 일정을 관리할 수 있는 웹앱 형태의 페이지입니다."
            text2="- 사용자의 uid값에 따라 collection을 분류해 사용자가 로그인하면 본인의 투두리스트만 보여집니다."
            text3="- 상단의 화살표 버튼을 통해 전 날, 다음날 투두리스트로 이동할 수 있어 날짜별 일정관리가 가능합니다."
            text4="- 투두리스트를 생성, 수정, 삭제할 수 있습니다."
            text5="- 투두리스트를 수정중일 때는 글씨가 깜빡이고, 수정이 완료되면 깜빡임이 멈춥니다."
            text6="- 완료된 투두는 체크박스를 통해 표시할 수 있습니다."
            web="https://dumibell.github.io/todolist/"
            github="https://github.com/Dumibell/todolist"
          />
        ) : (
          <div className="w-[800px] h-[460px] flex">
            <video src="/videos/todo.mp4" autoPlay loop muted />
          </div>
        )}
      </div>
    </>
  );
};
