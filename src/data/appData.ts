import { AlchemistCard, Quest, Mentor, RadarQuestion } from '../types';

export const ALCHEMIST_CARDS: AlchemistCard[] = [
  {
    id: 'lego-minecraft',
    emoji: '🧱',
    hobby: 'Minecraft & LEGO Building',
    fitScore: 98,
    scoreColor: 'text-[#00f5d4]',
    streamTitle: 'Spatial Architecture & Game Physics',
    tags: ['PCM', 'Computational Design', '3D VFX'],
    futureRoles: 'Game World Architect, VR Engineer',
    overview: 'Your obsession with procedural blocks, 3D spatial geometry, and redstone circuits translates into computational engineering and immersive virtual world design.',
    subjects: ['Physics', 'Mathematics', 'Computer Science / Informatics', 'Engineering Graphics'],
    unfairAdvantage: 'High natural spatial-temporal reasoning (testing top 2% of middle schoolers) and instinctual understanding of modular assembly.',
    recommendedBoards: ['CBSE (PCM + CS)', 'ISC (Math + Physics + Art)', 'IB (Physics HL + Math AA)']
  },
  {
    id: 'manga-webtoons',
    emoji: '🎨',
    hobby: 'Drawing Manga & Webtoons',
    fitScore: 95,
    scoreColor: 'text-[#ffb2bb]',
    streamTitle: 'UI/UX & Creative Direction',
    tags: ['Humanities / Design', 'Psychology', 'New Media'],
    futureRoles: 'Interaction Designer, Narrative Lead',
    overview: 'You naturally understand pacing, emotional empathy, visual hierarchy, and digital storytelling—the exact core competencies tech companies pay top dollar for in product design.',
    subjects: ['Design & Visual Arts', 'Psychology', 'English Literature', 'Media Studies / Mass Comm'],
    unfairAdvantage: 'Ability to craft user-centric empathy maps and rapid visual wireframes before engineers write a single line of code.',
    recommendedBoards: ['CBSE (Humanities with Fine Arts)', 'IB DP (Visual Arts HL + Psychology)', 'Cambridge A-Levels']
  },
  {
    id: 'debates-virality',
    emoji: '🎙️',
    hobby: 'Debates & Virality Breakdowns',
    fitScore: 92,
    scoreColor: 'text-[#ffba27]',
    streamTitle: 'Behavioral Economics & Corporate Law',
    tags: ['Commerce with Maths', 'Political Science', 'Logic'],
    futureRoles: 'FinTech Strategist, Tech Policy Advocate',
    overview: 'You spot persuasion levers, structural fallacies, and audience retention metrics. You can bridge financial numbers with psychological incentives and legal frameworks.',
    subjects: ['Economics', 'Accountancy / Applied Math', 'Business Studies / Legal Studies', 'Political Science'],
    unfairAdvantage: 'Critical rhetorical rigor and comfort breaking down complex incentives under real-time spotlight pressure.',
    recommendedBoards: ['CBSE (Commerce with Applied Math)', 'ISC (Economics + Commerce + Legal)', 'IB (Economics HL + Global Politics)']
  },
  {
    id: 'pets-wildlife',
    emoji: '🌿',
    hobby: 'Pets, Wildlife & Terrariums',
    fitScore: 96,
    scoreColor: 'text-[#00f5d4]',
    streamTitle: 'Biotechnology & Conservation AI',
    tags: ['PCB', 'Informatics', 'Eco-Tech'],
    futureRoles: 'Bio-geneticist, Ocean Roboticist',
    overview: 'Managing micro-ecosystems, observing animal behavior, and caring for botany develops deep scientific observational discipline and systems-thinking.',
    subjects: ['Biology', 'Chemistry', 'Physics', 'Biotechnology / Informatics Practices'],
    unfairAdvantage: 'Intuitive grasp of ecological feedback loops, biodiversity matrices, and living cellular mechanics without being terrified of wet labs.',
    recommendedBoards: ['CBSE (PCB with Biotechnology)', 'ISC (Biology + Chemistry + Environmental Science)', 'IB (Biology HL + Env Systems)']
  }
];

