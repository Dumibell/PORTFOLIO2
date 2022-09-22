import Image from "next/image";

export const Skills = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center" id="2">
      <div className="m-20">
        <div className="w-full ">
          <div className="flex">
            <Icons src="/images/html5.svg" />
            <Icons src="/images/javascript.svg" />
            <Icons src="/images/typescript.svg" />
            <Icons src="/images/react.svg" />
            <Icons src="/images/css3.svg" />
            <Icons src="/images/sass.svg" />
            <Icons src="/images/styledcomponents.svg" />
          </div>
          <div className="flex mt-10">
            <Icons src="/images/github.svg" />
            <Icons src="/images/notion.svg" />
            <Icons src="/images/slack.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Icons = ({ src }) => {
  return (
    <div className="mx-5">
      <Image src={src} alt="그림" width={50} height={50} />
    </div>
  );
};
