"use client";

import React, { useState } from 'react';

// ==========================================
// Types & Interfaces
// ==========================================

type ViewType = 'roadmap' | 'kanban';
type PhaseType = 'BASIC' | 'ADVANCED';
const MONTHS = ['FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'] as const;
type MonthType = typeof MONTHS[number];

interface TopicData {
  id: number;
  title: string;
  phase: PhaseType;
  month: MonthType;
  focus?: string; // Optional short focus point for Roadmap View
}

// ==========================================
// Data Source (The Curriculum Truth)
// ==========================================

const CURRICULUM_DATA: TopicData[] = [
  // === BASIC PHASE (Feb - May) ===
  { id: 1, title: 'Fundamentals of Programming', phase: 'BASIC', month: 'FEB', focus: 'Flowcharts, pseudo-code' },
  { id: 2, title: 'Language Basics (C++)', phase: 'BASIC', month: 'FEB', focus: 'Syntax, variables, I/O' },
  { id: 3, title: 'Logic Building', phase: 'BASIC', month: 'FEB', focus: 'Nested loops, basic conditions' },
  { id: 4, title: 'Patterns', phase: 'BASIC', month: 'MAR', focus: 'Star/Number patterns' },
  { id: 5, title: 'Time & Space Complexity', phase: 'BASIC', month: 'MAR', focus: 'Big-O notation analysis' },
  { id: 6, title: 'STL and Collections', phase: 'BASIC', month: 'MAR', focus: 'Vectors, pairs, iterators' },
  { id: 7, title: 'Concept Basics', phase: 'BASIC', month: 'APR', focus: 'Memory management basics' },
  { id: 8, title: 'Basic Maths', phase: 'BASIC', month: 'APR', focus: 'Digit extraction, basic number theory' },
  { id: 9, title: 'Basic Arrays', phase: 'BASIC', month: 'APR', focus: 'Traversal, simple manipulation' },
  { id: 10, title: 'Basic Hashing', phase: 'BASIC', month: 'MAY', focus: 'Frequency counting using maps' },
  { id: 11, title: 'Basic Strings', phase: 'BASIC', month: 'MAY', focus: 'ASCII, char arrays vs strings' },
  { id: 12, title: 'Basic Recursion', phase: 'BASIC', month: 'MAY', focus: 'Call stack, base cases' },

  // === ADVANCED PHASE (Jun - Dec) ===
  { id: 13, title: 'Sorting Algorithms', phase: 'ADVANCED', month: 'JUN', focus: 'Merge, Quick, Custom Comparators' },
  { id: 14, title: 'Advanced Arrays', phase: 'ADVANCED', month: 'JUN', focus: 'Kadane’s Algo, 2D Matrices' },
  { id: 15, title: 'Advanced Hashing', phase: 'ADVANCED', month: 'JUN', focus: 'Collision handling concepts' },
  { id: 16, title: 'Binary Search', phase: 'ADVANCED', month: 'JUL', focus: 'Search space reduction' },
  { id: 17, title: 'Advanced Recursion', phase: 'ADVANCED', month: 'JUL', focus: 'Backtracking concepts' },
  { id: 18, title: 'Linked List', phase: 'ADVANCED', month: 'JUL', focus: 'Reversal, slow/fast pointers' },
  { id: 19, title: 'Bit Manipulation', phase: 'ADVANCED', month: 'AUG', focus: 'XOR tricks, masking' },
  { id: 20, title: 'Greedy Algorithms', phase: 'ADVANCED', month: 'AUG', focus: 'Local optimal choices' },
  { id: 21, title: 'Sliding Window / Two Pointer', phase: 'ADVANCED', month: 'AUG', focus: 'Subarray/substring optimization' },
  { id: 22, title: 'Stack & Queues', phase: 'ADVANCED', month: 'SEP', focus: 'Monotonic stack, BFS queue' },
  { id: 23, title: 'Binary Trees', phase: 'ADVANCED', month: 'SEP', focus: 'DFS traversals, height calculation' },
  { id: 24, title: 'Binary Search Trees', phase: 'ADVANCED', month: 'SEP', focus: 'Search, insert, validate logic' },
  { id: 25, title: 'Heaps (Priority Queue)', phase: 'ADVANCED', month: 'OCT', focus: 'Min/Max heap, Top-K elements' },
  { id: 26, title: 'Graphs Basics', phase: 'ADVANCED', month: 'OCT', focus: 'BFS, DFS, Adjacency List' },
  { id: 27, title: 'Dynamic Programming (Intro)', phase: 'ADVANCED', month: 'OCT', focus: 'Memoization vs Tabulation' },
  { id: 28, title: 'Tries', phase: 'ADVANCED', month: 'NOV', focus: 'Prefix trees for strings' },
  { id: 29, title: 'Advanced Strings Algo', phase: 'ADVANCED', month: 'NOV', focus: 'KMP, Rolling Hash basics' },
  { id: 30, title: 'Advanced Maths', phase: 'ADVANCED', month: 'DEC', focus: 'Sieve, Modular Arithmetic' },
];


