import React from "react";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/50 backdrop-blur-md z-30 ">
      <div className="relative container py-6 flex justify-between transition-all">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
