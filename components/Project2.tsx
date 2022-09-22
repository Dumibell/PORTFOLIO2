import Image from "next/image";
import { ProjectDetail } from "./Projects";
import { ClickType } from "./Projects";

export const Project2 = ({ click, setClick }: ClickType) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-7xl font-bold font-Roboto mt-28">
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
            title="이솝을 모티브로 진행한 팀 프로젝트"
            period="2022.06.20 ~ 2022.07.01"
            position="프론트엔드 4명, 백엔드 1명"
            skills="HTML/CSS, Sass, JavaScript, React.js, Notion, Slack, Trello"
            myJob="제품 상세페이지, 회원가입 모달창"
            text1="- 제품 상세페이지 UI 구현"
            text2="- params를 활용한 제품별 상세페이지 연결"
            text3="- react 및 sass 커스터마이즈 캐러쉘 슬라이더 구현"
            text4="- Floating Label Input 구현"
            text5="- API 통신을 활용한 회원가입 기능 구현"
            github="https://github.com/Dumibell/34-1st-Wesop-frontend"
          />
        ) : (
          <div className="w-[800px] h-[500px] border">
            <Image
              src="/images/제품상세.gif"
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
