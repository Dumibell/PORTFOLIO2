import Image from "next/image";
import { ProjectDetail } from "./Projects";

export const Project2 = ({ click, setClick }) => {
  return (
    <>
      <div className="flex flex-col">
        <div className="text-7xl font-bold font-Roboto mt-40">
          <p>WESOP</p>
        </div>
        <div
          className="border-b border-black w-20 hover:cursor-pointer"
          onClick={() => {
            setClick(!click);
          }}
        >
          {click ? "Go Back" : "See More"}
        </div>
      </div>
      <div className="flex items-center">
        {click ? (
          <ProjectDetail />
        ) : (
          <div className="ml-28 w-[800px] h-[500px] border">
            <Image
              src="/images/제품상세.gif"
              width={800}
              height={500}
              alt="시연영상"
            />
          </div>
        )}
      </div>
    </>
  );
};
