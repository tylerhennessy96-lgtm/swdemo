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

// ── Flight Only seed ───────────────────────────────────────
const GATEWAY_NAMES = {
  YYZ: 'Toronto',
  YVR: 'Vancouver',
  YWG: 'Winnipeg',
  YOW: 'Ottawa',
  YHZ: 'Halifax',
  YUL: 'Montreal',
  YYC: 'Calgary',
};

const _FLIGHT_CATEGORIES = {
  'Own Flight': { fareMin: 380, fareMax: 650, marginMin:  80, marginMax: 160 },
  'Risk Block': { fareMin: 320, fareMax: 550, marginMin:  50, marginMax: 120 },
  '3rd Party':  { fareMin: 280, fareMax: 480, marginMin:  30, marginMax:  80 },
};

// Route specs: which flights exist on which destination
const _FLIGHT_ROUTES = {
  CUN: [
    { flightNum: 'WS2401', origin: 'YYZ', category: 'Own Flight' },
    { flightNum: 'WS2403', origin: 'YVR', category: 'Own Flight' },
    { flightNum: 'AC9821', origin: 'YYZ', category: 'Risk Block' },
  ],
  PUJ: [
    { flightNum: 'WS2601', origin: 'YYZ', category: 'Own Flight' },
    { flightNum: 'WG5501', origin: 'YWG', category: 'Risk Block' },
  ],
  VRA: [
    { flightNum: 'WS2201', origin: 'YYZ', category: 'Own Flight' },
    { flightNum: 'WG5301', origin: 'YOW', category: '3rd Party'  },
  ],
  MBJ: [
    { flightNum: 'WS2801', origin: 'YYZ', category: 'Own Flight' },
    { flightNum: 'WG5701', origin: 'YHZ', category: 'Risk Block' },
  ],
};

// 8 rolling weekly departure dates starting from next Monday
function _generateFlightDepartureDates() {
  const today = new Date();
  const dow = today.getDay();
  const offset = dow === 0 ? 1 : (8 - dow) % 7 || 7;
  const start = new Date();
  start.setDate(today.getDate() + offset);
  return Array.from({ length: 8 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i * 7);
    return d;
  });
}

const _FLIGHT_DEPARTURE_DATES = _generateFlightDepartureDates();

function _makeFlightDate(routeId, idx, category, rand) {
  const spec = _FLIGHT_CATEGORIES[category];
  const dep = _FLIGHT_DEPARTURE_DATES[idx];

  // Aircraft capacity varies by category
  const capacity = category === 'Own Flight'
    ? 189                                  // 737-800
    : category === 'Risk Block' ? 174      // 737 MAX 8
    : 148;                                 // 3rd party narrow-body

  // Load factor drifts lower further out
  const weeksOut = idx;
  const targetLF = Math.round((0.78 - weeksOut * 0.025) * 100) / 100;
  const forecastLF = Math.max(0.4, Math.min(0.98,
    targetLF + (rand() - 0.45) * 0.18));
  const sold = Math.round(capacity * Math.max(0, forecastLF - 0.06 - rand() * 0.1));

  // Rate of sale (seats per day)
  const daysLeft = Math.max(7, 7 * (idx + 2));
  const rateOfSaleTarget = Math.round(((capacity * targetLF - sold) / daysLeft) * 10) / 10;
  const rateOfSale = Math.round((rateOfSaleTarget * (0.6 + rand() * 0.8)) * 10) / 10;

  const currentFare = Math.round(spec.fareMin + rand() * (spec.fareMax - spec.fareMin));
  const recFare = Math.max(spec.fareMin,
    currentFare + Math.round((rand() - 0.4) * 70));
  const currentMargin = Math.round(spec.marginMin + rand() * (spec.marginMax - spec.marginMin));
  const recMargin = Math.max(spec.marginMin, currentMargin + Math.round((rand() - 0.45) * 40));

  // Departure time pool
  const depHours = ['06:15', '08:40', '10:25', '13:05', '15:30', '17:45', '19:20', '21:10'];
  const departureTime = depHours[Math.floor(rand() * depHours.length)];

  // Competitor fares cluster around ours
  const comp1Fare = Math.round(currentFare + (rand() - 0.45) * 120);
  const comp2Fare = Math.round(currentFare + (rand() - 0.55) * 150);

  const hasCostChange = rand() > 0.88;

  return {
    id: `${routeId}-D${idx + 1}`,
    departureDate: _fmtDate(dep),
    departureTime,
    capacity,
    sold,
    targetLF,
    forecastLF: Math.round(forecastLF * 100) / 100,
    rateOfSale,
    rateOfSaleTarget,
    currentFare,
    recFare,
    deltaFare: recFare - currentFare,
    currentMargin,
    recMargin,
    deltaMargin: recMargin - currentMargin,
    comp1Fare,
    comp2Fare,
    hasCostChange,
    locked: false,
  };
}

