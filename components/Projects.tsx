import React, { Component, useMemo, useState } from "react";
import { isReadable } from "stream";
import { Project1 } from "./Project1";
import { Project2 } from "./Project2";
import { Project3 } from "./Project3";
import { ToyProject } from "./ToyProject";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { ClickType } from "./Main";
import { useEffect } from "react";

export const Projects = () => {
  const [number, setNumber] = useState<number>(1);

  const showProject = () => {
    if (number === 1) {
      return <Project1 />;
    } else if (number === 2) {
      return <Project2 />;
    } else if (number === 3) {
      return <Project3 />;
    } else {
      return <ToyProject />;
    }
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
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
        <div className="flex w-[1000px] justify-between project">
          {showProject()}
        </div>
      </div>
    </div>
  );
};

const PROJECT_NUMBER = [
  { id: 1, name: "Project1" },
  { id: 2, name: "Project2" },
  { id: 3, name: "Project3" },
  { id: 4, name: "ToyProject" },
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
  text6?: string;
  text7?: string;
  text8?: string;
  retrospection?: string;
  web?: string;
  github: string;
  blog?: string;
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
  text6,
  text7,
  text8,
  retrospection,
  web,
  github,
  blog,
}: ProjcetDetailType) => {
  return (
    <div className="w-[800px] h-[440px] border bg-black text-white font-Roboto flex">
      <div className="ml-6 mt-3">
        <p className="my-3 text-xl ">{title}</p>
        <div className="border border-white w-[750px] h-[330px]">
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
              <p className="my-1">{text6}</p>
              <p className="my-1">{text7}</p>
              <p className="my-1">{text8}</p>
            </div>
            {/* <p className="mt-2">✨ 성장한 부분</p>
            <div className="ml-5 mr-2">
              <p>{retrospection}</p>
            </div> */}
          </div>
        </div>
        <div className="mt-2.5 flex text-[#ffff99]">
          {web ? (
            <div className="hover:translate-y-[-1px] hover:font-bold mr-3">
              <a href={web} target="_blank">
                <FontAwesomeIcon icon={faGlobe} className="w-4" />
                <span> 데모 사이트</span>
              </a>
            </div>
          ) : (
            <></>
          )}
          <div className="hover:translate-y-[-1px] hover:font-bold">
            <a href={github} target="_blank">
              <FontAwesomeIcon icon={faGithub} className="w-4" />
              <span> Github Repository</span>
            </a>
          </div>
          {blog ? (
            <div className="hover:translate-y-[-1px] hover:font-bold ml-3">
              <a href={blog} target="_blank">
                <FontAwesomeIcon icon={faBlog} className="w-4" />
                <span> Blog Link</span>
              </a>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
