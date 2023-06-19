import { FiPlusCircle } from "react-icons/fi";
import { FaExchangeAlt, FaCaretSquareDown } from "react-icons/fa";

import coin from "../../assets/images/coin_1.png";
export default function BuyTokenComp() {
  return (
    <>
      <div className="container mx-auto accoint_content_bar">
        <div
          className="acc_window one_ls aos-init aos-animate"
          data-aos="zoom-in"
        >
          
          <div>
            <div className="name_page">Bonuses</div>
          </div>
          <div className="flex_colum bonuses_deposit">
            <p data-proc="2">
              <FiPlusCircle fontSize={20} />
              2% from <b>15 000 QUOK</b>
            </p>
            <p data-proc="3">
              <FiPlusCircle fontSize={20} />
              3% from <b>30 000 QUOK</b>
            </p>
            <p data-proc="5">
              <FiPlusCircle fontSize={20} />
              5% from <b>50 000 QUOK</b>
            </p>
            <p data-proc="8">
              <FiPlusCircle fontSize={20} />
              8% from <b>100 000 QUOK</b>
            </p>
            <p data-proc="10">
              <FiPlusCircle fontSize={20} />
              10% from <b>300 000 QUOK</b>
            </p>
            <p data-proc="15">
              <FiPlusCircle fontSize={20} />
              15% from <b>500 000 QUOK</b>
            </p>
            <p data-proc="20">
              <FiPlusCircle fontSize={20} />
              20% from <b>1 000 000 QUOK</b>
            </p>
          </div>
        </div>
        <div
          className="acc_window one_ls aos-init aos-animate"
          data-aos="zoom-in"
        >
          <div>
            <div className="name_page">Buy QUOK</div>
          </div>
          <div className="flex_colum buy_info">
            <div className="amo_pay">
              <p>Price</p>
              <div>
                <p>1 QUOK</p>
                <FaExchangeAlt />
                <p>$ 0.004</p>
              </div>
            </div>
            <div className="form-group sel_ncy">
              <p>Choose currency</p>
              <div
                className="select_currency select_custom"
                data-curr="bnb"
                data-simple-curr="bnb"
              >
                <p>
                  <b>BNB(Binance Coin)</b>
                  <FaCaretSquareDown />
                </p>
                <div className="list_currs list_custom">
                  <p data-curr="busd" data-simple-curr="busd">
                    BUSD(BEP20)
                  </p>
                  <p data-curr="btc" data-simple-curr="btc">
                    BTC(Bitcoin)
                  </p>
                  <p data-curr="eth" data-simple-curr="eth">
                    ETH(Ethereum)
                  </p>
                  <p data-curr="ltc" data-simple-curr="ltc">
                    LTC(Litecoin)
                  </p>
                  <p data-curr="usdttrc" data-simple-curr="usdt">
                    USDT(TRC20)
                  </p>
                  <p data-curr="usdtbep" data-simple-curr="usdt">
                    USDT(BEP20)
                  </p>
                  <p data-curr="usdterc" data-simple-curr="usdt">
                    USDT(ERC20)
                  </p>
                </div>
              </div>{" "}
            </div>
            <div className="form-group form_buy">
              <p>Amount QUOK</p>
              <div className="form-field">
                <input
                  className="form-control"
                  type="number"
                  name="amount"
                  maxlength="20"
                  value="10000"
                />
                <img src={coin} alt="coin" />
              </div>
              <span>(Min deposit 10000 QUOK)</span>
            </div>
            <div className="amo_pay">
              <p>Amount to pay</p>
              <div className="calc_pay">
                <p className="crypto_val">0.163298 BNB</p>
                <FaExchangeAlt />
                <p className="usd_vals">$ 40</p>
              </div>
            </div>
            <div className="amo_pay">
              <p>You will receive</p>
              <div className="receive_t">10000 QUOK</div>
            </div>
            <a className="grad_button">confirm</a>
          </div>
        </div>
      </div>
    </>
  );
}
