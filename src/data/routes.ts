import type { ExhibitionZone, RouteInfo } from '@/types';

export const exhibitionZones: Record<string, ExhibitionZone> = {
  dome: {
    id: 'dome',
    name: '球幕影院',
    duration: '约30-45分钟',
    durationMinutes: 40,
    description: '沉浸式半球形球幕影院，采用8K激光投影系统，带您穿越浩瀚宇宙。从银河系旋臂到系外行星，亲身感受宇宙的壮丽与神秘。影片每整点滚动播放，建议提前10分钟入场。',
    highlights: ['8K超高清球幕', '环绕立体声效', '《宇宙漫游》影片', 'VIP座位区'],
    icon: '🌌',
    themeColor: '#60a5fa',
    glowClass: 'shadow-[0_0_30px_rgba(96,165,250,0.3)]',
  },
  meteorite: {
    id: 'meteorite',
    name: '陨石展',
    duration: '约20-30分钟',
    durationMinutes: 25,
    description: '珍藏来自世界各地的真实陨石标本，包括46亿年历史的碳质球粒陨石和月球陨石。通过互动展项了解陨石的分类、形成过程，甚至可以亲手触摸一块来自火星的陨石碎片。',
    highlights: ['火星陨石真品', '互动触摸体验', '46亿年标本', '陨石分类知识'],
    icon: '☄️',
    themeColor: '#f59e0b',
    glowClass: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]',
  },
  telescope: {
    id: 'telescope',
    name: '望远镜区',
    duration: '约25-40分钟',
    durationMinutes: 30,
    description: '配备多台专业级天文望远镜，白天可观测太阳黑子（需配合安全滤镜），夜间开放观测月球环形山、木星大红斑等天体。专业天文指导员全程陪同讲解，解答您的宇宙疑问。',
    highlights: ['专业望远镜', '太阳观测', '夜间观星', '天文学家讲解'],
    icon: '🔭',
    themeColor: '#2dd4bf',
    glowClass: 'shadow-[0_0_30px_rgba(45,212,191,0.3)]',
  },
  giftshop: {
    id: 'giftshop',
    name: '文创商店',
    duration: '约15-20分钟',
    durationMinutes: 15,
    description: '宇宙主题文创周边集合地。从星空主题文具、航天模型，到限量版陨石吊坠、定制星座相框，挑选独一无二的太空纪念品。店内设有陨石文创DIY区，可亲手制作属于您的星空纪念。',
    highlights: ['限定周边', '陨石饰品', 'DIY手作区', '航天模型'],
    icon: '🛍️',
    themeColor: '#ec4899',
    glowClass: 'shadow-[0_0_30px_rgba(236,72,153,0.3)]',
  },
};

export const routes: RouteInfo[] = [
  {
    id: 'family',
    name: '亲子探索路线',
    icon: '👨‍👩‍👧',
    tagline: '寓教于乐，全家一起探索宇宙奥秘',
    totalDuration: '约2小时',
    audience: '亲子家庭',
    audienceIcon: '🧒',
    tags: ['互动体验', '轻松节奏', '儿童友好'],
    zones: ['dome', 'meteorite', 'giftshop', 'telescope'],
    accentColor: '#2dd4bf',
    accentClass: 'from-teal-500/20 to-cyan-500/20',
  },
  {
    id: 'deep',
    name: '深度科普路线',
    icon: '🔬',
    tagline: '资深天文爱好者必选，深度探索宇宙知识',
    totalDuration: '约2小时',
    audience: '科普爱好者',
    audienceIcon: '🎓',
    tags: ['专业讲解', '深度体验', '观测优先'],
    zones: ['meteorite', 'telescope', 'dome', 'giftshop'],
    accentColor: '#a78bfa',
    accentClass: 'from-violet-500/20 to-purple-500/20',
  },
  {
    id: 'halfday',
    name: '半日经典路线',
    icon: '⚡',
    tagline: '高效打卡，精华展区一览无余',
    totalDuration: '约2小时',
    audience: '短时观光客',
    audienceIcon: '🚶',
    tags: ['精华路线', '快速游览', '省时首选'],
    zones: ['dome', 'meteorite', 'telescope', 'giftshop'],
    accentColor: '#f59e0b',
    accentClass: 'from-amber-500/20 to-orange-500/20',
  },
];

export const getRouteById = (id: string): RouteInfo | undefined =>
  routes.find(r => r.id === id);

export const getZoneById = (id: string): ExhibitionZone | undefined =>
  exhibitionZones[id];
