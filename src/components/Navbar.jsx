import { Moon, Sun, BookOpen, GraduationCap } from 'lucide-react';

/**
 * Navbar — top bar, fully mobile-first
 */
export default function Navbar({ darkMode, setDarkMode, studiedCount, totalCount }) {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/60 dark:border-slate-700/60 shadow-sm">
      <div className="w-full max-w-3xl mx-auto px-3 sm:px-6 h-14 flex items-center justify-between gap-2">

        {/* ── Logo ── */}
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-8 h-8 shrink-0 rounded-xl bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center shadow-md shadow-violet-500/30">
            <GraduationCap size={17} className="text-white" />
          </div>
          <div className="hidden xs:block min-w-0">
            <p className="text-xs font-bold text-slate-800 dark:text-white leading-tight truncate">Graphics</p>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">Quiz</p>
          </div>
        </div>

        {/* ── Right side ── */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Studied badge — compact on mobile */}
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-200 dark:border-emerald-700/50">
            <BookOpen size={12} className="text-emerald-600 dark:text-emerald-400 shrink-0" />
            <span className="text-[11px] font-semibold text-emerald-700 dark:text-emerald-300 whitespace-nowrap">
              {studiedCount}/{totalCount}
            </span>
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode"
            className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-700 flex items-center justify-center
                       text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600
                       active:scale-90 transition-all duration-200"
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </header>
  );
}
