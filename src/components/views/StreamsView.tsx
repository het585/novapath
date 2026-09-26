import React, { useState } from 'react';
import { AlchemistCard } from '../../types';
import { ALCHEMIST_CARDS } from '../../data/appData';

interface StreamsViewProps {
  onOpenStreamDetail: (card: AlchemistCard) => void;
  onOpenRadar: () => void;
}

export const StreamsView: React.FC<StreamsViewProps> = ({ onOpenStreamDetail, onOpenRadar }) => {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'Science' | 'Commerce' | 'Humanities' | 'Interdisciplinary'>('All');
  const [selectedBoard, setSelectedBoard] = useState<'CBSE' | 'ISC' | 'IB' | 'State'>('CBSE');

  // Interactive Subject Combinator State
  const [chosenSubjects, setChosenSubjects] = useState<string[]>(['Mathematics', 'Physics', 'Computer Science']);

  const allAvailableSubjects = [
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'Economics',
    'Accountancy',
    'Business Studies',
    'Psychology',
    'Fine Arts / Design',
    'Political Science',
    'Applied Math'
  ];

  const handleToggleSubject = (sub: string) => {
    if (chosenSubjects.includes(sub)) {
      if (chosenSubjects.length > 2) {
        setChosenSubjects(chosenSubjects.filter((s) => s !== sub));
      }
    } else {
      if (chosenSubjects.length < 5) {
        setChosenSubjects([...chosenSubjects, sub]);
      }
    }
  };

  const getCombinatorDiagnosis = () => {
    const hasMath = chosenSubjects.includes('Mathematics') || chosenSubjects.includes('Applied Math');
    const hasPhysics = chosenSubjects.includes('Physics');
    const hasBio = chosenSubjects.includes('Biology');
    const hasEcon = chosenSubjects.includes('Economics');
    const hasArt = chosenSubjects.includes('Fine Arts / Design');
    const hasCS = chosenSubjects.includes('Computer Science');

    if (hasPhysics && hasMath && hasCS) {
      return {
        title: 'Computational Systems & Robotics',
        category: 'Science & Engineering',
        parentScore: '98%',
        burnoutRisk: 'Medium (requires regular problem-solving)',
        careers: 'Game Engine Architect, Aerospace Engineer, Quant Developer',
        superpower: 'Elite mathematical modeling + direct software translation'
      };
    } else if (hasBio && hasArt) {
      return {
        title: 'Bio-Design & Medical Ergonomics',
        category: 'Interdisciplinary',
        parentScore: '91%',
        burnoutRisk: 'Low (creative project driven)',
        careers: 'Prosthetic Interaction Designer, Scientific Illustrator, Bio-Materials Lead',
        superpower: 'Unites living biological science with empathetic 3D design'
      };
    } else if (hasEcon && hasMath) {
      return {
        title: 'FinTech & Behavioral Quantitative Economics',
        category: 'Commerce & Analytics',
        parentScore: '94%',
        burnoutRisk: 'Low to Medium',
        careers: 'Venture Capital Analyst, Crypto Economic Architect, Strategic Consultant',
        superpower: 'Bridges market psychology with rigorous calculus and statistics'
      };
    } else {
      return {
        title: 'Adaptive Interdisciplinary Cluster',
        category: 'Custom NEP 2020 Matrix',
        parentScore: '89%',
        burnoutRisk: 'Low',
        careers: 'Product Strategy, Tech Policy, Multimedia Producer',
        superpower: 'High versatility across corporate, analytical, and creative sectors'
      };
    }
  };

  const diagnosis = getCombinatorDiagnosis();

  const streamsList = [
    {
      id: 'pcm',
      title: 'PCM (Physics, Chemistry, Math)',
      category: 'Science',
      badge: 'STEM Heavyweight',
      desc: 'The bedrock for Aerospace, Robotics, Computing, and Architecture. Demands strong spatial and abstract reasoning.',
      careers: ['Aero Engineer', 'AI Researcher', 'Architect', 'Defense Tech'],
      topExams: 'JEE Main/Adv, BITSAT, NATA',
      fitEmoji: '⚡'
    },
    {
      id: 'pcb',
      title: 'PCB (Physics, Chemistry, Biology)',
      category: 'Science',
      badge: 'Life Sciences',
      desc: 'Beyond MBBS: Genomics, Marine Ecology, Neuroscience, and Bio-Tech. Ideal for curious minds fascinated by living systems.',
      careers: ['Genomicist', 'Neuroscientist', 'Surgeon', 'Wildlife Biologist'],
      topExams: 'NEET, IISER IAT, NEST',
      fitEmoji: '🧬'
    },
    {
      id: 'comm-math',
      title: 'Commerce with Applied Math',
      category: 'Commerce',
      badge: 'High Earning Potential',
      desc: 'The modern powerhouse. Merges financial principles with calculus and predictive data models.',
      careers: ['FinTech Founder', 'Investment Banker', 'Chartered Accountant', 'Data Actuary'],
      topExams: 'CUET, IPMAT (IIMs), CA Foundation',
      fitEmoji: '📈'
    },
    {
      id: 'humanities',
      title: 'Humanities & Social Sciences',
      category: 'Humanities',
      badge: 'Strategic & Creative',
      desc: 'The premier foundation for Law, Global Diplomacy, Media Direction, and UX Design. Focuses on human behavior and ethics.',
      careers: ['Corporate Lawyer', 'UX Director', 'Diplomat', 'Brand Narrative Lead'],
      topExams: 'CLAT, NID DAT, UCEED, CUET',
      fitEmoji: '🏛️'
    }
  ];

  const filteredStreams = selectedFilter === 'All'
    ? streamsList
    : streamsList.filter((s) => s.category.toLowerCase().includes(selectedFilter.toLowerCase()));

  return (
    <div className="flex flex-col w-full overflow-hidden pb-24 px-4 pt-4 gap-5">
      {/* Header Banner */}
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#00f5d4] text-[22px]">explore</span>
          <span className="font-label-sm text-xs text-[#00f5d4] uppercase tracking-wider font-bold">
            Stream Explorer & Combinator
          </span>
        </div>
        <h1 className="font-headline-md text-2xl text-[#e6deff] font-extrabold leading-tight">
          Find Your Perfect 11th & 12th Synergy
        </h1>
        <p className="font-body-sm text-xs text-[#b9cac4]">
          Under NEP 2020 and global curricula, you don't have to choose between only "Science" or "Commerce". Build a custom power-stack.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
        {(['All', 'Science', 'Commerce', 'Humanities'] as const).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedFilter(cat)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
              selectedFilter === cat
                ? 'bg-[#00f5d4] text-[#0f0a24] shadow-[0_0_12px_rgba(0,245,212,0.4)]'
                : 'bg-[#211c36] text-[#b9cac4] hover:text-[#e6deff]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Stream Cards Grid */}
      <div className="flex flex-col gap-3">
        {filteredStreams.map((item) => (
          <div
            key={item.id}
            className="p-4 rounded-xl bg-[#211c36] border border-[#36314d] flex flex-col gap-2.5 shadow-md"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <span className="text-2xl">{item.fitEmoji}</span>
                <div>
                  <h3 className="font-label-lg text-sm text-[#e6deff] font-bold">{item.title}</h3>
                  <span className="text-[10px] text-[#00f5d4] font-semibold">{item.badge}</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-full bg-[#140f29] text-[10px] text-[#b9cac4] border border-[#36314d]">
                {item.category}
              </span>
            </div>

            <p className="font-body-sm text-xs text-[#b9cac4] leading-relaxed">{item.desc}</p>

            <div className="p-2.5 rounded-lg bg-[#140f29] flex flex-col gap-1 border border-[#36314d]/50">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#83948f]">Sample Top Roles:</span>
                <span className="text-[#ffd48b] font-medium">{item.careers.join(', ')}</span>
              </div>
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-[#83948f]">Key Entrance Tests:</span>
                <span className="text-[#00f5d4] font-medium">{item.topExams}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Interactive Subject Combinator */}
      <div className="p-4 rounded-2xl bg-[#2b2641] border border-[#00f5d4]/40 flex flex-col gap-3 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#00f5d4] text-[20px]">tune</span>
            <h3 className="font-label-lg text-sm text-[#e6deff] font-bold">Interactive Subject Combinator</h3>
          </div>
          <span className="text-[11px] text-[#b9cac4]">{chosenSubjects.length} / 5 Selected</span>
        </div>

        <p className="text-[11px] text-[#b9cac4]">
          Tap to toggle subjects and see what unique career trajectory emerges:
        </p>

        {/* Subject Chips */}
        <div className="flex flex-wrap gap-1.5">
          {allAvailableSubjects.map((sub) => {
            const isChosen = chosenSubjects.includes(sub);
            return (
              <button
                key={sub}
                type="button"
                onClick={() => handleToggleSubject(sub)}
                className={`px-2.5 py-1 rounded-lg text-xs transition-all ${
                  isChosen
                    ? 'bg-[#00f5d4] text-[#0f0a24] font-bold shadow-[0_0_8px_rgba(0,245,212,0.3)]'
                    : 'bg-[#140f29] text-[#b9cac4] hover:text-[#e6deff] border border-[#36314d]'
                }`}
              >
                {isChosen && '✓ '} {sub}
              </button>
            );
          })}
        </div>

        {/* Live Combinator Diagnosis */}
        <div className="p-3.5 rounded-xl bg-[#140f29] border border-[#36314d] flex flex-col gap-2 mt-1">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-[10px] text-[#00f5d4] uppercase font-bold">
              Trajectory Outcome:
            </span>
            <span className="text-xs text-[#ffd48b] font-bold">Parent Peace: {diagnosis.parentScore}</span>
          </div>

          <h4 className="font-headline-sm text-sm text-[#e6deff] font-bold">{diagnosis.title}</h4>
          <p className="text-xs text-[#00f5d4] font-medium">✨ {diagnosis.superpower}</p>

          <div className="text-[11px] text-[#b9cac4] flex flex-col gap-0.5 mt-1 border-t border-[#36314d]/40 pt-1.5">
            <span><strong>Target Careers:</strong> {diagnosis.careers}</span>
            <span><strong>Burnout Outlook:</strong> {diagnosis.burnoutRisk}</span>
          </div>
        </div>
      </div>

      {/* Board Comparison Matrix */}
      <div className="p-4 rounded-xl bg-[#211c36] border border-[#36314d] flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h3 className="font-label-lg text-xs text-[#e6deff] font-bold uppercase tracking-wider">
            Curriculum Board Matrix
          </h3>
          <div className="flex gap-1">
            {(['CBSE', 'ISC', 'IB', 'State'] as const).map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setSelectedBoard(b)}
                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  selectedBoard === b ? 'bg-[#00f5d4] text-[#0f0a24]' : 'bg-[#140f29] text-[#b9cac4]'
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>

        <div className="text-xs text-[#b9cac4] leading-relaxed">
          {selectedBoard === 'CBSE' && (
            <p>
              <strong>CBSE:</strong> Highly synchronized with national entrance exams (JEE, NEET, CUET). Clean syllabus, NCERT focused, predictable evaluation patterns.
            </p>
          )}
          {selectedBoard === 'ISC' && (
            <p>
              <strong>ISC:</strong> Exceptional depth in English Literature and lab practicals. Very strong for students eyeing pure research, law, or economics.
            </p>
          )}
          {selectedBoard === 'IB' && (
            <p>
              <strong>IB DP:</strong> Maximum flexibility for unusual combinations (e.g. Art HL + Physics HL). Emphasizes research essays (EE) and global college admissions.
            </p>
          )}
          {selectedBoard === 'State' && (
            <p>
              <strong>State Boards:</strong> Cost-effective with strong focus on regional CET quotas and localized university admission paths.
            </p>
          )}
        </div>
      </div>

      {/* Quick Launch CTA */}
      <button
        type="button"
        onClick={onOpenRadar}
        className="w-full h-12 rounded-full bg-[#00f5d4] text-[#0f0a24] font-bold text-xs flex items-center justify-center gap-1.5 shadow-[0_4px_16px_rgba(0,245,212,0.3)]"
      >
        <span>Test My Fit On The Passion Radar</span>
        <span className="material-symbols-outlined text-[16px]">radar</span>
      </button>
    </div>
  );
};
