import Image from "next/image";
import mainImage from "../public/images/profile_img.jpeg";
import { styled, keyframes } from "styled-components";
import { mobile, tablet } from "../styles/theme";
import { useTranslation } from "next-i18next";

export const About = () => {
  const { t } = useTranslation();

  return (
    <Container id="1" className="font-Roboto">
      <InnerContainer>
        <Position>
          FRONTEND
          <br /> DEVELOPER
        </Position>
        <ImageAndDescription>
          <ImageContainer>
            <Image
              src={mainImage}
              width={550}
              height={360}
              alt="프로필이미지"
              priority
              className="profileImage"
              placeholder="blur"
              objectFit="cover"
            />
          </ImageContainer>
          <Description>
            <p>{t("about.description1")}</p>
            <br />
            <p>{t("about.description2")}</p>
            <br />
            <p>{t("about.description1")}</p>
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
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-width: 900px;
  max-width: 1400px;
  gap: 10px;
  margin: 20px;
  margin-top: 80px;

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
  font-size: 16px;

  p {
    white-space: pre-line;
  }

  @media (max-width: ${tablet}) {
    font-size: 15px;
    margin-left: 10px;
  }

  @media (max-width: ${mobile}) {
    margin: 20px 10px;
    text-align: start;
    font-size: 14px;
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
    line-height: 55px;
  }

  animation: ${fadeIn} 1.8s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
`;
