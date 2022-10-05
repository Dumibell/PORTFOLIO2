import Image from "next/image";
import { ProjectDetail } from "./Projects";
import { ClickType } from "./Main";
import projectImage from "../public/images/제품상세.gif";
import { useEffect, useState } from "react";

export const Project2 = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-7xl font-bold font-Roboto">
          <p>WE</p>
          <p>SOP</p>
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
            title="🌱 Aesop 웹사이트를 모티브로 진행한 팀 프로젝트"
            period="2022.06.20 ~ 2022.07.01"
            member="프론트엔드 4명, 백엔드 1명"
            skills="HTML/CSS, Sass, JavaScript, React.js, Notion, Slack, Trello"
            myJob="제품 상세페이지, 회원가입 모달창"
            text1="- 제품 상세페이지 UI 구현"
            text2="- useParams를 Hook을 이용한 페이지 연결"
            text3="- react 및 sass 커스터마이즈 캐러쉘 슬라이더 구현"
            text4="- useRef Hook을 활용한 Floating Label Input 구현"
            text5="- API 통신을 활용한 회원가입 기능 구현"
            retrospection="리액트로 프로젝트를 진행하며 여러가지 hook을 사용해볼 수 있었습니다. 또한, 라이브러리를 사용하지 않고 직접 구현하는 과정에서 사고력을 기를 수 있었습니다."
            github="https://github.com/Dumibell/34-1st-Wesop-frontend"
            blog="https://velog.io/@dumibell/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Wesop%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80"
          />
        ) : (
          <div className="w-[800px] h-[460px] flex justify-center">
            <video src="/videos/wesop.mp4" autoPlay loop muted />
          </div>
        )}
      </div>
    </>
  );
};
