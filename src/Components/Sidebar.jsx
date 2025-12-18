import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-50  border-r border-white/5">
      <h1 className="px-6 py-4 text-xl font-semibold border-b w-full h-16 border-white/5">
        <FaArrowLeft className="mt-2 text-lg hover:text-green-500" />
      </h1>
      <nav className="space-y-1 px-3 mt-1">
        <button className="w-full text-left px-4 py-2 rounded-lg bg-emerald-500/10 hover:text-emerald-400 border bg-  border-green-500 ">
          Games
        </button>

        {["Battles", "Cases", "Upgrader", "Mines", "Blackjack"].map((item) => (
          <button
            key={item}
            onClick={() => setOpen(true)}
            className="w-full text-left px-4 py-2 rounded-lg hover:bg-emerald-500/10 hover:text-emerald-400  "
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
