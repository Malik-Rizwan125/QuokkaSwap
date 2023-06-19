import React from 'react'
import logo from "../../assets/images/1.png";
import { menuItems } from "../../constant/AppData"
function LeftMenuBar() {
  return (
    <>
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
    </>
  )
}

export default LeftMenuBar