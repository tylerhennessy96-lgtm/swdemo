// ── Sunwing Revenue Management — Seed Data ──────────────────
// All prices in CAD ($). All data fictional and for demo use only.

const REGIONS    = ['All', 'Caribbean', 'Mexico', 'Europe', 'Sun/Sand'];
const GATEWAYS   = ['YYZ', 'YVR', 'YWG', 'YUL', 'YYC'];
const TRIP_DURATIONS = [7, 10, 14];

const REVENUE_MANAGERS = ['All RMs', 'Sarah Chen', 'Marcus Webb', 'Priya Patel', 'Jordan Kim'];
const SALES_MANAGERS   = ['All Sales', 'Tom Reyes', 'Diana Novak', 'Amir Hassan', 'Chloe Martin'];

// ── Destinations ───────────────────────────────────────────
const DESTINATIONS = [
  { id: 'CUN', name: 'Cancun',          region: 'Mexico',    country: 'Mexico',              departureGateway: 'YYZ', revenueManager: 'Sarah Chen',   salesManager: 'Tom Reyes'    },
  { id: 'PUJ', name: 'Punta Cana',      region: 'Caribbean', country: 'Dominican Republic',  departureGateway: 'YYZ', revenueManager: 'Sarah Chen',   salesManager: 'Tom Reyes'    },
  { id: 'VRA', name: 'Varadero',        region: 'Caribbean', country: 'Cuba',                departureGateway: 'YUL', revenueManager: 'Marcus Webb',  salesManager: 'Diana Novak'  },
  { id: 'MBJ', name: 'Montego Bay',     region: 'Caribbean', country: 'Jamaica',             departureGateway: 'YYZ', revenueManager: 'Marcus Webb',  salesManager: 'Diana Novak'  },
  { id: 'POP', name: 'Puerto Plata',    region: 'Caribbean', country: 'Dominican Republic',  departureGateway: 'YWG', revenueManager: 'Priya Patel',  salesManager: 'Amir Hassan'  },
  { id: 'SJD', name: 'Los Cabos',       region: 'Mexico',    country: 'Mexico',              departureGateway: 'YVR', revenueManager: 'Priya Patel',  salesManager: 'Amir Hassan'  },
  { id: 'PVR', name: 'Puerto Vallarta', region: 'Mexico',    country: 'Mexico',              departureGateway: 'YVR', revenueManager: 'Jordan Kim',   salesManager: 'Chloe Martin' },
  { id: 'TUL', name: 'Tulum',           region: 'Mexico',    country: 'Mexico',              departureGateway: 'YYZ', revenueManager: 'Sarah Chen',   salesManager: 'Chloe Martin' },
  { id: 'NAS', name: 'Nassau',          region: 'Caribbean', country: 'Bahamas',             departureGateway: 'YYZ', revenueManager: 'Marcus Webb',  salesManager: 'Tom Reyes'    },
  { id: 'AUA', name: 'Aruba',           region: 'Caribbean', country: 'Aruba',               departureGateway: 'YYZ', revenueManager: 'Jordan Kim',   salesManager: 'Diana Novak'  },
  { id: 'HUX', name: 'Huatulco',        region: 'Mexico',    country: 'Mexico',              departureGateway: 'YYC', revenueManager: 'Priya Patel',  salesManager: 'Amir Hassan'  },
  { id: 'CZM', name: 'Cozumel',         region: 'Mexico',    country: 'Mexico',              departureGateway: 'YUL', revenueManager: 'Jordan Kim',   salesManager: 'Chloe Martin' },
];

