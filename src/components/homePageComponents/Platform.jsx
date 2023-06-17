import React from "react";
import logo from "../../assets/images/quokka_1.png";
import usd from "../../assets/images/usdt.png";
import coin from "../../assets/images/coin_1.png";
import exchange from "../../assets/images/exchange.png";
import chart from "../../assets/images/pie-chart-image.svg";
import pattern from "../../assets/images/svg1.svg";
import { CustomButton } from "../CustomButton";
import { TakenomicsData } from "../../constant/AppData";
export default function Platform() {
  return (
    <>
      <div className="relative z-10">
        <div className="platform-section flex items-center py-16">
          <div className="flex flex-col xl:flex-row justify-between items-center">
            <div className="text-white w-full xl:w-5/12">
              <h1 className="font-bold text-2xl md:text-[3rem] leading-[1.3]">
                Decentralized Exchange (DEX) QuokkaSwap is a brand new trading
                platform.
              </h1>
              <p className="font-normal text-[1.125rem] leading-5 my-5">
                The QUOK Token ensures the sustainability (DEX) of the
                Ecosystem. QuokkaSwap.com has a user-friendly interface and is
                an accessible DEX for beginners. Due to lower fees and other
                features, QuokkaSwap has an advantage over CEX. New investors
                join our project and buy QUOK token
              </p>
              <div className="flex justify-center sm:justify-start relative z-0">
                <CustomButton
                  title="Roadmap"
                  className="custom-button auth-button w-[200px] text-lg font-extrabold leading-[18px]"
                />
              </div>
            </div>
            <div className="w-full xl:w-5/12 z-10 mt-16 xl:mt-0">
              <div className="card buy__calc">
                <p className="font-normal text-[22px] text-white flex items-center justify-center gap-4">
                  Token Public Sale <img src={logo} className="h-[34px]" /> QUOK
                </p>
                <div className="flex flex-row gap-10 flex-wrap items-start justify-center">
                  <p class="font-bold text-xl text-[#19ded1] text-center">
                    Progress: <span>21.66</span>%
                  </p>
                  <div className="proc_val">
                    <div className="proc_bar pl-[21.66%]">
                      <div className="flame"></div>
                    </div>
                  </div>
                  <div class="coin_st flex justify-between">
                    <p className="font-semibold text-lg flex-1 flex flex-col items-center">
                      Sold
                      <span className="font-[900] text-[#19ded1] text-[14px]">
                        64 980 216 QUOK / 300 000 000 QUOK
                      </span>{" "}
                    </p>
                    <p className="font-semibold text-lg flex-1 flex flex-col items-center">
                      USDT Raised
                      <span className="font-[900] text-[#19ded1] text-[14px]">
                        $259 921 / $1 200 000
                      </span>{" "}
                    </p>
                  </div>
                  <div className="calc_coin flex items-center justify-between w-full flex-nowrap">
                    <div className="field_select_with flex items-center">
                      <input
                        placeholder="0"
                        value="0"
                        type="number"
                        className="crypt_input w-full bg-transparent border-none text-xl font-bold text-white text-center p-3"
                      />
                      <img src={usd} alt="USDT" className="h-[32px]" />
                      <span className="curr_name">USDT</span>
                    </div>
                    <img src={exchange} alt="Exchange" className="h-5" />
                    <div className="field_select_with flex items-center">
                      <input
                        placeholder="0"
                        value="1"
                        type="number"
                        className="quok_input w-full bg-transparent border-none text-xl font-bold text-white text-center p-3"
                      />
                      <img src={coin} alt="coin" className="h-[32px]" />
                      <span className="curr_name">QUOK</span>
                    </div>
                  </div>
                  <div className="relative z-0">
                    <CustomButton
                      title="BUY Quokka (QUOK)"
                      className="custom-button hero-button mb-10 text-lg font-extrabold leading-[18px] w-[300px]"
                    />
                  </div>
                  <div className="footer_buy flex justify-between w-full">
                    <div className="link_scan">
                      <a
                        target="_blank"
                        href="https://bscscan.com/token/0xDf34f62a90717bAc9067A1b9eb49f5e7419FdC7f"
                        className="text-[#19ded1] text-[15px]"
                      >
                        <p>Token Addres</p>
                        <p>(Bscscan)</p>
                      </a>
                    </div>
                    <div className="link_scan font-normal text-[16px]">
                      <p className="text-right">Listing:</p>
                      <p className="text-right">Pancakeswap/Binance/KuCoin</p>
                      <p className="text-right">Listing Price = $0.1 USD</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img class="pattern pattern-1" src={pattern}></img>
        </div>
        <div className="takenomics-section py-16">
          <h2 className="font-bold text-[2rem] text-center mb-10">
            Tokenomics
          </h2>
          <div
            className="token_info flex flex-row flex-wrap justify-evenly mb-[4rem] w-full aos-init aos-animate"
            data-aos="fade-up"
          >
            {TakenomicsData.map((item, index) => (
              <div key={index}>
                <p>{item.title}</p>
                <span>{item.subTitle}</span>
              </div>
            ))}
          </div>
          <div className="">
            <div className="token_diagram">
              <div
                className="tokenomics-chart-image aos-init aos-animate"
                data-aos="fade-right"
              >
                <img src={chart} alt="" className="mx-auto" />
                <div className="tokenomics-chart-cont-list">
                  <div className="tokenomics-cont-list-single">
                    <h4>
                      3.5%<span>Marketing</span>
                    </h4>
                  </div>
                  <div className="tokenomics-cont-list-single">
                    <h4>
                      30%<span>Public Sale</span>
                    </h4>
                  </div>
                  <div className="tokenomics-cont-list-single">
                    <h4>
                      5%<span>Rewards</span>
                    </h4>
                  </div>
                  <div className="tokenomics-cont-list-single">
                    <h4>
                      18%<span>Liquidity</span>
                    </h4>
                  </div>
                  <div className="tokenomics-cont-list-single">
                    <h4>
                      20%<span>Development Team</span>
                    </h4>
                  </div>
                  <div className="tokenomics-cont-list-single">
                    <h4>
                      4%<span>Developers</span>
                    </h4>
                  </div>
                  <div className="tokenomics-cont-list-single">
                    <h4>
                      4.5%<span>Partners &amp; Advisers</span>
                    </h4>
                  </div>
                  <div className="tokenomics-cont-list-single">
                    <h4>
                      15%<span>Staking</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
