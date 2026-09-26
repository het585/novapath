import React, { useState } from 'react';
import { RADAR_QUESTIONS } from '../data/appData';

interface PassionRadarModalProps {
  onClose: () => void;
  onComplete: (awardedXp: number) => void;
}

export const PassionRadarModal: React.FC<PassionRadarModalProps> = ({ onClose, onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);

  const scores = {
    Spatial: 88,
    Analytical: 76,
    Creative: 82,
    Biological: 64,
    Strategic: 79
  };

  const handleSelectOption = (qIndex: number, optIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [qIndex]: optIndex });
  };

  const handleNext = () => {
    if (currentStep < RADAR_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
      onComplete(150);
    }
  };

  const currentQ = RADAR_QUESTIONS[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="w-full max-w-lg rounded-2xl bg-[#1d1832] border border-[#36314d] p-6 shadow-2xl flex flex-col gap-4 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-[#36314d]/60">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#00f5d4] text-[22px]">radar</span>
            <div>
              <h3 className="font-headline-sm text-base text-[#e6deff] font-bold">3-Min Passion Radar</h3>
              <p className="text-[11px] text-[#b9cac4]">No stress. Quick intuition choices.</p>
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

        {!showResults ? (
          <div className="flex flex-col gap-4">
            {/* Progress indicators */}
            <div className="flex items-center justify-between gap-1.5">
              {RADAR_QUESTIONS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    i === currentStep
                      ? 'bg-[#00f5d4] shadow-[0_0_8px_rgba(0,245,212,0.8)]'
                      : i < currentStep
                      ? 'bg-[#00f5d4]/40'
                      : 'bg-[#2b2641]'
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center justify-between text-xs text-[#b9cac4]">
              <span>Scenario {currentStep + 1} of {RADAR_QUESTIONS.length}</span>
              <span className="text-[#ffd48b] font-semibold">+150 XP on completion</span>
            </div>

            {/* Scenario Box */}
            <div className="p-4 rounded-xl bg-[#211c36] border border-[#36314d]/60 flex flex-col gap-2">
              <span className="font-label-lg text-sm text-[#00f5d4] font-bold">{currentQ.title}</span>
              <p className="font-body-md text-sm text-[#e6deff] leading-relaxed">{currentQ.scenario}</p>
            </div>

            {/* Choice Buttons */}
            <div className="flex flex-col gap-2.5">
              {currentQ.options.map((opt, idx) => {
                const isSelected = selectedAnswers[currentStep] === idx;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(currentStep, idx)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 active:scale-[0.98] ${
                      isSelected
                        ? 'bg-[#2b2641] border-[#00f5d4] shadow-[0_0_12px_rgba(0,245,212,0.2)]'
                        : 'bg-[#140f29] border-[#36314d] hover:border-[#83948f]/50'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        isSelected
                          ? 'bg-[#00f5d4] text-[#0f0a24]'
                          : 'bg-[#2b2641] text-[#b9cac4]'
                      }`}
                    >
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-body-md text-xs sm:text-sm text-[#e6deff]">{opt.text}</span>
                      <span className="text-[11px] text-[#00f5d4] mt-1 font-medium">
                        ✨ {opt.insight}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              disabled={selectedAnswers[currentStep] === undefined}
              onClick={handleNext}
              className={`w-full h-12 rounded-full font-label-lg text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                selectedAnswers[currentStep] !== undefined
                  ? 'bg-[#00f5d4] text-[#0f0a24] shadow-[0_4px_16px_rgba(0,245,212,0.3)] hover:opacity-95'
                  : 'bg-[#2b2641] text-[#83948f] cursor-not-allowed'
              }`}
            >
              <span>{currentStep === RADAR_QUESTIONS.length - 1 ? 'Calculate My Radar Orbit' : 'Next Scenario'}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        ) : (
          /* Results View */
          <div className="flex flex-col gap-4 py-2">
            <div className="text-center flex flex-col items-center gap-1">
              <span className="text-3xl animate-bounce">🛰️</span>
              <h4 className="font-headline-md text-xl text-[#00f5d4] font-bold">Orbit Decoded!</h4>
              <p className="text-xs text-[#b9cac4] max-w-xs">
                Your cognitive instinct points toward <strong className="text-[#e6deff]">Spatial Architecture & Computational Systems</strong>!
              </p>
            </div>

            {/* Radar Dimensions Bar Chart */}
            <div className="p-4 rounded-xl bg-[#140f29] border border-[#36314d] flex flex-col gap-2.5">
              <span className="font-label-sm text-[11px] text-[#00f5d4] uppercase tracking-wider font-bold">
                Your Top Aptitude Dimensions:
              </span>
              {Object.entries(scores).map(([dim, val]) => (
                <div key={dim} className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-[#e6deff]">{dim} Reasonings</span>
                    <span className="text-[#00f5d4] font-bold">{val}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-[#2b2641] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#00f5d4] to-[#ffba27]"
                      style={{ width: `${val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Recommended Stream Combo */}
            <div className="p-3.5 rounded-xl bg-[#211c36] border border-[#00f5d4]/40 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-[10px] text-[#ffba27] uppercase font-bold">Top Matched Stream</span>
                <span className="text-xs font-bold text-[#00f5d4]">98% Fit Score</span>
              </div>
              <h5 className="font-label-lg text-sm text-[#e6deff] font-bold">
                PCM + Computer Science or Engineering Graphics (CBSE/ISC)
              </h5>
              <p className="text-xs text-[#b9cac4]">
                Combines high spatial visualization (LEGO/Minecraft/Design) with analytical physics. Gives you direct access to Game World Architecture, Robotics, and VR Engineering.
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 h-12 rounded-full bg-[#00f5d4] text-[#0f0a24] font-label-lg text-sm font-bold flex items-center justify-center gap-1.5 shadow-[0_4px_16px_rgba(0,245,212,0.3)] active:scale-95"
              >
                <span>Save To My Trajectory (+150 XP)</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
