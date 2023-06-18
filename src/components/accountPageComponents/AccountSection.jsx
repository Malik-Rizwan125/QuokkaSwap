import { menuItems } from "../../constant/AppData";
import logo from "../../assets/images/1.png";
import { useState } from "react";
import WalletComponent from "./WalletComponent";
import BuyTokenComponent from "./BuyTokenComp";
import { BiWallet } from "react-icons/bi";
import StackingComponent from "./StakingComponent";
import RaferalsComponent from "./RaferalsComponent";
export default function AccountSection() {
  const [currentComponent, setCurrentComponent] = useState("Wallet");
  return (
    <>
      <div className="container mx-auto main_content">
        <section className="account_section py-16 min-h-screen">
          <div className="left_menu_bar">
            <div className="acc_window">
              <div>
                <div className="user_info">
                  <div className="img_av">
                    <img src={logo} alt="Logo" />
                  </div>
                  <div>
                    <p className="usermail">alim@gmail.com</p>
                    <p className="userbal">0,00 QUOK</p>
                  </div>
                </div>
              </div>
              <div className="account_menu_list">
                {menuItems.map((item, index) => (
                  <div
                    className={item.className}
                    key={index}
                    onClick={() => setCurrentComponent(item.label)}
                  >
                    <item.icon fontSize={24} />
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {currentComponent === "Wallet" ? (
            <WalletComponent />
          ) : currentComponent === "Buy QUOK Token" ? (
            <BuyTokenComponent />
          ) : currentComponent === "Staking" ? (
            <StackingComponent />
          ) : currentComponent === "Referrals" ? (
            <RaferalsComponent />
          ) : (
            ""
          )}
        </section>
      </div>
    </>
  );
}
