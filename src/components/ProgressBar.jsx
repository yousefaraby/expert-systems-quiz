/**
 * ProgressBar — shows current question position as a gradient bar
 */
export default function ProgressBar({ current, total }) {
  // Percentage of progress (1-based index)
  const percent = total === 0 ? 0 : (current / total) * 100;

  return (
    <div className="w-full">
      {/* Label row */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Progress
        </span>
        <span className="text-xs font-bold text-violet-600 dark:text-violet-400">
          {current} / {total}
        </span>
      </div>

      {/* Track */}
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
        {/* Fill */}
        <div
          className="h-full rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500
                     transition-all duration-500 ease-out shadow-sm shadow-violet-500/40"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
