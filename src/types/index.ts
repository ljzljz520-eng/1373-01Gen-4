export interface ExhibitionZone {
  id: string;
  name: string;
  duration: string;
  durationMinutes: number;
  description: string;
  highlights: string[];
  icon: string;
  themeColor: string;
  glowClass: string;
}

export interface RouteInfo {
  id: 'family' | 'deep' | 'halfday';
  name: string;
  icon: string;
  tagline: string;
  totalDuration: string;
  audience: string;
  audienceIcon: string;
  tags: string[];
  zones: string[];
  accentColor: string;
  accentClass: string;
}

export type RouteId = RouteInfo['id'];

export interface CurrentLocation {
  routeId: RouteId;
  zoneIndex: number;
}
