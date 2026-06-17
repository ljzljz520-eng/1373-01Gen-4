import { useState } from 'react';
import type { RouteId } from '@/types';
import { routes, getRouteById } from '@/data/routes';
import Starfield from '@/components/Starfield';
import HeroBanner from '@/components/HeroBanner';
import RouteTabs from '@/components/RouteTabs';
import RouteOverview from '@/components/RouteOverview';
import Timeline from '@/components/Timeline';
import FloatingNav from '@/components/FloatingNav';

export default function Home() {
  const [activeRoute, setActiveRoute] = useState<RouteId>('halfday');
  const [routeProgress, setRouteProgress] = useState<Record<RouteId, number | null>>({
    family: null,
    deep: null,
    halfday: null,
  });

  const currentRoute = getRouteById(activeRoute)!;
  const currentIndex = routeProgress[activeRoute];

  const handleRouteChange = (id: RouteId) => {
    setActiveRoute(id);
  };

  const handleZoneClick = (index: number) => {
    setRouteProgress(prev => ({
      ...prev,
      [activeRoute]: index,
    }));
  };

  const handleClearLocation = () => {
    setRouteProgress(prev => ({
      ...prev,
      [activeRoute]: null,
    }));
  };

  const handleNextClick = () => {
    if (currentIndex === null) return;
    const nextIndex = Math.min(currentIndex + 1, currentRoute.zones.length - 1);
    setRouteProgress(prev => ({
      ...prev,
      [activeRoute]: nextIndex,
    }));

    const nextEl = document.querySelector(`[data-zone-index="${nextIndex}"]`);
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Starfield />

      <main className="relative z-10">
        <HeroBanner />

        <section className="relative py-2 sm:py-6">
          <RouteTabs
            activeRoute={activeRoute}
            onRouteChange={handleRouteChange}
          />

          <RouteOverview route={currentRoute} />

          <div className="relative">
            <div className="text-center mb-8 px-4">
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-starlight/50">
                <span>✦</span>
                <span className="tracking-wide">点击展区卡片标记"我在这里"，快速定位下一站</span>
                <span>✦</span>
              </div>
            </div>

            <Timeline
              key={`timeline-wrapper-${currentRoute.id}`}
              route={currentRoute}
              currentIndex={currentIndex}
              onZoneClick={handleZoneClick}
            />
          </div>
        </section>

        <footer className="relative py-12 px-4 text-center border-t border-white/5">
          <div className="max-w-xl mx-auto">
            <div className="text-2xl sm:text-3xl mb-3 opacity-60">
              🌠
            </div>
            <p className="text-xs sm:text-sm text-starlight/40 font-display tracking-widest uppercase mb-2">
              Ad Astra Per Aspera
            </p>
            <p className="text-xs text-starlight/30">
              循此苦旅，以达天际 · 星穹天文馆
            </p>
          </div>
        </footer>
      </main>

      <FloatingNav
        route={currentRoute}
        currentIndex={currentIndex}
        onClear={handleClearLocation}
        onNextClick={handleNextClick}
      />
    </div>
  );
}
