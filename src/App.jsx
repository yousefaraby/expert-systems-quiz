import { useState, useEffect, useCallback, useRef } from 'react';
import {
  ChevronLeft, ChevronRight, Shuffle, LayoutGrid,
  BarChart2, Search as SearchIcon, Quote
} from 'lucide-react';

import { questions as ALL_QUESTIONS } from './data/questions';
import { quotes } from './data/quotes';

import Navbar          from './components/Navbar';
import ProgressBar     from './components/ProgressBar';
import QuestionCard    from './components/QuestionCard';
import SearchBar       from './components/SearchBar';
import CategoryFilter  from './components/CategoryFilter';
import StatsPanel      from './components/StatsPanel';
import Footer          from './components/Footer';

// ── Helpers ──────────────────────────────────────────────────

/** Fisher-Yates shuffle — returns a new shuffled array */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/** Load studied IDs from localStorage */
function loadStudied() {
  try {
    return new Set(JSON.parse(localStorage.getItem('studiedIds') || '[]'));
  } catch {
    return new Set();
  }
}

/** Persist studied IDs to localStorage */
function saveStudied(set) {
  localStorage.setItem('studiedIds', JSON.stringify([...set]));
}

// ── Loading Screen ────────────────────────────────────────────
function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center
                    bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      <div className="spinner mb-6" />
      <p className="text-violet-300 font-semibold text-lg tracking-wide animate-pulse">
        Loading your study session…
      </p>
      <p className="text-slate-500 text-sm mt-2">Computer Graphics</p>
    </div>
  );
}

// ── Empty State ───────────────────────────────────────────────
function EmptyState({ onReset }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center animate-fade-in">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-xl font-bold text-slate-700 dark:text-slate-200 mb-2">No questions found</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">
        Try a different search term or category.
      </p>
      <button onClick={onReset} className="btn-primary">
        Clear filters
      </button>
    </div>
  );
}

