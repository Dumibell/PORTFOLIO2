import { useRef, useState } from "react";
import { ProjectDetail } from "./Projects";

export const Project1 = () => {
  const [click, setClick] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-7xl font-bold font-Roboto projectTitle">
          <p>RE:</p>
          <p>BIT</p>
        </div>
        <div
          className="border-b border-black w-24 hover:cursor-pointer seeMore"
          onClick={() => {
            setClick(!click);
          }}
        >
          {click ? "← Go Back" : "→ See More"}
        </div>
      </div>
      <div className="flex items-center">
        {click ? (
          <ProjectDetail
            title="🌱 독후감 작성을 위한 블로그 형식의 웹사이트"
            period="2022.11.02 ~ 2022.11.12"
            member="프론트/백엔드 1명"
            skills="HTML/CSS, JavaScript, React.js, TailwindCss, Firebase"
            myJob="전체 페이지 기획 및 개발"
            text1="- 매일 책 읽는 습관을 기르기 위해 시작한 개인 프로젝트입니다. "
            text2="- 사진과 글을 업로드하면 메인 화면에서 카드 형식으로 보여집니다."
            text3="- 게시물에 좋아요를 누르거나 댓글을 달 수 있습니다. 좋아요를 누른 글만 마이페이지에서 따로 모아 볼 수 있습니다."
            text4="-  메인페이지에서 최신순/인기순(좋아요순)으로 게시글을 필터링 해 볼 수 있습니다."
            text5="- 본인이 작성한 글과 댓글은 수정/삭제가 가능하고, 조회수를 확인할 수 있습니다."
            text6="- 책 제목 또는 내용으로 게시물을 검색할 수 있습니다."
            text7="- 작성한 글의 개수에 따라 인증배지가 주어집니다."
            web="https://dumibell.github.io/reading-project/?#/"
            github="https://github.com/Dumibell/reading-project"
          />
        ) : (
          <div className="w-[830px] h-[460px] flex video">
            <video poster="/images/project1-buffer.jpeg" autoPlay loop muted>
              <source src="/videos/reading.mp4" type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </>
  );
};
