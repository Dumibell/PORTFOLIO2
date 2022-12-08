import Image from "next/image";
import { FadeIn } from "ts-react-fade";
import mainImage from "../public/images/profile_img.jpeg";

export const About = () => {
  return (
    <div className="w-full h-screen flex items-center" id="1">
      <div className="flex justify-center items-center pt-20 m-20 aboutContainer">
        <div className="text-7xl font-bold font-Roboto">
          <div className="flex w-screen justify-between mobile">
            <div>
              <div className="fadeIn position largeTitle">
                <p>FRONTEND</p>
                <p>DEVELOPER</p>
              </div>

              <div className=" mt-3 fadeIn image">
                <Image
                  src={mainImage}
                  width={500}
                  height={300}
                  alt="프로필이미지"
                  priority
                  className="profileImage"
                />
              </div>
            </div>

            <div className="text-base font-light mt-[130px] flex flex-col justify-center items-end selfIntroduction mr-40 min-w-[450px]">
              <p>개발자라는 직업을 선택한 이유는</p>
              <p>제가 잘할 수 있는 일이자 좋아하는 일이기 때문입니다.</p>
              <p className="mt-2">
                단순히 주어진 기능만을 개발하는 것이 아닌,
                <strong>고객에게 실제로 필요한</strong>
              </p>
              <p>
                <strong>서비스/기능에 대해 함께 고민하고 개발</strong>하는 것을
                목표로 합니다.
              </p>
              <p className="mt-2">
                호텔 프론트데스크에서 다양한 고객을 응대하며
              </p>
              <p>
                커뮤니케이션 능력을 길렀으며, 모든 업무를 팀단위로 진행했기
                때문에
              </p>
              <p>
                <strong>팀원 간의 소통과 협업의 중요성</strong>에 대해 잘 알고
                있습니다.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-end mr-40 min-w-[400px] name">
            <div className="flex flex-col items-end largeTitle">
              <p>JENNY YEJEE</p>
              <p>CHO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
