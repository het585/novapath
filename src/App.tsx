import React, { useState } from 'react';
import { Header } from './components/Header';
import { BottomNav } from './components/BottomNav';
import { ExploreView } from './components/views/ExploreView';
import { StreamsView } from './components/views/StreamsView';
import { MentorsView } from './components/views/MentorsView';
import { RoadmapView } from './components/views/RoadmapView';
import { PassionRadarModal } from './components/PassionRadarModal';
import { StreamDetailModal } from './components/StreamDetailModal';
import { PeaceTreatyModal } from './components/PeaceTreatyModal';
import { AlchemistCard } from './types';

export default function App() {
  const [currentTab, setCurrentTab] = useState<'explore' | 'streams' | 'mentors' | 'roadmap'>('explore');
  const [xp, setXp] = useState(350);
  const [level, setLevel] = useState(2);

  // Modals
  const [isRadarOpen, setIsRadarOpen] = useState(false);
  const [isPeaceTreatyOpen, setIsPeaceTreatyOpen] = useState(false);
  const [selectedStreamCard, setSelectedStreamCard] = useState<AlchemistCard | null>(null);

  const handleAddXp = (amount: number) => {
    setXp((prev) => {
      const nextXp = prev + amount;
      if (nextXp >= 500 && level < 3) {
        setLevel(3);
      }
      return nextXp;
    });
  };

  return (
    <div className="min-h-screen bg-[#140f29] text-[#e6deff] flex flex-col items-center selection:bg-[#00f5d4] selection:text-[#0f0a24]">
      {/* Container constrained to mobile ergonomic frame with responsive expansion */}
      <div className="w-full max-w-md min-h-screen flex flex-col relative bg-[#140f29] shadow-2xl">
        {/* Sticky Top Header */}
        <Header currentTab={currentTab} xp={xp} level={level} />

        {/* Main Content Area */}
        <main className="flex-1 flex flex-col w-full pt-16">
          {currentTab === 'explore' && (
            <ExploreView
              xp={xp}
              level={level}
              onAddXp={handleAddXp}
              onOpenRadar={() => setIsRadarOpen(true)}
              onOpenPeaceTreaty={() => setIsPeaceTreatyOpen(true)}
              onOpenStreamDetail={(card) => setSelectedStreamCard(card)}
              onNavigateTab={(tab) => setCurrentTab(tab as any)}
            />
          )}

          {currentTab === 'streams' && (
            <StreamsView
              onOpenStreamDetail={(card) => setSelectedStreamCard(card)}
              onOpenRadar={() => setIsRadarOpen(true)}
            />
          )}

          {currentTab === 'mentors' && (
            <MentorsView onAddXp={handleAddXp} />
          )}

          {currentTab === 'roadmap' && (
            <RoadmapView
              xp={xp}
              level={level}
              onOpenPeaceTreaty={() => setIsPeaceTreatyOpen(true)}
              onOpenRadar={() => setIsRadarOpen(true)}
            />
          )}
        </main>

        {/* Floating Bottom Nav Bar */}
        <BottomNav currentTab={currentTab} onSelectTab={(tab) => setCurrentTab(tab as any)} />

        {/* Modals & Flow Drawers */}
        {isRadarOpen && (
          <PassionRadarModal
            onClose={() => setIsRadarOpen(false)}
            onComplete={(awardedXp) => {
              handleAddXp(awardedXp);
            }}
          />
        )}

        {selectedStreamCard && (
          <StreamDetailModal
            card={selectedStreamCard}
            onClose={() => setSelectedStreamCard(null)}
          />
        )}

        {isPeaceTreatyOpen && (
          <PeaceTreatyModal onClose={() => setIsPeaceTreatyOpen(false)} />
        )}
      </div>
    </div>
  );
}
