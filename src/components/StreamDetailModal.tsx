import React from 'react';
import { AlchemistCard } from '../types';

interface StreamDetailModalProps {
  card: AlchemistCard | null;
  onClose: () => void;
}

export const StreamDetailModal: React.FC<StreamDetailModalProps> = ({ card, onClose }) => {
  if (!card) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-2xl bg-[#1d1832] border border-[#36314d] p-6 shadow-2xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between pb-3 border-b border-[#36314d]/60">
          <div className="flex items-center gap-3">
            <span className="w-12 h-12 rounded-xl bg-[#211c36] flex items-center justify-center text-2xl border border-[#36314d]">
              {card.emoji}
            </span>
            <div className="flex flex-col">
              <span className="font-label-sm text-xs text-[#b9cac4]">Hobby Connection:</span>
              <h3 className="font-headline-sm text-base text-[#e6deff] font-bold">{card.hobby}</h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#2b2641] text-[#b9cac4] hover:text-[#e6deff] flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Fit Score & Target Stream */}
        <div className="p-4 rounded-xl bg-[#211c36] border border-[#00f5d4]/30 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-[11px] text-[#00f5d4] uppercase font-bold tracking-wider">
              Optimal 11th & 12th Stream
            </span>
            <span className={`font-headline-sm text-lg font-extrabold ${card.scoreColor}`}>
              {card.fitScore}% Fit
            </span>
          </div>
          <h4 className="font-headline-sm text-base text-[#e6deff] font-bold">{card.streamTitle}</h4>
          <p className="font-body-sm text-xs text-[#b9cac4] leading-relaxed">{card.overview}</p>
        </div>

        {/* Unfair Advantage */}
        <div className="p-3.5 rounded-xl bg-[#140f29] border border-[#36314d] flex flex-col gap-1.5">
          <div className="flex items-center gap-1.5 text-[#ffba27]">
            <span className="material-symbols-outlined text-[18px]">bolt</span>
            <span className="font-label-sm text-xs uppercase font-bold">Your Unfair Advantage</span>
          </div>
          <p className="font-body-sm text-xs text-[#e6deff] leading-relaxed">{card.unfairAdvantage}</p>
        </div>

        {/* Recommended Subject Combinations */}
        <div className="flex flex-col gap-2">
          <span className="font-label-sm text-xs text-[#00f5d4] uppercase font-bold tracking-wider">
            Key 11th & 12th Subjects
          </span>
          <div className="grid grid-cols-2 gap-2">
            {card.subjects.map((sub, i) => (
              <div key={i} className="p-2.5 rounded-lg bg-[#211c36] border border-[#36314d]/60 text-xs text-[#e6deff] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f5d4]" />
                <span className="font-medium">{sub}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Boards Comparison */}
        <div className="flex flex-col gap-2">
          <span className="font-label-sm text-xs text-[#b9cac4] uppercase font-bold tracking-wider">
            Board Suitability
          </span>
          <div className="flex flex-col gap-1.5">
            {card.recommendedBoards.map((b, i) => (
              <div key={i} className="px-3 py-2 rounded-lg bg-[#140f29] border border-[#36314d]/40 text-xs text-[#b9cac4] flex items-center justify-between">
                <span>{b}</span>
                <span className="text-[#00f5d4] text-[11px] font-semibold">High Synergy</span>
              </div>
            ))}
          </div>
        </div>

        {/* Future Career Roles */}
        <div className="p-3 rounded-xl bg-[#2b2641]/50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-[10px] text-[#83948f]">Sample Future Careers</span>
            <span className="font-label-md text-xs text-[#e6deff] font-bold">{card.futureRoles}</span>
          </div>
          <span className="material-symbols-outlined text-[#00f5d4] text-[20px]">verified</span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-full h-11 rounded-full bg-[#00f5d4] text-[#0f0a24] font-label-lg text-sm font-bold flex items-center justify-center gap-1 active:scale-98 transition-transform"
        >
          Add to My Decision Matrix
        </button>
      </div>
    </div>
  );
};
