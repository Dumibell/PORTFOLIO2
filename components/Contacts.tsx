import { FadeIn } from "ts-react-fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { ModalType } from "../pages";

export const Contacts = ({ setModal }: ModalType) => {
  return (
    <div className="containerFadeIn">
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
                <div className="text1">J</div>
                <div className="text2">E</div>
                <div className="text3">N</div>
                <div className="text4">N</div>
                <div className="text5">Y</div>
              </div>
              <div className="flex">
                <div className="text1">Y</div>
                <div className="text2">E</div>
                <div className="text3">J</div>
                <div className="text4">E</div>
                <div className="text5">E</div>

                <div className="ml-4 text6">C</div>
                <div className="text7">H</div>
                <div className="text8">O</div>
              </div>
            </a>

            <div className="text-lg mt-3">
              <div className="text6">
                <div className="hover:underline">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white" />
                  <span className="ml-1">Mail. </span>
                  <a href="mailto:choyejee14@gmail.com">choyejee14@gmail.com</a>
                </div>
              </div>
              <div className="text7">
                <div className="hover:underline">
                  <FontAwesomeIcon icon={faGithub} className="text-white" />
                  <span className="ml-1">Github. </span>
                  <a href="https://github.com/Dumibell" target="_blank">
                    https://github.com/Dumibell
                  </a>
                </div>
              </div>
              <div className="text8">
                <div className="hover:underline">
                  <FontAwesomeIcon icon={faBlog} className="text-white" />
                  <span className="ml-1">Blog. </span>
                  <a href="https://velog.io/@dumibell" target="_blank">
                    https://velog.io/@dumibell
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
