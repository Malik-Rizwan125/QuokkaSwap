export default function RaferalsComponent() {
  return (
    <>
      <div class="accoint_content_bar">
        <div class="acc_window one_ls aos-init aos-animate" data-aos="zoom-in">
          <div>
            <div class="name_page">Referral Program</div>
          </div>
          <div class="flex_colum reff_prog">
            Post your referral link on social networks, forward your link to a
            friend, earn up to 10% for each deposit of your referral. The
            referral program does not apply to Airdrop.
          </div>
        </div>
        <div class="acc_window one_ls aos-init aos-animate" data-aos="zoom-in">
          <div>
            <div class="name_page">information</div>
          </div>
          <div class="flex_colum">
            <div class="profile_info">
              <p>Referrals</p>
              <p>
                <i class="far fa-user-friends"></i>no referrals
              </p>
            </div>
            <div class="profile_info profit_inf">
              <p>Profit</p>
              <p>
                <i class="fal fa-envelope-open-dollar"></i> 0,00 QUOK{" "}
                <span>($ 0,00)</span>{" "}
              </p>
            </div>
            <div class="profile_info">
              <p>Referral link</p>
              <p class="copy_val">
                <i class="far fa-link"></i>
                <span class="copied">https://quokkaswap.com/r/89749</span>
              </p>
            </div>
          </div>
        </div>
        <div class="acc_window all_ls aos-init aos-animate" data-aos="zoom-in">
          <div>
            <div class="name_page">referral list</div>
          </div>
          <div class="refferal_list pad_b_0" id="referrals_">
            <div class="table_bouties referrals_table ">
              <div class="rd_bounti">
                <div>Username</div>
                <div>Registration date</div>
                <div>Total Bought</div>
                <div>Profit</div>
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
