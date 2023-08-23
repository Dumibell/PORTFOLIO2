import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { keyframes, styled } from "styled-components";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInView } from "../store";

export const Contacts = () => {
  const dispatch = useDispatch();
  const { ref, inView } = useInView({ threshold: 0.7 });
  const name = "JENNY YEJEE CHO";

  //전역상태 변경
  useEffect(() => {
    dispatch(setInView(inView));
  }, [inView]);

  return (
    <Container id="5" className="font-Roboto" ref={ref}>
      {inView && (
        <div>
          <Name>
            {name.split("").map((letter, i) => {
              return (
                <Letter key={i} delay={(i + 1) / 10}>
                  {letter}
                  {i === 4 && <br />}
                </Letter>
              );
            })}
          </Name>

          <ContactLists>
            <List className="fadeIn animation1">
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <a>010.5120.5319</a>
            </List>
            <List className="fadeIn animation2">
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <a href="mailto:choyejee14@gmail.com">choyejee14@gmail.com</a>
            </List>
            <List className="fadeIn animation3">
              <FontAwesomeIcon icon={faGithub} className="icon " />
              <a href="https://github.com/Dumibell">
                https://github.com/Dumibell
              </a>
            </List>
          </ContactLists>
        </div>
      )}
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
  color: white;
`;

const Name = styled.p`
  font-size: 60px;
  line-height: 70px;
  font-weight: 600;
  animation: ${fadeIn} 1.8s;
  animation-fill-mode: forwards;
`;

const Letter = styled.span<{ delay: number }>`
  opacity: 0;
  animation: ${fadeIn} 1.8s;
  animation-delay: ${(props) => props.delay}s;
  animation-fill-mode: forwards;
`;

const ContactLists = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;

  .icon {
    width: 20px;
  }
`;

const List = styled.div`
  display: flex;
  font-size: 20px;
  gap: 10px;
  opacity: 0;

  animation: ${fadeIn} 1.8s;
  animation-fill-mode: forwards;

  &.animation1 {
    animation-delay: 1s;
  }

  &.animation2 {
    animation-delay: 1.1s;
  }

  &.animation3 {
    animation-delay: 1.3s;
  }

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
