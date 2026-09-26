import React, { useState } from 'react';

interface HeaderProps {
  currentTab: string;
  xp: number;
  level: number;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, xp, level }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const notifications = [
    {
      id: 1,
      icon: 'radar',
      title: 'Passion Radar calibrated',
      time: '12m ago',
      desc: 'Spatial & Mechanical aptitude scored in the 98th percentile!'
    },
    {
      id: 2,
      icon: 'psychology',
      title: 'Counselor Arya sent notes',
      time: '2h ago',
      desc: 'Summary: CBSE PCB + Graphic Design combination analysis'
    },
    {
      id: 3,
      icon: 'group',
      title: 'New Teen Mentor Session',
      time: '1d ago',
      desc: 'Tara Deshmukh (NID) is holding a Q&A on Design vs Science'
    }
  ];

  const getTabLabel = (tab: string) => {
    switch (tab) {
      case 'explore':
        return 'Explore';
      case 'streams':
        return 'Stream Matcher';
      case 'mentors':
        return 'Mentors & AI';
      case 'roadmap':
        return 'My Trajectory';
      default:
        return 'Explore';
    }
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-40 bg-[#0f0a24]/90 backdrop-blur-xl border-b border-[#36314d]/40 shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
        <div className="max-w-2xl mx-auto h-16 px-4 flex items-center justify-between">
          {/* Logo & Brand Zone */}
          <div className="flex items-center gap-2">
            <img
              alt="NovaPath Logo"
              className="h-8 w-8 object-contain drop-shadow-[0_0_8px_rgba(0,245,212,0.4)]"
              src="https://lh3.googleusercontent.com/aida/AEtjO1XKVPeg_uUq8J_Z26MXEydkTCDLFeB_A_opYyX6mWeslwgEBmEaXZACkrFUoPWinezXfa1zPfndswv9m6caQOc_6UwHSfaY39NTktjn_6YPXKBOpZfjUaS2IqzbmgMgnDNzl9Fvc9y92alk-dy8BRAur-SVbOgKEyZTPPYWlfvQzRWVgoBLx1wyGhPC858-ISC0s8DJlhMj9r_-q8ftQ8_FYVMEMSxMSBrKMFnhLdB9BqfXKAuBI0PQw9o"
            />
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-headline-sm text-lg text-[#00f5d4] tracking-tight leading-none font-bold">
                  NovaPath
                </span>
                <span className="px-1.5 py-0.5 rounded-full bg-[#2b2641] text-[#d7fff3] font-label-sm text-[10px] uppercase tracking-wider font-semibold">
                  Class 6–10
                </span>
              </div>
              <span className="font-label-sm text-[11px] text-[#b9cac4] truncate max-w-[130px]">
                {getTabLabel(currentTab)}
              </span>
            </div>
          </div>

          {/* Right Actions: XP Counter, Notifications, Avatar */}
          <div className="flex items-center gap-2">
            {/* Live XP Pill */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#211c36] border border-[#36314d] text-xs font-semibold">
              <span className="text-[#ffba27]">✦</span>
              <span className="text-[#ffd48b]">{xp} XP</span>
              <span className="text-[#83948f]">·</span>
              <span className="text-[#00f5d4]">Lvl {level}</span>
            </div>

            {/* Notification Bell */}
            <button
              type="button"
              aria-label="Notifications"
              onClick={() => {
                setShowNotifications(!showNotifications);
                setHasUnread(false);
              }}
              className="relative w-10 h-10 rounded-full flex items-center justify-center text-[#b9cac4] hover:text-[#00f5d4] hover:bg-[#211c36] transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              {hasUnread && (
                <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-[#00f5d4] shadow-[0_0_8px_rgba(0,245,212,0.9)] animate-pulse"></span>
              )}
            </button>

            {/* Student Avatar */}
            <button
              type="button"
              aria-label="Student Profile"
              onClick={() => setShowProfile(true)}
              className="w-9 h-9 rounded-full p-0.5 flex items-center justify-center ring-1 ring-[#00f5d4]/40 hover:ring-[#00f5d4] transition-all overflow-hidden"
            >
              <img
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcvbfm1axId87ZXxPDIUzMPksebffbwk2AM5MKU6HAggMI_oyUXLnDMzk9B8Vkv78-Ttjrzs15ig5SawpJm-SxedeowVnLAOl1CHFEpcJD_g3LfJ0jGBZfjzsEhAXJiwIR_rEzDslzNYeJ9vPXz1wr65m6Qds-b-KTSVrgpR83Ge99v-XsOivi3MprWHCmbYibJTfuAHQyENDGg-CzCuXT9aKA7IBeZv-5WAMy1ZIkzuzdlsiXJafS"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Notifications Popover Dropdown */}
      {showNotifications && (
        <div className="fixed inset-0 z-50 flex justify-end p-4 pt-16 bg-black/40 backdrop-blur-xs" onClick={() => setShowNotifications(false)}>
          <div
            className="w-full max-w-sm rounded-2xl bg-[#211c36] border border-[#36314d] p-4 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-4 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#36314d]">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#00f5d4] text-[18px]">notifications</span>
                <span className="font-label-lg text-sm text-[#e6deff] font-bold">Flight Dispatch Logs</span>
              </div>
              <button
                type="button"
                onClick={() => setShowNotifications(false)}
                className="text-xs text-[#b9cac4] hover:text-[#e6deff]"
              >
                Close
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {notifications.map((n) => (
                <div key={n.id} className="p-2.5 rounded-xl bg-[#140f29]/80 border border-[#36314d]/50 flex gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[#2b2641] text-[#00f5d4] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[16px]">{n.icon}</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-label-md text-xs text-[#e6deff] font-semibold truncate">{n.title}</span>
                      <span className="text-[10px] text-[#83948f] shrink-0">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-[#b9cac4] leading-relaxed line-clamp-2 mt-0.5">{n.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Profile Modal */}
      {showProfile && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowProfile(false)}>
          <div
            className="w-full max-w-md rounded-2xl bg-[#211c36] border border-[#36314d] p-5 shadow-2xl flex flex-col gap-4 animate-in zoom-in-95 duration-150"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-label-lg text-sm text-[#00f5d4] font-bold">Cosmic Cadet Profile</span>
              <button
                type="button"
                onClick={() => setShowProfile(false)}
                className="w-8 h-8 rounded-full bg-[#140f29] text-[#b9cac4] hover:text-[#e6deff] flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-[#140f29]">
              <img
                alt="Profile"
                className="w-14 h-14 rounded-full object-cover ring-2 ring-[#00f5d4]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcvbfm1axId87ZXxPDIUzMPksebffbwk2AM5MKU6HAggMI_oyUXLnDMzk9B8Vkv78-Ttjrzs15ig5SawpJm-SxedeowVnLAOl1CHFEpcJD_g3LfJ0jGBZfjzsEhAXJiwIR_rEzDslzNYeJ9vPXz1wr65m6Qds-b-KTSVrgpR83Ge99v-XsOivi3MprWHCmbYibJTfuAHQyENDGg-CzCuXT9aKA7IBeZv-5WAMy1ZIkzuzdlsiXJafS"
              />
              <div className="flex flex-col">
                <span className="font-headline-sm text-base text-[#e6deff] font-bold">Aarav Patel</span>
                <span className="text-xs text-[#00f5d4]">Grade 9 Cadet • Delhi Public School</span>
                <span className="text-[11px] text-[#b9cac4] mt-0.5">Focus: Spatial Architecture & PCM</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-[#2b2641]">
                <div className="text-lg font-bold text-[#ffba27]">{xp}</div>
                <div className="text-[10px] text-[#b9cac4]">Cosmic XP</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#2b2641]">
                <div className="text-lg font-bold text-[#00f5d4]">Lvl {level}</div>
                <div className="text-[10px] text-[#b9cac4]">Orion Cadet</div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#2b2641]">
                <div className="text-lg font-bold text-[#ffb2bb]">3</div>
                <div className="text-[10px] text-[#b9cac4]">Quests Solved</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#140f29] flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#b9cac4]">Linked Parent Portal:</span>
                <span className="text-[#00f5d4] font-medium">Sync Active (Mom & Dad)</span>
              </div>
              <p className="text-[11px] text-[#83948f]">
                Parent summary reports generate clean, anxiety-free stream briefings with 0% jargon.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowProfile(false)}
              className="w-full h-11 rounded-xl bg-[#00f5d4] text-[#0f0a24] font-bold text-sm hover:opacity-90 active:scale-98 transition-all"
            >
              Back to Cockpit
            </button>
          </div>
        </div>
      )}
    </>
  );
};
