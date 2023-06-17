import React from "react";
import pattern1 from '../../assets/images/svg2.svg'
export default function RoadMap() {
  return (
    <>
      <div className="pt-32 mb-10 mx-auto">
        <div className="relative pt-[80px]">
          <h2 className="text-center font-bold text-[32px]">
            Road Map
          </h2>
          <div
            className="border-2-2 absolute h-full border border-line"
            style={{ borderColor: "#407dd9" }}
          ></div>
      <img class="pattern pattern-2" src={pattern1}></img>
          <span className=" absolute w-2 h-2 rounded-full text-white bg-theme-clr circle"></span>
     
          <button className="absolute mt-12  bg-theme-clr year-btn">2024</button>
       
          <div className="mb-0 lg:mb-0 mt-36 sm:mt-32 flex lg:justify-between items-center w-full lg:w-5/6 right-timeline posi-relative">
            <div className="z-20 flex items-center rounded-full">
              {/* <h1 className="mx-auto font-normal text-[13px] text-white left-box"></h1> */}
            </div>
            <div className=" rounded-lg shadow-xl box-bg-clr box-width-left ">
              <span className="mb-2 text-[13px] font-normal text-white">
                OCT. 2022
              </span>
              <ul className="text-white list-disc mt-2 lg:ml-[20px] leading-[1.62]">
                <li className="py-[5px]">Planning/Concept Generation</li>
                <li className="py-[5px]">Creation QuokkaSwap.com</li>
                <li className="py-[5px]">Project launch</li>
              </ul>
            </div>
          </div>
          <div className="mb-8 flex justify-center lg:justify-between flex-row lg:flex-row-reverse  w-full lg:w-5/6 items-center lg:ml-auto left-timeline posi-relative">
            <div className="z-20 flex items-center  rounded-full ">
              {/* <h1 className="mx-auto text-white font-normal text-[13px] right-box"></h1> */}
            </div>
            <div className="mb-0 lg:mb-0 rounded-lg shadow-xl box-bg-clr box-width-right mt-[30px] lg:mt-[-50px]">
              <span className="mb-2 text-[13px] font-normal text-white">
                Q3 2023
              </span>
              <ul className="text-white list-disc mt-2 lg:ml-[20px]">
                <li className="py-[5px]">Start Community</li>
                <li className="py-[5px]">Smart contracts & audit</li>
                <li className="py-[5px]">Whitepaper released </li>
                <li className="py-[5px]">Analyzing/Creating Tokenomics Quokka</li>
                <li className="py-[5px]">Start Airdrop/Bounty/Staking</li>
                <li className="py-[5px]">Token Publick Sale QUOK</li>
                <li className="py-[5px]">Launch Quokkaswap/exchange demo</li>
              </ul>
            </div>
          </div>
          <button className="absolute bg-theme-clr year-btn">2024</button>
          <div className="mb-0 lg:mb-0  flex lg:justify-between items-center w-full lg:w-5/6 right-timeline posi-relative">
            <div className="z-20 flex items-center rounded-full">
              {/* <h1 className="mx-auto font-normal text-[13px] text-white left-box"></h1> */}
            </div>
            <div className=" rounded-lg shadow-xl box-bg-clr box-width-left mt-[60px] lg:mt-[60px]">
            <span className="mb-2 text-[13px] font-normal text-white">
                Q1 2024:
              </span>
              <ul className="text-white list-disc mt-2 lg:ml-[20px]">
                <li className="py-[5px]">Coingecko Listing</li>
                <li className="py-[5px]">Coinmarketcap Listing</li>
                <li className="py-[5px]">Listing Pancakeswap QUOK</li>
                <li className="py-[5px]">Listing Price $0.1 USD</li>
                <li className="py-[5px]">Interface dev for QuokkaSwap.com</li>
                <li className="py-[5px]">End Airdrop/Bounty</li>
                <li className="py-[5px]">Partners/Contracts/Marketing</li>
              </ul>
            </div>
          </div>
          <div className=" flex justify-center lg:justify-between flex-row lg:flex-row-reverse  w-full lg:w-5/6 items-center lg:ml-auto left-timeline posi-relative">
            <div className="z-20 flex items-center  rounded-full ">
              {/* <h1 className="mx-auto text-white font-normal text-[13px] right-box"></h1> */}
            </div>
            <div className=" rounded-lg shadow-xl box-bg-clr box-width-right mt-[30px] lg:mt-[-40px]">
            <span className="mb-2 text-[13px] font-normal text-white">
                Q2 2024:
              </span>
              <ul className="text-white list-disc mt-2 lg:ml-[20px]">
                <li className="py-[5px]">End Staking </li>
                <li>Audit Publick Sale QUOK</li>
                <li>Burn unused QUOK</li>
                <li>Completion dev Quokkaswap.com Q3/Q4 2024.</li>
              </ul>
            </div>
          </div>
          <h2
            className=" absolute w-2 h-2 rounded-full text-white bg-theme-clr circle"
            style={{ bottom: "-130px" }}
          ></h2> 
          {/* <div className="mb-8 flex justify-between flex-row lg:flex-row-reverse  w-full lg:w-5/6 items-center lg:ml-auto left-timeline posi-relative">
            <div className="z-20 flex items-center  rounded-full">
              <h1 className="mx-auto text-white font-normal text-[13px] right-box"></h1>
            </div>
            <div className=" rounded-lg shadow-xl mr-[14%] sm:mr-[8%] lg:mr-[0px] w-[80%] sm:w-[66%] lg:w-[33%] box-bg-clr">
              <span className="mb-2 text-[13px] font-normal text-white">
                Q3 2023
              </span>
              <ul className="text-white list-disc mt-2">
                <li>Start Community</li>
                <li>Smart contracts & audit</li>
                <li>Whitepaper released </li>
                <li>Analyzing/Creating Tokenomics Quokka</li>
                <li>Start Airdrop/Bounty/Staking</li>
                <li>Token Publick Sale QUOK</li>
                <li>Launch Quokkaswap/exchange demo</li>
              </ul>
            </div>
          </div>

          <button className="absolute mt-2 bg-theme-clr year-btn">2024</button>
          <div className="mb-8 mt-32 flex justify-between items-center w-full lg:w-5/6 right-timeline posi-relative">
            <div className="z-20 flex items-center  rounded-full">
              <h1 className="mx-auto font-normal text-[13px] text-white left-box"></h1>
            </div>
            <div className=" rounded-lg shadow-xl mr-[14%] sm:mr-[8%] lg:mr-[0px] w-[80%] sm:w-[66%] lg:w-[33%] box-bg-clr">
            <span className="mb-2 text-[13px] font-normal text-white">
                Q1 2024:
              </span>
              <ul className="text-white list-disc mt-2">
                <li>Coingecko Listing</li>
                <li>Coinmarketcap Listing</li>
                <li>Listing Pancakeswap QUOK</li>
                <li>Listing Price $0.1 USD</li>
                <li>Interface dev for QuokkaSwap.com</li>
                <li>End Airdrop/Bounty</li>
                <li>Partners/Contracts/Marketing</li>
              </ul>
            </div>
          </div>

          <div className="mb-8 flex justify-between  flex-row lg:flex-row-reverse w-full lg:w-5/6   items-center lg:ml-auto left-timeline posi-relative">
            <div className="z-20 flex items-center rounded-full">
              <h1 className="mx-auto text-white font-normal text-[13px] right-box"></h1>
            </div>
            <div className=" rounded-lg shadow-xl mr-[14%] sm:mr-[8%] lg:mr-[0px] w-[80%] sm:w-[66%] lg:w-[33%] box-bg-clr">
              <span className="mb-2 text-[13px] font-normal text-white">
                Q2 2024:
              </span>
              <ul className="text-white list-disc mt-2">
                <li>End Staking </li>
                <li>Audit Publick Sale QUOK</li>
                <li>Burn unused QUOK</li>
                <li>Completion dev Quokkaswap.com Q3/Q4 2024.</li>
              </ul>
            </div>
          </div>
          <h2
            className=" absolute w-2 h-2 rounded-full text-white bg-theme-clr circle"
            style={{ bottom: "0" }}
          ></h2> */}
        </div>
      </div>
    </>
  );
}