function _makeFlightRoute(destId, routeSpec, destIdx, routeIdx) {
  const rand = _seededRandom((destIdx + 17) * 6301 + (routeIdx + 1) * 53);
  const routeId = `${destId}-${routeSpec.flightNum}`;
  const dates = _FLIGHT_DEPARTURE_DATES.map((_, i) =>
    _makeFlightDate(routeId, i, routeSpec.category, rand)
  );
  const totalCapacity = dates.reduce((s, d) => s + d.capacity, 0);
  const totalSold = dates.reduce((s, d) => s + d.sold, 0);
  const avgForecastLF = dates.reduce((s, d) => s + d.forecastLF, 0) / dates.length;
  const avgTargetLF   = dates.reduce((s, d) => s + d.targetLF, 0) / dates.length;
  const avgCurrentFare = Math.round(dates.reduce((s, d) => s + d.currentFare, 0) / dates.length);
  const avgRecFare     = Math.round(dates.reduce((s, d) => s + d.recFare, 0) / dates.length);
  const avgCurrentMargin = Math.round(dates.reduce((s, d) => s + d.currentMargin, 0) / dates.length);
  const avgRecMargin     = Math.round(dates.reduce((s, d) => s + d.recMargin, 0) / dates.length);

  return {
    id: routeId,
    flightNum: routeSpec.flightNum,
    origin: routeSpec.origin,
    originName: GATEWAY_NAMES[routeSpec.origin] || routeSpec.origin,
    destination: destId,
    category: routeSpec.category,
    totalCapacity,
    totalSold,
    avgForecastLF: Math.round(avgForecastLF * 100) / 100,
    avgTargetLF:   Math.round(avgTargetLF * 100) / 100,
    avgCurrentFare,
    avgRecFare,
    deltaFare: avgRecFare - avgCurrentFare,
    avgCurrentMargin,
    avgRecMargin,
    deltaMargin: avgRecMargin - avgCurrentMargin,
    hasCostChange: dates.some(d => d.hasCostChange),
    dates,
  };
}

const FLIGHT_DATA = DESTINATIONS
  .filter(d => _FLIGHT_ROUTES[d.id])
  .map((d, destIdx) => {
    const routes = _FLIGHT_ROUTES[d.id].map((spec, rIdx) => _makeFlightRoute(d.id, spec, destIdx, rIdx));
    const allDates = routes.flatMap(r => r.dates);
    const totalCapacity = allDates.reduce((s, x) => s + x.capacity, 0);
    const totalSold = allDates.reduce((s, x) => s + x.sold, 0);
    return {
      id: d.id,
      name: d.name,
      region: d.region,
      country: d.country,
      totalRoutes: routes.length,
      totalFlights: allDates.length,
      totalCapacity,
      totalSold,
      avgForecastLF: Math.round((allDates.reduce((s, x) => s + x.forecastLF, 0) / allDates.length) * 100) / 100,
      avgTargetLF:   Math.round((allDates.reduce((s, x) => s + x.targetLF, 0) / allDates.length) * 100) / 100,
      avgCurrentFare: Math.round(allDates.reduce((s, x) => s + x.currentFare, 0) / allDates.length),
      avgRecFare:     Math.round(allDates.reduce((s, x) => s + x.recFare, 0) / allDates.length),
      deltaFare:      Math.round(allDates.reduce((s, x) => s + (x.recFare - x.currentFare), 0) / allDates.length),
      routes,
    };
  });

