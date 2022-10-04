import Image from "next/image";

export const Skills = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center" id="2">
      <div className="m-20 flex flex-col items-center font-Roboto text-3xl">
        <div className=" flex flex-col items-center mb-8">
          <p className="underline decoration-2 mb-2">Business Tools</p>
          <div className="mt-1 flex">
            <Icons src="/images/github.svg" skill="Github" />
            <Icons src="/images/notion.svg" skill="Notion" />
            <Icons src="/images/slack.svg" skill="Slack" />
            <Icons src="/images/trello.svg" skill="Trello" />
            {/* <p className="text-lg">Github, Notion, Slack, Trello</p> */}
          </div>
          <div className="text-sm">
            팀원 간의 협업 툴로 slack과 notion을 사용했으며 Trello를 통해
            진행상황을 공유했습니다.
          </div>
          {/* <p className="text-xl">Github, Notion, Slack, Trello</p> */}
        </div>
        <div className="mt-5 flex flex-col items-center">
          <p className="underline decoration-2 mb-2">Frontend Skills</p>
          <div className="mt-1">
            <div className="flex justify-center">
              <Icons src="/images/html5.svg" skill="HTML" />
              <Icons
                src="/images/css3.svg"
                skill="CSS"
                text="- 웹디자이너의 요구사항을 UI에 반영할 수 있습니다."
              />
            </div>
            <div className="flex">
              <Icons src="/images/javascript.svg" skill="JavaScript" />
              <Icons
                src="/images/react.svg"
                skill="React.js"
                text="- 자바스크립트와 React.js를 통해 페이지를 제작한 경험이 있습니다."
              />
            </div>
            <Icons
              src="/images/styledcomponents.svg"
              skill="Styled-Components"
              text="- props를 활용해 속성값을 변경할 수 있습니다."
            />
            <Icons
              src="/images/sass.svg"
              skill="Sass"
              text="- nesting 기능을 활용하여 코드를 효율적으로 작성할 수 있습니다."
            />
            <Icons
              src="/images/tailwindcss.svg"
              skill="TailwindCss"
              text="- 해당 포트폴리오를 tailwindcss를 사용해 제작하였습니다."
            />
            {/* <p className="text-lg">
              HTML/CSS, JavaScript, React.js, TailwindCss, Styled-Components
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

interface IconsType {
  src: string;
  skill: string;
  text?: string;
}

const Icons = ({ src, skill, text }: IconsType) => {
  return (
    <div className="text-xl flex items-center justify-center my-1">
      <div className="mx-1">
        <Image src={src} alt="그림" width={17} height={17} />
      </div>
      <p>{skill}</p>
      <p className="ml-1 text-sm">{text}</p>
    </div>
  );
};