// ==========================================
// Sub-Components for ROADMAP View
// ==========================================

const RoadmapItem: React.FC<{ item: TopicData; index: number; total: number }> = ({ item, index, total }) => {
  const isLast = index === total - 1;
  const phaseColor = item.phase === 'BASIC' ? 'blue' : 'green';

  return (
    <div className="flex relative group">
        {/* Vertical connecting line */}
      {!isLast && (
        <div className={`absolute left-6 top-10 bottom-[-2.5rem] w-0.5 bg-${phaseColor}-200 z-0`}></div>
      )}

      {/* Number Node */}
      <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-${phaseColor}-100 border-2 border-${phaseColor}-500 flex items-center justify-center font-bold text-${phaseColor}-700`}>
        {String(item.id).padStart(2, '0')}
      </div>

      {/* Content Card */}
      <div className="ml-6 mb-8 bg-gray-100 p-4 rounded-xl shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff] border border-gray-200 flex-grow max-w-2xl">
        <div className="flex justify-between items-center mb-1">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <span className={`text-xs font-medium px-2 py-1 rounded-full bg-${phaseColor}-50 text-${phaseColor}-600`}>
                {item.month}
            </span>
        </div>
        {item.focus && <p className="text-sm text-gray-500">{item.focus}</p>}
      </div>
    </div>
  );
};

const RoadmapViewContainer: React.FC = () => {
  const basicItems = CURRICULUM_DATA.filter(d => d.phase === 'BASIC');
  const advancedItems = CURRICULUM_DATA.filter(d => d.phase === 'ADVANCED');

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Basic Phase Header */}
      <div className="mb-8 p-3 bg-blue-50 border-l-4 border-blue-500 rounded-r-md">
        <h2 className="text-xl font-bold text-blue-900">BASIC PHASE (First 5.5 Months)</h2>
      </div>
      <div className="pl-4">
        {basicItems.map((item, idx) => (
          <RoadmapItem key={item.id} item={item} index={idx} total={basicItems.length} />
        ))}
      </div>

      {/* Connector between phases */}
      <div className="h-12 ml-10 border-l-2 border-dashed border-gray-300"></div>

      {/* Advanced Phase Header */}
      <div className="my-8 p-3 bg-green-50 border-l-4 border-green-500 rounded-r-md">
        <h2 className="text-xl font-bold text-green-900">ADVANCED PHASE (Next 5.5 Months)</h2>
      </div>
      <div className="pl-4">
        {advancedItems.map((item, idx) => (
          <RoadmapItem key={item.id} item={item} index={idx} total={advancedItems.length} />
        ))}
      </div>
    </div>
  );
};


// ==========================================
// Sub-Components for KANBAN View
// ==========================================

const KanbanCard: React.FC<{ item: TopicData }> = ({ item }) => {
    const phaseBorder = item.phase === 'BASIC' ? 'border-blue-200 hover:border-blue-400' : 'border-green-200 hover:border-green-400';
    return (
        <div className={`bg-gray-100 p-3 rounded-xl shadow-[4px_4px_8px_#d1d9e6,-4px_-4px_8px_#ffffff] border ${phaseBorder} mb-3 transition-all cursor-default`}>
            <div className="flex justify-between text-xs text-gray-400 mb-1 font-mono">
                <span>#{String(item.id).padStart(2,'0')}</span>
                <span className={item.phase === 'BASIC' ? 'text-blue-400' : 'text-green-400'}>{item.phase[0]}</span>
            </div>
            <h4 className="text-sm font-medium text-gray-800 leading-tight">{item.title}</h4>
        </div>
    );
}

const KanbanColumn: React.FC<{ month: MonthType; items: TopicData[]; colorIndex: number }> = ({ month, items, colorIndex }) => {
    // Subtle color rotation for columns
    const bgColors = ['bg-slate-50', 'bg-gray-50', 'bg-zinc-50'];
    const headerColors = ['bg-slate-200 text-slate-700', 'bg-gray-200 text-gray-700', 'bg-zinc-200 text-zinc-700'];
    const bgClass = bgColors[colorIndex % bgColors.length];
    const headerClass = headerColors[colorIndex % headerColors.length];

    return (
        <div className={`flex-1 min-w-0 ${bgClass} rounded-lg overflow-hidden flex flex-col h-full`}>
            <div className={`p-3 text-center font-bold text-sm uppercase tracking-wider ${headerClass}`}>
                {month}
            </div>
            <div className="p-2 flex-1">
                {items.map(item => (
                    <KanbanCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
}

const KanbanViewContainer: React.FC = () => {
    // Group data by month
    const groupedData: Record<MonthType, TopicData[]> = MONTHS.reduce((acc, month) => {
        acc[month] = CURRICULUM_DATA.filter(item => item.month === month);
        return acc;
    }, {} as Record<MonthType, TopicData[]>);

    return (
        <div className="py-8 px-4 bg-gray-100 overflow-x-auto min-h-screen">
            <div className="flex gap-4 min-w-max">
                {MONTHS.map((month, index) => (
                    <KanbanColumn
                        key={month}
                        month={month}
                        items={groupedData[month]}
                        colorIndex={index}
                    />
                ))}
            </div>
        </div>
    );
};


// ==========================================
// Main Component
// ==========================================

const DsaRoadmapDashboard: React.FC = () => {
  const [view, setView] = useState<ViewType>('roadmap');

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 px-[58px]">
      {/* Header & Controls */}
      <header className="bg-gray-100 sticky top-4 z-30 border border-gray-200 rounded-2xl mx-[58px] shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              11-Month DSA Roadmap (C++)
            </h1>
            <p className="text-sm text-gray-500">February to December Curriculum</p>
          </div>

          {/* View Toggle Buttons */}
          <div className="bg-gray-200 p-1 rounded-xl flex items-center font-medium text-sm shadow-inner">
            <button
              onClick={() => setView('roadmap')}
              className={`px-4 py-2 rounded-md transition-all ${
                view === 'roadmap'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {/* Optional Icon: <List size={18} className="inline mr-2"/> */}
              Roadmap Flow
            </button>
            <button
              onClick={() => setView('kanban')}
              className={`px-4 py-2 rounded-md transition-all ml-1 ${
                view === 'kanban'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {/* Optional Icon: <Columns size={18} className="inline mr-2"/> */}
              Kanban Board
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main>
        {view === 'roadmap' ? <RoadmapViewContainer /> : <KanbanViewContainer />}
      </main>
    </div>
  );
};

export default DsaRoadmapDashboard;