// ── Hotel / flight pools for seeding ───────────────────────
const _HOTELS_BY_DEST = {
  CUN: ['Riu Palace Costa Mujeres', 'Iberostar Selection Cancun', 'Moon Palace Cancun', 'Grand Oasis Cancun', 'Hard Rock Riviera Maya', 'Barcelo Maya Palace', 'Royalton Riviera Cancun', 'Secrets The Vine'],
  PUJ: ['Bahia Principe Luxury Ambar', 'Riu Republica', 'Majestic Colonial', 'Iberostar Bavaro', 'Secrets Royal Beach', 'Melia Caribe Beach', 'Hard Rock Punta Cana', 'Hyatt Zilara'],
  VRA: ['Melia Las Americas', 'Paradisus Varadero', 'Iberostar Selection Varadero', 'Melia Marina', 'Sol Palmeras', 'Royalton Hicacos', 'Roc Arenas Doradas', 'Be Live Experience Turquesa'],
  MBJ: ['Riu Montego Bay', 'Iberostar Rose Hall', 'Royalton Blue Waters', 'Secrets St James', 'Hyatt Ziva Rose Hall', 'Couples Tower Isle', 'Grand Palladium Jamaica', 'Sandals Montego Bay'],
  POP: ['Iberostar Costa Dorada', 'Be Live Marien', 'Lifestyle Tropical', 'Senator Puerto Plata', 'Grand Paradise', 'Blue Jack Tar', 'Playa Bachata Resort', 'VH Gran Ventana'],
  SJD: ['Riu Palace Cabo San Lucas', 'Barcelo Gran Faro', 'Hyatt Ziva Los Cabos', 'Hard Rock Los Cabos', 'Grand Velas Los Cabos', 'Paradisus Los Cabos', 'Secrets Puerto Los Cabos', 'Pueblo Bonito Sunset Beach'],
  PVR: ['Secrets Vallarta Bay', 'Now Amber', 'Hard Rock Vallarta', 'Riu Jalisco', 'Krystal Vallarta', 'Marival Distinct', 'Barcelo Puerto Vallarta', 'Hyatt Ziva Puerto Vallarta'],
  TUL: ['Bahia Principe Luxury Akumal', 'Dreams Tulum', 'Grand Bahia Principe Tulum', 'Sensimar Seaside Suites', 'Catalonia Royal Tulum', 'Akumal Bay Beach', 'Dreams Sapphire', 'Secrets Akumal'],
  NAS: ['Atlantis Royal Towers', 'Baha Mar Grand Hyatt', 'Breezes Bahamas', 'Warwick Paradise Island', 'Melia Nassau Beach', 'Sandals Royal Bahamian', 'Comfort Suites Paradise', 'British Colonial'],
  AUA: ['Riu Palace Aruba', 'Riu Antillas', 'Barcelo Aruba', 'Divi Aruba', 'Holiday Inn Aruba', 'Hyatt Regency Aruba', 'Tamarijn Aruba', 'Radisson Aruba'],
  HUX: ['Dreams Huatulco', 'Secrets Huatulco', 'Barcelo Huatulco', 'Las Brisas Huatulco', 'Park Royal Huatulco', 'Camino Real Zaashila', 'Binniguenda Huatulco', 'Royal Decameron'],
  CZM: ['Iberostar Cozumel', 'Occidental at Xcaret', 'Cozumel Palace', 'El Cid La Ceiba', 'Grand Park Royal Cozumel', 'Melia Cozumel', 'Playa Azul Cozumel', 'Hotel B Cozumel'],
};

const _ROOM_CATEGORIES = ['Standard', 'Deluxe', 'Ocean View', 'Suite'];
const _PACES = ['ahead', 'on track', 'behind'];

function _fmtDate(d) {
  const mo = String(d.getMonth() + 1).padStart(2, '0');
  const da = String(d.getDate()).padStart(2, '0');
  const yr = String(d.getFullYear()).slice(-2);
  return `${mo}/${da}/${yr}`;
}

