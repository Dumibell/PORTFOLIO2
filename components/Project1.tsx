import Image from "next/image";

export const Project1 = ({ click, setClick }) => {
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
          <ProjectDetail1 />
        ) : (
          <div className="ml-28 w-[800px] h-[500px] border">
            <Image
              src="/images/마이페이크트립_검색리스트.gif"
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

const ProjectDetail1 = () => {
  return (
    <div className="ml-28 w-[800px] bg-black h-[500px] border text-white">
      <div className="ml-6 mt-8">
        <p className="my-2">⦁ 프로젝트 기간: 2022. 07.04 ~ 2022.07.15</p>
        <p className="my-2">⦁ 팀 구성: 프론트엔드 4명, 백엔드 2명</p>
        <p className="my-2">
          ⦁ 사용 기술 및 라이브러리: HTML/CSS, styled-component, JavaScript,
          React.js
        </p>
        <p className="my-2">⦁ 담당 구현 기능</p>
        <div className=" border border-white w-[750px] h-[300px]"></div>
      </div>
    </div>
  );
};
