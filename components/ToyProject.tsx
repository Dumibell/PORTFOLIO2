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
        <div className="text-4xl font-bold font-Roboto">
          <p>SELF</p>
          <p>INTRO- </p>
          <p>DUCTION</p>
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
            title="🌱 바닐라 자바스크립트로 구현한 자기소개 페이지"
            period="2022.04.18 ~ 2022.04.22"
            member="프론트엔드 1명"
            skills="HTML/CSS, JavaScript"
            myJob="전체 페이지 기획 및 개발"
            text1="- HTML/CSS로 정적인 페이지 구현"
            text2="- 자바스크립트의 offset을 이용해 nav바 각 버튼 클릭시 해당 페이지로 스크롤되는 기능 구현"
            retrospection="HTML과 CSS의 사용법에 대해 익힐 수 있었고, 시멘틱 태그의 의미에 대해 알게 되었습니다. style 값을 조정하는 데 어려움이 많았는데, css의 다양한 속성과 선택자의 우선순위에 대해서 한번 더 공부할 수 있었습니다."
            github="https://github.com/Dumibell/self_introduction"
            blog="https://velog.io/@dumibell/%EC%9E%90%EA%B8%B0%EC%86%8C%EA%B0%9C-%ED%8E%98%EC%9D%B4%EC%A7%80-%EB%A7%8C%EB%93%A4%EA%B8%B0HTML-CSS"
          />
        ) : (
          <div className="w-[800px] h-[460px] flex">
            <video src="/videos/self_introduction.mov" autoPlay loop muted />
          </div>
        )}
      </div>
    </>
  );
};
