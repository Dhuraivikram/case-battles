import React from "react";
import { LuSwords } from "react-icons/lu";
import img02 from "../assets/image2.png";

import img03 from "../assets/img03.png";

import img04 from "../assets/img04.jpg";

import img05 from "../assets/img05.jpg";

const BattleList = () => {
  const battles = [
    {
      id: 1,
      type: "Crazy",
      cases: 20,
      cost: "$85.00",
      status: "join",
      icons: 4,
    },
    {
      id: 2,
      type: "Normal",
      cases: "20",
      cost: "$85.00",
      status: "watch",
      icons: 2,
    },
    {
      id: 3,
      type: "Crazy",
      cases: "12",
      cost: "$85.00",
      status: "watch",
      icons: 6,
    },
    {
      id: 4,
      type: "Normal",
      cases: "END",
      cost: "$85.00",
      status: "replay",
      unboxed: "$256.35",
    },
  ];

  return (
    <>
      <main className="flex-1 p-8 overflow-y-auto mb-6">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-white text-base font-bold flex items-center gap-3">
            <LuSwords className="text-gray-500" size={20} /> Case Battles
          </h1>
          <div className="flex gap-2">
            <button className="bg-[#1a2029] text-green-400 px-4 py-2 rounded font-bold text-xs border border-green-900/30">
              Price
            </button>
            <button className="bg-[#1a2029] text-gray-300 px-4 py-2 rounded font-bold text-xs">
              Newest
            </button>
            <button className="bg-green-500 text-black px-6 py-2 rounded font-black text-xs uppercase flex items-center gap-2">
              <LuSwords size={16} /> Create
            </button>
          </div>
        </div>

        {/* Battle List */}
        <div className="space-y-4">
          {battles.map((battle) => (
            <div
              key={battle.id}
              className="bg-[#11151d] rounded-xl p-4 border border-gray-800 flex  gap-6"
            >
              {/* Mode Info */}
              <div className="  w-36 ">
                <div className="flex justify-center  gap-2 mb-3  ">
                      <div
                  className={`text-[8px] font-bold uppercase px-2 py-0.5 rounded self-start ${
                    battle.type === "Crazy"
                      ? "bg-red-500/20 text-red-400"
                      : "bg-blue-500/20 text-blue-400"
                  }`}
                >
                  {battle.type}
                </div>
                <div className="flex  gap-1 text-[9px] font-bold text-gray-500">
                  <LuSwords size={12} /> {battle.cases} CASES
                </div>
                </div>
              
                <div className="flex flex-1 gap-1 justify-center ">
                  <div className=" bg-[#1a2029] rounded-lg border border-gray-800 flex items-center justify-center">
                  
                    <img src={img03} alt="" className="rounded-lg"  />
                   
                  </div>
                    <LuSwords size={30} className="text-blue-400/50" />
                   <div className=" bg-[#1a2029] rounded-lg border border-gray-800 flex items-center justify-center">
                     <img src={img05} alt="" className="rounded-lg"  />
                  </div>
                    <LuSwords size={30} className="text-blue-400/50" />

                   <div className=" bg-[#1a2029] rounded-lg border border-gray-800 flex items-center justify-center">
                     <img src={img04} alt="" className="rounded-lg"  />
                  </div>
                </div>
              </div>

              {/* Icons Placeholder */}
              <div className="flex flex-1 gap-2 overflow-hidden">
                {[...Array(battle.icons || 4)].map((_, i) => (
                  <div
                    key={i}
                    className="max-w-[60px] h-[60px] bg-[#1a2029] rounded-lg border border-gray-800 flex items-center justify-center"
                  >
                   <img src={img02} alt=""  className=""  />
                  </div>
                ))}
              </div>

              {/* Cost and Action */}
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <div className="flex items-center justify-center">
                    <p className="text-[10px] text-gray-500 font-bold bg-[#1a2029] p-1 rounded-sm">
                      COST: <span className="text-white">{battle.cost}</span>{" "}
                    </p>

                    <button className="bg-red-500 hover:bg-red-600 text-black mx-3 px-4 py-1.5 rounded-sm text-xs font-bold transition">
                      Join
                    </button>
                  </div>
                  {battle.unboxed && (
                    <p className="text-[10px] text-green-400 mt-1 font-bold italic">
                      UNBOXED: {battle.unboxed}
                    </p>
                  )}
                </div>

                {/* <ActionButton status={battle.status} /> */}
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default BattleList;
