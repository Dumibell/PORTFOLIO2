import Image from "next/image";

export const About = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center" id="2">
      {/* <div className="flex flex-col mx-28 w-screen">
        <div className="flex w-full my-12">
          <div className="w-1/3 border mx-3">사진</div>
          <div className="font-Gothic mx-3 flex flex-col items-center">
            <p>
              개발자라는 직업을 선택한 이유는 제가 잘할 수 있는 일이자 좋아하는
              일이기 때문입니다.
            </p>
            <p className="mt-2"> 단순히 주어진 기능만을 개발하는 것이 아닌,</p>
            <p>
              고객에게 실제로 필요한 서비스/기능에 대해 함께 고민하고 개발하는
              것을 목표로 합니다.
            </p>
            <p className="my-2">
              호텔 프론트데스크에서 다양한 고객을 응대하며 커뮤니케이션 능력을
              길렀으며,
            </p>
            <p>
              모든 업무를 팀단위로 진행했기 때문에 팀원 간의 소통과 협업의
              중요성에 대해 잘 알고 있습니다.
            </p>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <Skills src="/images/html5.svg" />
          <Skills src="/images/javascript.svg" />
          <Skills src="/images/typescript.svg" />
          <Skills src="/images/react.svg" />
          <Skills src="/images/css3.svg" />
          <Skills src="/images/sass.svg" />
          <Skills src="/images/styledcomponents.svg" />
          <Skills src="/images/github.svg" />
          <Skills src="/images/notion.svg" />
          <Skills src="/images/slack.svg" />
        </div>
      </div> */}
    </div>
  );
};

const Skills = ({ src }) => {
  return (
    <div className="mx-3">
      <Image src={src} alt="그림" width={40} height={40} />
    </div>
  );
};