function getFlightDateById(dateId) {
  for (const d of FLIGHT_DATA) {
    for (const r of d.routes) {
      const hit = r.dates.find(x => x.id === dateId);
      if (hit) return { destination: d, route: r, date: hit };
    }
  }
  return null;
}

// ── Competitor Flight Data seed ────────────────────────────
const COMPETITOR_FLIGHT_DATA = [
  { id: 'CF-001', destination: 'Cancun',      flightDate: 'May 11, 2026', ourFlight: 'WS2401', ourFare: 489, comp1Name: 'Air Canada',  comp1Fare: 465, comp2Name: 'Swoop',        comp2Fare: 455, lastUpdated: '05/04/26 09:15' },
  { id: 'CF-002', destination: 'Cancun',      flightDate: 'May 18, 2026', ourFlight: 'WS2403', ourFare: 529, comp1Name: 'Air Canada',  comp1Fare: 545, comp2Name: 'Flair',        comp2Fare: 489, lastUpdated: '05/04/26 09:15' },
  { id: 'CF-003', destination: 'Cancun',      flightDate: 'May 18, 2026', ourFlight: 'AC9821', ourFare: 445, comp1Name: 'Air Canada',  comp1Fare: 439, comp2Name: 'Porter',       comp2Fare: 425, lastUpdated: '05/04/26 09:15' },
  { id: 'CF-004', destination: 'Punta Cana',  flightDate: 'May 25, 2026', ourFlight: 'WS2601', ourFare: 509, comp1Name: 'Air Canada',  comp1Fare: 529, comp2Name: 'Flair',        comp2Fare: 485, lastUpdated: '05/04/26 09:15' },
  { id: 'CF-005', destination: 'Punta Cana',  flightDate: 'Jun 01, 2026', ourFlight: 'WG5501', ourFare: 439, comp1Name: 'Sunwing',     comp1Fare: 449, comp2Name: 'Air Transat',  comp2Fare: 425, lastUpdated: '05/04/26 09:15' },
  { id: 'CF-006', destination: 'Varadero',    flightDate: 'May 18, 2026', ourFlight: 'WS2201', ourFare: 465, comp1Name: 'Air Transat', comp1Fare: 479, comp2Name: 'Cubana',       comp2Fare: 445, lastUpdated: '05/04/26 09:15' },
  { id: 'CF-007', destination: 'Varadero',    flightDate: 'Jun 01, 2026', ourFlight: 'WG5301', ourFare: 389, comp1Name: 'Air Transat', comp1Fare: 415, comp2Name: 'Sunwing',      comp2Fare: 395, lastUpdated: '05/04/26 09:15' },
  { id: 'CF-008', destination: 'Montego Bay', flightDate: 'May 11, 2026', ourFlight: 'WS2801', ourFare: 549, comp1Name: 'Air Canada',  comp1Fare: 539, comp2Name: 'Air Transat',  comp2Fare: 509, lastUpdated: '05/04/26 09:15' },
  { id: 'CF-009', destination: 'Montego Bay', flightDate: 'May 25, 2026', ourFlight: 'WG5701', ourFare: 479, comp1Name: 'Sunwing',     comp1Fare: 489, comp2Name: 'Air Transat',  comp2Fare: 495, lastUpdated: '05/04/26 09:15' },
  { id: 'CF-010', destination: 'Montego Bay', flightDate: 'Jun 08, 2026', ourFlight: 'WS2801', ourFare: 525, comp1Name: 'Air Canada',  comp1Fare: 499, comp2Name: 'Air Transat',  comp2Fare: 475, lastUpdated: '05/04/26 09:15' },
];
COMPETITOR_FLIGHT_DATA.forEach(c => {
  c.cheapestComp = Math.min(c.comp1Fare, c.comp2Fare);
  c.ourDelta = c.ourFare - c.cheapestComp;
  c.ourDeltaPct = Math.round((c.ourDelta / c.cheapestComp) * 1000) / 10;
});

