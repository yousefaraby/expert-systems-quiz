import { Heart } from 'lucide-react';

/**
 * Footer — simple branded footer
 */
export default function Footer() {
  return (
    <footer className="mt-16 pb-8 text-center">
      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                      bg-slate-100 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50">
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          Built with
        </p>
        <Heart size={13} className="text-rose-500 fill-rose-500 animate-pulse-slow" />
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          for Expert Systems Final Exam
        </p>
      </div>
      <p className="mt-3 text-xs text-slate-400 dark:text-slate-600">
        Good luck on your exam! You've got this 🚀
      </p>
    </footer>
  );
}
