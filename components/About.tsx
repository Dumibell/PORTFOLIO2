import Image from "next/image";
import mainImage from "../public/images/profile_img.jpeg";
import { styled, keyframes } from "styled-components";
import { mobile } from "../styles/theme";

export const About = () => {
  return (
    <Container id="1">
      <InnerContainer className="font-Roboto">
        <Position>
          FRONTEND
          <br /> DEVELOPER
        </Position>
        <ImageAndDescription>
          <ImageContainer>
            <Image
              src={mainImage}
              width={500}
              height={300}
              alt="프로필이미지"
              priority
              className="profileImage"
              placeholder="blur"
            />
          </ImageContainer>
          <Description>
            <p>
              개발자라는 직업을 선택한 이유는
              <br /> 제가 잘할 수 있는 일이자 좋아하는 일이기 때문입니다. <br />
            </p>
            <br />
            <p>
              단순히 주어진 기능만을 개발하는 것이 아닌,
              <strong>
                고객에게 실제로 필요한
                <br />
                서비스/기능에 대해 함께 고민하고 개발
              </strong>
              하는 것을 목표로 합니다. <br />
            </p>
            <br />
            <p>
              호텔 프론트데스크에서 다양한 고객을 응대하며
              <br /> 커뮤니케이션 능력을 길렀으며, 모든 업무를 팀단위로 진행했기
              때문에
              <br />
              <strong>팀원 간의 소통과 협업의 중요성</strong>에 대해 잘 알고
              있습니다.
            </p>
          </Description>
        </ImageAndDescription>
        <Name>
          JENNY YEJEE
          <br /> CHO
        </Name>
      </InnerContainer>
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${mobile}) {
    height: auto;
    margin-top: 80px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 900px;
  max-width: 1200px;
  gap: 20px;
  margin: 20px;

  @media (max-width: ${mobile}) {
    min-width: auto;
    max-width: 500px;
  }
`;

const Position = styled.div`
  font-size: 70px;
  font-weight: 600;
  animation: ${fadeIn} 1.8s;
  line-height: 80px;

  @media (max-width: ${mobile}) {
    font-size: 50px;
    line-height: 60px;
  }
`;

const ImageAndDescription = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: ${mobile}) {
    flex-direction: column;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  min-width: 400px;
  opacity: 0;
  animation: ${fadeIn} 1.8s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
  max-width: 600px;
  margin-left: 30px;
  text-align: end;
  font-weight: 300;
  font-size: 18px;

  @media (max-width: ${mobile}) {
    margin-left: 0;
    margin-top: 20px;
    text-align: start;
    font-size: 16px;
  }

  opacity: 0;
  animation: ${fadeIn} 1.8s;
  animation-delay: 1s;
  animation-fill-mode: forwards;
`;

const Name = styled.p`
  line-height: 80px;
  text-align: end;
  font-size: 70px;
  font-weight: 600;
  opacity: 0;

  @media (max-width: ${mobile}) {
    font-size: 50px;
    line-height: 60px;
  }

  animation: ${fadeIn} 1.8s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
`;
