import Image from "next/image";
import { ProjectDetail } from "./Projects";
import { ClickType } from "./Main";
import projectImage from "../public/images/제품상세.gif";
import { useEffect, useState } from "react";

export const Project3 = () => {
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
            title="🌱 Aesop 웹사이트를 모티브로 한 화장품 판매 사이트"
            period="2022.06.20 ~ 2022.07.01"
            member="프론트엔드 4명, 백엔드 1명"
            skills="HTML/CSS, Sass, JavaScript, React.js, Notion, Slack, Trello"
            myJob="제품 상세페이지, 회원가입 모달창"
            text1="- 제품리스트 페이지에서 상품을 클릭하면 상세페이지로 연결됩니다."
            text2="- 제품 용량을 선택할 수 있는 체크박스를 클릭함에 따라 상품이미지와 가격이 바뀝니다."
            text3="- 추천제품은 캐러쉘슬라이드로 구현됩니다."
            text4="- 회원가입시 유효성검사의 조건이 맞지 않으면 등록버튼이 활성화되지 않습니다."
            text5="- input창에 텍스트를 입력하면 label이 위로 올라갑니다.(floating label input)"
            github="https://github.com/Dumibell/34-1st-Wesop-frontend"
            blog="https://velog.io/@dumibell/1%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-Wesop%EC%83%81%EC%84%B8%ED%8E%98%EC%9D%B4%EC%A7%80"
          />
        ) : (
          <div className="w-[800px] h-[450px] flex justify-center">
            <video src="/videos/wesop.mp4" autoPlay loop muted />
          </div>
        )}
      </div>
    </>
  );
};
