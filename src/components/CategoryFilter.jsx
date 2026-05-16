// Category filter chip list
const CATEGORIES = ['All', 'NLP', 'Regular Expressions', 'Automata', 'Morphology', 'N-grams'];

// Color map for each category
const CAT_COLORS = {
  'All':                  'bg-violet-600 text-white border-violet-600',
  'NLP':                  'bg-blue-600 text-white border-blue-600',
  'Regular Expressions':  'bg-emerald-600 text-white border-emerald-600',
  'Automata':             'bg-amber-500 text-white border-amber-500',
  'Morphology':           'bg-rose-500 text-white border-rose-500',
  'N-grams':              'bg-purple-600 text-white border-purple-600',
};

// Inactive style
const INACTIVE =
  'bg-transparent text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-violet-400 dark:hover:border-violet-500';

/**
 * CategoryFilter — horizontal scrolling chip list for filtering by category
 */
export default function CategoryFilter({ active, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
      {CATEGORIES.map((cat) => {
        const isActive = active === cat;
        return (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            aria-pressed={isActive}
            className={`whitespace-nowrap px-4 py-1.5 rounded-full text-xs font-semibold border
                        transition-all duration-200 hover:scale-105 active:scale-95
                        ${isActive ? CAT_COLORS[cat] : INACTIVE}`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
