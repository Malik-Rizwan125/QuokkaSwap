import coin from "../../assets/images/coin_1.png";
export default function StackingComponent() {
  return (
    <>
      <div class="container mx-auto accoint_content_bar">
        <div class="acc_window all_ls aos-init aos-animate" data-aos="zoom-in">
          <div>
            <div class="name_page">Staking</div>
          </div>
          <div>
            <div class="staking_account">
              <div class="options_time_staking">
                <div>
                  <p>1 Month</p>
                  <p>4.00% per month</p>
                </div>
                <div>
                  <p>3 Month</p>
                  <p>15.00% per month</p>
                </div>
                <div>
                  <p>6 Month</p>
                  <p>35.00% per month</p>
                </div>{" "}
              </div>
              <div class="select_time_staking">
                <p>to</p>
                <div class="staking_skew">
                  <div class="select_mounth" data-id="8">
                    <span>1 Month</span>
                  </div>
                  <div data-id="9">
                    <span>3 Month</span>
                  </div>
                  <div data-id="10">
                    <span>6 Month</span>
                  </div>{" "}
                </div>
              </div>
              <div class="count_staking text-end">
                <p>
                  <span>Amount Stake</span>{" "}
                  <span>
                    Balance: <span>0,00 </span>QUOK
                  </span>
                </p>
                <div class="staking_skew">
                  <img alt="coin" src={coin} />
                  <input placeholder="Enter amount" name="staking" />
                </div>
              </div>
              <a class="grad_button">earn now</a>
            </div>
          </div>
        </div>
        <div class="acc_window all_ls aos-init aos-animate" data-aos="zoom-in">
          <div>
            <div class="name_page">my stakings</div>
          </div>
          <div class="staking_list pad_b_0" id="stakings_">
            <div class="table_bouties staking_table">
              <div class="rd_bounti">
                <div>Start time</div>
                <div>Amount</div>
                <div>Earnings</div>
                <div>Total</div>
                <div>End time</div>
                <div>Program</div>
                <div>Status</div>
              </div>
              <p class="trans_no">No data</p>
            </div>
            <div class="pages_numbers"></div>
          </div>
        </div>
      </div>
    </>
  );
}
