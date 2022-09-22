import { ProjectDetail } from "./Projects";
import Image from "next/image";

export const Project3 = ({ click, setClick }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-7xl font-bold font-Roboto mt-28">
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
            period="2022.07.18 ~ 2022.08.12"
            position="프론트엔드 2명"
            skills="HTML/CSS, TypeScript, Next.js, TailwindCss, Zeplin, Notion, Slack"
            myJob="실제 배포될 사이트의 예약 확인 화면 구현"
            text1="- Day.js와 map함수를 이용한 일주일 단위의 캘린더 구현"
            text2="- 일주일치 예약건을 해당되는 날짜, 시간별 칸?에 표시"
            text3="- 상위 Component 관리를 통한 예약리스트와 캘린더 연결"
            text4="- 날짜 클릭시 클릭된 날짜의 예약건 예약리스트에 표시"
            github="https://github.com/Dumibell/reservation"
          />
        ) : (
          <div className="w-[800px] h-[500px] border">
            <Image
              src="/images/vetflux.gif"
              width={800}
              height={500}
              alt="시연영상"
            />
          </div>
        )}
      </div>
    </>
  );
};