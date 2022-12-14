import { ProjectDetail } from "./Projects";
import Image from "next/image";
import { ClickType } from "./Main";
import projectImage from "../public/images/vetflux.gif";
import { useEffect, useState } from "react";

export const ToyProject = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-7xl font-bold font-Roboto projectTitle">
          <p>TODO</p>
          <p>LIST</p>
        </div>
        <div
          className="border-b border-black w-24 hover:cursor-pointer seeMore"
          onClick={() => {
            setClick(!click);
          }}
        >
          {click ? (
            "โ Go Back"
          ) : (
            <div className="animate-bounce">โ See More</div>
          )}
        </div>
      </div>
      <div className="flex items-center">
        {click ? (
          <ProjectDetail
            title="๐ฑ ์ผ์ ๊ด๋ฆฌ๋ฅผ ์ํ ํฌ๋๋ฆฌ์คํธ"
            period="2022.04.18 ~ 2022.04.22"
            member="๋จ๋ ๊ฐ๋ฐ"
            skills="HTML/CSS, JavaScript, React.js, TailwindCss, Firebase"
            myJob="์ ์ฒด ํ์ด์ง ๊ธฐํ ๋ฐ ๊ฐ๋ฐ"
            text1="- ๊ฐ์ธ๋ณ๋ก ์ผ์ ์ ๊ด๋ฆฌํ  ์ ์๋ ์น์ฑ ํํ์ ํ์ด์ง์๋๋ค."
            text2="- ์ฌ์ฉ์์ uid๊ฐ์ ๋ฐ๋ผ collection์ ๋ถ๋ฅํด ์ฌ์ฉ์๊ฐ ๋ก๊ทธ์ธํ๋ฉด ๋ณธ์ธ์ ํฌ๋๋ฆฌ์คํธ๋ง ๋ณด์ฌ์ง๋๋ค."
            text3="- ์๋จ์ ํ์ดํ ๋ฒํผ์ ํตํด ์  ๋ , ๋ค์๋  ํฌ๋๋ฆฌ์คํธํฃ ๋ก ์ด๋ํ  ์ ์์ด ๋ ์ง๋ณ ์ผ์ ๊ด๋ฆฌ๊ฐ ๊ฐ๋ฅํฉ๋๋ค."
            text4="- ํฌ๋๋ฆฌ์คํธ๋ฅผ ์์ฑ, ์์ , ์ญ์ ํ  ์ ์์ต๋๋ค."
            text5="- ํฌ๋๋ฆฌ์คํธ๋ฅผ ์์ ์ค์ผ ๋๋ ๊ธ์จ๊ฐ ๊น๋นก์ด๊ณ , ์์ ์ด ์๋ฃ๋๋ฉด ๊น๋นก์์ด ๋ฉ์ถฅ๋๋ค."
            text6="- ์๋ฃ๋ ํฌ๋๋ ์ฒดํฌ๋ฐ์ค๋ฅผ ํตํด ํ์ํ  ์ ์์ต๋๋ค."
            web="https://dumibell.github.io/todolist/"
            github="https://github.com/Dumibell/todolist"
          />
        ) : (
          <div className="w-[800px] h-[460px] flex">
            <video autoPlay loop muted>
              <source src="/videos/todo.mov" />
            </video>
          </div>
        )}
      </div>
    </>
  );
};
