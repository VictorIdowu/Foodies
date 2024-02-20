import Link from "next/link";
import React from "react";
import LogoImg from "@/assets/logo.png";
import classes from "./MainHeader.module.css";
import Image from "next/image";
import MainHeaderBg from "./MainHeaderBg";

const Nav = [
  { text: "Browse Meals", url: "/meals" },
  { text: "Foodies Community", url: "/community" },
];

const MainHeader = () => {
  return (
    <>
      <MainHeaderBg />
      <header className={classes.header}>
        <Link className={classes.logo} href={"/"}>
          <Image src={LogoImg} alt="App logo" />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            {Nav.map((item, i) => (
              <li key={i + 1}>
                <Link href={item.url}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
