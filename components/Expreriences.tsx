import { styled } from "styled-components";
import AnvilLogo from "../public/images/anvil-logo.jpeg";
import VetfluxLogo from "../public/images/vetflux-logo.jpeg";
import Image from "next/image";
import { color, mobile } from "../styles/theme";

export const Experiences = () => {
  return (
    <Container id="3">
      <InnerContainer>
        <SectionTitle>WORK EXPERIENCE</SectionTitle>
        <CareerBox>
          <ImageContainer>
            <Image src={AnvilLogo} className="logoImage" />
          </ImageContainer>
          <Border />
          <DescriptionBox className="hasBottomPadding">
            <div className="introduction">
              <p className="companyName">(주)엔빌</p>
              <p className="period">2023.01 - 2023.07</p>
              <p>
                E-Commerce , CMS, 기업사이트 등의 프론트엔드 개발과 유지보수를
                담당했습니다.
              </p>
              <p>
                Skill Keywords: Next.js, TypeScript, Recoil, React-Query,
                Styled-Components
              </p>
            </div>

            <div>
              <p>
                <span className="projectName">| HLI 기업사이트</span>
                <span className="period">2023.04 - 2023.06</span>
              </p>

              <p>- 메인 및 기타 다양한 페이지와 컴포넌트를 개발하였습니다.</p>
              <p>
                - 애니메이션 효과를 위해 필요한 라이브러리 조사와 관련 함수를
                개발하여 개발 시간을 단축했습니다.
              </p>
              <p>
                - nextjs 13에서 사용되는 Google 폰트를 전역 설정하여 전체 코드의
                품질을 개선했습니다.
              </p>
            </div>
            <div>
              <p>
                <span className="projectName">| HLI 통합관리시스템(CMS)</span>
                <span className="period">2023.01 - 2023.07</span>
              </p>
              <p>- 프론트엔드 화면을 개발하고 유지보수를 담당했습니다.</p>
              <p>
                - 기존 백엔드 레거시 코드를 정리하고 Node.js로 마이그레이션하는
                작업을 진행했습니다.
              </p>
            </div>
            <div>
              <p>
                <span className="projectName">| 알라카르테몰(E-Commerce)</span>
                <span className="period">2023.01 - 2023.03</span>
              </p>
              <p>- 메인 및 기타 다양한 페이지와 컴포넌트를 개발하였습니다.</p>
              <p>
                - SVG 사용에 관한 컨벤션을 정의하여 중복 파일과 코드를
                최소화하는 작업을 수행했습니다.
              </p>
            </div>
          </DescriptionBox>
        </CareerBox>
        <CareerBox>
          <ImageContainer>
            <Image src={VetfluxLogo} className="logoImage" />
          </ImageContainer>
          <Border />
          <DescriptionBox>
            <div className="introduction">
              <p className="companyName">벳플럭스(Vetflux)</p>
              <p className="period">2022.07 - 2022.08 (Internship Program)</p>
              <p>반려동물과 수의사를 연결시켜주는 서비스를 개발합니다.</p>
              <p>Skill Keywords: Next.js, TypeScript, TailwindCss, Firebase</p>
            </div>
            <div>
              <p>
                <span className="projectName">| 늘펫 PLUS</span>
                <span className="period">2022.07 - 2022.08</span>
              </p>
              <p>- 예약페이지를 기획하고 개발하는데 참여하였습니다.</p>
              <p>
                - Firebase를 활용하여 데이터 구조를 분석하고 모델링하는 작업을
                수행했습니다.
              </p>
              <p>- day.js를 활용하여 직관적인 캘린더 기능을 구현했습니다.</p>
              <p>- 예약 조회 및 등록 기능을 개발하였습니다.</p>
            </div>
          </DescriptionBox>
        </CareerBox>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${mobile}) {
    height: auto;
    margin-top: 80px;
  }
`;

const InnerContainer = styled.div`
  margin: 100px;
  margin-top: 200px;
  width: 1200px;
  height: 100%;

  @media (max-width: ${mobile}) {
    margin: 50px;
    margin-top: 100px;
  }
`;

const SectionTitle = styled.p`
  text-align: end;
  font-size: 60px;
  margin-bottom: 50px;
`;

const CareerBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 100%;
  /* margin-bottom: 100px; */
`;

const ImageContainer = styled.div`
  position: relative;
  max-width: 200px;
  height: 200px;
  border: 1px solid ${color.gray.primary};
  border-radius: 70%;

  .logoImage {
    border-radius: 70%;
    opacity: 0.8;
  }

  @media (max-width: ${mobile}) {
    display: none;
  }
`;

const Border = styled.div`
  width: 1px;
  border: 1px solid ${color.gray.primary};

  @media (max-width: ${mobile}) {
    /* display: none; */
  }
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 70%;
  padding-bottom: 30px;

  &.hasBottomPadding {
    padding-bottom: 130px;
  }

  .introduction {
    padding-bottom: 20px;
    border-bottom: 1px solid ${color.gray.primary};
  }

  .companyName {
    font-size: 30px;
    font-weight: 500;
    margin-bottom: 10px;
  }

  .period {
    font-style: italic;
    color: ${color.gray.secondary};
  }
  .projectName {
    font-size: 22px;
    font-weight: 500;
    margin-right: 10px;
  }

  @media (max-width: ${mobile}) {
    width: auto;
  }
`;
