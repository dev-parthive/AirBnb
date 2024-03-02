import React from "react";
import Container from "../Container/Container";
import Logo from "./Logo";
import Search from "./Search";
import MenuDropDown from "./MenuDropDown";

function Navbar() {
  return (
    <div className="fixed z-10 bg-white w-full  shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="navbar flex items-center justify-between md:gap-3 gap-0">
            <div className=" w-28">
              <Logo className="w-full"></Logo>
            </div>
            <div>
              <Search></Search>
            </div>
            <div>
              <MenuDropDown></MenuDropDown>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Navbar;
