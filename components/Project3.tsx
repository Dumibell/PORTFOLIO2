import { ProjectDetail } from "./Projects";
import Image from "next/image";
import { ClickType } from "./Projects";
import projectImage from "../public/images/vetflux.gif";

export const Project3 = ({ click, setClick }: ClickType) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-7xl font-bold font-Roboto">
          <p>VET</p>
          <p>FLUX</p>
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
            title="벳플럭스 인턴십 기간 동안 진행한 어쩌구저쩌구"
            period="2022.08.01 ~ 2022.08.05 (인턴십 기간: 2022.07.18 ~ 2022.08.12)"
            position="프론트엔드 2명"
            skills="HTML/CSS, TypeScript, Next.js, TailwindCss, Zeplin, Notion, Slack"
            myJob="자체 플랫폼인 '늘펫'의 예약 확인 화면 기획 및 개발"
            text1="- Day.js와 map함수를 이용한 일주일 단위의 캘린더 구현"
            text2="- 일주일치 예약건을 해당되는 날짜, 시간별 칸?에 표시"
            text3="- 상위 Component 관리를 통한 예약리스트와 캘린더 연결"
            text4="- 날짜 클릭시 클릭된 날짜의 예약건 예약리스트에 표시"
            github="https://github.com/Dumibell/reservation"
          />
        ) : (
          <div className="w-[800px] h-[450px] flex">
            <video src="/videos/Vetflux.mov" autoPlay loop muted />
          </div>
        )}
      </div>
    </>
  );
};
