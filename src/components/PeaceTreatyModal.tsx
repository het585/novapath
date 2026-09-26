import React, { useState } from 'react';

interface PeaceTreatyModalProps {
  onClose: () => void;
}

export const PeaceTreatyModal: React.FC<PeaceTreatyModalProps> = ({ onClose }) => {
  const [selectedStudentPath, setSelectedStudentPath] = useState('Design & UI/UX');
  const [copied, setCopied] = useState(false);

  const comparisons: Record<string, {
    industryGrowth: string;
    aiResistance: string;
    avgStarting: string;
    happinessRate: string;
    parentCounter: string;
    studentTalkingPoint: string;
  }> = {
    'Design & UI/UX': {
      industryGrowth: '+28% per year in India & Global markets',
      aiResistance: '89% High (Requires human emotional intuition & brand taste)',
      avgStarting: '₹8.5L – ₹14L / yr (Top design institutes: NID/IIT-IDC)',
      happinessRate: '91% Career Satisfaction score',
      parentCounter: '"Arts & Design have no stable corporate jobs; only engineers get hired."',
      studentTalkingPoint: '"Every engineering product needs human interfaces. Google, Apple, and banks now pay Product Designers equal to senior software engineers."'
    },
    'FinTech & Behavioral Economics': {
      industryGrowth: '+32% CAGR with digital banking boom',
      aiResistance: '84% High (Strategic risk modeling & legal governance)',
      avgStarting: '₹9L – ₹18L / yr (SRCC, Ashoka, IIM 5-yr IPM)',
      happinessRate: '87% Career Satisfaction score',
      parentCounter: '"Commerce without CA is useless; science keeps all doors open."',
      studentTalkingPoint: '"Applied Math + Economics opens quantitative hedge funds and venture capital—disciplines that out-earn standard IT salaries by 40%."'
    },
    'Biotechnology & Eco-Tech': {
      industryGrowth: '+22% growth driven by genomics & climate tech',
      aiResistance: '94% High (Wet lab testing and biological materials)',
      avgStarting: '₹7.5L – ₹13L / yr (IISER, AIIMS, Global Bio-labs)',
      happinessRate: '86% Career Satisfaction score',
      parentCounter: '"If you do PCB you must become an MBBS doctor or you wasted your degree."',
      studentTalkingPoint: '"Modern computational biology and CRISPR therapeutics have higher global research funding than conventional general medicine."'
    }
  };

  const currentData = comparisons[selectedStudentPath];

  const handleCopyPoints = () => {
    navigator.clipboard?.writeText(
      `NovaPath Parent Peace Treaty Summary:\nTarget Path: ${selectedStudentPath}\n10-Yr Growth: ${currentData.industryGrowth}\nSalary Outlook: ${currentData.avgStarting}\nTalking Point: ${currentData.studentTalkingPoint}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-2xl bg-[#1d1832] border border-[#36314d] p-6 shadow-2xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-[#36314d]/60">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#211c36] text-[#ffd48b] flex items-center justify-center border border-[#36314d]">
              <span className="material-symbols-outlined text-[24px]">handshake</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-headline-sm text-base text-[#e6deff] font-bold">
                  The Parent-Student Peace Treaty
                </h3>
                <span className="px-1.5 py-0.5 rounded-full bg-[#940335] text-[#ffb2bb] text-[10px] font-bold">
                  12-PAGE PREVIEW
                </span>
              </div>
              <p className="text-[11px] text-[#b9cac4]">
                Objective, zero-drama career data for dinner table peace
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2b2641] text-[#b9cac4] hover:text-[#e6deff] flex items-center justify-center shrink-0"
          >
            ✕
          </button>
        </div>

        {/* Path Selector */}
        <div className="flex flex-col gap-1.5">
          <span className="font-label-sm text-xs text-[#b9cac4]">Select path you want to discuss with parents:</span>
          <div className="flex flex-wrap gap-1.5">
            {Object.keys(comparisons).map((path) => (
              <button
                key={path}
                type="button"
                onClick={() => setSelectedStudentPath(path)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedStudentPath === path
                    ? 'bg-[#00f5d4] text-[#0f0a24] shadow-[0_0_10px_rgba(0,245,212,0.4)]'
                    : 'bg-[#211c36] text-[#b9cac4] hover:text-[#e6deff]'
                }`}
              >
                {path}
              </button>
            ))}
          </div>
        </div>

        {/* Side-by-Side Comparison Matrix */}
        <div className="p-4 rounded-xl bg-[#140f29] border border-[#36314d] flex flex-col gap-3">
          <div className="flex items-center justify-between pb-2 border-b border-[#36314d]/50">
            <span className="text-xs font-bold text-[#00f5d4]">Metrics vs Traditional JEE/NEET</span>
            <span className="text-[11px] text-[#ffd48b] font-medium">94% Parent Acceptance</span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-2.5 rounded-lg bg-[#211c36]">
              <span className="text-[10px] text-[#83948f] block uppercase font-bold">10-Yr Demand Growth</span>
              <span className="text-[#00f5d4] font-semibold text-xs mt-0.5 block">{currentData.industryGrowth}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#211c36]">
              <span className="text-[10px] text-[#83948f] block uppercase font-bold">AI Immunity Index</span>
              <span className="text-[#ffba27] font-semibold text-xs mt-0.5 block">{currentData.aiResistance}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#211c36]">
              <span className="text-[10px] text-[#83948f] block uppercase font-bold">Starting Compensation</span>
              <span className="text-[#e6deff] font-semibold text-xs mt-0.5 block">{currentData.avgStarting}</span>
            </div>
            <div className="p-2.5 rounded-lg bg-[#211c36]">
              <span className="text-[10px] text-[#83948f] block uppercase font-bold">Satisfaction Score</span>
              <span className="text-[#ffb2bb] font-semibold text-xs mt-0.5 block">{currentData.happinessRate}</span>
            </div>
          </div>
        </div>

        {/* The Dinner Table Talking Point */}
        <div className="p-4 rounded-xl bg-[#211c36] border border-[#ffd48b]/30 flex flex-col gap-2">
          <div className="flex items-center gap-1.5 text-[#ffd48b]">
            <span className="material-symbols-outlined text-[18px]">campaign</span>
            <span className="font-label-sm text-xs uppercase font-bold">Parent Concern & Peaceful Reply</span>
          </div>
          <div className="text-xs text-[#b9cac4] italic border-l-2 border-[#940335] pl-2.5 py-0.5">
            Typical parent worry: {currentData.parentCounter}
          </div>
          <div className="text-xs text-[#e6deff] font-medium border-l-2 border-[#00f5d4] pl-2.5 py-0.5 bg-[#140f29]/60 rounded-r-lg">
            Peace treaty reply: {currentData.studentTalkingPoint}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleCopyPoints}
            className="flex-1 h-11 rounded-full bg-[#2b2641] text-[#e6deff] hover:bg-[#36314d] text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
          >
            <span className="material-symbols-outlined text-[16px] text-[#00f5d4]">content_copy</span>
            <span>{copied ? 'Copied Talking Points!' : 'Copy Discussion Brief'}</span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 h-11 rounded-full bg-[#00f5d4] text-[#0f0a24] text-xs font-bold flex items-center justify-center gap-1.5 hover:opacity-95 shadow-[0_4px_16px_rgba(0,245,212,0.3)] transition-all"
          >
            <span className="material-symbols-outlined text-[16px]">file_download</span>
            <span>Save Peace Treaty PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};
