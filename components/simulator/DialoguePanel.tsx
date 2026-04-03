'use client';
import { useRef, useEffect } from 'react';
import { Play } from 'lucide-react';
import DialogueMessage from './DialogueMessage';
import type { DialogueLine } from '@/types/meeting';
import { STEPS, ALL_LINES } from '@/lib/constants';

interface DialoguePanelProps {
  logs: DialogueLine[];
  currentStep: number;
  isSpeaking: boolean;
  isStarted: boolean;
}

export default function DialoguePanel({ logs, currentStep, isSpeaking, isStarted }: DialoguePanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [logs]);

  return (
    <div className="bg-slate-900 rounded-[3rem] shadow-2xl border border-slate-800 overflow-hidden flex flex-col h-[580px]">
      {/* 패널 헤더 */}
      <div className="p-6 border-b border-slate-800 bg-slate-900/80 backdrop-blur-xl flex justify-between items-center">
        <div className="flex items-center gap-4 text-slate-200">
          <div className={`w-3 h-3 rounded-full ${isSpeaking ? 'bg-green-500 shadow-[0_0_15px_#22c55e]' : 'bg-slate-700'}`} />
          <span className="text-[11px] font-black tracking-widest uppercase">Expert Audio Discussion</span>
        </div>
        <div className="flex gap-1 h-6 items-end">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`w-1 bg-blue-500 rounded-full transition-all ${isSpeaking ? 'animate-bounce' : 'h-1 opacity-20'}`}
              style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>

      {/* 대화 목록 */}
      <div ref={scrollRef} className="flex-1 p-6 overflow-y-auto space-y-6 scroll-smooth custom-scrollbar">
        {!isStarted ? (
          <div className="h-full flex flex-col items-center justify-center text-slate-700 space-y-6">
            <Play size={80} className="opacity-10" />
            <p className="text-sm font-bold opacity-30 italic">&ldquo;상단 시작 버튼을 눌러 심의를 개시하세요.&rdquo;</p>
          </div>
        ) : (
          logs.map((log, i) => {
            const lineInfo = ALL_LINES[i];
            const stepLabel = lineInfo ? STEPS[lineInfo.step]?.title : '';
            // 이전 라인과 단계가 다를 때만 단계 구분선 표시
            const prevStep = i > 0 ? ALL_LINES[i - 1]?.step : -1;
            const showStepHeader = lineInfo && lineInfo.step !== prevStep;

            return (
              <div key={i}>
                {showStepHeader && (
                  <div className="flex items-center gap-3 mb-4 mt-2">
                    <div className="h-[1px] flex-1 bg-slate-700" />
                    <span className="text-[10px] font-black text-blue-400 uppercase tracking-widest whitespace-nowrap px-2">
                      {stepLabel}
                    </span>
                    <div className="h-[1px] flex-1 bg-slate-700" />
                  </div>
                )}
                <DialogueMessage
                  log={log}
                  stepTitle={stepLabel}
                  isActive={isSpeaking && i === logs.length - 1}
                />
              </div>
            );
          })
        )}
      </div>

      {/* 현재 단계 목표 */}
      {isStarted && (
        <div className="p-4 bg-blue-900/50 text-blue-300 text-center text-[10px] font-black tracking-widest uppercase border-t border-slate-800">
          {STEPS[currentStep]?.title} — {STEPS[currentStep]?.goal}
        </div>
      )}
    </div>
  );
}