// ── Main App ──────────────────────────────────────────────────
export default function App() {
  // ── Dark mode (persisted) ──────────────────────────────────
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // ── Loading state ──────────────────────────────────────────
  const [loading, setLoading] = useState(true);

  // ── Questions state ────────────────────────────────────────
  // Shuffled order is generated once on mount and kept stable
  const [orderedQuestions, setOrderedQuestions] = useState([]);

  // ── Navigation ─────────────────────────────────────────────
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animDir, setAnimDir]           = useState('right');

  // ── Filters ────────────────────────────────────────────────
  const [searchQuery,    setSearchQuery]    = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  // ── Studied ────────────────────────────────────────────────
  const [studiedIds, setStudiedIds] = useState(loadStudied);

  // ── UI panels ──────────────────────────────────────────────
  const [showStats,  setShowStats]  = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  // ── Motivational quote (random per session) ────────────────
  const [quote] = useState(() => quotes[Math.floor(Math.random() * quotes.length)]);

  // Ref to track card key for forced remount on question change
  const cardKey = useRef(0);

  // ── On mount: shuffle, simulate loading ───────────────────
  useEffect(() => {
    setOrderedQuestions(shuffleArray(ALL_QUESTIONS));
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  // ── Persist dark mode ─────────────────────────────────────
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  // ── Derived: filtered questions ───────────────────────────
  const filteredQuestions = orderedQuestions.filter((q) => {
    const matchCat    = activeCategory === 'All' || q.category === activeCategory;
    const matchSearch = !searchQuery ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  // Current question object
  const currentQuestion = filteredQuestions[currentIndex] ?? null;

  // ── Navigation helpers ────────────────────────────────────
  const navigate = useCallback((newIndex, dir) => {
    cardKey.current += 1;
    setAnimDir(dir);
    setCurrentIndex(newIndex);
  }, []);

  const goNext = useCallback(() => {
    if (filteredQuestions.length === 0) return;
    const next = (currentIndex + 1) % filteredQuestions.length;
    navigate(next, 'right');
  }, [currentIndex, filteredQuestions.length, navigate]);

  const goPrev = useCallback(() => {
    if (filteredQuestions.length === 0) return;
    const prev = (currentIndex - 1 + filteredQuestions.length) % filteredQuestions.length;
    navigate(prev, 'left');
  }, [currentIndex, filteredQuestions.length, navigate]);

  const goRandom = useCallback(() => {
    if (filteredQuestions.length <= 1) return;
    let idx;
    do { idx = Math.floor(Math.random() * filteredQuestions.length); }
    while (idx === currentIndex);
    navigate(idx, 'bounce');
  }, [currentIndex, filteredQuestions.length, navigate]);

  const doShuffle = useCallback(() => {
    setOrderedQuestions((prev) => shuffleArray(prev));
    navigate(0, 'bounce');
  }, [navigate]);

  // ── Reset index when filters change ──────────────────────
  useEffect(() => {
    navigate(0, 'fade');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery, activeCategory]);

  // ── Keyboard shortcuts ────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      // Ignore if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight') { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft')  { e.preventDefault(); goPrev(); }
      if (e.key === ' ') {
        e.preventDefault();
        // Trigger click on the show-answer button of the current question
        if (currentQuestion) {
          document.getElementById(`show-answer-btn-${currentQuestion.id}`)?.click();
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev, currentQuestion]);

  // ── Toggle studied ────────────────────────────────────────
  const toggleStudied = useCallback((id) => {
    setStudiedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      saveStudied(next);
      return next;
    });
  }, []);

  // ── Render ────────────────────────────────────────────────
  if (loading) return <LoadingScreen />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-indigo-50
                    dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950
                    text-slate-900 dark:text-slate-100 transition-colors duration-300">

      {/* ── Decorative background blobs ── */}
      <div aria-hidden className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full
                        bg-violet-400/10 dark:bg-violet-600/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full
                        bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl" />
      </div>

      {/* ── Navbar ── */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        studiedCount={studiedIds.size}
        totalCount={ALL_QUESTIONS.length}
      />

      {/* ── Main content ── */}
      <main className="relative max-w-3xl mx-auto px-3 sm:px-6 py-5 sm:py-8 space-y-4 sm:space-y-6">

        {/* ── Toolbar row ── */}
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-xl sm:text-2xl font-extrabold gradient-text leading-none">Study Cards</h1>

          <div className="flex items-center gap-1.5">
            {/* Search toggle */}
            <button
              id="search-toggle"
              onClick={() => setShowSearch((v) => !v)}
              aria-label="Toggle search"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold
                           bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200
                           border border-slate-200 dark:border-slate-600 shadow
                           active:scale-95 transition-all duration-200
                           ${showSearch ? 'ring-2 ring-violet-500 border-violet-400' : ''}`}
            >
              <SearchIcon size={15} />
              <span>Search</span>
            </button>

            {/* Stats toggle */}
            <button
              id="stats-toggle"
              onClick={() => setShowStats((v) => !v)}
              aria-label="Toggle stats"
              className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold
                           bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200
                           border border-slate-200 dark:border-slate-600 shadow
                           active:scale-95 transition-all duration-200
                           ${showStats ? 'ring-2 ring-violet-500 border-violet-400' : ''}`}
            >
              <BarChart2 size={15} />
              <span className="hidden sm:inline">Stats</span>
            </button>

            {/* Shuffle */}
            <button
              id="shuffle-btn"
              onClick={doShuffle}
              aria-label="Shuffle questions"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold
                         bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow
                         active:scale-95 transition-all duration-200"
            >
              <Shuffle size={15} />
              <span className="hidden sm:inline">Shuffle</span>
            </button>
          </div>
        </div>

        {/* ── Search bar (collapsible) ── */}
        <div className={`overflow-hidden transition-all duration-300 ${showSearch ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
          {showSearch && <SearchBar value={searchQuery} onChange={setSearchQuery} />}
        </div>

        {/* ── Stats panel (collapsible) ── */}
        <div className={`overflow-hidden transition-all duration-300 ${showStats ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          {showStats && (
            <StatsPanel
              total={ALL_QUESTIONS.length}
              studied={studiedIds.size}
            />
          )}
        </div>

        {/* ── Category filter ── */}
        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

        {/* ── Progress bar ── */}
        {filteredQuestions.length > 0 && (
          <ProgressBar current={currentIndex + 1} total={filteredQuestions.length} />
        )}

        {/* ── Question card or empty state ── */}
        {filteredQuestions.length === 0 ? (
          <EmptyState onReset={() => { setSearchQuery(''); setActiveCategory('All'); }} />
        ) : (
          <QuestionCard
            key={`${currentQuestion?.id}-${cardKey.current}`}
            question={currentQuestion}
            index={currentIndex}
            total={filteredQuestions.length}
            isStudied={studiedIds.has(currentQuestion?.id)}
            onToggleStudied={() => toggleStudied(currentQuestion?.id)}
            animDir={animDir}
          />
        )}

        {/* ── Navigation buttons — full width on mobile ── */}
        {filteredQuestions.length > 0 && (
          <div className="grid grid-cols-3 gap-2 pt-1">
            {/* Previous */}
            <button
              id="prev-btn"
              onClick={goPrev}
              aria-label="Previous question"
              disabled={filteredQuestions.length <= 1}
              className="flex items-center justify-center gap-1.5 py-3 rounded-xl text-sm font-semibold
                         bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200
                         border border-slate-200 dark:border-slate-600 shadow
                         active:scale-95 transition-all duration-200
                         disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={18} />
              <span>Prev</span>
            </button>

            {/* Random */}
            <button
              id="random-btn"
              onClick={goRandom}
              aria-label="Random question"
              disabled={filteredQuestions.length <= 1}
              className="flex items-center justify-center gap-1.5 py-3 rounded-xl text-sm font-semibold
                         bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/30
                         active:scale-95 transition-all duration-200
                         disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <LayoutGrid size={16} />
              <span>Random</span>
            </button>

            {/* Next */}
            <button
              id="next-btn"
              onClick={goNext}
              aria-label="Next question"
              disabled={filteredQuestions.length <= 1}
              className="flex items-center justify-center gap-1.5 py-3 rounded-xl text-sm font-semibold
                         bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200
                         border border-slate-200 dark:border-slate-600 shadow
                         active:scale-95 transition-all duration-200
                         disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        )}

        {/* ── Keyboard shortcut hint — desktop only ── */}
        <p className="hidden sm:block text-center text-xs text-slate-400 dark:text-slate-600">
          ⌨️ &nbsp;<kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-xs">←</kbd>&nbsp;
          <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-xs">→</kbd>&nbsp; navigate &nbsp;·&nbsp;
          <kbd className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-700 font-mono text-xs">Space</kbd>&nbsp; toggle answer
        </p>

        {/* ── Motivational quote ── */}
        <div className="animate-fade-in mt-6">
          <div className="glass-card rounded-2xl p-5 flex gap-4 items-start">
            <Quote size={24} className="text-violet-400 dark:text-violet-500 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 leading-relaxed italic">
                "{quote.text}"
              </p>
              <p className="text-xs text-slate-400 dark:text-slate-500 mt-1.5">— {quote.author}</p>
            </div>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
