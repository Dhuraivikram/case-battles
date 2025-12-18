import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import BattleList from "./BattleList";
import Chats from "./Chats";

const CaseBattle = () => {
  return (
    <div className="bg-[#0b1020]  text-white min-h-screen ">
      <Header />
      <div className="flex ">
        {/* LEFT */}
        <Sidebar />

        {/* CENTER */}
        <main className="flex-1 p-6">
          <BattleList />
        </main>

        {/* RIGHT */}
        <Chats />
      </div>
    </div>
  );
};

export default CaseBattle;
