import Icon1 from '../assets/image/icon1.svg'; // icon1.svg
import Icon2 from '../assets/image/icon2.svg'; // icon2.svg
import Icon3 from '../assets/image/icon3.svg'; // icon3.svg
import Icon4 from '../assets/image/icon4.svg'; // icon4.svg
import Icon5 from '../assets/image/icon5.svg'; // icon5.svg
import Icon6 from '../assets/image/icon6.svg'; // icon6.svg
import GithubIcon from '../assets/image/github.svg'; // github.svg

const Leftbar = () => {
  return (
    <div className="fixed left-0 top-0 z-20 h-screen w-[15rem] bg-[#171717]">
      <div className="flex h-[83%] flex-col border-b border-[#6F6E6E] bg-[#171717]">
        <div className="bg-gradient-to-r from-[#FFFFFF] via-[#9BB6CC] to-[#01457E] bg-clip-text p-6 text-[2rem] font-bold text-transparent">
          DevSketch
        </div>
        <div className="flex flex-grow flex-col justify-start space-y-6 pl-4">
          <div className="flex items-center space-x-4">
            <img src={Icon1} alt="Icon1" className="h-[1rem] w-[1rem]" />
            <p className="text-[0.8rem] text-[#FFFFFF]">정보 입력</p>
          </div>
          <div className="flex items-center space-x-4">
            <img src={Icon2} alt="Icon2" className="h-[1rem] w-[1rem]" />
            <p className="text-[0.8rem] text-[#FFFFFF]">기능명세</p>
          </div>
          <div className="flex items-center space-x-4">
            <img src={Icon3} alt="Icon3" className="h-[1rem] w-[1rem]" />
            <p className="text-[0.8rem] text-[#FFFFFF]">설계</p>
          </div>
          <div className="flex items-center space-x-4">
            <img src={Icon4} alt="Icon4" className="h-[1rem] w-[1rem]" />
            <p className="text-[0.8rem] text-[#FFFFFF]">세팅 시작</p>
          </div>
          <div className="flex items-center space-x-4">
            <img src={Icon5} alt="Icon5" className="h-[1rem] w-[1rem]" />
            <p className="text-[0.8rem] text-[#FFFFFF]">세팅 확인</p>
          </div>
        </div>
      </div>

      <div className="flex h-[7%] flex-grow flex-col justify-center space-y-2 border-b border-[#6F6E6E] bg-[#000000] pl-4">
        <div className="flex items-center space-x-4">
          <img src={Icon6} alt="Icon6" className="h-[1rem] w-[1rem]" />
          <p className="font-sfpro text-[0.8rem] text-[#FFFFFF]">마이페이지</p>
        </div>
      </div>

      <div className="flex h-[10%] flex-grow flex-col justify-center space-y-2 bg-[#171717] pl-4">
        <div className="flex items-center space-x-4">
          <img src={GithubIcon} alt="GitHub" className="h-[1rem] w-[1rem]" />
          <p className="font-sfpro text-[1rem] text-[#FFFFFF]">kimyeeun21</p>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