// ── Flight Published Changes seed ──────────────────────────
const FLIGHT_PUBLISHED_DATA = [
  { id: 'FP-001', destination: 'Cancun',      flightNum: 'WS2401', route: 'YYZ → CUN', departureDate: 'Apr 27, 2026', oldFare: 459, newFare: 489, publishedBy: 'Sarah Chen',   publishedDate: '04/20/26', status: 'Live'      },
  { id: 'FP-002', destination: 'Cancun',      flightNum: 'WS2403', route: 'YVR → CUN', departureDate: 'May 04, 2026', oldFare: 529, newFare: 509, publishedBy: 'Sarah Chen',   publishedDate: '04/21/26', status: 'Live'      },
  { id: 'FP-003', destination: 'Cancun',      flightNum: 'AC9821', route: 'YYZ → CUN', departureDate: 'May 11, 2026', oldFare: 389, newFare: 425, publishedBy: 'Sarah Chen',   publishedDate: '04/22/26', status: 'Scheduled' },
  { id: 'FP-004', destination: 'Punta Cana',  flightNum: 'WS2601', route: 'YYZ → PUJ', departureDate: 'May 11, 2026', oldFare: 475, newFare: 509, publishedBy: 'Marcus Webb',  publishedDate: '04/22/26', status: 'Live'      },
  { id: 'FP-005', destination: 'Varadero',    flightNum: 'WS2201', route: 'YYZ → VRA', departureDate: 'May 18, 2026', oldFare: 435, newFare: 465, publishedBy: 'Marcus Webb',  publishedDate: '04/23/26', status: 'Scheduled' },
  { id: 'FP-006', destination: 'Varadero',    flightNum: 'WG5301', route: 'YOW → VRA', departureDate: 'Apr 20, 2026', oldFare: 419, newFare: 389, publishedBy: 'Priya Patel',  publishedDate: '04/14/26', status: 'Expired'   },
  { id: 'FP-007', destination: 'Montego Bay', flightNum: 'WS2801', route: 'YYZ → MBJ', departureDate: 'May 25, 2026', oldFare: 519, newFare: 549, publishedBy: 'Sarah Chen',   publishedDate: '04/24/26', status: 'Scheduled' },
  { id: 'FP-008', destination: 'Montego Bay', flightNum: 'WG5701', route: 'YHZ → MBJ', departureDate: 'May 04, 2026', oldFare: 459, newFare: 479, publishedBy: 'Marcus Webb',  publishedDate: '04/25/26', status: 'Live'      },
];
FLIGHT_PUBLISHED_DATA.forEach(p => {
  p.changeAmt = p.newFare - p.oldFare;
  p.changePct = Math.round((p.changeAmt / p.oldFare) * 1000) / 10;
});

// ── Hotel Only seed ────────────────────────────────────────
// Specific hotels by destination for the Hotel Only screen.
// Only these four destinations are seeded for Hotel Only.
const _HOTEL_SPECS = {
  CUN: [
    { id: 'CUN-H01', name: 'Riu Cancun',     classification: 'Exclusive', stars: 4 },
    { id: 'CUN-H02', name: 'Dreams Natura',  classification: 'Exclusive', stars: 5 },
    { id: 'CUN-H03', name: 'Krystal Cancun', classification: 'Commodity', stars: 3 },
  ],
  PUJ: [
    { id: 'PUJ-H01', name: 'Barcelo Bavaro',        classification: 'Exclusive', stars: 4 },
    { id: 'PUJ-H02', name: 'Hard Rock Punta Cana',  classification: 'Exclusive', stars: 5 },
    { id: 'PUJ-H03', name: 'Whala Bavaro',          classification: 'Commodity', stars: 3 },
  ],
  VRA: [
    { id: 'VRA-H01', name: 'Melia Varadero', classification: 'Exclusive', stars: 4 },
    { id: 'VRA-H02', name: 'Sol Palmeras',   classification: 'Commodity', stars: 3 },
  ],
  MBJ: [
    { id: 'MBJ-H01', name: 'Sandals Montego Bay', classification: 'Exclusive', stars: 5 },
    { id: 'MBJ-H02', name: 'Riu Montego Bay',     classification: 'Commodity', stars: 4 },
  ],
};

