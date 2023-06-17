import { TeamData } from "../../constant/AppData";
import teamPattern from "../../assets/images/svg3.svg";
export default function TeamSection() {
  return (
    <>
      <div className="tea-section py-28">
        <h2 className="font-bold text-[2rem] leading-[1.4] text-center mb-10">
          Team
        </h2>
        <div class="section__defipulse teams_ relative z-10">
          {TeamData.map((item, index) => {
            return (
              <div className="team-member aos-init aos-animate" key={index}>
                <div className="team-photo">
                  <img src={item.imgSrc} alt="team" />
                  <a className="expand-trigger"></a>
                </div>
                <div className="team-info">
                  <h5 className="team-name">{item.firstName}</h5>
                  <h5 className="team-name">{item.lastName}</h5>
                  <span className="team-title">{item.designation}</span>
                  <ul className="team-social">
                    <li>
                      <a href={item.linkedIn} target="_blank">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="1em"
                          viewBox="0 0 448 512"
                          fill="#5181FD"
                          className="text-[22px]"
                        >
                          <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
          <img class="pattern pattern-3" src={teamPattern} />
        </div>
      </div>
    </>
  );
}
