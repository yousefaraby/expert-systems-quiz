import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import {
  Eye, CheckCircle2, Circle, Copy, Check,
  ChevronUp
} from 'lucide-react';

// ── Color map per category ──────────────────────────────────
const CAT_STYLES = {
  'Introduction':         { badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',       dot: 'bg-blue-500'    },
  'Imaging':              { badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300', dot: 'bg-emerald-500' },
  'Rendering Pipeline':   { badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',   dot: 'bg-amber-500'   },
  'Modeling':             { badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',       dot: 'bg-rose-500'    },
  'Hardware & Displays':  { badge: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300', dot: 'bg-purple-500' },
  'Math & Geometry':      { badge: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',       dot: 'bg-cyan-500'    },
  'Transformations':      { badge: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300', dot: 'bg-orange-500' },
};

/**
 * QuestionCard — mobile-first question card
 */
export default function QuestionCard({
  question,
  index,
  total,
  isStudied,
  onToggleStudied,
  animDir,
}) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [copied, setCopied]         = useState(false);

  const catStyle = CAT_STYLES[question.category] || CAT_STYLES['Introduction'];

  const animClass = {
    right:  'animate-slide-in-right',
    left:   'animate-slide-in-left',
    bounce: 'animate-bounce-in',
  }[animDir] || 'animate-fade-in';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(question.answer);
    } catch {
      const el = document.createElement('textarea');
      el.value = question.answer;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`${animClass} w-full`}>
      <div className="glass-card rounded-2xl sm:rounded-3xl overflow-hidden">

        {/* Gradient accent strip */}
        <div className="h-1 w-full bg-gradient-to-r from-violet-500 via-indigo-500 to-blue-500" />

        <div className="p-4 sm:p-6 space-y-4">

          {/* ── Header row ── */}
          <div className="flex items-start justify-between gap-2 flex-wrap">
            {/* Category badge */}
            <span className={`badge text-[11px] ${catStyle.badge} flex-shrink-0`}>
              <span className={`w-1.5 h-1.5 rounded-full ${catStyle.dot}`} />
              {question.category}
            </span>

            {/* Counter + studied button */}
            <div className="flex items-center gap-2 flex-shrink-0">
              <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500">
                {index + 1}/{total}
              </span>

              <button
                onClick={onToggleStudied}
                aria-label={isStudied ? 'Remove studied mark' : 'Mark as studied'}
                className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold border
                            transition-all duration-200 active:scale-95
                            ${isStudied
                              ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700'
                              : 'bg-slate-50 dark:bg-slate-700/50 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-600'
                            }`}
              >
                {isStudied
                  ? <><CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> Studied</>
                  : <><Circle size={12} className="shrink-0" /> Mark</>
                }
              </button>
            </div>
          </div>

          {/* ── Question text ── */}
          <p className="text-base sm:text-lg font-semibold text-slate-800 dark:text-white leading-relaxed">
            {question.question}
          </p>

          {/* ── Show/Hide Answer button ── */}
          <button
            id={`show-answer-btn-${question.id}`}
            onClick={() => setShowAnswer(!showAnswer)}
            className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl
                        font-semibold text-sm transition-all duration-300 border-2 active:scale-[0.97]
                        ${showAnswer
                          ? 'bg-slate-50 dark:bg-slate-700/50 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300'
                          : 'bg-gradient-to-r from-violet-600 to-indigo-600 border-transparent text-white shadow-lg shadow-violet-500/30'
                        }`}
          >
            {showAnswer
              ? <><ChevronUp size={17} /> Hide Answer</>
              : <><Eye size={17} /> Show Answer</>
            }
          </button>

          {/* ── Answer (collapsible) ── */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out
                        ${showAnswer ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'}`}
          >
            {showAnswer && (
              <div className="animate-fade-in relative bg-slate-50 dark:bg-slate-900/50 rounded-xl
                              border border-slate-200 dark:border-slate-700 p-4">

                {/* Copy button */}
                <button
                  id={`copy-btn-${question.id}`}
                  onClick={handleCopy}
                  aria-label="Copy answer"
                  className="absolute top-3 right-3 p-1.5 rounded-lg
                             bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600
                             text-slate-500 dark:text-slate-300 active:scale-90
                             transition-all duration-200 shadow-sm z-10"
                >
                  {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                </button>

                {/* Markdown answer — mobile-safe prose */}
                <div className="prose prose-sm dark:prose-invert max-w-none pr-8
                                prose-headings:font-bold prose-headings:text-slate-800 dark:prose-headings:text-white
                                prose-strong:text-slate-800 dark:prose-strong:text-white
                                prose-code:text-violet-600 dark:prose-code:text-violet-300
                                prose-code:bg-violet-50 dark:prose-code:bg-violet-900/30
                                prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs
                                prose-pre:bg-slate-900 dark:prose-pre:bg-slate-950 prose-pre:text-xs
                                prose-pre:border prose-pre:border-slate-700 prose-pre:overflow-x-auto
                                prose-table:text-xs prose-table:w-full
                                prose-th:bg-slate-200 dark:prose-th:bg-slate-700
                                prose-td:py-1 prose-td:px-2
                                prose-p:leading-relaxed prose-li:leading-relaxed">
                  <ReactMarkdown 
                    remarkPlugins={[remarkMath]} 
                    rehypePlugins={[rehypeKatex]}
                  >
                    {question.answer}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