export const SIMULATOR_QUESTS: Quest[] = [
  {
    id: 'quest-1',
    category: 'Physics & Energy',
    categoryBadgeClass: 'bg-[#940335] text-[#ffb2bb]',
    timeEstimate: '2m',
    xpReward: 120,
    title: 'The Mars Colony Power Outage',
    prompt: 'Dust storms blocked solar collectors. Do you divert battery life to hydroponics or life-support comms?',
    options: [
      {
        id: 'opt-a',
        label: 'Option A',
        title: 'Auxiliary Molten-Salt Turbines',
        description: 'Tap subterranean geothermal heat to recharge backup capacitors in 18 minutes.',
        outcome: 'Capacitors stabilized at 84%! Molten salt thermal fluid maintained critical greenhouse heat without losing life-support telemetry.',
        streamAffinity: 'Applied Thermal Physics & Chemical Engineering (PCM)',
        tacticalInsight: 'You prefer thermodynamic physics and hardware redundancy over speculative electromagnetic beams.'
      },
      {
        id: 'opt-b',
        label: 'Option B',
        title: 'Orbital Laser Relay Array',
        description: 'Calibrate orbital satellite mirrors to beam focused infrared energy directly through dust clouds.',
        outcome: 'Orbital laser locked onto the receiver dish! Power surged to 110%, clearing dust crust from collectors via thermal vibration.',
        streamAffinity: 'Aerospace Systems & Optoelectronics (PCM with CS)',
        tacticalInsight: 'You lean toward computational astrophysics and satellite telecom algorithms.'
      }
    ]
  },
  {
    id: 'quest-2',
    category: 'Finance & Brand',
    categoryBadgeClass: 'bg-[#2b2641] text-[#ffba27]',
    timeEstimate: '3m',
    xpReward: 150,
    title: 'Sneaker Brand Launch with $1,000',
    prompt: 'You have 50 prototypes. Do you spend the budget on Instagram creators or premium sustainable sole material?',
    options: [
      {
        id: 'opt-1',
        label: 'Strategy 1',
        title: 'Micro-Influencer Seed Drop',
        description: 'Send 20 pairs to niche skate & parkour creators with authentic 30-second unboxing reels.',
        outcome: 'Reels hit 480k organic views! Waitlist ballooned to 2,400 orders within 48 hours with zero ad burn.',
        streamAffinity: 'Consumer Behavior & Viral Marketing (Commerce with Marketing)',
        tacticalInsight: 'You recognize that distribution velocity and peer trust outweigh incremental product refinement.'
      },
      {
        id: 'opt-2',
        label: 'Strategy 2',
        title: 'Eco-Algae Rubber Patents',
        description: 'Invest budget into ASTM certified biodegradable algae foam for a unique IP differentiator.',
        outcome: 'Featured on Dezeen and Vogue Green! Secured angel grant of $15,000 based on verified sustainability credentials.',
        streamAffinity: 'Sustainable Economics & Supply Chain Innovation (Commerce + Eco Studies)',
        tacticalInsight: 'You focus on moat creation and proprietary material value.'
      }
    ]
  },
  {
    id: 'quest-3',
    category: 'Math & Urban Logic',
    categoryBadgeClass: 'bg-[#36314d] text-[#00f5d4]',
    timeEstimate: '2m',
    xpReward: 110,
    title: 'Smart City Gridlock Grid',
    prompt: 'The morning subway broke. Reroute 12,000 passengers using algorithm-scheduled autonomous vans or green bicycle corridors?',
    options: [
      {
        id: 'algo',
        label: 'Algo Dynamic',
        title: 'Real-Time Fleet Dispatch',
        description: 'Deploy dynamic bipartite matching to pool commuters into 6-passenger electric shuttles.',
        outcome: 'Gridlock cleared 35% faster than average! Average commute delay kept under 14 minutes per citizen.',
        streamAffinity: 'Operations Research & Discrete Mathematics (Maths + CS)',
        tacticalInsight: 'You instinctively trust graph theory, predictive clustering, and algorithmic logistics.'
      },
      {
        id: 'crowd',
        label: 'Crowd Incentive',
        title: 'Gamified Walking Vouchers',
        description: 'Offer free coffee vouchers & metro tokens to citizens walking the scenic 1.2km park corridor.',
        outcome: '6,200 commuters opted for the walk! Downtown street retail reported a 42% morning revenue bump.',
        streamAffinity: 'Behavioral Economics & Urban Sociology (Humanities / Commerce)',
        tacticalInsight: 'You understand that human behavioral nudges often solve logistical problems cheaper than heavy computing.'
      }
    ]
  }
];

