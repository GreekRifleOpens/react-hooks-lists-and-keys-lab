import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const solids = links.map((link) => (
    <a key={link} href={"#" + link}>
      {link}
    </a>
  ));

  return <nav>{solids}</nav>;
}

export default NavBar;
