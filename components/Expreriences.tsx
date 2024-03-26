import { styled } from "styled-components";
import AnvilLogo from "../public/images/anvil-logo.jpeg";
import VetfluxLogo from "../public/images/vetflux-logo.jpeg";
import Image from "next/image";
import { color, mobile } from "../styles/theme";
import KobeaLogo from "../public/images/kobea-logo.jpeg";

export const Experiences = () => {
  return (
    <Container id="3">
      <InnerContainer>
        <SectionTitle>WORK EXPERIENCE</SectionTitle>
        <CareerBox>
          <ImageContainer>
            <Image src={KobeaLogo} className="logoImage" />
          </ImageContainer>
          <Border />
          <DescriptionBox className="hasBottomPadding">
            <div className="introduction">
              <p className="companyName">(주)코베아그룹</p>
              <p className="period">2023.10 - 현재</p>
              <p>
                거래소 페이지의 유지보수, 리뉴얼 작업과 하이브리드앱 개발을
                담당하고 있습니다.
              </p>
              <p>
                Skill Keywords: Next.js, JavaScript, Flutter, mobx,
                Styled-Components
              </p>
            </div>

            <div>
              <p>
                <span className="projectName">| UZNEX APP</span>
                <span className="period">2024.01 - 2024.02</span>
              </p>

              <p>
                - flutter를 이용한 하이브리드앱 개발 및 출시(안드로이드 출시
                완료 / ios 심사 대기중)
              </p>
              <p>- FCM 및 AWS SNS를 사용해 푸시알림 기능 개발</p>
              <p>- 웹앱 통신을 통한 디바이스 정보 저장</p>
            </div>
            <div>
              <p>
                <span className="projectName">| UZNEX WEB</span>
                <span className="period">2023.10 - 현재</span>
              </p>
              <p>- 유지보수 및 신규 개발 진행</p>
              <p>- 전체 UI/UX 및 렌더링 속도 개선</p>
              <p>- 레거시 코드 개선 및 불필요한 로직 삭제를 통한 코드 최적화</p>
              <p>
                - git flow 전략 적용을 통한 개발 주기 관리 및 안정적인 배포 환경
                조성
              </p>
              <p>- eslint 및 prettier 설정으로 개발자 간 conflict 방지</p>
              <p>
                - 프론트엔드 협업 가이드 작성(git branch 전략 수립, 코드컨벤션
                정의 등)
              </p>
              <p>
                - FE 서버 용량 관리(crontab 및 logrotate 설정으로 차지하는 용량
                4% 감소)
              </p>
              <p>- Next.js9에서 Next.js13으로 마이그레이션 진행중</p>
            </div>
          </DescriptionBox>
        </CareerBox>
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
                E-Commerce , Admin, 기업사이트 등의 프론트엔드 개발과 유지보수를
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

              <p>- 메인 및 기타 다양한 페이지와 컴포넌트를 개발</p>
              <p>
                - 애니메이션 효과를 위해 필요한 라이브러리 조사와 관련 함수를
                개발하여 개발 시간을 단축
              </p>
              <p>
                - nextjs 13에서 사용되는 Google 폰트 전역 설정으로 전체 코드의
                품질을 개선
              </p>
            </div>
            <div>
              <p>
                <span className="projectName">| HLI 통합관리시스템(Admin)</span>
                <span className="period">2023.01 - 2023.07</span>
              </p>
              <p>- 프론트엔드 화면 개발 및 유지보수를 담당</p>
              <p>
                - 기존 백엔드 레거시 코드를 정리하고 Node.js로 마이그레이션 작업
                진행
              </p>
            </div>
            <div>
              <p>
                <span className="projectName">| 알라카르테몰(E-Commerce)</span>
                <span className="period">2023.01 - 2023.03</span>
              </p>
              <p>- 메인 및 기타 다양한 페이지와 컴포넌트를 개발</p>
              <p>
                - wish list, 슬라이드 등 공통 컴포넌트를 개발 및 적용하여 전체
                개발 시간을 단축
              </p>
              <p>
                - SVG 사용에 관한 컨벤션을 정의하여 중복 파일과 코드를
                최소화하는 작업을 수행
              </p>
            </div>
            <div>
              <p>
                <span className="projectName">| 프로젝트 외 기타 업무</span>
                <span className="period">2023.01 - 2023.07</span>
              </p>
              <p>- 사업 제안서 작성 및 발표자료(PPT) 작업 수행</p>
              <p>- 단위테스트 진행 보고서 작성</p>
              <p>- 동료 개발자와 코드리뷰 진행</p>
              <p>- 사내 기술 블로그 작성</p>
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
              <p>
                반려동물과 수의사를 연결시켜주는 서비스 중 한 페이지의 기획과
                개발을 담당하였습니다.
              </p>
              <p>Skill Keywords: Next.js, TypeScript, TailwindCss, Firebase</p>
            </div>
            <div>
              <p>
                <span className="projectName">| 늘펫 PLUS</span>
                <span className="period">2022.07 - 2022.08</span>
              </p>
              <p>- 예약페이지 기획 및 개발</p>
              <p>- Firebase를 활용한 데이터 구조 분석 및 모델링 작업 수행</p>
              <p>- day.js를 활용하여 직관적인 캘린더 기능 구현</p>
              <p>- 예약 조회 및 등록 기능을 개발</p>
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
  margin-top: 150px;
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
  text-shadow: 1px 1px 1px ${color.gray.primary};
`;

const CareerBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  height: 100%;

  @media (max-width: ${mobile}) {
    justify-content: flex-start;
  }
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
  width: 0.5px;
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
