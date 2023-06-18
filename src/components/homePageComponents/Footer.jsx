import logo from "../../assets/images/quokka_1.png";
import telegram from "../../assets/images/telegram.png";
import twitter from "../../assets/images/twitter.png";
import facebook from "../../assets/images/facebook.png";
import youtube from "../../assets/images/youtube.png";
export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="shadow_div"></div>
        <div className="container mx-auto">
          <div className="footer__top"></div>

          <div className="footer__bottom">
            <ul className="footer__secondarylink">
              <li className="perlinlink">
                <a>
                  <img src={logo} />
                  <div className="perlinlink__text">
                    <p>QuokkaSwap</p>
                    <span>Projects</span>
                  </div>
                </a>
              </li>
            </ul>
            <ul className="footer_links">
              <li>
                <a target="_blank" href="https://t.me/QuokkaSwapChat">
                  <img alt="telegram" src={telegram} />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://twitter.com/QuokkaSwap">
                  <img alt="twitter" src={twitter} />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/groups/1147092916241705"
                >
                  <img alt="facebook" src={facebook} />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.youtube.com/@QuokkaSwap/">
                  <img alt="youtube" src={youtube} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
