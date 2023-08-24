import { styled } from "styled-components";
import { mobile } from "../styles/theme";

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
    <Container id="2">
      <InnerContainer>
        <div>
          <p>
            <Category>Frontend |</Category>
            <Skill>
              Next.js, TypeScript, React.js, JavaScript, Styled-Components
            </Skill>
          </p>
          <Description>
            <p>
              - <span className="skill">Next.js</span>: 서버 사이드
              렌더링(SSR)의 개념을 이해하고 있으며, 이를 통해 페이지가 서버에서
              렌더링 되어 초기 로딩 속도와 SEO를 개선하기 위해 사용합니다.
            </p>
            <p>
              - <span className="skill">TypeScript</span>: 코드의 안전성과
              가독성을 높이기 위해 사용하고 있습니다.
            </p>
            <p>
              - <span className="skill">React.js</span>: 여러번의 프로젝트를
              경험하며 state를 통한 상태관리와 component 구조에 대해 이해하고
              적절히 활용할 수 있습니다.
            </p>
            <p>
              - <span className="skill">JavaScript(ES6)</span>: 동작원리에 대해
              이해하며 꾸준히 학습하고 있습니다.
            </p>
            <p>
              - <span className="skill">Styled-Component</span>: props를 통한
              style 속성 변경과 nesting을 활용해 코드를 효율적으로 작성할 수
              있습니다.
            </p>
          </Description>
        </div>

        <div>
          <p>
            <Category>Database |</Category>
            <Skill>Firebase</Skill>
          </p>
          <Description>
            - <span className="skill">Firabase</span>: 인턴십 프로젝트와 2번의
            개인프로젝트에서 Friebase의 Authentication, Storage, Firestore를
            통해 데이터를 관리하였습니다.
          </Description>
        </div>

        <div>
          <p>
            <Category>Business Tools |</Category>
            <Skill>Git, Slack, Notion, Figma, AdobeXd</Skill>
          </p>
          <Description>
            <p>
              - <span className="skill">Git</span>: gitflow에 대해 이해하며,
              github & gitlab을 사용해 협업을 진행한 경험이 있습니다.
            </p>
            <p>
              - <span className="skill">Figma & AdobeXd</span>: 디지이너와의
              협업툴로 사용했습니다.
            </p>
          </Description>
        </div>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${mobile}) {
    margin-top: 80px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin: 150px;

  @media (max-width: ${mobile}) {
    margin: 80px;
  }
`;

const Category = styled.span`
  font-size: 26px;
  font-weight: 600;
  margin-right: 10px;
`;

const Skill = styled.span`
  font-size: 20px;
`;

const Description = styled.div`
  font-size: 18px;
  margin-top: 10px;

  .skill {
    background: linear-gradient(to top, #ffffe0 40%, transparent 10%);
  }
`;

interface propsTypes {
  position: string;
  skills: string;
  skill?: string;
  text1: string;
  text2?: string;
  text3?: string;
  text4?: string;
}
