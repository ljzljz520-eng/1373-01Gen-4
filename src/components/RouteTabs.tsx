import type { RouteInfo, RouteId } from '@/types';
import { routes } from '@/data/routes';

interface Props {
  activeRoute: RouteId;
  onRouteChange: (id: RouteId) => void;
}

export default function RouteTabs({ activeRoute, onRouteChange }: Props) {
  return (
    <div className="relative w-full max-w-4xl mx-auto mb-10 px-4">
      <div className="relative flex flex-wrap justify-center gap-2 sm:gap-3">
        {routes.map((route: RouteInfo, index: number) => {
          const isActive = activeRoute === route.id;
          return (
            <button
              key={route.id}
              onClick={() => onRouteChange(route.id)}
              className={`
                relative group px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-500 min-h-[64px]
                flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3
                border backdrop-blur-md
                animate-fade-in-up
                ${
                  isActive
                    ? `bg-gradient-to-br ${route.accentClass} border-white/20 shadow-lg scale-[1.02]`
                    : 'bg-white/[0.03] border-white/5 hover:bg-white/[0.06] hover:border-white/10'
                }
              `}
              style={{
                animationDelay: `${0.1 + index * 0.1}s`,
                boxShadow: isActive ? `0 0 30px ${route.accentColor}22` : 'none',
              }}
            >
              <span className="text-2xl sm:text-3xl">{route.icon}</span>
              <div className="text-left">
                <div
                className={`
                  font-display font-semibold text-sm sm:text-base whitespace-nowrap
                  ${isActive ? 'text-white' : 'text-starlight/80 group-hover:text-starlight'}
                `}
              >
                {route.name}
              </div>
              <div
                className={`text-[10px] sm:text-xs whitespace-nowrap
                  ${isActive ? 'text-starlight/60' : 'text-starlight/40 group-hover:text-starlight/50'}
                `}
              >
                {route.totalDuration}
              </div>
              </div>

              {isActive && (
                <div
                  className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-8 h-0.5 rounded-full"
                  style={{ backgroundColor: route.accentColor }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