export const MENTORS_DATA: Mentor[] = [
  {
    id: 'tara',
    name: 'Tara Deshmukh',
    roleSchool: 'NID Ahmedabad • Class 12 Humanities',
    stream: 'Design & Visual Communication',
    bio: 'Scored 96% in 10th CBSE and chose Humanities despite immense family pressure for Engineering. Cracked NID with All-India Rank 14.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDzy0sn2MGx-4g8LQduDOUygSfqi93k544aMOEVgpyUp0f36t77ZuAFcIirjJvuNTT0o21iTOeapFUZqtCa3re-DMFTWDfWe6Pu1P3kj-XD1tq1gQc01MGd6KnhNzAAuKlVa9oAtgQoDt2SBL2ryjaW0ukqYxCFnoFwnep5FPHc3dwGQK39IeffJb9dDPtxQnPLPUvI_CRECuoi_y6vBycaYdZZQH-mZf2kMRyQTVTmTI74rB30RVZi',
    adviceSnippet: 'Humanities is not an easy escape; it requires intense research, essay craft, and portfolio discipline. But you wake up excited every single day.',
    topics: ['NID Preparation', 'Humanities Portfolio', 'Parent Negotiation'],
    tags: ['Humanities', 'Design', 'Art']
  },
  {
    id: 'kabir',
    name: 'Kabir Mehta',
    roleSchool: 'IIT Bombay Aero • PCB/PCM Switcher',
    stream: 'Aerospace & Robotics',
    bio: 'Started Class 11 with Biology, then realized his heart was in drone mechanics and switched to PCM in mid-year. Cleared JEE Advanced in 2024.',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI_n8eK7Y22vUi8MPe5O3RE0DFgMsX-ab5KjehfD_nW0U6RJrrQ6IgAcyekTxghdDsWFZjGJ16SDQI45IolbBC2V0B9Q_v8UNDm3C0zRhxDdrASsqGU-U1OVLSGMtR9AbgQSXFdIPnTV_w2h95wXuHIw25fNp2EA_UIc5a7ZWJyrMJyJbjW4OchgrEFFT50gJyZf7tig-QFfLLm_birW6ttuOEGzkcubxqsYlLfjuRE3rOXUM86tW0',
    adviceSnippet: 'Do not panic if you picked the wrong stream in July. The syllabus gap can be bridged in 3 months with structured question-mapping.',
    topics: ['Stream Switching', 'JEE Strategy', 'Robotics Projects'],
    tags: ['PCM', 'STEM', 'Switcher']
  },
  {
    id: 'ananya',
    name: 'Ananya Sen',
    roleSchool: 'SRCC New Delhi • Commerce with Math',
    stream: 'FinTech & Quantitative Finance',
    bio: 'Loved video game micro-economies in middle school. Chose Commerce with Applied Math and scored 99.4 percentile in CUET.',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    adviceSnippet: 'Applied Mathematics in Class 11 Commerce changes the game. It teaches you real world linear programming and stock calculus.',
    topics: ['CUET prep', 'Commerce + Math', 'FinTech'],
    tags: ['Commerce', 'Finance', 'Math']
  },
  {
    id: 'rohan',
    name: 'Rohan Varma',
    roleSchool: 'AIIMS Delhi • PCB & Bio-Design',
    stream: 'Neurosurgery & Medical Tech',
    bio: 'Combined a love for sketching anatomical models with NEET preparation. Now working on low-cost 3D printed surgical guides.',
    imageUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    adviceSnippet: 'Biology isn’t rote memorization if you draw mind-palaces. Connecting diagrams to mechanical physics makes NEET 10x easier.',
    topics: ['NEET Prep', 'PCB Balance', 'Bio-Design'],
    tags: ['PCB', 'Medicine', 'BioTech']
  }
];

