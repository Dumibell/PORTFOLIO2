import React, { Component, useMemo, useState } from "react";
import { isReadable } from "stream";
import { Project1 } from "./Project1";
import { Project2 } from "./Project2";
import { ToyProject } from "./ToyProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { ClickType } from "./Main";
import { useEffect } from "react";

export const Projects = () => {
  const [number, setNumber] = useState<number>(1);

  const showProject = () => {
    if (number === 1) {
      return <Project1 />;
    } else if (number === 2) {
      return <Project2 />;
    } else {
      return <ToyProject />;
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
  { id: 3, name: "ToyProject" },
];

interface ProjcetDetailType {
  title: string;
  internshipPeriod?: string;
  period: string;
  member: string;
  skills: string;
  myJob: string;
  text1?: string;
  text2?: string;
  text3?: string;
  text4?: string;
  text5?: string;
  retrospection: string;
  github: string;
  blog: string;
}

export const ProjectDetail = ({
  title,
  internshipPeriod,
  period,
  member,
  skills,
  myJob,
  text1,
  text2,
  text3,
  text4,
  text5,
  retrospection,
  github,
  blog,
}: ProjcetDetailType) => {
  return (
    <div className="w-[800px] h-[460px] border bg-black text-white font-Roboto flex">
      <div className="ml-6 mt-3">
        <p className="my-3 text-xl">{title}</p>
        <div className="border border-white w-[750px] h-[350px]">
          <div className="m-2">
            <p className="my-1">{internshipPeriod}</p>
            <p className="my-1">▫️ 프로젝트 기간: {period}</p>
            <p className="my-1">▫️ 팀 구성: {member}</p>
            <p className="my-1">▫️ 사용 기술 및 라이브러리: {skills}</p>
            <p className="my-1">▫️ 담당 구현 기능: {myJob}</p>
            <div className="ml-3">
              <p className="my-1">{text1}</p>
              <p className="my-1">{text2}</p>
              <p className="my-1">{text3}</p>
              <p className="my-1">{text4}</p>
              <p className="my-1">{text5}</p>
            </div>
            <p className="mt-2">✨ 성장한 부분</p>
            <div className="ml-5 mr-2">
              <p>{retrospection}</p>
            </div>
          </div>
        </div>
        <div className="mt-2 flex">
          <div className="hover:translate-y-[-1px] hover:font-bold">
            <a href={github} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
              <span> Github Repository</span>
            </a>
          </div>
          <div className="hover:translate-y-[-1px] hover:font-bold ml-3">
            <a href={blog} target="_blank">
              <FontAwesomeIcon icon={faBlog} />
              <span> Blog Link</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