const _HOTEL_ROOM_TYPES = ['Standard', 'Deluxe', 'Ocean View', 'Suite'];

// Generate 8 rolling check-in weeks starting next Monday
function _generateCheckInWeeks() {
  const today = new Date();
  const dow = today.getDay();
  const offset = dow === 0 ? 1 : (8 - dow) % 7 || 7;
  const start = new Date();
  start.setDate(today.getDate() + offset);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return Array.from({ length: 8 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i * 7);
    return {
      weekLabel: `Wk ${months[d.getMonth()]} ${d.getDate()}`,
      weekStart: _fmtDate(d),
    };
  });
}

const CHECK_IN_WEEKS = _generateCheckInWeeks();

function _makeCheckInWeek(catId, weekIdx, classification, roomType, rand) {
  const { weekLabel, weekStart } = CHECK_IN_WEEKS[weekIdx];

  // Supplier cost by classification
  // Exclusive: $120-200, Commodity: $70-110
  const costBase = classification === 'Exclusive'
    ? 120 + rand() * 80
    : 70 + rand() * 40;
  const typeBump = { Standard: 0, Deluxe: 15, 'Ocean View': 35, Suite: 70 }[roomType] || 0;
  const supplierCost = Math.round(costBase + typeBump);

  // ADR ranges: Exclusive $180-320, Commodity $110-180
  const adrBase = classification === 'Exclusive'
    ? 180 + rand() * 140
    : 110 + rand() * 70;
  const currentADR = Math.round(adrBase + typeBump);

  // Rec ADR wobbles around current, never below cost + $20
  const swing = Math.round((rand() - 0.4) * 32);
  const recADR = Math.max(supplierCost + 20, currentADR + swing);

  const allocation = Math.round(28 + rand() * 42);
  const forecastOcc = Math.round((0.42 + rand() * 0.52) * 100) / 100;
  const currentOcc = Math.max(0, Math.round((forecastOcc - 0.05 - rand() * 0.22) * 100) / 100);
  const sold = Math.min(allocation, Math.round(allocation * currentOcc));

  const hasCostChange = rand() > 0.87;

  return {
    id: `${catId}-W${weekIdx + 1}`,
    weekLabel,
    weekStart,
    allocation,
    sold,
    supplierCost,
    currentADR,
    recADR,
    deltaADR: recADR - currentADR,
    forecastOcc,
    currentOcc,
    hasCostChange,
    locked: false,
  };
}

function _avg(arr, field) {
  if (!arr.length) return 0;
  return arr.reduce((s, x) => s + x[field], 0) / arr.length;
}

function _makeCategory(hotelId, roomType, rand, classification) {
  const catId = `${hotelId}-${roomType.slice(0, 3).toUpperCase().replace(' ', '')}`;
  const weeks = Array.from({ length: CHECK_IN_WEEKS.length }, (_, i) =>
    _makeCheckInWeek(catId, i, classification, roomType, rand)
  );
  const allocation = weeks.reduce((s, w) => s + w.allocation, 0);
  const sold = weeks.reduce((s, w) => s + w.sold, 0);
  const avgCurrentADR = _avg(weeks, 'currentADR');
  const avgRecADR = _avg(weeks, 'recADR');

  return {
    id: catId,
    name: roomType,
    allocation,
    sold,
    soldPct: allocation ? Math.round((sold / allocation) * 100) / 100 : 0,
    avgCurrentADR: Math.round(avgCurrentADR),
    avgRecADR: Math.round(avgRecADR),
    deltaADR: Math.round(avgRecADR - avgCurrentADR),
    forecastOcc: Math.round(_avg(weeks, 'forecastOcc') * 100) / 100,
    currentOcc: Math.round(_avg(weeks, 'currentOcc') * 100) / 100,
    checkInWeeks: weeks,
  };
}

