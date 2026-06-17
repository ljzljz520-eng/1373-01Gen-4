import { Clock, Users, MapPin } from 'lucide-react';
import type { RouteInfo } from '@/types';

interface Props {
  route: RouteInfo;
}

export default function RouteOverview({ route }: Props) {
  return (
    <div
      key={`overview-${route.id}`}
      className="relative max-w-4xl mx-auto mb-12 px-4 animate-fade-in-up"
      style={{ animationDelay: '0.1s' }}
    >
      <div
        className={`glass-card p-5 sm:p-8 bg-gradient-to-br ${route.accentClass}`}
      >
        <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-3xl sm:text-4xl
                bg-white/5 border border-white/10"
              style={{ boxShadow: `0 0 20px ${route.accentColor}22` }}
            >
              {route.icon}
            </div>
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white mb-1">
                {route.name}
              </h2>
              <p className="text-sm sm:text-base text-starlight/60 leading-relaxed">
                {route.tagline}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-6">
          <div className="flex flex-col items-center sm:items-start gap-1.5 p-3 sm:p-4 rounded-xl bg-white/[0.04] border border-white/5">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-aurora-cyan" />
              <span className="text-xs text-starlight/50 uppercase tracking-wider">总时长</span>
            </div>
            <div className="font-display text-lg sm:text-xl font-semibold text-white">
              {route.totalDuration}
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-1.5 p-3 sm:p-4 rounded-xl bg-white/[0.04] border border-white/5">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-meteor-orange" />
              <span className="text-xs text-starlight/50 uppercase tracking-wider">展区</span>
            </div>
            <div className="font-display text-lg sm:text-xl font-semibold text-white">
              {route.zones.length} 个
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start gap-1.5 p-3 sm:p-4 rounded-xl bg-white/[0.04] border border-white/5">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-nebula-pink" />
              <span className="text-xs text-starlight/50 uppercase tracking-wider">适合</span>
            </div>
            <div className="font-display text-sm sm:text-lg font-semibold text-white flex items-center gap-1.5">
              <span>{route.audienceIcon}</span>
              <span className="truncate">{route.audience}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {route.tags.map(tag => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium
                bg-white/[0.06] border border-white/10 text-starlight/80
                hover:bg-white/[0.1] transition-colors"
            >
              <span className="mr-1.5" style={{ color: route.accentColor }}>#</span>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
