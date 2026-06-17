import { MapPin, ArrowRight, X, PartyPopper } from 'lucide-react';
import type { RouteInfo } from '@/types';
import { getZoneById } from '@/data/routes';

interface Props {
  route: RouteInfo;
  currentIndex: number | null;
  onClear: () => void;
  onNextClick: () => void;
}

export default function FloatingNav({ route, currentIndex, onClear, onNextClick }: Props) {
  if (currentIndex === null) return null;

  const currentZone = getZoneById(route.zones[currentIndex]);
  const nextZone = currentIndex < route.zones.length - 1
    ? getZoneById(route.zones[currentIndex + 1])
    : null;
  const isFinished = currentIndex >= route.zones.length - 1;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 sm:bottom-6 sm:left-1/2 sm:-translate-x-1/2 sm:w-auto sm:max-w-xl sm:px-4 animate-fade-in-up">
      <div className="frosted-glass px-4 py-3 sm:px-6 sm:py-4 sm:rounded-2xl sm:border sm:border-white/10 sm:shadow-2xl">
        <div className="flex items-center gap-3 sm:gap-5">
          {/* 当前位置 */}
          <div className="flex items-center gap-2.5 flex-1 min-w-0">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl sm:text-2xl flex-shrink-0
                bg-gradient-to-br from-amber-500/20 to-orange-500/10 border border-meteor-orange/30"
              style={{ boxShadow: '0 0 20px rgba(245, 158, 11, 0.2)' }}
            >
              {currentZone?.icon || '📍'}
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <MapPin className="w-3 h-3 text-meteor-orange flex-shrink-0" />
                <span className="text-[10px] sm:text-xs text-meteor-orange font-medium uppercase tracking-wider">
                  当前位置
                </span>
              </div>
              <div className="font-display font-semibold text-sm sm:text-base text-white truncate">
                {currentZone?.name || '-'}
              </div>
            </div>
          </div>

          {/* 分隔线 - 仅桌面 */}
          <div className="hidden sm:block w-px h-10 bg-white/10" />

          {/* 下一站或完成 */}
          {!isFinished ? (
            <button
              onClick={onNextClick}
              className="flex items-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl
                bg-gradient-to-r from-teal-500 to-cyan-500
                hover:from-teal-400 hover:to-cyan-400
                transition-all duration-300 min-h-[48px]
                shadow-[0_0_20px_rgba(45,212,191,0.35)]
                hover:shadow-[0_0_30px_rgba(45,212,191,0.5)]
                active:scale-95 flex-shrink-0"
            >
              <div className="text-left hidden sm:block">
                <div className="text-[10px] text-white/70 uppercase tracking-wider leading-tight">
                  下一站
                </div>
                <div className="font-display font-semibold text-sm text-white leading-tight">
                  {nextZone?.name}
                </div>
              </div>
              <span className="sm:hidden text-xs sm:text-sm font-semibold text-white whitespace-nowrap">
                下一站
              </span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-white next-indicator" strokeWidth={2.5} />
            </button>
          ) : (
            <div className="flex items-center gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-xl
              bg-gradient-to-r from-aurora-cyan/20 to-nebula-pink/20
              border border-aurora-cyan/30 min-h-[48px] flex-shrink-0">
              <PartyPopper className="w-4 h-4 sm:w-5 sm:h-5 text-aurora-cyan" />
              <div className="text-left hidden sm:block">
                <div className="text-[10px] text-aurora-cyan uppercase tracking-wider leading-tight">
                  全部完成
                </div>
                <div className="font-display font-semibold text-sm text-white leading-tight">
                  精彩旅途
                </div>
              </div>
              <span className="sm:hidden text-xs font-semibold gradient-text whitespace-nowrap">
                完成！
              </span>
            </div>
          )}

          {/* 清除按钮 */}
          <button
            onClick={onClear}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-starlight/50 hover:text-starlight
              flex-shrink-0 min-h-[40px] min-w-[40px] flex items-center justify-center"
            aria-label="清除定位"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* 进度条 */}
        <div className="mt-3 sm:mt-4 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out bg-gradient-to-r from-meteor-orange via-aurora-cyan to-nebula-pink"
            style={{
              width: `${((currentIndex + 1) / route.zones.length) * 100}%`,
            }}
          />
        </div>
        <div className="mt-1.5 flex justify-between text-[10px] text-starlight/40">
          <span>进度 {currentIndex + 1}/{route.zones.length}</span>
          <span>{route.totalDuration}</span>
        </div>
      </div>
    </div>
  );
}
