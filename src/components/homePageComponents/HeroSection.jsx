import quokkas from "../../assets/images/quokkas.png";
import { CustomButton } from "../CustomButton";
export default function HeroSection() {
  return (
    <>
      <div className="hero-section flex items-center py-10">
        <div className="flex flex-col-reverse md:flex-row justify-center items-center">
          <div className="text-white w-full md:w-5/12">
            <h1 className="font-[900] text-[34px] md:text-[52px] leading-[1.3] mb-5 md:mb-[30px]">
              Decentralized Ecosystem
            </h1>
            <p className="font-bold text-base md:text-xl mb-10">
              QuokkaSwap.com is a decentralized cryptocurrency exchange, with
              its own Quokka token (QUOK ). The ecosystem provides stability to
              the project. Check out WhitePaper to learn more about the
              QuokkaSwap project
            </p>
            <div className="flex flex-col lg:flex-row gap-12 sm:justify-center sm:items-center md:items-start  items-center relative z-0">
              <CustomButton
                title="WhitePaper"
                className="custom-button hero-button text-lg font-extrabold leading-[18px] w-[200px]"
              />
              <CustomButton
                title="(DEX) Exchange"
                className="custom-button hero-button  text-lg font-extrabold leading-[18px] w-[200px]"
              />
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <img src={quokkas} alt="" className="w-100" />
          </div>
        </div>
      </div>
    </>
  );
}
