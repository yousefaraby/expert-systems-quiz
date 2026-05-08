import { BookOpen, Target, Flame, Clock } from 'lucide-react';

/**
 * StatsPanel — shows studied vs remaining question counts
 */
export default function StatsPanel({ total, studied }) {
  const remaining = total - studied;
  const percent = total === 0 ? 0 : Math.round((studied / total) * 100);

  const stats = [
    {
      icon: <BookOpen size={18} />,
      label: 'Total',
      value: total,
      color: 'from-violet-500 to-indigo-500',
      bg: 'bg-violet-50 dark:bg-violet-900/20',
      text: 'text-violet-600 dark:text-violet-400',
      border: 'border-violet-200 dark:border-violet-800/50',
    },
    {
      icon: <Flame size={18} />,
      label: 'Studied',
      value: studied,
      color: 'from-emerald-500 to-teal-500',
      bg: 'bg-emerald-50 dark:bg-emerald-900/20',
      text: 'text-emerald-600 dark:text-emerald-400',
      border: 'border-emerald-200 dark:border-emerald-800/50',
    },
    {
      icon: <Clock size={18} />,
      label: 'Remaining',
      value: remaining,
      color: 'from-amber-500 to-orange-500',
      bg: 'bg-amber-50 dark:bg-amber-900/20',
      text: 'text-amber-600 dark:text-amber-400',
      border: 'border-amber-200 dark:border-amber-800/50',
    },
    {
      icon: <Target size={18} />,
      label: 'Progress',
      value: `${percent}%`,
      color: 'from-rose-500 to-pink-500',
      bg: 'bg-rose-50 dark:bg-rose-900/20',
      text: 'text-rose-600 dark:text-rose-400',
      border: 'border-rose-200 dark:border-rose-800/50',
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className={`${stat.bg} ${stat.border} border rounded-2xl p-4 flex flex-col gap-2
                      hover:scale-105 transition-transform duration-200`}
        >
          {/* Icon */}
          <div className={`${stat.text} opacity-80`}>{stat.icon}</div>

          {/* Value */}
          <p className={`text-2xl font-bold ${stat.text}`}>{stat.value}</p>

          {/* Label */}
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
