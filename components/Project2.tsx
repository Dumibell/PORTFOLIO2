import Image from "next/image";
import { ProjectDetail } from "./Projects";
import { ClickType } from "./Main";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

export const Project2 = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="text-6xl font-bold font-Roboto projectTitle">
          <p>MY</p>
          <p>FAKE</p>
          <p>TRIP</p>
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
            title="๐ฑ my real trip ์น์ฌ์ดํธ๋ฅผ ๋ชจํฐ๋ธ๋ก ํ ๊ตญ๋ด ์์ ์์ฝ ์ฌ์ดํธ"
            period="2022.07.04 ~ 2022.07.15"
            member="ํ๋ก ํธ์๋ 4๋ช, ๋ฐฑ์๋ 2๋ช"
            skills="HTML/CSS, Styled-Components, JavaScript, React.js, Notion, Slack, Trello"
            myJob="์ ํ ๊ฒ์ ๋ฆฌ์คํธ"
            text1=" - API์ query string์ ํตํด ๋ฐฑ์๋์ ํต์ ํ๊ณ , ํด๋น query์ ๋ง๋ ๋ฐ์ดํฐ๊ฐ UI์ ๊ทธ๋ ค์ง๋๋ค."
            text2="- ์๋จ์ ํํฐ ๋ฐ๋ฅผ ์ด์ฉํด ์ง์ญ, ๋ ์ง, ์ธ์์๋ฅผ ์ ํํ๋ฉด ํด๋น ์กฐ๊ฑด์ ๋ง๋ ์ํ๋ง ํํฐ๋ง ๋์ด ๋ณด์ฌ์ง๋๋ค."
            text3="- ์ผ์ชฝ์ ํํฐ๋ฐ๋ฅผ ์ด์ฉํด ์๋ฐ ์นดํ๊ณ ๋ฆฌ, ์๊ธ, ํธํ ๋ฑ๊ธ, ํธํ ์์ค์ ๋ฐ๋ฅธ ํํฐ๋ง์ด ๊ฐ๋ฅํฉ๋๋ค."
            text4="- ํํฐ๋ง ์กฐ๊ฑด๋ค์ ๊ฐ๊ฐ์ state๋ฅผ ํตํด ๊ด๋ฆฌํ๊ณ  ๊ฒ์๋ฒํผ ํด๋ฆญ์ ๋ฐฑ์๋๋ก ์ ์ก๋๋ query์ state๊ฐ์ด ๋ด๊น๋๋ค."
            github="https://github.com/Dumibell/34-2nd-Fake-Trip-frontend"
            blog="https://velog.io/@dumibell/2%EC%B0%A8-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-myfaketrip"
          />
        ) : (
          <div className="w-[830px] h-[460px] flex video">
            <video autoPlay loop muted>
              <source src="/videos/๋ง์ดํ์ดํฌํธ๋ฆฝ_๊ฒ์๋ฆฌ์คํธ.mov" />
            </video>
          </div>
        )}
      </div>
    </>
  );
};
