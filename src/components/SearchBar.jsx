import { Search, X } from 'lucide-react';

/**
 * SearchBar — controlled input to filter questions by text
 */
export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      {/* Search icon */}
      <Search
        size={16}
        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-500 pointer-events-none"
      />

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search questions..."
        aria-label="Search questions"
        className="w-full pl-10 pr-10 py-2.5 rounded-xl text-sm
                   bg-white dark:bg-slate-800
                   border border-slate-200 dark:border-slate-700
                   text-slate-800 dark:text-slate-100
                   placeholder:text-slate-400 dark:placeholder:text-slate-500
                   focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500
                   transition-all duration-200 shadow-sm"
      />

      {/* Clear button — only shown when there's a value */}
      {value && (
        <button
          onClick={() => onChange('')}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2
                     text-slate-400 hover:text-slate-600 dark:hover:text-slate-200
                     hover:scale-110 active:scale-95 transition-all duration-150"
        >
          <X size={15} />
        </button>
      )}
    </div>
  );
}
