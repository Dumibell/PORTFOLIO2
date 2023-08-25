import { styled } from "styled-components";
import { mobile } from "../styles/theme";

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
              github & gitlab을 사용해 협업을 진행합니다.
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
