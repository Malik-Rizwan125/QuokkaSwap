export default function RaferalsComponent() {
  return (
    <>
      <div className="container mx-auto accoint_content_bar">
        <div className="acc_window one_ls aos-init aos-animate" data-aos="zoom-in">
          <div>
            <div className="name_page">Referral Program</div>
          </div>
          <div className="flex_colum reff_prog">
            Post your referral link on social networks, forward your link to a
            friend, earn up to 10% for each deposit of your referral. The
            referral program does not apply to Airdrop.
          </div>
        </div>
        <div className="acc_window one_ls aos-init aos-animate" data-aos="zoom-in">
          <div>
            <div className="name_page">information</div>
          </div>
          <div className="flex_colum">
            <div className="profile_info">
              <p>Referrals</p>
              <p>
                <i className="far fa-user-friends"></i>no referrals
              </p>
            </div>
            <div className="profile_info profit_inf">
              <p>Profit</p>
              <p>
                <i className="fal fa-envelope-open-dollar"></i> 0,00 QUOK{" "}
                <span>($ 0,00)</span>{" "}
              </p>
            </div>
            <div className="profile_info">
              <p>Referral link</p>
              <p className="copy_val">
                <i className="far fa-link"></i>
                <span className="copied">https://quokkaswap.com/r/89749</span>
              </p>
            </div>
          </div>
        </div>
        <div className="acc_window all_ls aos-init aos-animate" data-aos="zoom-in">
          <div>
            <div className="name_page">referral list</div>
          </div>
          <div className="refferal_list pad_b_0" id="referrals_">
            <div className="table_bouties referrals_table ">
              <div className="rd_bounti">
                <div className="flex flex-row justify-between sm:w-3/5  sm:mr-5">
                <div className="mr-5">Username</div>
                <div>Registration date</div>
                </div>
                <div className="flex flex-row justify-between sm:w-3/5 mt-3 md:mt-0 mr-0 sm:mr-10">
                <div className="mr-5">Total Bought</div>
                <div>Profit</div>
                </div>
              </div>
              <p className="trans_no">No data</p>
            </div>
            <div className="pages_numbers"></div>
          </div>
        </div>
      </div>
    </>
  );
}
