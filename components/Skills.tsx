import Image from "next/image";

export const Skills = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center" id="2">
      <div className="m-20 flex flex-col items-center font-Roboto text-3xl">
        <div className=" flex flex-col items-center mb-8">
          <p className="underline decoration-2 mb-2">Business Tools 깃 커밋</p>
          <div className="mt-3 flex">
            {/* <Icons src="/images/github.svg" skill="Github" />
            <Icons src="/images/notion.svg" skill="Notion" />
            <Icons src="/images/slack.svg" skill="Slack" />
            <Icons src="/images/trello.svg" skill="Trello" /> */}
            <p className="text-lg">Github, Notion, Slack, Trello</p>
          </div>

          {/* <p className="text-xl">Github, Notion, Slack, Trello</p> */}
        </div>
        <div className="mt-8 flex flex-col items-center">
          <p className="underline decoration-2 mb-2">Frontend Skills</p>
          <div className="mt-3 flex">
            {/* <Icons src="/images/html5.svg" skill="HTML" />
            <Icons src="/images/css3.svg" skill="CSS" />
            <Icons src="/images/javascript.svg" skill="JavaScript" />
            <Icons src="/images/react.svg" skill="React" />
            <Icons src="/images/tailwindcss.svg" skill="Tailwind" /> */}
            <p className="text-lg">
              HTML/CSS, JavaScript, React.js, TailwindCss, Styled-Components
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface IconsType {
  src: string;
  skill: string;
}

const Icons = ({ src, skill }: IconsType) => {
  return (
    <div className="text-lg flex flex-col items-center">
      <div className="mx-6">
        <Image src={src} alt="그림" width={45} height={45} />
      </div>
      <p>{skill}</p>
    </div>
  );
};
