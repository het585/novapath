import React from 'react';

interface BottomNavProps {
  currentTab: string;
  onSelectTab: (tab: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentTab, onSelectTab }) => {
  const tabs = [
    {
      id: 'explore',
      label: 'Explore',
      icon: 'auto_awesome'
    },
    {
      id: 'streams',
      label: 'Streams',
      icon: 'explore'
    },
    {
      id: 'mentors',
      label: 'Mentors',
      icon: 'smart_toy'
    },
    {
      id: 'roadmap',
      label: 'Roadmap',
      icon: 'hub'
    }
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 pb-3 pointer-events-none">
      <div className="max-w-md mx-auto px-4 pointer-events-auto">
        <div className="flex justify-around items-center h-16 rounded-full bg-[#211c36]/95 backdrop-blur-xl border border-[#36314d]/80 shadow-[0_8px_32px_rgba(0,0,0,0.55)] px-2">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => onSelectTab(tab.id)}
                className={`flex flex-col items-center justify-center gap-0.5 min-w-[56px] h-12 transition-all duration-200 ${
                  isActive
                    ? 'text-[#00f5d4] drop-shadow-[0_0_12px_rgba(0,245,212,0.6)] font-bold scale-105'
                    : 'text-[#b9cac4] hover:text-[#d7fff3]'
                }`}
              >
                <span
                  className="material-symbols-outlined text-[22px]"
                  style={isActive ? { fontVariationSettings: "'FILL' 1, 'wght' 600" } : undefined}
                >
                  {tab.icon}
                </span>
                <span className="font-label-sm text-[11px] tracking-tight">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
