import Image from "next/image";
import { ProjectDetail } from "./Projects";
import { ClickType } from "./Main";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

export const Project2 = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-6xl font-bold font-Roboto">
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
            title="🌱 my real trip 웹사이트를 모티브로 한 국내 숙소 예약 사이트"
            period="2022.07.04 ~ 2022.07.15"
            member="프론트엔드 4명, 백엔드 2명"
            skills="HTML/CSS, Styled-Components, JavaScript, React.js, Notion, Slack, Trello"
            myJob="제품 검색 리스트"
            text1=" - API와 query string을 통해 백엔드와 통신하고, 해당 query에 맞는 데이터가 UI에 그려집니다."
            text2="- 상단의 필터 바를 이용해 지역, 날짜, 인원수를 선택하면 해당 조건에 맞는 상품만 필터링 되어 보여집니다."
            text3="- 왼쪽의 필터바를 이용해 숙박 카테고리, 요금, 호텔 등급, 호텔 시설에 따른 필터링이 가능합니다."
            text4="- 필터링 조건들은 각각의 state를 통해 관리하고 검색버튼 클릭시 백엔드로 전송되는 query에 state값이 담깁니다."
            github="https://github.com/Dumibell/34-2nd-Fake-Trip-frontend"
            blog="https://velog.io/@dumibell/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-myfaketrip"
          />
        ) : (
          <div className="w-[830px] h-[460px] flex">
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
