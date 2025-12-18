import React from "react";

export default function LiveChatPanel() {
  const chats = [
    {
      name: "Jur1",
      level: 56,
      msg: "Yeah i just got a crazy drop",
      avatar: "https://i.pravatar.cc/40?img=1",
      mod: false,
    },
    {
      name: "IRONSIDE",
      level: 72,
      msg: "im up like 500K for this ",
      avatar: "https://i.pravatar.cc/40?img=2",
      mod: false,
    },
    {
      name: "minxxie",
      level: 7,
      msg: "oh damn u think i could get.",
      avatar: "https://i.pravatar.cc/40?img=3",
      mod: false,
    },
    
    {
      name: "baller95",
      level: 32,
      msg: "no begging",
      avatar: "https://i.pravatar.cc/40?img=4",
      mod: false,
    },
    {
      name: "MOD Austinx",
      level: "⭐",
      msg: "Begging in chat will result .",
      avatar: "https://i.pravatar.cc/40?img=5",
      mod: true,
    },
  ];

  return (

     <aside className="w-70  border-l border-white/5">
      <h1 className="px-6 py-4 text-xl font-semibold border-b w-full h-16 border-white/5">

Chats
        
      </h1>
      <nav className="space-y-1 px-3 mt-1">

        {/* Live Rain */}
        <div className="">
          <div className="rounded-2xl border border-yellow-500/30 bg-gradient-to-b from-[#2a2510] to-[#0b1020] p-4 shadow-lg">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-yellow-400 text-xl font-bold">$36.12</p>
                <p className="text-[10px] tracking-widest text-white/60">
                  LIVE RAIN
                </p>
              </div>
              <div className="flex gap-2">
                <button className="bg-green-400 hover:bg-green-500 text-black px-3 py-1.5 rounded-lg text-xs font-bold transition">
                  Join
                </button>
                <button className="bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg text-xs font-bold transition">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-3 space-y-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {chats.map((c, i) => (
            <div
              key={i}
              className="flex gap-3 items-start hover:bg-white/5 p-2 rounded-xl transition"
            >
              {/* Avatar */}
              <div className=" rounded-sm bg-gradient-to-b from-purple-500/60 via-pink-500/40 to-blue-500/60 shadow-lg">
                <img
                  src={c.avatar}
                  alt={c.name}
                  className=" rounded-sm object-cover border border-white/10"
                />
              </div>

              {/* Message */}
              <div className="text-sm w-full overflow-y-auto scrollbar-hide">
                <div className="flex items-center gap-2">
                  <span className="bg-purple-500/20 text-purple-400 text-[10px] px-1.5 py-0.5 rounded font-bold">
                    {c.level}
                  </span>
                  <span
                    className={`font-semibold text-xs truncate max-w-[140px] ${
                      c.mod ? "text-green-400" : "text-white"
                    }`}
                  >
                    {c.name}
                  </span>
                </div>
                {/* Single line message */}
                <p className="text-white/80 text-xs truncate max-w-[240px] mt-0.5">
                  {c.msg}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-3 border-t border-white/10">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3">
            <input
              type="text"
              placeholder="Type your message..."
              className="flex-1 bg-transparent text-sm text-white placeholder:text-white/40 outline-none"
            />
            <button className=" flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
              <span className="text-lg">😂</span>
            </button>
          </div>
        </div>
    

      </nav>
    </aside>
  )
}

    

