import React, { useState } from 'react';
import { MENTORS_DATA, INITIAL_ARYA_REPLY } from '../../data/appData';
import { Mentor } from '../../types';

interface MentorsViewProps {
  onAddXp: (amount: number) => void;
}

export const MentorsView: React.FC<MentorsViewProps> = ({ onAddXp }) => {
  const [activeSubTab, setActiveSubTab] = useState<'mentors' | 'arya'>('mentors');
  const [mentorFilter, setMentorFilter] = useState<'All' | 'STEM' | 'Design' | 'Commerce' | 'PCB'>('All');
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null);
  const [bookedMeeting, setBookedMeeting] = useState(false);

  // Full Arya Chat State
  const [messages, setMessages] = useState<Array<{ sender: 'arya' | 'student'; text: string; time: string }>>([
    {
      sender: 'arya',
      text: "Hey Cadet! I'm Arya, your 24/7 AI Navigator. Ask me anything about streams, dealing with exam anxiety, choosing boards, or explaining your dreams to parents.",
      time: 'Just now'
    },
    {
      sender: 'student',
      text: 'I really like biology and drawing, but I hate intense math. Am I doomed in Science?',
      time: '2m ago'
    },
    {
      sender: 'arya',
      text: INITIAL_ARYA_REPLY,
      time: '1m ago'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const filteredMentors = mentorFilter === 'All'
    ? MENTORS_DATA
    : MENTORS_DATA.filter((m) => m.tags.some((t) => t.toLowerCase().includes(mentorFilter.toLowerCase())));

  const handleSendMessage = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const newStudentMsg = {
      sender: 'student' as const,
      text,
      time: 'Just now'
    };

    setMessages((prev) => [...prev, newStudentMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      let reply = `Here's the honest insight on that: Every career trajectory now rewards 'hyphenated skills'—for instance, combining Coding with Philosophy, or Economics with Environmental Science. You are definitely on an exciting track!`;

      if (text.toLowerCase().includes('parent') || text.toLowerCase().includes('convince')) {
        reply = `Parents usually worry about financial stability and societal validation. Try framing your preferred path in terms of market demand, university cutoffs, and verified starting salaries. You can also print our Parent Peace Treaty summary!`;
      } else if (text.toLowerCase().includes('math') || text.toLowerCase().includes('calculus')) {
        reply = `If pure calculus isn't your favorite, consider Applied Mathematics in CBSE or Cambridge/IB Math AI. It focuses on financial statistics, probability, and business modeling instead of 3D geometry proofs!`;
      } else if (text.toLowerCase().includes('neet') || text.toLowerCase().includes('jee')) {
        reply = `Remember: JEE and NEET are not the only two doors to a fulfilling life. World-class careers in Product Design (NID/CEED), Quantitative Finance (IPMAT/CUET), and Law (CLAT) offer equal or higher starting packages with significantly lower burnout.`;
      }

      setMessages((prev) => [
        ...prev,
        {
          sender: 'arya' as const,
          text: reply,
          time: 'Just now'
        }
      ]);
      onAddXp(20);
    }, 600);
  };

  const handleBookSpark = (mentor: Mentor) => {
    setSelectedMentor(mentor);
    setBookedMeeting(true);
    onAddXp(50);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden pb-24 px-4 pt-4 gap-4">
      {/* Sub-tab Navigation */}
      <div className="flex p-1 rounded-xl bg-[#211c36] border border-[#36314d]">
        <button
          type="button"
          onClick={() => setActiveSubTab('mentors')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeSubTab === 'mentors'
              ? 'bg-[#00f5d4] text-[#0f0a24] shadow-sm'
              : 'text-[#b9cac4] hover:text-[#e6deff]'
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">group</span>
          <span>Teen Mentors (64)</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveSubTab('arya')}
          className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            activeSubTab === 'arya'
              ? 'bg-[#00f5d4] text-[#0f0a24] shadow-sm'
              : 'text-[#b9cac4] hover:text-[#e6deff]'
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">smart_toy</span>
          <span>Arya AI Counselor</span>
        </button>
      </div>

      {activeSubTab === 'mentors' ? (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h2 className="font-headline-sm text-lg text-[#e6deff] font-bold">
              Learn Directly From Those Who Walked The Path
            </h2>
            <p className="font-body-sm text-xs text-[#b9cac4]">
              High schoolers and early college freshmen who recently cracked admissions and negotiated stream choices with parents.
            </p>
          </div>

          {/* Filter Chips */}
          <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar">
            {(['All', 'STEM', 'Design', 'Commerce', 'PCB'] as const).map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setMentorFilter(filter)}
                className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  mentorFilter === filter
                    ? 'bg-[#ffd48b] text-[#271900] font-bold'
                    : 'bg-[#211c36] text-[#b9cac4] hover:text-[#e6deff]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Mentors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredMentors.map((mentor) => (
              <div
                key={mentor.id}
                className="p-4 rounded-xl bg-[#211c36] border border-[#36314d] flex flex-col gap-3 shadow-md"
              >
                <div className="flex items-center gap-3">
                  <img
                    alt={mentor.name}
                    className="w-12 h-12 rounded-xl object-cover ring-1 ring-[#00f5d4]/40"
                    src={mentor.imageUrl}
                  />
                  <div className="flex flex-col min-w-0">
                    <h3 className="font-label-lg text-sm text-[#e6deff] font-bold truncate">
                      {mentor.name}
                    </h3>
                    <span className="text-[11px] text-[#00f5d4] truncate">{mentor.roleSchool}</span>
                    <span className="text-[10px] text-[#b9cac4] truncate">{mentor.stream}</span>
                  </div>
                </div>

                <p className="font-body-sm text-xs text-[#b9cac4] leading-relaxed line-clamp-2">
                  "{mentor.adviceSnippet}"
                </p>

                <div className="flex flex-wrap gap-1">
                  {mentor.topics.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-[#140f29] text-[#ffd48b] text-[10px] font-medium"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleBookSpark(mentor)}
                  className="w-full h-9 rounded-lg bg-[#2b2641] hover:bg-[#36314d] text-xs font-bold text-[#e6deff] flex items-center justify-center gap-1.5 transition-all border border-[#36314d]"
                >
                  <span className="material-symbols-outlined text-[15px] text-[#00f5d4]">chat</span>
                  <span>Book 15-Min Spark Chat (+50 XP)</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Arya 24/7 Counselor Mode */
        <div className="flex flex-col h-[520px] rounded-2xl bg-[#211c36] border border-[#36314d] overflow-hidden">
          {/* Header */}
          <div className="p-3 bg-[#1d1832] border-b border-[#36314d] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative">
                <img
                  className="w-8 h-8 rounded-full object-cover ring-1 ring-[#00f5d4]"
                  alt="Arya"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuALWktTRI_vI8IO0hebieVF-npZGmyGKkKzPp3P83BGoRxBHgtt7HXNQvtgMtBNFhz_BmjF7N1yKMz9enea1SoUo8zhnOwXNyn53HLeP4M_ym0XPENW7qW2znW2jJhZjdb4fw6t7tctFbmWD3f5A7QDGsVFXnfGKUjKGZtAoSdtKMXZ-mAJX2Q6AtTrCVHpzreSeU6frPQKwiqLVXJJyM8p0h2kWR7KQ9LqdTtA2itDWuVV_8vmfJM3"
                />
                <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-[#00f5d4]" />
              </div>
              <div>
                <span className="font-label-md text-xs text-[#e6deff] font-bold block">Arya • AI Navigator</span>
                <span className="text-[10px] text-[#00f5d4]">Trained on middle school stream dilemmas</span>
              </div>
            </div>
            <span className="text-[10px] text-[#b9cac4] px-2 py-0.5 rounded-full bg-[#140f29]">24/7 Active</span>
          </div>

          {/* Messages list */}
          <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex flex-col max-w-[85%] ${
                  m.sender === 'student' ? 'self-end items-end' : 'self-start items-start'
                }`}
              >
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed ${
                    m.sender === 'student'
                      ? 'bg-[#36314d] text-[#e6deff] rounded-tr-xs'
                      : 'bg-[#140f29] text-[#e6deff] border border-[#36314d]/60 rounded-tl-xs shadow-sm'
                  }`}
                >
                  {m.text}
                </div>
                <span className="text-[9px] text-[#83948f] mt-1 px-1">{m.time}</span>
              </div>
            ))}
            {isTyping && (
              <div className="self-start p-2.5 rounded-xl bg-[#140f29] text-xs text-[#00f5d4] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00f5d4] animate-ping" />
                <span>Arya is thinking...</span>
              </div>
            )}
          </div>

          {/* Quick suggestions */}
          <div className="px-3 py-1.5 bg-[#1d1832] border-t border-[#36314d]/50 flex gap-1.5 overflow-x-auto no-scrollbar">
            <button
              type="button"
              onClick={() => handleSendMessage('Should I pick PCM if I am average in Physics?')}
              className="text-[10px] px-2.5 py-1 rounded-full bg-[#211c36] text-[#b9cac4] hover:text-[#00f5d4] whitespace-nowrap"
            >
              Average in Physics?
            </button>
            <button
              type="button"
              onClick={() => handleSendMessage('What is the difference between Applied Math and Standard Math?')}
              className="text-[10px] px-2.5 py-1 rounded-full bg-[#211c36] text-[#b9cac4] hover:text-[#00f5d4] whitespace-nowrap"
            >
              Applied Math vs Standard?
            </button>
            <button
              type="button"
              onClick={() => handleSendMessage('How to study for Class 10 boards and entrance tests together?')}
              className="text-[10px] px-2.5 py-1 rounded-full bg-[#211c36] text-[#b9cac4] hover:text-[#00f5d4] whitespace-nowrap"
            >
              Boards vs Entrances?
            </button>
          </div>

          {/* Input Box */}
          <div className="p-2.5 bg-[#1d1832] border-t border-[#36314d] flex gap-2">
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
              placeholder="Ask Arya anything about your streams..."
              className="flex-1 bg-[#140f29] border border-[#36314d] rounded-xl px-3 py-2 text-xs text-[#e6deff] focus:outline-none focus:border-[#00f5d4]"
            />
            <button
              type="button"
              onClick={() => handleSendMessage()}
              className="px-3.5 py-2 rounded-xl bg-[#00f5d4] text-[#0f0a24] font-bold text-xs hover:opacity-90 transition-all flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-[16px]">send</span>
            </button>
          </div>
        </div>
      )}

      {/* Booking confirmation modal */}
      {bookedMeeting && selectedMentor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
          <div className="w-full max-w-sm rounded-2xl bg-[#1d1832] border border-[#00f5d4]/40 p-5 shadow-2xl flex flex-col gap-3 text-center animate-in zoom-in-95">
            <span className="text-3xl">🎉</span>
            <h4 className="font-headline-sm text-base text-[#00f5d4] font-bold">Spark Chat Requested!</h4>
            <p className="text-xs text-[#b9cac4]">
              We notified <strong className="text-[#e6deff]">{selectedMentor.name}</strong> ({selectedMentor.roleSchool}). You’ll receive an invite in your notifications log within 24 hours.
            </p>
            <div className="p-2.5 rounded-xl bg-[#140f29] text-xs text-[#ffd48b] font-semibold">
              ✦ +50 Cosmic XP Unlocked!
            </div>
            <button
              type="button"
              onClick={() => setBookedMeeting(false)}
              className="w-full h-10 rounded-xl bg-[#00f5d4] text-[#0f0a24] font-bold text-xs mt-1"
            >
              Awesome, Got It!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
