import { styled } from "styled-components";
import { color, mobile, tablet } from "../styles/theme";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

interface ProjectListType {
  id: number;
  title: string;
  period: string;
  team: string;
  src: string;
  website?: string;
  github?: string;
}

export const Projects = () => {
  const router = useRouter();

  const PROJECT_LIST: ProjectListType[] = [
    {
      id: 1,
      title: "HLI 기업사이트",
      period: "2023.04 ~ 2023.06",
      team: "프론트엔드 4명, 백엔드 2명",
      src: "hlikorea_ver2.mp4",
      website: "https://www.hlikorea.com/",
    },
    {
      id: 2,
      title: "알라카르테몰",
      period: "2023.01 ~ 2023.03",
      team: "프론트엔드 4명, 백엔드 2명",
      src: "alacarte_ver2.mp4",
      website: "https://www.alacartemall.com/",
    },
    {
      id: 3,
      title: "늘펫 PLUS",
      period: "2022.07 ~2022.08",
      team: "프론트엔드 2명",
      src: "vetflux.mov",
      website: "https://www.vetflux.net/",
      github: "https://github.com/Dumibell/reservation",
    },
    {
      id: 4,
      src: "reading.mov",
      period: "2022.11 ~ 2022.11",
      team: "단독 개발",
      title: "Re:bit",
      website: "https://dumibell.github.io/reading-project/#/",
      github: "https://github.com/Dumibell/reading-project",
    },
    {
      id: 5,
      title: "ToDo List",
      period: "2022.10 ~ 2022.11",
      team: "단독 개발",
      src: "todo.mov",
      website: "https://dumibell.github.io/todolist/",
      github: "https://github.com/Dumibell/todolist",
    },
    {
      id: 6,
      title: "마이페이크트립",
      period: "2022.07 ~ 2022.07",
      team: "프론트엔드 4명, 백엔드 2명",
      src: "my_fake_trip.mov",
      github: "https://github.com/Dumibell/34-2nd-Fake-Trip-frontend",
    },
    {
      id: 7,
      title: "Wesop",
      period: "2022.06 ~ 2022.07",
      team: "프론트엔드 4명, 백엔드 1명",
      src: "wesop.mov",
      github: "https://github.com/Dumibell/34-1st-Wesop-frontend",
    },
  ];

  return (
    <Container id="4">
      <InnerContainer>
        <SectionTitle>PROJECTS</SectionTitle>
        <div>
          {PROJECT_LIST.map((list) => {
            return (
              <Box key={list.id}>
                <video autoPlay loop muted>
                  <source src={`/videos/${list.src}`} />
                </video>
                <Cover className="cover">
                  <InnerBox>
                    <p className="title">{list.title}</p>
                    <div>
                      <p>개발 기간: {list.period}</p>
                      <p>개발 인원: {list.team}</p>
                    </div>
                    <div>
                      {list.website && (
                        <p
                          className="click"
                          onClick={() => window.open(list.website || "")}
                        >
                          <FontAwesomeIcon icon={faGlobe} className="icon" />
                          Website 바로가기
                        </p>
                      )}
                      {list.github && (
                        <p
                          className="click"
                          onClick={() => window.open(list.github || "")}
                        >
                          <FontAwesomeIcon icon={faGithub} className="icon" />
                          Github Repository 바로가기
                        </p>
                      )}
                    </div>
                  </InnerBox>
                </Cover>
              </Box>
            );
          })}
        </div>
      </InnerContainer>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${mobile}) {
    margin-top: 80px;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 150px 100px;

  & > div {
    display: flex;
    flex-wrap: wrap;
    gap: 25px;
    width: 1250px;
  }

  @media (max-width: ${tablet}) {
    margin: 150px 50px;
    & > div {
      width: auto;
      gap: 15px;
      justify-content: center;
    }
  }
`;

const SectionTitle = styled.p`
  width: 100%;
  text-align: end;
  font-size: 60px;
  margin-bottom: 50px;
  text-shadow: 1px 1px 1px ${color.gray.primary};
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 400px;
  height: 250px;

  &:hover {
    .cover {
      display: block;
    }
  }

  video {
    width: 400px;
    height: 250px;
    object-fit: cover;
    border: 5px solid ${color.gray.ligthslate};
  }
`;

const Cover = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
`;

const InnerBox = styled.div`
  height: 210px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 20px;
  margin: 20px;
  border: 1px solid white;

  .title {
    font-size: 22px;
    font-weight: 500;
  }

  .click {
    display: flex;
    align-items: center;
    justify-content: center;

    .icon {
      width: 12px;
      height: 12px;
      margin-right: 5px;
    }

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
