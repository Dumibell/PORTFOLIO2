import { FadeIn } from "ts-react-fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ModalType } from "../pages";

export const Contacts = ({ setModal }: ModalType) => {
  return (
    <FadeIn delay={100}>
      <div className="bg-black">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-white fixed m-10 hover:cursor-pointer"
          size="2x"
          onClick={() => setModal(false)}
        />
        <div className="h-screen w-screen flex items-center text-white justify-center">
          <div className="font-Roboto">
            <a
              href="mailto:choyejee14@gmail.com"
              className="text-7xl font-bold "
            >
              <div className="flex">
                <FadeIn delay={100}>J</FadeIn>
                <FadeIn delay={200}>E</FadeIn>
                <FadeIn delay={300}>N</FadeIn>
                <FadeIn delay={40}>N</FadeIn>
                <FadeIn delay={500}>Y</FadeIn>
              </div>
              <div className="flex">
                <FadeIn delay={100}>Y</FadeIn>
                <FadeIn delay={200}>E</FadeIn>
                <FadeIn delay={300}>J</FadeIn>
                <FadeIn delay={400}>E</FadeIn>
                <FadeIn delay={500}>E</FadeIn>

                <FadeIn delay={600} className="ml-4">
                  C
                </FadeIn>
                <FadeIn delay={700}>H</FadeIn>
                <FadeIn delay={800}>O</FadeIn>
              </div>
            </a>

            <div className="text-lg mt-3">
              <FadeIn delay={600}>
                <div>
                  <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                  <span className="ml-1">Mail. </span>
                  <a href="mailto:choyejee14@gmail.com">choyejee14@gmail.com</a>
                </div>
              </FadeIn>
              <FadeIn delay={700}>
                <div>
                  <FontAwesomeIcon icon={faGithub} className="text-white" />
                  <span className="ml-1">Github. </span>
                  <a href="https://github.com/Dumibell">
                    https://github.com/Dumibell
                  </a>
                </div>
              </FadeIn>
              <FadeIn delay={800}>
                <div>
                  <FontAwesomeIcon icon={faBlog} className="text-white" />
                  <span className="ml-1">Blog. </span>
                  <a href="https://velog.io/@dumibell">
                    https://velog.io/@dumibell
                  </a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </FadeIn>
  );
};
