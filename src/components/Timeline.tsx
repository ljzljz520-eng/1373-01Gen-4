import type { RouteInfo } from '@/types';
import { getZoneById } from '@/data/routes';
import ZoneCard from './ZoneCard';

interface Props {
  route: RouteInfo;
  currentIndex: number | null;
  onZoneClick: (index: number) => void;
}

type ZoneState = 'visited' | 'current' | 'next' | 'upcoming';

export default function Timeline({ route, currentIndex, onZoneClick }: Props) {
  const getZoneState = (index: number): ZoneState => {
    if (currentIndex === null) return 'upcoming';
    if (index < currentIndex) return 'visited';
    if (index === currentIndex) return 'current';
    if (index === currentIndex + 1) return 'next';
    return 'upcoming';
  };

  return (
    <div
      key={`timeline-${route.id}`}
      className="relative max-w-4xl mx-auto px-4 pb-32 sm:pb-16 animate-fade-in-up"
      style={{ animationDelay: '0.15s' }}
    >
      {/* 垂直时间轴线 */}
      <div className="timeline-line" />

      <div className="space-y-5 sm:space-y-8">
        {route.zones.map((zoneId, index) => {
          const zone = getZoneById(zoneId);
          if (!zone) return null;
          const state = getZoneState(index);
          const isLast = index === route.zones.length - 1;
          const isNext = currentIndex !== null && index === currentIndex + 1;

          return (
            <ZoneCard
              key={`${route.id}-${zoneId}-${index}`}
              zone={zone}
              index={index}
              state={state}
              isLast={isLast}
              isNext={isNext}
              onClick={() => onZoneClick(index)}
            />
          );
        })}
      </div>

      {/* 终点标记 */}
      <div className="relative pl-14 sm:pl-20 mt-6 sm:mt-10">
        <div
          className="absolute left-[14px] sm:left-[20px] top-0 w-5 h-5 sm:w-6 sm:h-6 rounded-full
            bg-gradient-to-br from-aurora-cyan to-aurora-teal border-2 border-aurora-cyan
            flex items-center justify-center"
          style={{ boxShadow: '0 0 20px rgba(45, 212, 191, 0.4)' }}
        >
          <span className="text-white text-[10px] sm:text-xs font-bold">★</span>
        </div>
        <div className="glass-card p-4 sm:p-5 border-aurora-cyan/20 bg-gradient-to-br from-teal-500/[0.06] to-cyan-500/[0.03]">
          <div className="flex items-center gap-3">
            <div className="text-3xl sm:text-4xl">🎉</div>
            <div>
              <div className="font-display font-bold text-base sm:text-lg gradient-text mb-0.5">
                参观完成！
              </div>
              <div className="text-xs sm:text-sm text-starlight/60">
                感谢您的参观，愿星辰永远指引您的探索之路 ✦
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