function _makeDetailedHotel(spec, destIdx, hotelIdx) {
  const rand = _seededRandom((destIdx + 11) * 7919 + (hotelIdx + 1) * 37);
  const categories = _HOTEL_ROOM_TYPES.map(t => _makeCategory(spec.id, t, rand, spec.classification));
  const allocation = categories.reduce((s, c) => s + c.allocation, 0);
  const sold = categories.reduce((s, c) => s + c.sold, 0);
  const avgCurrentADR = _avg(categories, 'avgCurrentADR');
  const avgRecADR = _avg(categories, 'avgRecADR');
  const allWeeks = categories.flatMap(c => c.checkInWeeks);
  const hasCostChange = allWeeks.some(w => w.hasCostChange);

  return {
    id: spec.id,
    name: spec.name,
    classification: spec.classification,
    stars: spec.stars,
    allocation,
    sold,
    soldPct: allocation ? Math.round((sold / allocation) * 100) / 100 : 0,
    avgCurrentADR: Math.round(avgCurrentADR),
    avgRecADR: Math.round(avgRecADR),
    deltaADR: Math.round(avgRecADR - avgCurrentADR),
    forecastOcc: Math.round(_avg(categories, 'forecastOcc') * 100) / 100,
    currentOcc: Math.round(_avg(categories, 'currentOcc') * 100) / 100,
    hasCostChange,
    categories,
  };
}

const HOTEL_DATA = DESTINATIONS
  .filter(d => _HOTEL_SPECS[d.id])
  .map((d, destIdx) => {
    const hotels = _HOTEL_SPECS[d.id].map((spec, hIdx) => _makeDetailedHotel(spec, destIdx, hIdx));
    const allocation = hotels.reduce((s, h) => s + h.allocation, 0);
    const sold = hotels.reduce((s, h) => s + h.sold, 0);
    return {
      id: d.id,
      name: d.name,
      region: d.region,
      country: d.country,
      departureGateway: d.departureGateway,
      revenueManager: d.revenueManager,
      totalHotels: hotels.length,
      allocation,
      sold,
      soldPct: allocation ? Math.round((sold / allocation) * 100) / 100 : 0,
      avgCurrentADR: Math.round(_avg(hotels, 'avgCurrentADR')),
      avgRecADR: Math.round(_avg(hotels, 'avgRecADR')),
      deltaADR: Math.round(_avg(hotels, 'avgRecADR') - _avg(hotels, 'avgCurrentADR')),
      forecastOcc: Math.round(_avg(hotels, 'forecastOcc') * 100) / 100,
      currentOcc: Math.round(_avg(hotels, 'currentOcc') * 100) / 100,
      hotels,
    };
  });

function getCheckInWeekById(weekId) {
  for (const d of HOTEL_DATA) {
    for (const h of d.hotels) {
      for (const c of h.categories) {
        const hit = c.checkInWeeks.find(w => w.id === weekId);
        if (hit) return { destination: d, hotel: h, category: c, week: hit };
      }
    }
  }
  return null;
}

