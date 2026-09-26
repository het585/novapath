import React, { useState } from 'react';
import { AlchemistCard, FlightStage, Quest } from '../../types';
import { ALCHEMIST_CARDS, SIMULATOR_QUESTS, INITIAL_ARYA_REPLY } from '../../data/appData';

interface ExploreViewProps {
  onOpenRadar: () => void;
  onOpenPeaceTreaty: () => void;
  onOpenStreamDetail: (card: AlchemistCard) => void;
  onNavigateTab: (tab: string) => void;
  xp: number;
  level: number;
  onAddXp: (amount: number) => void;
}

export const ExploreView: React.FC<ExploreViewProps> = ({
  onOpenRadar,
  onOpenPeaceTreaty,
  onOpenStreamDetail,
  onNavigateTab,
  xp,
  level,
  onAddXp
}) => {
  const [flightStage, setFlightStage] = useState<FlightStage>('class10');
  const [quests, setQuests] = useState<Quest[]>(SIMULATOR_QUESTS);
  const [questFeedbacks, setQuestFeedbacks] = useState<Record<string, { choice: string; text: string; stream: string }>>({});
  
  // Chat state for Arya
  const [studentQuestion, setStudentQuestion] = useState(
    "I really like biology and drawing, but I hate intense math. Am I doomed in Science?"
  );
  const [aryaReply, setAryaReply] = useState(INITIAL_ARYA_REPLY);
  const [suggestedStreams, setSuggestedStreams] = useState([
    '1. PCB + Fine Arts or Graphic Design (CBSE)',
    '2. Biology + Psychology + Design Media (IB/Cambridge)'
  ]);
  const [customInput, setCustomInput] = useState('');
  const [isAryaThinking, setIsAryaThinking] = useState(false);

  // Handle Quest Choice
  const handleSolveQuest = (questId: string, optionId: string) => {
    const quest = quests.find((q) => q.id === questId);
    if (!quest) return;
    const option = quest.options.find((o) => o.id === optionId);
    if (!option) return;

    const alreadySolved = questFeedbacks[questId];
    if (!alreadySolved) {
      onAddXp(quest.xpReward);
    }

    setQuestFeedbacks((prev) => ({
      ...prev,
      [questId]: {
        choice: option.title,
        text: option.outcome,
        stream: option.streamAffinity
      }
    }));
  };

  // Quick Chips for Arya
  const handleAskPreset = (question: string) => {
    setStudentQuestion(question);
    setIsAryaThinking(true);
    setTimeout(() => {
      setIsAryaThinking(false);
      if (question.includes('Commerce actually boring')) {
        setAryaReply(
          `Not at all! 🚀 Modern Commerce is behind video game economies (Steam, Roblox), sneaker reselling markets, and FinTech apps like Zerodha. With Applied Math, it unlocks quantitative hedge funds and algorithmic market design!`
        );
        setSuggestedStreams([
          '1. Commerce + Applied Math + Informatics Practices',
          '2. Economics + Business + Media Studies'
        ]);
      } else if (question.includes('Coding & History')) {
        setAryaReply(
          `100% yes! 🏛️💻 Computational Humanities and Digital Archaeology are booming fields. Universities like Ashoka, Oxford, and Stanford actively recruit students who can write python scripts to analyze ancient scrolls and simulate historical trade networks.`
        );
        setSuggestedStreams([
          '1. Humanities + Computer Science (CBSE / Cambridge)',
          '2. History HL + Computer Science HL (IB DP)'
        ]);
      } else if (question.includes('strict parents')) {
        setAryaReply(
          `Strict parents usually aren't angry—they are anxious about your safety! When you present raw salary data, university acceptance rates, and verified corporate demand using our Peace Treaty report, their anxiety turns into pride.`
        );
        setSuggestedStreams([
          '1. Download NovaPath Peace Treaty PDF below',
          '2. Book a 15-min session with our teen mentors'
        ]);
      }
    }, 400);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;
    const q = customInput.trim();
    setStudentQuestion(q);
    setCustomInput('');
    setIsAryaThinking(true);

    setTimeout(() => {
      setIsAryaThinking(false);
      setAryaReply(
        `Great question! For "${q}", remember that 11th & 12th streams are no longer rigid one-way doors. Under NEP 2020 and Cambridge/IB systems, flexible subject pooling lets you bridge tech with humanities or bio with creative arts.`
      );
      setSuggestedStreams([
        '1. Custom interdisciplinary roadmap available in Streams tab',
        '2. Match verified entrance paths with teen mentors'
      ]);
    }, 500);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden pb-12">
      {/* Top Ambient Glow Field */}
      <div className="relative px-4 pt-4 pb-6 flex flex-col gap-4">
        {/* Starburst & Nebula Ambient Decor */}
        <div className="absolute -top-12 -left-16 w-56 h-56 bg-[#00f5d4]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-20 -right-12 w-48 h-48 bg-[#940335]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Micro Badge */}
        <div className="flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#2b2641] shadow-sm border border-[#36314d]/60">
          <span className="text-sm">🚀</span>
          <span className="font-label-sm text-[10px] text-[#00f5d4] uppercase tracking-wider font-bold">
            No Boring Tests. Just Curiosity.
          </span>
        </div>

        {/* Hero Headlines */}
        <div className="flex flex-col gap-1.5 relative z-10">
          <h1 className="font-headline-lg-mobile text-[28px] sm:text-[34px] text-[#e6deff] leading-tight font-extrabold tracking-tight">
            Turn What You Love Into <span className="text-[#00f5d4] drop-shadow-[0_0_15px_rgba(0,245,212,0.4)]">What You Become.</span>
          </h1>
          <p className="font-body-md text-sm text-[#b9cac4] leading-relaxed">
            Torn between Science, Arts, Commerce, or Tech? Decode your real superpowers through micro-adventures, games, and teen mentor sessions.
          </p>
        </div>

        {/* Grade Picker Pill Chips */}
        <div className="flex flex-col gap-1.5 mt-1">
          <span className="font-label-sm text-[11px] text-[#b9cac4] uppercase tracking-wider font-semibold">
            Select your flight stage:
          </span>
          <div className="flex flex-col gap-2" id="gradePicker">
            {/* Grade 6-7 */}
            <button
              type="button"
              onClick={() => setFlightStage('class6_7')}
              className={`group relative flex items-center justify-between p-3 rounded-xl transition-all duration-200 text-left active:scale-[0.98] ${
                flightStage === 'class6_7'
                  ? 'bg-[#36314d] border border-[#00f5d4]/50 shadow-md'
                  : 'bg-[#2b2641] hover:bg-[#36314d]/60 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    flightStage === 'class6_7'
                      ? 'bg-[#00f5d4] text-[#0f0a24]'
                      : 'bg-[#211c36] text-[#00f5d4]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">satellite_alt</span>
                </span>
                <div className="flex flex-col min-w-0">
                  <span className={`font-label-lg text-sm font-bold truncate ${
                    flightStage === 'class6_7' ? 'text-[#00f5d4]' : 'text-[#e6deff]'
                  }`}>
                    Class 6–7: Explore Wonder
                  </span>
                  <span className="font-body-sm text-xs text-[#b9cac4] truncate">
                    Discover secret skills & curiosity sparkcards
                  </span>
                </div>
              </div>
              <span
                className={`w-3 h-3 rounded-full ml-2 shrink-0 transition-all ${
                  flightStage === 'class6_7'
                    ? 'bg-[#00f5d4] shadow-[0_0_8px_rgba(0,245,212,0.9)]'
                    : 'bg-[#3a4a46]'
                }`}
              />
            </button>

            {/* Grade 8-9 */}
            <button
              type="button"
              onClick={() => setFlightStage('class8_9')}
              className={`group relative flex items-center justify-between p-3 rounded-xl transition-all duration-200 text-left active:scale-[0.98] ${
                flightStage === 'class8_9'
                  ? 'bg-[#36314d] border border-[#00f5d4]/50 shadow-md'
                  : 'bg-[#2b2641] hover:bg-[#36314d]/60 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                    flightStage === 'class8_9'
                      ? 'bg-[#00f5d4] text-[#0f0a24]'
                      : 'bg-[#211c36] text-[#00f5d4]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">stars</span>
                </span>
                <div className="flex flex-col min-w-0">
                  <span className={`font-label-lg text-sm font-bold truncate ${
                    flightStage === 'class8_9' ? 'text-[#00f5d4]' : 'text-[#e6deff]'
                  }`}>
                    Class 8–9: Test Skills
                  </span>
                  <span className="font-body-sm text-xs text-[#b9cac4] truncate">
                    Solve simulated quests & mini scenarios
                  </span>
                </div>
              </div>
              <span
                className={`w-3 h-3 rounded-full ml-2 shrink-0 transition-all ${
                  flightStage === 'class8_9'
                    ? 'bg-[#00f5d4] shadow-[0_0_8px_rgba(0,245,212,0.9)]'
                    : 'bg-[#3a4a46]'
                }`}
              />
            </button>

            {/* Grade 10: Pick Your Stream */}
            <button
              type="button"
              onClick={() => setFlightStage('class10')}
              className={`group relative flex items-center justify-between p-3 rounded-xl transition-all duration-200 text-left active:scale-[0.98] ${
                flightStage === 'class10'
                  ? 'bg-[#36314d] border border-[#00f5d4]/60 shadow-md'
                  : 'bg-[#2b2641] hover:bg-[#36314d]/60 border border-transparent'
              }`}
            >
              <div className="flex items-center gap-3 min-w-0">
                <span
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 font-bold ${
                    flightStage === 'class10'
                      ? 'bg-[#00f5d4] text-[#0f0a24]'
                      : 'bg-[#211c36] text-[#00f5d4]'
                  }`}
                >
                  <span className="material-symbols-outlined text-[18px]">rocket_launch</span>
                </span>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className={`font-label-lg text-sm font-bold truncate ${
                      flightStage === 'class10' ? 'text-[#00f5d4]' : 'text-[#e6deff]'
                    }`}>
                      Class 10: Pick Your Stream
                    </span>
                    <span className="px-1.5 py-0.5 rounded-full bg-[#940335] text-[#ffb2bb] text-[10px] font-bold uppercase shrink-0">
                      Critical
                    </span>
                  </div>
                  <span className="font-body-sm text-xs text-[#b9cac4] truncate">
                    Custom roadmap for CBSE, ICSE & State boards
                  </span>
                </div>
              </div>
              <span
                className={`w-3 h-3 rounded-full ml-2 shrink-0 transition-all ${
                  flightStage === 'class10'
                    ? 'bg-[#00f5d4] shadow-[0_0_8px_rgba(0,245,212,0.9)]'
                    : 'bg-[#3a4a46]'
                }`}
              />
            </button>
          </div>
        </div>

        {/* Hero Launch Action CTAs */}
        <div className="flex flex-col gap-2.5 mt-1">
          <button
            type="button"
            onClick={onOpenRadar}
            className="w-full h-14 rounded-full bg-[#00f5d4] text-[#0f0a24] font-label-lg text-sm sm:text-base font-extrabold flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(0,245,212,0.35)] active:scale-98 transition-transform"
          >
            <span className="material-symbols-outlined text-[22px]">radar</span>
            <span>Launch 3-Min Passion Radar</span>
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </button>
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('aryaSection');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="w-full h-12 rounded-full bg-[#2b2641] text-[#e6deff] hover:bg-[#36314d] font-label-lg text-sm font-bold flex items-center justify-center gap-2 border border-[#36314d] active:scale-98 transition-transform"
          >
            <span className="material-symbols-outlined text-[20px] text-[#ffb2bb]">smart_toy</span>
            <span>Ask AI Counselor Arya</span>
          </button>
        </div>

        {/* Live Active Middle Schoolers Counter */}
        <div className="flex items-center justify-center gap-2 py-1">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full bg-[#36314d] flex items-center justify-center text-[10px] text-[#00f5d4] font-bold border border-[#0f0a24]">
              AK
            </div>
            <div className="w-6 h-6 rounded-full bg-[#940335] flex items-center justify-center text-[10px] text-[#ffb2bb] font-bold border border-[#0f0a24]">
              RP
            </div>
            <div className="w-6 h-6 rounded-full bg-[#00f5d4] flex items-center justify-center text-[10px] text-[#00382f] font-bold border border-[#0f0a24]">
              SL
            </div>
          </div>
          <span className="font-label-sm text-xs text-[#b9cac4]">
            <strong className="text-[#e6deff] font-semibold">3,420 students</strong> navigating paths right now
          </span>
        </div>
      </div>

      {/* Visual Divider */}
      <div className="w-full h-px bg-[#36314d]/60 my-2" />

      {/* SECTION 2: The Hobby-to-Stream Alchemist */}
      <section className="px-4 py-4 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[#00f5d4] text-[20px]">magic_button</span>
              <span className="font-label-sm text-xs text-[#00f5d4] uppercase tracking-wider font-bold">
                Stream Alchemist
              </span>
            </div>
            <span className="font-label-sm text-xs px-2.5 py-0.5 rounded-full bg-[#2b2641] text-[#ffd48b] font-bold">
              4 Match Previews
            </span>
          </div>
          <h2 className="font-headline-sm text-xl text-[#e6deff] font-bold">
            What Do Your Hobbies Actually Mean?
          </h2>
          <p className="font-body-sm text-xs text-[#b9cac4]">
            Tap any daily passion to see which 11th & 12th stream combinations give you an unfair advantage.
          </p>
        </div>

        {/* Alchemist Cards Stack */}
        <div className="flex flex-col gap-3">
          {ALCHEMIST_CARDS.map((card) => (
            <div
              key={card.id}
              onClick={() => onOpenStreamDetail(card)}
              className="p-4 rounded-xl bg-[#2b2641] border border-[#36314d]/80 relative overflow-hidden flex flex-col gap-3 shadow-md hover:border-[#00f5d4]/40 cursor-pointer transition-all active:scale-[0.99]"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 rounded-full bg-[#0f0a24] flex items-center justify-center text-lg shrink-0">
                    {card.emoji}
                  </span>
                  <div>
                    <span className="font-label-sm text-[11px] text-[#b9cac4] block">Obsessed with:</span>
                    <h3 className="font-label-lg text-sm text-[#e6deff] font-bold leading-tight">
                      {card.hobby}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className={`font-headline-sm text-lg font-extrabold leading-none ${card.scoreColor}`}>
                    {card.fitScore}%
                  </span>
                  <span className="font-label-sm text-[9px] text-[#b9cac4] uppercase tracking-wider">
                    Fit Score
                  </span>
                </div>
              </div>

              {/* Node Connector Visual */}
              <div className="p-3 rounded-lg bg-[#0f0a24]/80 flex flex-col gap-1.5 border border-[#36314d]/40">
                <div className="flex items-center gap-2">
                  <span className={`material-symbols-outlined text-[16px] ${card.scoreColor}`}>
                    arrow_forward
                  </span>
                  <span className={`font-label-md text-xs font-bold ${card.scoreColor}`}>
                    {card.streamTitle}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-1.5 mt-0.5">
                  {card.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-full bg-[#211c36] text-[#b9cac4] font-label-sm text-[10px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between text-[#b9cac4] font-body-sm text-xs">
                <span className="truncate max-w-[280px]">Future roles: {card.futureRoles}</span>
                <span className={`material-symbols-outlined text-[18px] ${card.scoreColor}`}>
                  chevron_right
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: Try A Stream Simulator */}
      <section className="px-4 py-5 flex flex-col gap-4 bg-[#0f0a24]/50 border-y border-[#36314d]/40">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#ffb2bb] text-[20px]">sports_esports</span>
            <span className="font-label-sm text-xs text-[#ffb2bb] uppercase tracking-wider font-bold">
              Stream Simulator
            </span>
          </div>
          <h2 className="font-headline-sm text-xl text-[#e6deff] font-bold">
            Test Drive Real Careers in 2 Minutes
          </h2>
          <p className="font-body-sm text-xs text-[#b9cac4]">
            Don't guess what an engineer or investor does. Make real choices under pressure and see what thrills you.
          </p>
        </div>

        {/* Constellation XP Meter */}
        <div className="p-3 rounded-xl bg-[#2b2641] border border-[#36314d]/70 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-lg bg-[#211c36] flex items-center justify-center text-[#ffba27]">
              <span className="material-symbols-outlined text-[22px]">military_tech</span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-sm text-[11px] text-[#b9cac4]">Unlocked Badges</span>
              <span className="font-label-lg text-xs sm:text-sm text-[#e6deff] font-bold">
                Orion Cadet • <span className="text-[#ffba27]">+{xp} XP</span>
              </span>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#36314d] text-[#00f5d4] font-label-sm text-xs font-semibold">
            Level {level}
          </span>
        </div>

        {/* Simulator Quests Grid */}
        <div className="flex flex-col gap-3">
          {quests.map((quest) => {
            const feedback = questFeedbacks[quest.id];
            return (
              <div
                key={quest.id}
                className="p-4 rounded-xl bg-[#211c36] border border-[#36314d] flex flex-col gap-3 shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${quest.categoryBadgeClass}`}>
                      {quest.category}
                    </span>
                    <span className="text-[#b9cac4] text-[11px] font-medium flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-[13px]">timer</span> {quest.timeEstimate}
                    </span>
                  </div>
                  <span className="text-[#ffba27] font-bold text-xs">+{quest.xpReward} XP</span>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-label-lg text-sm text-[#e6deff] font-bold">{quest.title}</h3>
                  <p className="font-body-sm text-xs text-[#b9cac4]">{quest.prompt}</p>
                </div>

                {/* Choice Scenario Interactive Buttons */}
                <div className="grid grid-cols-2 gap-2 mt-1">
                  {quest.options.map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => handleSolveQuest(quest.id, opt.id)}
                      className={`p-2.5 rounded-lg text-left flex flex-col gap-1 transition-all active:scale-95 ${
                        feedback?.choice === opt.title
                          ? 'bg-[#36314d] border border-[#00f5d4] shadow-[0_0_10px_rgba(0,245,212,0.2)]'
                          : 'bg-[#2b2641] hover:bg-[#36314d] border border-transparent'
                      }`}
                    >
                      <span className="text-[12px] font-bold text-[#00f5d4]">{opt.label}</span>
                      <span className="text-[11px] text-[#b9cac4] leading-tight line-clamp-2">
                        {opt.title}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Tactical Result Drawer if played */}
                {feedback && (
                  <div className="p-3 rounded-lg bg-[#0f0a24] border border-[#00f5d4]/40 flex flex-col gap-1 text-xs animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-[#00f5d4] font-bold">
                      <span>✓ Scenario Resolved (+{quest.xpReward} XP)</span>
                    </div>
                    <p className="text-[#e6deff] text-[11px]">{feedback.text}</p>
                    <span className="text-[10px] text-[#ffd48b] font-medium mt-0.5">
                      🔭 Stream Affinity: {feedback.stream}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: Ask Arya — AI Counselor */}
      <section id="aryaSection" className="px-4 py-5 flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-[#00f5d4] text-[20px]">psychology</span>
            <span className="font-label-sm text-xs text-[#00f5d4] uppercase tracking-wider font-bold">
              Always Online
            </span>
          </div>
          <h2 className="font-headline-sm text-xl text-[#e6deff] font-bold">
            Ask Arya: No Judgment. No Pressure.
          </h2>
          <p className="font-body-sm text-xs text-[#b9cac4]">
            Trained on 400+ career paths and middle school mental health empathy models.
          </p>
        </div>

        {/* Chat Interactive Box */}
        <div className="p-4 rounded-2xl bg-[#2b2641] border border-[#36314d] flex flex-col gap-3 shadow-xl">
          {/* Chat Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#36314d]/50">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <img
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-[#00f5d4]"
                  alt="Arya Avatar"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALWktTRI_vI8IO0hebieVF-npZGmyGKkKzPp3P83BGoRxBHgtt7HXNQvtgMtBNFhz_BmjF7N1yKMz9enea1SoUo8zhnOwXNyn53HLeP4M_ym0XPENW7qW2znW2jJhZjdb4fw6t7tctFbmWD3f5A7QDGsVFXnfGKUjKGZtAoSdtKMXZ-mAJX2Q6AtTrCVHpzreSeU6frPQKwiqLVXJJyM8p0h2kWR7KQ9LqdTtA2itDWuVV_8vmfJM3"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#00f5d4] ring-2 ring-[#2b2641]" />
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-sm text-[#e6deff] font-bold">Arya • AI Navigator</span>
                <span className="font-label-sm text-[10px] text-[#00f5d4]">Ready to help 24/7</span>
              </div>
            </div>
            <span className="font-label-sm text-xs px-2 py-0.5 rounded-full bg-[#211c36] text-[#b9cac4]">
              Class 9 & 10 Specialist
            </span>
          </div>

          {/* Conversation Bubbles */}
          <div className="flex flex-col gap-3 py-1">
            {/* Student Msg */}
            <div className="self-end max-w-[85%] p-3 rounded-2xl rounded-tr-xs bg-[#36314d] text-[#e6deff] text-xs font-body-sm shadow-sm">
              "{studentQuestion}"
            </div>

            {/* Arya Reply */}
            <div className="self-start max-w-[92%] p-3.5 rounded-2xl rounded-tl-xs bg-[#211c36] border border-[#36314d]/60 text-[#e6deff] text-xs font-body-sm shadow-md flex flex-col gap-2">
              {isAryaThinking ? (
                <div className="flex items-center gap-2 py-2 text-[#00f5d4]">
                  <span className="material-symbols-outlined text-[16px] animate-spin">sync</span>
                  <span className="text-xs">Arya is synthesizing career pathways...</span>
                </div>
              ) : (
                <>
                  <p className="leading-relaxed">{aryaReply}</p>
                  <div className="p-2.5 rounded-xl bg-[#0f0a24]/70 flex flex-col gap-1 border border-[#36314d]/40">
                    <span className="font-label-sm text-[10px] text-[#00f5d4] uppercase font-bold">
                      Suggested Streams:
                    </span>
                    {suggestedStreams.map((s, idx) => (
                      <span key={idx} className="text-[11px] text-[#b9cac4] font-medium">
                        {s}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Quick Prompt Chips */}
          <div className="flex flex-col gap-1.5 pt-1">
            <span className="font-label-sm text-[11px] text-[#b9cac4]">Tap to ask Arya:</span>
            <div className="flex flex-wrap gap-1.5" id="chatChips">
              <button
                type="button"
                onClick={() => handleAskPreset('"Is Commerce actually boring?"')}
                className="px-3 py-1.5 rounded-full bg-[#211c36] text-xs text-[#e6deff] hover:text-[#00f5d4] hover:bg-[#36314d] active:scale-95 transition-all text-left"
              >
                "Is Commerce actually boring?"
              </button>
              <button
                type="button"
                onClick={() => handleAskPreset('"Can I study Coding & History together?"')}
                className="px-3 py-1.5 rounded-full bg-[#211c36] text-xs text-[#e6deff] hover:text-[#00f5d4] hover:bg-[#36314d] active:scale-95 transition-all text-left"
              >
                "Can I study Coding & History together?"
              </button>
              <button
                type="button"
                onClick={() => handleAskPreset('"How do I convince strict parents?"')}
                className="px-3 py-1.5 rounded-full bg-[#211c36] text-xs text-[#e6deff] hover:text-[#00f5d4] hover:bg-[#36314d] active:scale-95 transition-all text-left"
              >
                "How do I convince strict parents?"
              </button>
            </div>
          </div>

          {/* Custom Input Form */}
          <form onSubmit={handleCustomSubmit} className="flex gap-2 pt-2 border-t border-[#36314d]/50">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Ask Arya about streams, exams, or doubts..."
              className="flex-1 bg-[#140f29] border border-[#36314d] rounded-xl px-3.5 py-2 text-xs text-[#e6deff] placeholder-[#83948f] focus:outline-none focus:border-[#00f5d4]"
            />
            <button
              type="submit"
              disabled={!customInput.trim()}
              className="px-4 py-2 rounded-xl bg-[#00f5d4] text-[#0f0a24] font-bold text-xs hover:opacity-90 disabled:opacity-40 transition-all flex items-center justify-center shrink-0"
            >
              <span className="material-symbols-outlined text-[16px]">send</span>
            </button>
          </form>
        </div>
      </section>

      {/* SECTION 5: Parent-Student Peace Treaty */}
      <section className="px-4 py-4 flex flex-col gap-4">
        <div className="p-5 rounded-2xl bg-[#2b2641] border border-[#36314d] relative overflow-hidden flex flex-col gap-4 shadow-lg">
          <div className="flex items-center gap-2 text-[#ffd48b]">
            <span className="material-symbols-outlined text-[24px]">handshake</span>
            <span className="font-label-sm text-xs uppercase font-bold tracking-wider">
              Family Harmony System
            </span>
          </div>

          <div className="flex flex-col gap-1">
            <h2 className="font-headline-sm text-xl text-[#e6deff] font-bold">
              The Parent-Student Peace Treaty
            </h2>
            <p className="font-body-sm text-xs text-[#b9cac4] leading-relaxed">
              Dreading the "Engineering or Medicine" dinner conversation? NovaPath generates objective, data-backed 12-page reports comparing career safety, salary ranges, and happiness indexes.
            </p>
          </div>

          {/* Feature Matrix Cards Inside Peace Treaty */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="p-3 rounded-xl bg-[#211c36] border border-[#36314d]/60 flex flex-col gap-1">
              <span className="material-symbols-outlined text-[#00f5d4] text-[20px]">analytics</span>
              <span className="font-label-md text-xs text-[#e6deff] font-bold">Hard Career Data</span>
              <span className="font-body-sm text-[11px] text-[#b9cac4] leading-tight">
                Shows 10-year industry demand & real university acceptance stats.
              </span>
            </div>
            <div className="p-3 rounded-xl bg-[#211c36] border border-[#36314d]/60 flex flex-col gap-1">
              <span className="material-symbols-outlined text-[#ffb2bb] text-[20px]">verified_user</span>
              <span className="font-label-md text-xs text-[#e6deff] font-bold">Zero Arguments</span>
              <span className="font-body-sm text-[11px] text-[#b9cac4] leading-tight">
                Presents recommendations based on verified cognitive aptitude trials.
              </span>
            </div>
          </div>

          {/* Proof Metric */}
          <div
            onClick={onOpenPeaceTreaty}
            className="flex items-center gap-3 p-3 rounded-xl bg-[#0f0a24]/80 border border-[#ffd48b]/40 cursor-pointer hover:border-[#ffd48b] transition-all"
          >
            <span className="text-2xl">🤝</span>
            <div className="flex flex-col">
              <span className="font-label-lg text-sm text-[#00f5d4] font-extrabold leading-none">
                48,000+ Middle Schoolers
              </span>
              <span className="font-body-sm text-[11px] text-[#b9cac4] mt-0.5">
                have presented NovaPath reports to parents with 94% approval. <strong className="text-[#ffd48b] underline">View Treaty Preview →</strong>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Proof: Mentors From Top Fields */}
      <section className="px-4 py-4 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <span className="font-label-sm text-xs text-[#b9cac4] uppercase tracking-wider font-semibold">
            Meet Teen Mentors Who Cracked It
          </span>
          <button
            type="button"
            onClick={() => onNavigateTab('mentors')}
            className="font-label-sm text-xs text-[#00f5d4] font-bold hover:underline"
          >
            View 64 Mentors →
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {/* Mentor 1 */}
          <div
            onClick={() => onNavigateTab('mentors')}
            className="p-3 rounded-xl bg-[#2b2641] border border-[#36314d] flex flex-col gap-2 cursor-pointer hover:border-[#00f5d4]/40 transition-all"
          >
            <img
              className="w-full h-24 rounded-lg object-cover"
              alt="Tara Deshmukh"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzy0sn2MGx-4g8LQduDOUygSfqi93k544aMOEVgpyUp0f36t77ZuAFcIirjJvuNTT0o21iTOeapFUZqtCa3re-DMFTWDfWe6Pu1P3kj-XD1tq1gQc01MGd6KnhNzAAuKlVa9oAtgQoDt2SBL2ryjaW0ukqYxCFnoFwnep5FPHc3dwGQK39IeffJb9dDPtxQnPLPUvI_CRECuoi_y6vBycaYdZZQH-mZf2kMRyQTVTmTI74rB30RVZi"
            />
            <div className="flex flex-col">
              <span className="font-label-md text-xs text-[#e6deff] font-bold truncate">Tara Deshmukh</span>
              <span className="font-body-sm text-[11px] text-[#b9cac4] truncate">
                NID Ahmedabad • Class 12 Humanities
              </span>
            </div>
          </div>

          {/* Mentor 2 */}
          <div
            onClick={() => onNavigateTab('mentors')}
            className="p-3 rounded-xl bg-[#2b2641] border border-[#36314d] flex flex-col gap-2 cursor-pointer hover:border-[#00f5d4]/40 transition-all"
          >
            <img
              className="w-full h-24 rounded-lg object-cover"
              alt="Kabir Mehta"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI_n8eK7Y22vUi8MPe5O3RE0DFgMsX-ab5KjehfD_nW0U6RJrrQ6IgAcyekTxghdDsWFZjGJ16SDQI45IolbBC2V0B9Q_v8UNDm3C0zRhxDdrASsqGU-U1OVLSGMtR9AbgQSXFdIPnTV_w2h95wXuHIw25fNp2EA_UIc5a7ZWJyrMJyJbjW4OchgrEFFT50gJyZf7tig-QFfLLm_birW6ttuOEGzkcubxqsYlLfjuRE3rOXUM86tW0"
            />
            <div className="flex flex-col">
              <span className="font-label-md text-xs text-[#e6deff] font-bold truncate">Kabir Mehta</span>
              <span className="font-body-sm text-[11px] text-[#b9cac4] truncate">
                IIT Bombay Aero • PCB/PCM Switcher
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Floating Final Launch Deck */}
      <section className="px-4 py-6 flex flex-col gap-2">
        <div className="p-6 rounded-3xl bg-[#2b2641] text-center flex flex-col items-center gap-4 shadow-2xl relative overflow-hidden border border-[#36314d]">
          {/* Nebula burst inside card */}
          <div className="absolute -top-16 inset-x-0 mx-auto w-40 h-40 bg-[#00f5d4]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="w-12 h-12 rounded-2xl bg-[#0f0a24] flex items-center justify-center text-[#00f5d4] shadow-md border border-[#36314d]">
            <span className="material-symbols-outlined text-[28px]">explore</span>
          </div>

          <div className="flex flex-col gap-1 relative z-10">
            <h2 className="font-headline-sm text-xl text-[#e6deff] font-extrabold">
              Ready to Discover Your True Orbit?
            </h2>
            <p className="font-body-sm text-xs text-[#b9cac4] max-w-xs mx-auto">
              No credit card. No high-pressure testing. Just 3 minutes of pure discovery games.
            </p>
          </div>

          <div className="w-full flex flex-col gap-2 relative z-10">
            <button
              type="button"
              onClick={onOpenRadar}
              className="w-full h-14 rounded-full bg-[#00f5d4] text-[#0f0a24] font-label-lg text-sm font-bold flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(0,245,212,0.3)] active:scale-95 transition-transform"
            >
              <span>Start Free Discovery Flight</span>
              <span className="material-symbols-outlined text-[20px]">rocket</span>
            </button>
            <span className="font-label-sm text-[10px] text-[#b9cac4]">
              Recommended for Ages 11 to 16 • Takes &lt; 3 mins
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
