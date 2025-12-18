import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BattleList from "./BattleList";
import Chats from "./Chats";

const CaseBattle = () => {
  return (
    <div className="flex h-screen bg-[#0b0e14] text-gray-400 font-sans overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col ">
        <div>
          <Header />
        </div>

        {/* CENTER */}
        <main className="">
          <BattleList />
        </main>

        {/* RIGHT */}
       
      </div>
       <Chats />
    </div>
  );
};

export default CaseBattle;
