import { useState } from "react";

function Header() {
  return (
    <header className="header-1">
        <nav>
            <div className="logo">
                <img src="src/assets/farmer-hat.png" alt="Logo"/>
            </div>
            <div className="title">My Website</div>
        </nav>
    </header>
  );
}

export default Header;