export const RADAR_QUESTIONS: RadarQuestion[] = [
  {
    id: 1,
    title: 'The Uninhabited Island Challenge',
    scenario: 'Your class trip ship runs aground on an uncharted tropical island. Everyone is panicking. What is your first instinctive response?',
    options: [
      {
        text: 'Build an elevated bamboo shelter using triangulation for wind resistance.',
        dimension: 'Spatial',
        insight: 'Strong engineering & structural intuition'
      },
      {
        text: 'Inventory all water bottles, emergency rations, and calculate daily consumption rates.',
        dimension: 'Analytical',
        insight: 'Resource economics and quantitative logic'
      },
      {
        text: 'Identify edible native fruits and test fresh water sources with iodine.',
        dimension: 'Biological',
        insight: 'Natural science observation & bio-safety'
      },
      {
        text: 'Rally classmates into teams, allocate shifts, and boost morale with campfire stories.',
        dimension: 'Strategic',
        insight: 'Leadership, organizational sociology & psychology'
      }
    ]
  },
  {
    id: 2,
    title: 'The $10,000 School Innovation Fund',
    scenario: 'The principal announces a $10,000 grant for any student-led initiative that creates the greatest impact before graduation. What do you pitch?',
    options: [
      {
        text: 'An autonomous rooftop hydroponics farm feeding the school cafeteria.',
        dimension: 'Biological',
        insight: 'Sustainable bio-technology & eco-agriculture'
      },
      {
        text: 'A student podcast & digital documentary studio capturing local heritage.',
        dimension: 'Creative',
        insight: 'Media narrative, journalism & visual arts'
      },
      {
        text: 'A smart peer-tutoring micro-economy with digital credits and reward discounts.',
        dimension: 'Strategic',
        insight: 'FinTech, behavioral economics & product design'
      },
      {
        text: 'A 3D printing maker lab building prosthetics for community pets.',
        dimension: 'Spatial',
        insight: 'Applied mechanical design & rapid prototyping'
      }
    ]
  },
  {
    id: 3,
    title: 'The Sudden Weekend Blackout',
    scenario: 'The power grid and internet are down across your entire city for 48 hours. How do you pass the time?',
    options: [
      {
        text: 'Disassemble an old radio or clock to understand its mechanical gears.',
        dimension: 'Spatial',
        insight: 'Hardware curiosity and tactile problem solving'
      },
      {
        text: 'Organize an intense board game tournament like Catan, Chess, or Monopoly.',
        dimension: 'Strategic',
        insight: 'Game theory, negotiations and probability'
      },
      {
        text: 'Draft a comic book storyline or write lyrics with acoustic instruments.',
        dimension: 'Creative',
        insight: 'Artistic expression and narrative world-building'
      },
      {
        text: 'Analyze chess puzzles or solve cryptic crosswords and math riddles.',
        dimension: 'Analytical',
        insight: 'Pure mathematical logic and deduction'
      }
    ]
  }
];

export const INITIAL_ARYA_REPLY = `Not at all! 🧬 Medical Illustration, Ergonomics & Prosthetic Design, and Bio-Design combine hands-on living science with visual craft and zero heavy calculus!`;
