import { CheckCircle, MapPin, ArrowRight, Clock, Sparkles } from 'lucide-react';
import type { ExhibitionZone } from '@/types';

type ZoneState = 'visited' | 'current' | 'next' | 'upcoming';

interface Props {
  zone: ExhibitionZone;
  index: number;
  state: ZoneState;
  isLast: boolean;
  onClick: () => void;
  isNext: boolean;
}

export default function ZoneCard({ zone, index, state, onClick, isNext }: Props) {
  const getStateStyles = () => {
    switch (state) {
      case 'current':
        return {
          card: 'border-meteor-orange/50 shadow-[0_0_40px_rgba(245,158,11,0.15)] bg-gradient-to-br from-amber-500/[0.08] to-orange-500/[0.04]',
          dot: '!bg-gradient-to-br from-amber-400 to-orange-500 !border-meteor-orange animate-pulse-glow',
          badge: 'bg-meteor-orange text-white',
        };
      case 'visited':
        return {
          card: 'border-aurora-cyan/25 opacity-90',
          dot: '!bg-gradient-to-br from-teal-400 to-cyan-500 !border-aurora-cyan',
          badge: 'bg-aurora-cyan/20 text-aurora-cyan border border-aurora-cyan/30',
        };
      case 'next':
        return {
          card: 'border-aurora-teal/40 shadow-[0_0_30px_rgba(45,212,191,0.12)]',
          dot: '!bg-space-mid !border-aurora-teal/60 ring-2 ring-aurora-teal/30',
          badge: 'bg-aurora-teal/20 text-aurora-teal border border-aurora-teal/40',
        };
      default:
        return {
          card: 'border-white/10 hover:border-white/20',
          dot: '!bg-space-mid !border-white/30',
          badge: 'bg-white/10 text-starlight/80 border border-white/15',
        };
    }
  };

  const styles = getStateStyles();

  return (
    <div
      className={`relative pl-14 sm:pl-20 animate-fade-in-up`}
      style={{ animationDelay: `${0.1 + index * 0.12}s` }}
      data-zone-index={index}
    >
      {/* 时间轴节点圆点 */}
      <div
        className={`timeline-dot absolute left-[14px] sm:left-[20px] top-6 w-5 h-5 sm:w-6 sm:h-6 rounded-full
          border-2 z-10 transition-all duration-500 ${styles.dot}`}
      >
        {state === 'visited' && (
          <CheckCircle className="w-full h-full p-0.5 text-white" strokeWidth={3} />
        )}
        {state === 'current' && (
          <MapPin className="w-full h-full p-1 text-white" strokeWidth={2.5} />
        )}
      </div>

      {/* 序号标签 */}
      <div className="absolute left-[38px] sm:left-[48px] top-6 font-display text-xs text-starlight/40 font-semibold">
        NO.{String(index + 1).padStart(2, '0')}
      </div>

      {/* 下一站指示箭头 */}
      {isNext && (
        <div className="absolute -left-2 sm:-left-1 top-5 text-aurora-teal next-indicator z-20">
          <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={2.5} />
        </div>
      )}

      {/* 展区卡片 */}
      <button
        onClick={onClick}
        className={`w-full text-left glass-card p-4 sm:p-6 transition-all duration-500 cursor-pointer
          hover:-translate-y-1 hover:shadow-card group ${styles.card}`}
      >
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          {/* 图标 */}
          <div
            className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl
              bg-gradient-to-br from-white/[0.08] to-white/[0.02]
              border border-white/10 flex items-center justify-center
              text-4xl sm:text-5xl transition-transform duration-500
              group-hover:scale-110 group-hover:-rotate-3"
            style={{
              boxShadow: `inset 0 0 20px ${zone.themeColor}15, 0 0 20px ${zone.themeColor}10`,
            }}
          >
            {zone.icon}
          </div>

          {/* 内容 */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  {zone.name}
                </h3>

                {/* 状态Badge */}
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium ${styles.badge}`}
                >
                  {state === 'current' && '📍 当前位置'}
                  {state === 'visited' && '✓ 已参观'}
                  {state === 'next' && '➜ 下一站'}
                  {state === 'upcoming' && '待参观'}
                </span>
              </div>

              {/* 停留时间 */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.06] border border-white/10">
                <Clock className="w-3.5 h-3.5 text-starlight/50" />
                <span className="text-xs font-medium text-starlight/80 whitespace-nowrap">
                  {zone.duration}
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-[15px] text-starlight/70 leading-relaxed mb-4 line-clamp-2 sm:line-clamp-3">
              {zone.description}
            </p>

            {/* 亮点标签 */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {zone.highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] sm:text-xs
                    bg-white/[0.04] border border-white/[0.08] text-starlight/70"
                >
                  <Sparkles className="w-3 h-3 flex-shrink-0" style={{ color: zone.themeColor }} />
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 底部装饰线 */}
        <div
          className="mt-4 h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${zone.themeColor}40, transparent)`,
          }}
        />
      </button>
    </div>
  );
}
