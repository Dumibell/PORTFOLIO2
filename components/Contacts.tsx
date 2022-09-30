import { FadeIn } from "ts-react-fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { ModalType } from "../pages";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

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
              <ContactLists
                nameOfClass="text5"
                icon={faPhone}
                title="Phone."
                contactlist="010-5120-6319"
              />
              <ContactLists
                nameOfClass="text6"
                icon={faEnvelope}
                title="Mail."
                href="mailto:choyejee14@gmail.com"
                contactlist="choyejee14@gmail.com"
              />
              <ContactLists
                nameOfClass="text7"
                icon={faGithub}
                title="Github."
                href="https://github.com/Dumibell"
                contactlist="https://github.com/Dumibell"
              />
              <ContactLists
                nameOfClass="text8"
                icon={faBlog}
                title="Blog."
                href="https://velog.io/@dumibell"
                contactlist="https://velog.io/@dumibell"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactListsType {
  nameOfClass: string;
  icon: IconDefinition;
  title: string;
  href?: string;
  contactlist: string;
}

const ContactLists = ({
  nameOfClass,
  icon,
  title,
  href,
  contactlist,
}: ContactListsType) => {
  return (
    <div className={nameOfClass}>
      <div className="hover:underline">
        <FontAwesomeIcon icon={icon} className="text-white" />
        <span className="ml-1">{title} </span>
        <a href={href} target="_blank">
          {contactlist}
        </a>
      </div>
    </div>
  );
};
