import Link from "next/link";
import React from "react";
import LogoImg from "@/assets/logo.png";

const Nav = [
  { text: "Browse Meals", url: "/meals" },
  { text: "Foodies Community", url: "/community" },
];

const MainHeader = () => {
  return (
    <header>
      <Link href={"/"}>
        <img src={LogoImg.src} alt="App logo" />
        NextLevel Food
      </Link>

      <nav>
        <ul>
          {Nav.map((item, i) => (
            <li key={i + 1}>
              <Link href={item.url}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
