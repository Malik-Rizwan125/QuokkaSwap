import { useState, useEffect } from "react";
import logo from "../assets/images/quokka_1.png";
import { NavbarData } from "../constant/AppData";
import { CustomButton } from "../components/CustomButton";
import { Link } from "react-router-dom";

export default function Header() {
  const [openToggle, setOpenToggle] = useState(false);
  useEffect(() => {
    if (openToggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openToggle]);
  return (
    <>
      <div
        className={
          openToggle ? "navbar navbar-open xl:bg-transparent" : "navbar "
        }
      >
        <div className="container mx-auto font-[Cairo] py-4 flex justify-between items-center relative">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 sm:h-[60px]" />
            <span className="font-[900] text-xl sm:text-2xl uppercase ml-3">
              quokkaswap.com
            </span>
          </div>
          <ul className="hidden xl:flex">
            {NavbarData.map((item, index) => (
              <li key={index} className="mx-4">
                <a className="font-semibold text-base capitalize cursor-pointer">
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden xl:flex items-center z-0">
            <CustomButton
              title="login"
              className="custom-btn-hover auth-button mx-4 text-base font-extrabold capitalize leading-[16px]"
              path="/account"
            />
            <CustomButton
              title="signup"
              className="custom-btn-hover auth-button mx-4 text-base font-extrabold capitalize leading-[16px]"
            />
          </div>
          <div
            className={
              openToggle
                ? "toggle-nav block xl:hidden bg-transparent before:rotate-[45deg] before:top-0 after:rotate-[-45deg] after:top-0"
                : "toggle-nav block xl:hidden bg-white"
            }
            onClick={() => setOpenToggle(!openToggle)}
          ></div>
        </div>

        {/* Mobile menu */}
        <div
          className={
            openToggle
              ? "navbar-menu navbar-menu-open xl:hidden"
              : "navbar-menu"
          }
        >
          <ul className="navbar-menu__links">
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/rewards">Rewards</a>
            </li>
            <li>
              <a href="/staking">Staking</a>
            </li>
            <li>
              <a href="/#tokenomics">Tokenomics</a>
            </li>
            <li>
              <a href="/WhitePaper.pdf" target="_blank">
                WhitePaper
              </a>
            </li>
            <li>
              <a href="/#roadmap">Roadmap</a>
            </li>
          </ul>
          <ul className="navbar__links-menu">
            <li>
              <Link className="grad_button" to="/account">
                Login
              </Link>
            </li>
            <li>
              <a className="grad_button">Signup</a>
            </li>{" "}
          </ul>
        </div>
      </div>
    </>
  );
}
