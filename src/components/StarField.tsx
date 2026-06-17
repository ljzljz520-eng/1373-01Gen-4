import { useEffect, useMemo } from 'react';

interface Star {
  id: number;
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  opacity: number;
}

export default function Starfield() {
  const stars = useMemo<Star[]>(() => {
    const result: Star[] = [];
    for (let i = 0; i < 60; i++) {
      result.push({
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        duration: `${Math.random() * 3 + 2}s`,
        delay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    return result;
  }, []);

  useEffect(() => {
    const el = document.querySelector('.starfield-dynamic');
    if (!el) return;
    stars.forEach(star => {
      const div = document.createElement('div');
      div.className = 'star';
      div.style.cssText = `
        left: ${star.left};
        top: ${star.top};
        width: ${star.size}px;
        height: ${star.size}px;
        --duration: ${star.duration};
        --delay: ${star.delay};
        opacity: ${star.opacity};
      `;
      el.appendChild(div);
    });
    return () => {
      while (el.firstChild) el.removeChild(el.firstChild);
    };
  }, [stars]);

  return (
    <>
      <div className="starfield" />
      <div className="starfield starfield-dynamic fixed inset-0 pointer-events-none z-[-1]" />
    </>
  );
}
