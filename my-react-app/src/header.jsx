import { useState } from "react";

function Header() {
  return (
    <header className="bg-green-600 p-4 text-white">
      <nav className="max-w-6xl mx-auto flex items-center">
        <div className="bg-white rounded-full p-2 mr-4 flex items-center justify-center w-12 h-12">
          <img src="src/assets/farmer-hat.png" alt="Logo" className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-black text-2xl font-bold">To-Do List</h1>
          <div className="text-white/90 text-sm ">My Website</div>
        </div>
      </nav>
    </header>
  );
}

export default Header;