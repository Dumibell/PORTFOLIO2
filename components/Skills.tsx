import Image from "next/image";

// export const Skills = () => {
//   return (
//     <div className="h-screen w-screen flex flex-col justify-center" id="2">
//       <div className="m-20 flex flex-col items-center font-Roboto text-3xl">
//         <div className="mt-5 flex flex-col items-center">
//           <p className="underline decoration-2 mb-2">
//             Frontend / Backend Skills
//           </p>
//           <div>
//             <div className="flex flex-col items-center my-2">
//               <div className="flex">
//                 <Icons src="/images/html5.svg" skill="HTML" />
//                 <Icons src="/images/css3.svg" skill="CSS" />
//               </div>
//               <p className="text-sm">
//                 웹디자이너의 요구사항을 UI에 반영할 수 있습니다.
//               </p>
//             </div>
//             <div className="flex flex-col items-center my-2">
//               <div className="flex">
//                 <Icons src="/images/javascript.svg" skill="JavaScript" />
//                 <Icons src="/images/react.svg" skill="React.js" />
//               </div>
//               <p className="text-sm">
//                 자바스크립트와 React.js를 통해 페이지를 제작한 경험이 있습니다.
//               </p>
//             </div>
//             <div className="flex flex-col items-center my-2">
//               <div className="flex">
//                 <Icons
//                   src="/images/styledcomponents.svg"
//                   skill="Styled-Components"
//                 />
//               </div>
//               <p className="text-sm">
//                 props를 활용해 속성값을 변경할 수 있습니다.
//               </p>
//             </div>
//             <div className="flex flex-col items-center my-2">
//               <div className="flex">
//                 <Icons src="/images/sass.svg" skill="Sass" />
//               </div>
//               <p className="text-sm">
//                 nesting 기능을 활용하여 코드를 효율적으로 작성할 수 있습니다.
//               </p>
//             </div>
//             <div className="flex flex-col items-center my-2">
//               <div className="flex">
//                 <Icons src="/images/tailwindcss.svg" skill="TailwindCss" />
//               </div>
//               <p className="text-sm">
//                 해당 포트폴리오를 tailwindcss를 사용해 제작하였습니다.
//               </p>
//             </div>
//             <div className="flex flex-col items-center my-2">
//               <div className="flex">
//                 <Icons src="/images/firebase.svg" skill="Firebase" />
//               </div>
//               <p className="text-sm">
//                 Firebase의 Authentication, Storage, Firestore 기능을 활용해 DB를
//                 관리할 수 있습니다.
//               </p>
//             </div>
//           </div>
//           <div className=" flex flex-col items-center mt-8">
//             <p className="underline decoration-2 mb-2">Business Tools</p>
//             <div className="mt-1 flex">
//               <Icons src="/images/github.svg" skill="Github" />
//               <Icons src="/images/notion.svg" skill="Notion" />
//               <Icons src="/images/slack.svg" skill="Slack" />
//               <Icons src="/images/trello.svg" skill="Trello" />
//               {/* <p className="text-lg">Github, Notion, Slack, Trello</p> */}
//             </div>
//             <div className="text-sm">
//               팀원 간의 협업 툴로 slack과 notion을 사용했으며 Trello를 통해
//               진행상황을 공유했습니다.
//             </div>
//             {/* <p className="text-xl">Github, Notion, Slack, Trello</p> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// interface IconsType {
//   src: string;
//   skill: string;
//   text?: string;
// }

// const Icons = ({ src, skill, text }: IconsType) => {
//   return (
//     <div className="text-xl flex flex-col items-center justify-center my-1">
//       <div className="mx-1 flex">
//         <Image src={src} alt="그림" width={15} height={15} />
//         <p>{skill}</p>
//       </div>
//     </div>
//   );
// };

export const Skills = () => {
  return (
    <div className="flex justify-center w-full h-screen" id="2">
      <div className="flex flex-col justify-center px-10 skillContainer">
        <Container
          position="Database |"
          skills="Firebase"
          text1="- 인턴십 프로젝트와 2번의 개인프로젝트에서 Friebase의 Authentication, Storage, Firestore를 통해 데이터를 관리하였습니다."
        />
        <Container
          position="Frontend |"
          skills="JavaScript, React.js, Next.js, TypeScript, Tailwindcss, Scss, styled-component"
          text1="- JavaScript(ES6): 동작원리에 대해 이해하며 꾸준히 학습하고 있습니다."
          text2="- React.js: 여러번의 프로젝트를 경험하며 state를 통한 상태관리와 component 구조에 대해 이해하고 적절히 활용할 수 있습니다."
          text3="- Next.js & TypeScript: 인턴십 기간동안 Next.js와 TypeScript를 사용하여 프로젝트를 진행한 경험이 있습니다."
          text4="- Styled-Component & Scss: props를 통한 style 속성 변경과 nesting을 활용해 코드를 효율적으로 작성할 수 있습니다. "
        />
        <Container
          position="Business Tool |"
          skills="Github, Slack, Notion, Trello"
          text1="- 팀원 간의 협업 툴로 slack과 notion을 사용했으며 Trello를 통해 진행상황을 공유했습니다."
        />
      </div>
    </div>
  );
};

interface propsTypes {
  position: string;
  skills: string;
  skill?: string;
  text1: string;
  text2?: string;
  text3?: string;
  text4?: string;
}

const Container = ({
  position,
  skills,
  skill,
  text1,
  text2,
  text3,
  text4,
}: propsTypes) => {
  return (
    <div className="my-4">
      <p>
        <span className="text-[#312315] text-2xl font-semibold positionTitle">
          {position}
        </span>
        <span className="ml-2 text-lg font-medium skill">{skills}</span>
      </p>
      <div className="mt-1 skillDescription">
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{text4}</p>
      </div>
    </div>
  );
};

export default Skills;
