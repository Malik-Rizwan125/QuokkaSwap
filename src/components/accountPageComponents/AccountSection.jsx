import { menuItems } from "../../constant/AppData";
import logo from "../../assets/images/1.png";
import coin from "../../assets/images/coin_1.png";

export default function AccountSection() {
  return (
    <>
      <div className="container mx-auto main_content">
        <section className="account_section py-16">
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
                  <div className={item.className} key={index}>
                    <img src={item.imgSrc} alt="" className="w-5" />
                    <p>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="accoint_content_bar">
            <div
              className="acc_window one_ls aos-init aos-animate"
              data-aos="zoom-in"
            >
              <div>
                <div className="name_page">wallet information</div>
              </div>
              <div className="wallet_info flex_colum">
                <div>
                  <p>Balance</p>
                  <p>
                    <img src={coin} alt="coin" /> 0,00 QUOK{" "}
                    <span>($ 0,00)</span>
                  </p>
                </div>
                <a className="grad_button" href="/account/buy">
                  buy QUOK token
                </a>
              </div>
            </div>
            <div
              className="acc_window one_ls aos-init aos-animate"
              data-aos="zoom-in"
            >
              <div>
                <div className="name_page">Statistics</div>
              </div>
              <div className="flex_colum">
                <div className="statists sec_s">
                  <div className="static_bl">
                    <p>0,00 QUOK</p>
                    <p>($ 0,00)</p>
                    <p>Deposits</p>
                  </div>
                  <div className="static_bl">
                    <p>0,00 QUOK</p>
                    <p>($ 0,00)</p>
                    <p>Rewards</p>
                  </div>
                  <div className="static_bl">
                    <p>0,00 QUOK</p>
                    <p>($ 0,00)</p>
                    <p>Referrals</p>
                  </div>
                </div>
                <p className="total_coin">
                  total received: <b>0,00</b> QUOK <span>($ 0,00)</span>
                </p>{" "}
              </div>
            </div>
            <div
              className="acc_window all_ls aos-init aos-animate"
              data-aos="zoom-in"
            >
              <div>
                <div className="name_page">Withdrawal</div>
              </div>
              <div className="flex_colum withdrawal_info">
                <div className="form-group form_buy">
                  <p>Address</p>
                  <div className="form-field">
                    <input
                      className="form-control"
                      type="text"
                      name="address"
                      placeholder="BEP-20 wallet only"
                    />
                    {/* <i className="far fa-address-card"></i> */}
                  </div>
                </div>
                <div className="form-group form_buy">
                  <p>Amount QUOK</p>
                  <div className="form-field">
                    <button className="button-primary to_max_inp" data-val="0">
                      MAX
                    </button>
                    <input
                      className="form-control"
                      type="text"
                      name="withdrawal"
                      value="10000"
                    />
                    <img src={coin} alt="coin" />
                  </div>
                  <span>(Min withdrawal 10000 QUOK)</span>
                </div>

                <a className="grad_button">confirm</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
