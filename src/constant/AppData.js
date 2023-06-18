export const NavbarData = [
  {
    id: 1,
    title: "home",
  },
  {
    id: 2,
    title: "Buy",
  },
  {
    id: 3,
    title: "wallet",
  },
  {
    id: 4,
    title: "staking",
  },
  {
    id: 5,
    title: "referral",
  },

];

// Takenomics data

export const TakenomicsData = [
  {
    id: 1,
    title: "Token Name",
    subTitle: "Quokka",
  },
  {
    id: 2,
    title: "Token Symbol",
    subTitle: "QUOK",
  },
  {
    id: 3,
    title: "Token Type",
    subTitle: "BEP-20",
  },
  {
    id: 4,
    title: "DECIMALS",
    subTitle: "18",
  },
  {
    id: 5,
    title: "Total Supply",
    subTitle: "1 000 000 000",
  },
  {
    id: 6,
    title: "Quokka Price",
    subTitle: "0.004 USD",
  },
  {
    id: 7,
    title: "Contract",
    subTitle: "0xDf34f62a90717bAc9067A1b9eb49f5e7419FdC7f",
  },
];

// Team Data
import member1 from "../assets/images/1.jpg";
import member2 from "../assets/images/2.jpg";
import member3 from "../assets/images/3.jpg";
import member4 from "../assets/images/4.jpg";
import member5 from "../assets/images/5.jpg";
import member6 from "../assets/images/6.jpg";
import member7 from "../assets/images/7.jpg";
export const TeamData = [
  {
    id: 1,
    imgSrc: member1,
    firstName: "Lucas",
    lastName: "Ollson",
    designation: "Founder & Project Lead",
    linkedIn: "https://www.linkedin.com/in/lucas-o-513941247/",
  },
  {
    id: 2,
    imgSrc: member2,
    firstName: "Bernard",
    lastName: "Groot",
    designation: "Backend Developer",
    linkedIn: "https://www.linkedin.com/in/lucas-o-513941247/",
  },
  {
    id: 3,
    imgSrc: member3,
    firstName: "Allaert",
    lastName: "Bosma",
    designation: "Frontend Developer",
    linkedIn: "https://www.linkedin.com/in/lucas-o-513941247/",
  },
  {
    id: 4,
    imgSrc: member4,
    firstName: "Peter",
    lastName: "Meyer",
    designation: "Head of Marketing",
    linkedIn: "https://www.linkedin.com/in/lucas-o-513941247/",
  },
  {
    id: 5,
    imgSrc: member5,
    firstName: "Hans",
    lastName: "Klein",
    designation: "Marketing Expert",
    linkedIn: "https://www.linkedin.com/in/lucas-o-513941247/",
  },
  {
    id: 6,
    imgSrc: member6,
    firstName: "Dieter",
    lastName: "Schäfer",
    designation: "Communication Lead",
    linkedIn: "https://www.linkedin.com/in/lucas-o-513941247/",
  },
  {
    id: 7,
    imgSrc: member7,
    firstName: "Geritt",
    lastName: "Roelofs",
    designation: "Project Coordinator",
    linkedIn: "https://www.linkedin.com/in/lucas-o-513941247/",
  },
];

// account menu items data
import { BiWallet, BiBadgeCheck, BiGift } from "react-icons/bi";
import {
  FaCoins,
  FaUsers,
  FaAward,
  FaProjectDiagram,
  FaRandom,
  FaCogs,
} from "react-icons/fa";
export const menuItems = [
  {
    href: "/account/",
    className: "account_menu this_menu",
    icon: BiWallet,
    label: "Wallet",
  },
  {
    href: "/account/buy",
    className: "account_menu",
    icon: FaCoins,
    label: "Buy QUOK Token",
  },
  {
    href: "/account/staking",
    className: "account_menu",
    icon: BiBadgeCheck,
    label: "Staking",
  },
  {
    href: "/account/referrals",
    className: "account_menu",
    icon: FaUsers,
    label: "Referrals",
  },
  {
    href: "/account/rewards",
    className: "account_menu",
    icon: FaAward,
    label: "Daily Rewards",
  },
  {
    href: "/account/airdrop",
    className: "account_menu",
    icon: FaProjectDiagram,
    label: "Airdrop",
  },
  {
    href: "/account/bounties",
    className: "account_menu",
    icon: BiGift,
    label: "Bounties",
  },
  {
    href: "/account/transactions",
    className: "account_menu",
    icon: FaRandom,
    label: "Transactions",
  },
  {
    href: "/account/settings",
    className: "account_menu",
    icon: FaCogs,
    label: "Settings",
  },
];
