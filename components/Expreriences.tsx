import { styled } from "styled-components";
import AnvilLogo from "../public/images/anvil-logo.jpeg";
import VetfluxLogo from "../public/images/vetflux-logo.jpeg";
import Image from "next/image";
import { color, mobile } from "../styles/theme";
import KobeaLogo from "../public/images/kobea-logo.jpeg";
import { useTranslation } from "next-i18next";

export const Experiences = () => {
  const { t } = useTranslation();
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
              <p className="companyName">{t("experience.kobea.companyName")}</p>
              <p className="period">{t("experience.kobea.term")}</p>
              <p>{t("experience.kobea.introduce")}</p>
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

              <p>- {t("experience.kobea.uznexapp.description1")}</p>
              <p>- {t("experience.kobea.uznexapp.description2")}</p>
              <p>- {t("experience.kobea.uznexapp.description3")}</p>
            </div>
            <div>
              <p>
                <span className="projectName">| UZNEX WEB</span>
                <span className="period">{t("experience.kobea.term")}</span>
              </p>
              <p>- {t("experience.kobea.uznexWeb.description1")}</p>
              <p>- {t("experience.kobea.uznexWeb.description2")}</p>
              <p>- {t("experience.kobea.uznexWeb.description3")}</p>
              <p>- {t("experience.kobea.uznexWeb.description4")}</p>
              <p>- {t("experience.kobea.uznexWeb.description5")}</p>
              <p>- {t("experience.kobea.uznexWeb.description6")}</p>
              <p>- {t("experience.kobea.uznexWeb.description7")}</p>
              <p>- {t("experience.kobea.uznexWeb.description8")}</p>
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
              <p className="companyName">{t("experience.anvil.companyName")}</p>
              <p className="period">2023.01 - 2023.07</p>
              <p>{t("experience.anvil.introduce")}</p>
              <p>
                Skill Keywords: Next.js, TypeScript, Recoil, React-Query,
                Styled-Components
              </p>
            </div>

            <div>
              <p>
                <span className="projectName">
                  | {t("experience.anvil.hli.projectName")}
                </span>
                <span className="period">2023.04 - 2023.06</span>
              </p>

              <p>- {t("experience.anvil.hli.description1")}</p>
              <p>- {t("experience.anvil.hli.description2")}</p>
              <p>- {t("experience.anvil.hli.description3")}</p>
            </div>
            <div>
              <p>
                <span className="projectName">
                  | {t("experience.anvil.hliAdmin.projectName")}
                </span>
                <span className="period">2023.01 - 2023.07</span>
              </p>
              <p>- {t("experience.anvil.hliAdmin.description1")}</p>
              <p>- {t("experience.anvil.hliAdmin.description2")}</p>
            </div>
            <div>
              <p>
                <span className="projectName">
                  | {t("experience.anvil.alacarte.projectName")}
                </span>
                <span className="period">2023.01 - 2023.03</span>
              </p>
              <p>- {t("experience.anvil.alacarte.description1")}</p>
              <p>- {t("experience.anvil.alacarte.description2")}</p>
              <p>- {t("experience.anvil.alacarte.description3")}</p>
            </div>
            <div>
              <p>
                <span className="projectName">
                  | {t("experience.anvil.etc.projectName")}
                </span>
                <span className="period">2023.01 - 2023.07</span>
              </p>
              <p>- {t("experience.anvil.etc.description1")}</p>
              <p>- {t("experience.anvil.etc.description2")}</p>
              <p>- {t("experience.anvil.etc.description3")}</p>
              <p>- {t("experience.anvil.etc.description4")}</p>
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
              <p className="companyName">
                {t("experience.vetflux.projectName")}
              </p>
              <p className="period">2022.07 - 2022.08 (Internship Program)</p>
              <p>{t("experience.vetflux.introduce")}</p>
              <p>Skill Keywords: Next.js, TypeScript, TailwindCss, Firebase</p>
            </div>
            <div>
              <p>
                <span className="projectName">
                  | {t("experience.vetflux.neulpet.projectName")}
                </span>
                <span className="period">2022.07 - 2022.08</span>
              </p>
              <p>- {t("experience.vetflux.neulpet.description1")}</p>
              <p>- {t("experience.vetflux.neulpet.description2")}</p>
              <p>- {t("experience.vetflux.neulpet.description3")}</p>
              <p>- {t("experience.vetflux.neulpet.description4")}</p>
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
