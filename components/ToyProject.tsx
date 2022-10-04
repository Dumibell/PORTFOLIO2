import { ProjectDetail } from "./Projects";
import Image from "next/image";
import { ClickType } from "./Main";
import projectImage from "../public/images/vetflux.gif";

export const ToyProject = ({ click, setClick }: ClickType) => {
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
            title="바닐라 자바스크립트로 구현한 자기소개 페이지"
            period="2022.04.18 ~ 2022.04.22"
            member="프론트엔드 1명"
            skills="HTML/CSS, JavaScript"
            myJob="전체 페이지 기획 및 개발"
            retrospection="HTML과 CSS 기초만 익히고 처음으로 제작해본 웹사이트였기 떄문에 부족한 점도 많았지만, 개발자로서의 첫걸음이라는 점에서 의미가 크다고 생각합니다."
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
