import Image from "next/image";
import { ProjectDetail } from "./Projects";
import { ClickType } from "./Projects";
import projectImage from "../public/images/마이페이크트립_검색리스트.gif";

export const Project1 = ({ click, setClick }: ClickType) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-7xl font-bold font-Roboto mt-28">
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
            title="마이리얼트립을 모티브로 진행한 팀 프로젝트"
            period="2022.07.04 ~ 2022.07.15"
            position="프론트엔드 4명, 백엔드 2명"
            skills="HTML/CSS, Styled-Components, JavaScript, React.js, Ant-Design, Notion, Slack, Trello"
            myJob="제품 검색 리스트"
            text1="- styled-component를 활용한 UI/UX 구현"
            text2="- 지역, 날짜, 인원수 선택 가능한 모달창 구현"
            text3=" - 라이브러리를 이용한 캘린더, 슬라이더, 별점 기능구현"
            text4=" - API와 query string을 활용해 고객이 선택한 조건에 따라 데이터가
            재렌더링 되도록 구현"
            github="https://github.com/Dumibell/34-2nd-Fake-Trip-frontend"
          />
        ) : (
          <div className="w-[800px] h-[500px] border">
            <Image src={projectImage} width={800} height={500} alt="시연영상" />
          </div>
        )}
      </div>
    </>
  );
};
