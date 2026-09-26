import React from 'react';

interface RoadmapViewProps {
  xp: number;
  level: number;
  onOpenPeaceTreaty: () => void;
  onOpenRadar: () => void;
}

export const RoadmapView: React.FC<RoadmapViewProps> = ({
  xp,
  level,
  onOpenPeaceTreaty,
  onOpenRadar
}) => {
  const milestones = [
    {
      grade: 'Class 6–7',
      title: 'Curiosity Spark & Wonder',
      status: 'completed',
      badge: 'Spark Pioneer',
      desc: 'Discovered hidden aptitudes across building, robotics, and creative arts.'
    },
    {
      grade: 'Class 8–9',
      title: 'Micro-Quests & Aptitude Trials',
      status: 'in-progress',
      badge: 'Orion Cadet',
      desc: 'Testing simulated careers under low-pressure scenarios with real-time XP accumulation.'
    },
    {
      grade: 'Class 10',
      title: 'Stream Lock & Board Harmony',
      status: 'upcoming',
      badge: 'Critical Waypoint',
      desc: 'Finalize CBSE/ISC/IB subject combinations and present the Parent-Student Peace Treaty.'
    },
    {
      grade: 'Class 11–12',
      title: 'Specialized Flight & Competitions',
      status: 'future',
      badge: 'Orbit Achiever',
      desc: 'Master selected stream, build a standout portfolio, and target top universities.'
    }
  ];

  const badges = [
    {
      icon: 'radar',
      name: 'Radar Calibrated',
      desc: 'Aptitude mapped across 5 dimensions',
      unlocked: true,
      color: 'text-[#00f5d4]'
    },
    {
      icon: 'military_tech',
      name: 'Orion Cadet',
      desc: 'Earned 300+ Cosmic Experience Points',
      unlocked: true,
      color: 'text-[#ffba27]'
    },
    {
      icon: 'handshake',
      name: 'Peace Ambassador',
      desc: 'Generated parent briefing packet',
      unlocked: true,
      color: 'text-[#ffd48b]'
    },
    {
      icon: 'rocket_launch',
      name: 'Stream Vanguard',
      desc: 'Completed all 3 simulator scenarios',
      unlocked: xp >= 400,
      color: 'text-[#ffb2bb]'
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden pb-24 px-4 pt-4 gap-5">
      {/* Header */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00f5d4] text-[22px]">hub</span>
          <span className="font-label-sm text-xs text-[#00f5d4] uppercase tracking-wider font-bold">
            Flight Trajectory & Constellations
          </span>
        </div>
        <h1 className="font-headline-md text-2xl text-[#e6deff] font-extrabold leading-tight">
          Your Personal Discovery Orbit
        </h1>
        <p className="font-body-sm text-xs text-[#b9cac4]">
          Track your developmental progress from middle school wonder to high school stream mastery.
        </p>
      </div>

      {/* Level & XP Constellation Banner */}
      <div className="p-4 rounded-2xl bg-[#211c36] border border-[#00f5d4]/40 flex flex-col gap-3 shadow-lg relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#140f29] border border-[#36314d] flex items-center justify-center text-[#ffba27] text-2xl">
              ✦
            </div>
            <div className="flex flex-col">
              <span className="font-label-lg text-sm text-[#e6deff] font-bold">
                Level {level} Orion Cadet
              </span>
              <span className="text-xs text-[#00f5d4]">{xp} / 600 Cosmic XP</span>
            </div>
          </div>
          <span className="px-3 py-1 rounded-full bg-[#36314d] text-[#ffd48b] text-xs font-bold">
            Rank #42
          </span>
        </div>

        {/* XP Bar */}
        <div className="w-full h-2.5 rounded-full bg-[#140f29] overflow-hidden p-0.5">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#00f5d4] to-[#ffba27] transition-all duration-500"
            style={{ width: `${Math.min(100, (xp / 600) * 100)}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-[11px] text-[#b9cac4]">
          <span>Current Orbit: Class 8–9</span>
          <span className="text-[#ffd48b] font-medium">Next Milestone: Class 10 Stream Selection</span>
        </div>
      </div>

      {/* Unlocked Badges */}
      <div className="flex flex-col gap-2.5">
        <h3 className="font-label-lg text-xs text-[#b9cac4] uppercase tracking-wider font-bold">
          Constellation Badges
        </h3>
        <div className="grid grid-cols-2 gap-2.5">
          {badges.map((b, i) => (
            <div
              key={i}
              className={`p-3 rounded-xl border flex flex-col gap-1.5 transition-all ${
                b.unlocked
                  ? 'bg-[#2b2641] border-[#36314d] shadow-sm'
                  : 'bg-[#140f29] border-[#36314d]/40 opacity-50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`material-symbols-outlined text-[20px] ${b.color}`}>
                  {b.icon}
                </span>
                <span className="text-[10px] text-[#83948f]">
                  {b.unlocked ? 'Unlocked' : 'Locked'}
                </span>
              </div>
              <span className="font-label-md text-xs text-[#e6deff] font-bold">{b.name}</span>
              <p className="font-body-sm text-[11px] text-[#b9cac4] leading-tight">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Milestones */}
      <div className="flex flex-col gap-3">
        <h3 className="font-label-lg text-xs text-[#b9cac4] uppercase tracking-wider font-bold">
          Grade Roadmap Stages
        </h3>

        <div className="relative pl-6 flex flex-col gap-4 border-l-2 border-[#36314d] ml-3">
          {milestones.map((m, idx) => {
            const isCompleted = m.status === 'completed';
            const isInProgress = m.status === 'in-progress';
            return (
              <div key={idx} className="relative flex flex-col gap-1">
                {/* Timeline node */}
                <div
                  className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 border-[#140f29] ${
                    isCompleted
                      ? 'bg-[#00f5d4]'
                      : isInProgress
                      ? 'bg-[#ffba27] animate-pulse ring-4 ring-[#ffba27]/20'
                      : 'bg-[#36314d]'
                  }`}
                />

                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold text-[#00f5d4]">{m.grade}</span>
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                      isCompleted
                        ? 'bg-[#00f5d4]/10 text-[#00f5d4]'
                        : isInProgress
                        ? 'bg-[#ffba27]/10 text-[#ffba27]'
                        : 'bg-[#211c36] text-[#83948f]'
                    }`}
                  >
                    {m.badge}
                  </span>
                </div>

                <h4 className="font-label-lg text-sm text-[#e6deff] font-bold">{m.title}</h4>
                <p className="font-body-sm text-xs text-[#b9cac4] leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Family Peace Treaty Quick Card */}
      <div className="p-4 rounded-xl bg-[#211c36] border border-[#ffd48b]/40 flex flex-col gap-2.5 shadow-md">
        <div className="flex items-center gap-2 text-[#ffd48b]">
          <span className="material-symbols-outlined text-[20px]">handshake</span>
          <span className="font-label-md text-xs font-bold uppercase">Family Treaty Action</span>
        </div>
        <p className="text-xs text-[#b9cac4]">
          Ready to review your stream trajectory with your parents? Open the objective data-backed report.
        </p>
        <button
          type="button"
          onClick={onOpenPeaceTreaty}
          className="w-full h-11 rounded-lg bg-[#ffd48b] text-[#271900] font-bold text-xs flex items-center justify-center gap-1.5 hover:opacity-90 active:scale-98 transition-all"
        >
          <span>Generate Peace Treaty Briefing</span>
          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </div>
    </div>
  );
};
