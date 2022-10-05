import Image from "next/image";
import { ProjectDetail } from "./Projects";
import { ClickType } from "./Main";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

export const Project1 = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-7xl font-bold font-Roboto">
          <p>MY</p>
          <p>FAKE</p>
          <p>TRIP</p>
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
            title="🌱 my real trip 웹사이트를 모티브로 진행한 팀 프로젝트"
            period="2022.07.04 ~ 2022.07.15"
            member="프론트엔드 4명, 백엔드 2명"
            skills="HTML/CSS, Styled-Components, JavaScript, React.js, Notion, Slack, Trello"
            myJob="제품 검색 리스트"
            text1="- styled-component를 활용한 UI/UX 구현"
            text2="- 지역, 날짜, 인원수 선택 가능한 모달창 구현"
            text3=" - 라이브러리를 이용한 캘린더, 슬라이더, 별점 기능구현"
            text4=" - API와 query string을 활용해 고객이 선택한 조건에 따라 데이터가
            재렌더링 되도록 구현"
            retrospection="외부 라이브러리를 사용해 볼 수 있었고, 최대한 사용자가 많고 공식 문서가 있는 라이브러리를 이용해야 한다는 점을 깨달았습니다. 백과 프론트 모두 query string을 통해 데이터를 연결하는 것이 처음이었기 때문에 초반에는 어려움을 겪었지만, 최대한 소통을 많이 하려 노력한 결과 프로젝트를 성공적으로 마무리할 수 있었습니다."
            github="https://github.com/Dumibell/34-2nd-Fake-Trip-frontend"
            blog="https://velog.io/@dumibell/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-myfaketrip"
          />
        ) : (
          <div className="w-[800px] h-[460px] flex">
            <video
              src="/videos/마이페이크트립_검색리스트.mov"
              autoPlay
              loop
              muted
            />
          </div>
        )}
      </div>
    </>
  );
};
