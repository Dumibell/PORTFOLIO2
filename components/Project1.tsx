import { useRef, useState } from "react";
import { ProjectDetail } from "./Projects";

export const Project1 = () => {
  const [click, setClick] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-7xl font-bold font-Roboto projectTitle">
          <p>RE:</p>
          <p>BIT</p>
        </div>
        <div
          className="border-b border-black w-24 hover:cursor-pointer seeMore"
          onClick={() => {
            setClick(!click);
          }}
        >
          {click ? (
            "β Go Back"
          ) : (
            <div className="animate-bounce">β See More</div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        {click ? (
          <ProjectDetail
            title="π± λνκ° μμ±μ μν λΈλ‘κ·Έ νμμ μΉμ¬μ΄νΈ"
            period="2022.11.02 ~ 2022.11.12"
            member="λ¨λ κ°λ°"
            skills="HTML/CSS, JavaScript, React.js, TailwindCss, Firebase"
            myJob="μ μ²΄ νμ΄μ§ κΈ°ν λ° κ°λ°"
            text1="- λ§€μΌ μ± μ½λ μ΅κ΄μ κΈ°λ₯΄κΈ° μν΄ μμν κ°μΈ νλ‘μ νΈμλλ€. "
            text2="- μ¬μ§κ³Ό κΈμ μλ‘λνλ©΄ λ©μΈ νλ©΄μμ μΉ΄λ νμμΌλ‘ λ³΄μ¬μ§λλ€."
            text3="- κ²μλ¬Όμ μ’μμλ₯Ό λλ₯΄κ±°λ λκΈμ λ¬ μ μμ΅λλ€. μ’μμλ₯Ό λλ₯Έ κΈλ§ λ§μ΄νμ΄μ§μμ λ°λ‘ λͺ¨μ λ³Ό μ μμ΅λλ€."
            text4="-  λ©μΈνμ΄μ§μμ μ΅μ μ/μΈκΈ°μ(μ’μμμ)μΌλ‘ κ²μκΈμ νν°λ§ ν΄ λ³Ό μ μμ΅λλ€."
            text5="- λ³ΈμΈμ΄ μμ±ν κΈκ³Ό λκΈμ μμ /μ­μ κ° κ°λ₯νκ³ , μ‘°νμλ₯Ό νμΈν  μ μμ΅λλ€."
            text6="- μ± μ λͺ© λλ λ΄μ©μΌλ‘ κ²μλ¬Όμ κ²μν  μ μμ΅λλ€."
            text7="- μμ±ν κΈμ κ°μμ λ°λΌ μΈμ¦λ°°μ§κ° μ£Όμ΄μ§λλ€."
            web="https://dumibell.github.io/reading-project/?#/"
            github="https://github.com/Dumibell/reading-project"
          />
        ) : (
          <div className="w-[830px] h-[460px] flex video">
            <video poster="/images/project1-buffer.jpeg" autoPlay loop muted>
              <source src="/videos/reading.mov" />
            </video>
          </div>
        )}
      </div>
    </>
  );
};
