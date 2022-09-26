import React, { Component, useState } from "react";
import { isReadable } from "stream";
import { Project1 } from "./Project1";
import { Project2 } from "./Project2";
import { Project3 } from "./Project3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Projects = () => {
  const [click, setClick] = useState<boolean>(false);
  const [number, setNumber] = useState<number>(1);

  const showProject = () => {
    if (number === 1) {
      return <Project1 click={click} setClick={setClick} />;
    } else if (number === 2) {
      return <Project2 click={click} setClick={setClick} />;
    } else {
      return <Project3 click={click} setClick={setClick} />;
    }
  };

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center"
      id="3"
    >
      <div className="m-20">
        <div className="flex justify-end ">
          {PROJECT_NUMBER.map((list) => {
            if (list.id === number) {
              return (
                <span
                  className="underline m-3 hover:cursor-pointer hover:translate-y-[-3px] font-Roboto text-xl font-bold"
                  key={list.id}
                  onClick={() => {
                    setNumber(list.id);
                  }}
                >
                  {list.name}
                </span>
              );
            } else {
              return (
                <span
                  className="underline m-3 hover:cursor-pointer hover:translate-y-[-3px] font-Roboto text-lg "
                  key={list.id}
                  onClick={() => {
                    setNumber(list.id);
                  }}
                >
                  {list.name}
                </span>
              );
            }
          })}
        </div>
        <div className="flex w-[1000px] justify-between">{showProject()}</div>
      </div>
    </div>
  );
};

const PROJECT_NUMBER = [
  { id: 1, name: "Projcet1" },
  { id: 2, name: "Projcet2" },
  { id: 3, name: "Internship" },
];

interface ProjcetDetailType {
  title: string;
  period: string;
  position: string;
  skills: string;
  myJob: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5?: string;
  github: string;
}

export interface ClickType {
  click: boolean;
  setClick: (x: boolean) => void;
}

export const ProjectDetail = ({
  title,
  period,
  position,
  skills,
  myJob,
  text1,
  text2,
  text3,
  text4,
  text5,
  github,
}: ProjcetDetailType) => {
  return (
    <div className="w-[800px] h-[450px] border bg-black text-white font-Roboto">
      <div className="ml-6 mt-6">
        <p className="my-3 text-xl italic"> {title}</p>
        <p className="my-2">⦁ 프로젝트 기간: {period}</p>
        <p className="my-2">⦁ 팀 구성: {position}</p>
        <p className="my-2">⦁ 사용 기술 및 라이브러리: {skills}</p>
        <p className="my-2">⦁ 담당 구현 기능: {myJob}</p>
        <div className=" border border-white w-[750px] h-[200px] mt-2">
          <div className="m-4">
            <p className="my-2">{text1}</p>
            <p className="my-2">{text2}</p>
            <p className="my-2">{text3}</p>
            <p className="my-2">{text4}</p>
            <p className="my-2">{text5}</p>
          </div>
        </div>
        <div className="mt-4 hover:translate-y-[-1px] hover:font-bold">
          <a href={github}>
            <FontAwesomeIcon icon={faGithub} />
            <span> Github Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
};