function _seededRandom(seed) {
  // Simple deterministic PRNG so the demo is stable across reloads
  let s = seed;
  return function () {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function _makePackage(destId, duration, idx, rand) {
  const hotels = _HOTELS_BY_DEST[destId] || _HOTELS_BY_DEST.CUN;
  const hotel = hotels[idx % hotels.length];
  const roomCategory = _ROOM_CATEGORIES[Math.floor(rand() * _ROOM_CATEGORIES.length)];

  // Total cost scales with duration and room category
  const roomBump = { 'Standard': 0, 'Deluxe': 120, 'Ocean View': 240, 'Suite': 460 }[roomCategory];
  const base = 780 + (duration - 7) * 85;
  const totalCost = Math.round(base + roomBump + rand() * 220);

  const currentMargin = Math.round(120 + rand() * 180);
  // Rec margin can be up or down
  const margSwing = Math.round((rand() - 0.4) * 110);
  const recMargin = Math.max(40, currentMargin + margSwing);
  const deltaMargin = recMargin - currentMargin;

  const currentPrice = totalCost + currentMargin;
  const recPrice = totalCost + recMargin;

  // Competitor prices cluster around rec price
  const competitor1Price = Math.round(recPrice + (rand() - 0.35) * 220);
  const competitor2Price = Math.round(recPrice + (rand() - 0.5) * 260);

  // Departure date: 1..180 days out
  const daysOut = Math.floor(rand() * 180) + 14;
  const dep = new Date();
  dep.setDate(dep.getDate() + daysOut);

  // Flight number pool
  const flightNum = 'WS' + (2000 + Math.floor(rand() * 800));

  const lf = Math.round((0.42 + rand() * 0.55) * 100) / 100;
  const bookingPace = _PACES[Math.floor(rand() * _PACES.length)];

  const paddedIdx = String(idx + 1).padStart(3, '0');

  return {
    id: `${destId}-${duration}N-${paddedIdx}`,
    hotel,
    roomCategory,
    departureDate: _fmtDate(dep),
    flightNum,
    totalCost,
    currentMargin,
    recMargin,
    deltaMargin,
    currentPrice,
    recPrice,
    bookingPace,
    lf,
    competitor1Price,
    competitor2Price,
    locked: false,
  };
}

function _makeDuration(destId, duration, count, rand) {
  const packages = Array.from({ length: count }, (_, i) =>
    _makePackage(destId, duration, i, rand)
  );
  return { duration, packages };
}

// Build PACKAGE_DATA (all 12 destinations seeded; richness varies)
const PACKAGE_DATA = DESTINATIONS.map((d, destIdx) => {
  const rand = _seededRandom((destIdx + 1) * 7919);
  // First 3 destinations get full data, rest get slightly fewer packages
  const counts = destIdx < 3
    ? [7, 6, 6]
    : destIdx < 6
    ? [6, 5, 4]
    : [5, 4, 3];

  const durations = TRIP_DURATIONS.map((dur, i) =>
    _makeDuration(d.id, dur, counts[i], rand)
  );

  const totalPackages = durations.reduce((s, g) => s + g.packages.length, 0);
  const loadFactor = Math.round((0.52 + rand() * 0.44) * 100) / 100;

  // Beds / seats contracted
  const bedsBought = Math.round(800 + rand() * 1200);
  const seatsMult = 0.85 + rand() * 0.4; // beds:seats between ~0.7 and 1.2
  const seatsBought = Math.round(bedsBought / seatsMult);
  const bedsToSeatsRatio = Math.round((bedsBought / seatsBought) * 100) / 100;

  return {
    ...d,
    totalPackages,
    loadFactor,
    bedsBought,
    seatsBought,
    bedsToSeatsRatio,
    durations,
  };
});

// ── Chart helpers ──────────────────────────────────────────
const CHART_WEEKS = [
  'Wk 1 Jan', 'Wk 2 Jan', 'Wk 3 Jan', 'Wk 4 Jan',
  'Wk 5 Feb', 'Wk 6 Feb', 'Wk 7 Feb', 'Wk 8 Feb',
  'Wk 9 Mar', 'Wk 10 Mar', 'Wk 11 Mar', 'Wk 12 Apr',
];

// Booking curve: actual-to-date + target curve over the 12-week window
function makeBookingCurveData(baseLF) {
  const target = [];
  const actual = [];
  const safeBase = Math.max(0.35, Math.min(0.95, baseLF || 0.7));
  for (let i = 0; i < CHART_WEEKS.length; i++) {
    // Target grows along an S-curve to ~safeBase
    const t = i / (CHART_WEEKS.length - 1);
    const s = 1 / (1 + Math.exp(-6 * (t - 0.5)));
    target.push(Math.round(safeBase * s * 100));
    // Actual wobbles around target; "behind" segments visible mid-range
    const noise = (Math.sin(i * 1.3) + Math.cos(i * 0.7)) * 3.5;
    const drift = i < 6 ? -2 : 3;
    actual.push(Math.max(0, Math.round(safeBase * s * 100 + noise + drift)));
  }
  return { labels: CHART_WEEKS, target, actual };
}

// Competitor price chart: our price + 2 competitor series over 12 weeks
function makeCompData(basePrice) {
  const ours = [];
  const comp1 = [];
  const comp2 = [];
  const bp = basePrice || 1200;
  for (let i = 0; i < CHART_WEEKS.length; i++) {
    const wobble = Math.sin(i * 0.9) * 35 + Math.cos(i * 0.4) * 20;
    ours.push(Math.round(bp + wobble));
    comp1.push(Math.round(bp + 90 + Math.sin(i * 1.1) * 50));
    comp2.push(Math.round(bp + 140 + Math.cos(i * 0.75) * 60));
  }
  return { labels: CHART_WEEKS, ours, comp1, comp2 };
}

// Demand forecast chart helpers (for demand.html)
function makeDestinationPaceSeries(destIds) {
  const ids = destIds || ['CUN', 'PUJ', 'SJD', 'MBJ'];
  return ids.map((id, idx) => {
    const p = PACKAGE_DATA.find(x => x.id === id);
    const lf = p ? p.loadFactor : 0.7;
    const rand = _seededRandom((idx + 3) * 1031);
    const series = [];
    for (let i = 0; i < CHART_WEEKS.length; i++) {
      const t = i / (CHART_WEEKS.length - 1);
      const s = 1 / (1 + Math.exp(-6 * (t - 0.5)));
      series.push(Math.round((lf * s + (rand() - 0.5) * 0.08) * 100));
    }
    return {
      id,
      name: p ? p.name : id,
      data: series,
    };
  });
}

function makeForwardBookingsVsLY() {
  const rand = _seededRandom(31337);
  const ly = [];
  const ty = [];
  for (let i = 0; i < CHART_WEEKS.length; i++) {
    const baseline = 4200 + Math.sin(i * 0.6) * 700 + i * 80;
    ly.push(Math.round(baseline + rand() * 400));
    ty.push(Math.round(baseline * (1.05 + rand() * 0.12)));
  }
  return { labels: CHART_WEEKS, lastYear: ly, thisYear: ty };
}

// ── Lookups ────────────────────────────────────────────────
function getDestinationById(id) {
  return PACKAGE_DATA.find(d => d.id === id);
}

function getPackageById(pkgId) {
  for (const d of PACKAGE_DATA) {
    for (const dur of d.durations) {
      const hit = dur.packages.find(p => p.id === pkgId);
      if (hit) return { destination: d, duration: dur.duration, package: hit };
    }
  }
  return null;
}

function avgMargin(packages, field) {
  if (!packages.length) return 0;
  return Math.round(packages.reduce((s, p) => s + p[field], 0) / packages.length);
}

function avgLF(packages) {
  if (!packages.length) return 0;
  return Math.round((packages.reduce((s, p) => s + p.lf, 0) / packages.length) * 100) / 100;
}
