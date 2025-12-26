import { useState } from "react";

function Header() {
  return (
    <header className="header-1">
        <nav>
            <div className="logo">
                <img src="src/assets/farmer-hat.png" alt="Logo"/>
            </div>
            <div className="title">My Website</div>
            <ul>   
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;