// ── Cost Change Exceptions seed ────────────────────────────
const COST_CHANGE_DATA = [
  { id: 'CC-001', destination: 'Cancun',      hotel: 'Riu Cancun',           roomCategory: 'Ocean View', checkInWeek: 'Wk May 11', oldCost: 165, newCost: 182, dateReceived: '05/01/26', status: 'Pending'  },
  { id: 'CC-002', destination: 'Cancun',      hotel: 'Dreams Natura',        roomCategory: 'Suite',      checkInWeek: 'Wk May 18', oldCost: 235, newCost: 215, dateReceived: '05/03/26', status: 'Reviewed' },
  { id: 'CC-003', destination: 'Punta Cana',  hotel: 'Hard Rock Punta Cana', roomCategory: 'Deluxe',     checkInWeek: 'Wk May 25', oldCost: 198, newCost: 212, dateReceived: '05/04/26', status: 'Pending'  },
  { id: 'CC-004', destination: 'Varadero',    hotel: 'Melia Varadero',       roomCategory: 'Standard',   checkInWeek: 'Wk Jun 01', oldCost: 140, newCost: 155, dateReceived: '05/05/26', status: 'Actioned' },
  { id: 'CC-005', destination: 'Montego Bay', hotel: 'Sandals Montego Bay',  roomCategory: 'Ocean View', checkInWeek: 'Wk Jun 08', oldCost: 245, newCost: 268, dateReceived: '05/06/26', status: 'Pending'  },
  { id: 'CC-006', destination: 'Punta Cana',  hotel: 'Barcelo Bavaro',       roomCategory: 'Standard',   checkInWeek: 'Wk Jun 15', oldCost: 145, newCost: 138, dateReceived: '05/06/26', status: 'Reviewed' },
  { id: 'CC-007', destination: 'Montego Bay', hotel: 'Riu Montego Bay',      roomCategory: 'Deluxe',     checkInWeek: 'Wk Jun 22', oldCost: 105, newCost: 118, dateReceived: '05/08/26', status: 'Pending'  },
  { id: 'CC-008', destination: 'Cancun',      hotel: 'Krystal Cancun',       roomCategory: 'Standard',   checkInWeek: 'Wk Jun 29', oldCost: 85,  newCost: 92,  dateReceived: '05/09/26', status: 'Pending'  },
];
COST_CHANGE_DATA.forEach(c => {
  c.changeAmt = c.newCost - c.oldCost;
  c.changePct = Math.round((c.changeAmt / c.oldCost) * 1000) / 10;
});

// ── Published Hotel Changes seed ───────────────────────────
const PUBLISHED_HOTEL_CHANGES = [
  { id: 'PC-001', destination: 'Cancun',      hotel: 'Riu Cancun',           roomCategory: 'Standard',   checkInWeek: 'Wk Apr 27', oldADR: 198, newADR: 215, publishedBy: 'Sarah Chen',  publishedDate: '04/20/26', status: 'Live'      },
  { id: 'PC-002', destination: 'Cancun',      hotel: 'Dreams Natura',        roomCategory: 'Suite',      checkInWeek: 'Wk May 04', oldADR: 395, newADR: 375, publishedBy: 'Sarah Chen',  publishedDate: '04/21/26', status: 'Live'      },
  { id: 'PC-003', destination: 'Punta Cana',  hotel: 'Hard Rock Punta Cana', roomCategory: 'Ocean View', checkInWeek: 'Wk May 11', oldADR: 285, newADR: 305, publishedBy: 'Sarah Chen',  publishedDate: '04/22/26', status: 'Scheduled' },
  { id: 'PC-004', destination: 'Varadero',    hotel: 'Melia Varadero',       roomCategory: 'Deluxe',     checkInWeek: 'Wk May 11', oldADR: 215, newADR: 228, publishedBy: 'Marcus Webb', publishedDate: '04/22/26', status: 'Live'      },
  { id: 'PC-005', destination: 'Montego Bay', hotel: 'Sandals Montego Bay',  roomCategory: 'Suite',      checkInWeek: 'Wk May 18', oldADR: 425, newADR: 445, publishedBy: 'Marcus Webb', publishedDate: '04/23/26', status: 'Scheduled' },
  { id: 'PC-006', destination: 'Punta Cana',  hotel: 'Barcelo Bavaro',       roomCategory: 'Standard',   checkInWeek: 'Wk Apr 20', oldADR: 175, newADR: 165, publishedBy: 'Sarah Chen',  publishedDate: '04/14/26', status: 'Expired'   },
  { id: 'PC-007', destination: 'Montego Bay', hotel: 'Riu Montego Bay',      roomCategory: 'Ocean View', checkInWeek: 'Wk May 25', oldADR: 195, newADR: 210, publishedBy: 'Marcus Webb', publishedDate: '04/24/26', status: 'Scheduled' },
  { id: 'PC-008', destination: 'Cancun',      hotel: 'Krystal Cancun',       roomCategory: 'Standard',   checkInWeek: 'Wk May 04', oldADR: 135, newADR: 142, publishedBy: 'Priya Patel', publishedDate: '04/25/26', status: 'Live'      },
];
PUBLISHED_HOTEL_CHANGES.forEach(p => { p.changeAmt = p.newADR - p.oldADR; });
