import React, { FC, PropsWithChildren } from "react";
import Image from "next/image";
import { FadeIn } from "ts-react-fade";

export const About = () => {
  return (
    <div className="w-screen h-screen flex items-center" id="1">
      <div className="w-full h-full m-16">
        <div className="text-7xl font-bold font-Roboto mt-32">
          <div className="flex justify-between">
            <div>
              <FadeIn>
                <p>FRONTEND</p>
                <p>DEVELOPER</p>
              </FadeIn>
              <FadeIn delay={900}>
                <div className="w-[450px] h-52 mt-3">
                  <Image
                    src="/images/home_img.jpeg"
                    width={450}
                    height={250}
                    alt="프로필이미지"
                  />
                </div>
              </FadeIn>
            </div>
            <FadeIn delay={700}>
              <div className="text-base font-light w-[500px] h-[300px] mt-[120px] flex flex-col justify-center items-end">
                <p>개발자라는 직업을 선택한 이유는</p>
                <p>제가 잘할 수 있는 일이자 좋아하는 일이기 때문입니다.</p>
                <p className="mt-2">
                  단순히 주어진 기능만을 개발하는 것이 아닌, 고객에게 실제로
                  필요한
                </p>
                <p>
                  서비스/기능에 대해 함께 고민하고 개발하는 것을 목표로 합니다.
                </p>
                <p className="mt-2">
                  호텔 프론트데스크에서 다양한 고객을 응대하며
                </p>
                <p>
                  커뮤니케이션 능력을 길렀으며, 모든 업무를 팀단위로 진행했기
                  때문에
                </p>
                <p> 팀원 간의 소통과 협업의 중요성에 대해 잘 알고 있습니다.</p>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={900}>
            <div className="flex flex-col items-end mt-8">
              <div className="flex flex-col items-end">
                <p>JENNY YEJEE</p>
                <p>CHO</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
