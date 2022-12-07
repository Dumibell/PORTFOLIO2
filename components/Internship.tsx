import { ClickType } from "./Main";
import { ProjectDetail } from "./Projects";
import { useEffect, useState } from "react";

export const Internship = () => {
  const [click, setClick] = useState(false);
  return (
    <div
      className="w-screen h-full flex flex-col items-center justify-center"
      id="4"
    >
      <div className="m-20">
        <div className="flex w-[1000px] justify-between">
          <div className="flex flex-col justify-center">
            <div className="text-7xl font-bold font-Roboto">
              <p>VET</p>
              <p>FLUX</p>
            </div>
            <div
              className="border-b border-black w-24 hover:cursor-pointer"
              onClick={() => {
                setClick(!click);
              }}
            >
              {click ? "← Go Back" : "→ See More"}
            </div>
          </div>
          <div className="flex items-center">
            {click ? (
              // <div className="w-[800px] h-[450px] border bg-black text-white font-Roboto">
              //   <div className="ml-6 mt-6">
              //     <p className="my-2 text-xl ">
              //       <span className="font-bold"> 🏢 벳플럭스 </span>
              //       <span className="italic text-lg">
              //         "동물병원과 반려동물 보호자를 연결하는 플랫폼 서비스 제공"
              //       </span>
              //     </p>
              //     <p className="my-0.5">
              //       ▫️ 인턴십 기간: 2022.07.18 ~ 2022.08.12
              //     </p>
              //     <p className="my-0.5">
              //       ▫️ 담당 업무: 자체 플랫폼 <strong>'늘펫'</strong>의 예약
              //       확인 페이지 기획 및 개발
              //     </p>
              //     <div className="border border-white w-[750px] h-72 mt-3">
              //       <div className="m-2">
              //         <p className="my-0.5">
              //           🌱 프로젝트 기간: 2022.08.01 ~ 2022.08.05
              //         </p>
              //         <p className="my-0.5">🌱 팀 구성: 프론트엔드 2명</p>
              //         <p className="my-0.5">
              //           🌱 사용 기술 및 라이브러리: HTML/CSS, JavaScript,
              //           Next.js, TypeSCript, TailwindCss, Zeplin
              //         </p>
              //         <p>🌱 구현 기능: Calendar 파트</p>
              //         <div className="ml-3">
              //           <p>
              //             - Day.js와 map함수를 이용한 일주일 단위의 캘린더 구현
              //           </p>
              //           <p>
              //             - 상위 Component 관리를 통한 예약리스트와 캘린더 연결
              //           </p>
              //           <p>
              //             - 날짜 클릭시 클릭된 날짜의 예약건 예약리스트에 표시
              //           </p>
              //           <p>- 받아온 데이터 해당되는 날짜, 시간 칸에 표시</p>
              //         </div>
              //       </div>
              //     </div>
              //   </div>
              // </div>
              <ProjectDetail
                title="🏢 벳플럭스"
                internshipPeriod="▫️ 인턴십 기간: 2022.07.18 ~ 2022.08.12"
                period="2022.08.01 ~ 2022.08.05"
                member="프론트엔드 2명"
                skills="HTML/CSS, JavaScript, Next.js, TypeScript, TailwindCss, Zeplin"
                myJob={`자체 플랫폼 "늘펫"의 예약 확인 페이지 기획 및 개발`}
                text1="- Day.js와 map함수를 이용한 일주일 단위의 캘린더 구현"
                text2="- 상위 Component 관리를 통한 예약리스트와 캘린더 연결"
                text3="- 받아온 데이터 해당되는 날짜, 시간 칸에 표시"
                text4="- 날짜 클릭시 클릭된 날짜의 예약건 예약리스트에 표시"
                retrospection="기업에서 많이 사용하는 Next.js, TypeScript, TailwindCss를 사용해 볼 수 있었고, 업무 분담을 통해 실제 IT 회사에서의 개발 방식을 경험해볼 수 있었습니다."
                github="https://github.com/Dumibell/reservation"
                blog="https://velog.io/@dumibell/%EA%B8%B0%EC%97%85%ED%98%91%EC%97%85-23%EC%A3%BC%EC%B0%A8-query-%EA%B3%B5%EB%B6%80-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%9E%91"
              />
            ) : (
              <div className="w-[800px] h-[450px] flex">
                <video src="/videos/vetflux.mov" autoPlay loop muted />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
