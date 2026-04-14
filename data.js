// ── Sunwing Revenue Management — Seed Data ──────────────────
// All prices in CAD ($). All data fictional and for demo use only.

const BRANDS     = ['Sunwing', 'WestJet Vacations'];
const REGIONS    = ['All', 'Caribbean', 'Mexico', 'Central America', 'Europe', 'Sun & Sand'];
const GATEWAYS   = ['YYZ', 'YVR', 'YWG', 'YUL', 'YYC', 'YOW', 'YHZ'];
const TRIP_DURATIONS = [7, 10, 14];

const REVENUE_MANAGERS = ['All RMs', 'Sarah Chen', 'Marcus Webb', 'Priya Patel', 'Jordan Kim', 'David Okafor', 'Lisa Tran'];
const SALES_MANAGERS   = ['All Sales', 'Tom Reyes', 'Diana Novak', 'Amir Hassan', 'Chloe Martin'];

// ── Destinations ───────────────────────────────────────────
const DESTINATIONS = [
  // ── Caribbean ──
  { id: 'PUJ', name: 'Punta Cana',      region: 'Caribbean',       country: 'Dominican Republic',  departureGateway: 'YYZ', revenueManager: 'Sarah Chen',   salesManager: 'Tom Reyes'    },
  { id: 'MBJ', name: 'Montego Bay',     region: 'Caribbean',       country: 'Jamaica',             departureGateway: 'YYZ', revenueManager: 'Marcus Webb',  salesManager: 'Diana Novak'  },
  { id: 'VRA', name: 'Varadero',        region: 'Caribbean',       country: 'Cuba',                departureGateway: 'YUL', revenueManager: 'Marcus Webb',  salesManager: 'Diana Novak'  },
  { id: 'NAS', name: 'Nassau',          region: 'Caribbean',       country: 'Bahamas',             departureGateway: 'YYZ', revenueManager: 'David Okafor', salesManager: 'Tom Reyes'    },
  { id: 'AUA', name: 'Aruba',           region: 'Caribbean',       country: 'Aruba',               departureGateway: 'YYZ', revenueManager: 'Jordan Kim',   salesManager: 'Diana Novak'  },
  { id: 'BGI', name: 'Barbados',        region: 'Caribbean',       country: 'Barbados',            departureGateway: 'YYZ', revenueManager: 'Lisa Tran',    salesManager: 'Diana Novak'  },
  { id: 'UVF', name: 'St. Lucia',       region: 'Caribbean',       country: 'Saint Lucia',         departureGateway: 'YYZ', revenueManager: 'Lisa Tran',    salesManager: 'Diana Novak'  },
  { id: 'PLS', name: 'Turks & Caicos',  region: 'Caribbean',       country: 'Turks and Caicos',    departureGateway: 'YYZ', revenueManager: 'David Okafor', salesManager: 'Tom Reyes'    },
  { id: 'POP', name: 'Puerto Plata',    region: 'Caribbean',       country: 'Dominican Republic',  departureGateway: 'YWG', revenueManager: 'Priya Patel',  salesManager: 'Amir Hassan'  },

  // ── Mexico ──
  { id: 'CUN', name: 'Cancun',          region: 'Mexico',          country: 'Mexico',              departureGateway: 'YYZ', revenueManager: 'Sarah Chen',   salesManager: 'Tom Reyes'    },
  { id: 'SJD', name: 'Los Cabos',       region: 'Mexico',          country: 'Mexico',              departureGateway: 'YVR', revenueManager: 'Priya Patel',  salesManager: 'Amir Hassan'  },
  { id: 'PVR', name: 'Puerto Vallarta', region: 'Mexico',          country: 'Mexico',              departureGateway: 'YVR', revenueManager: 'Jordan Kim',   salesManager: 'Chloe Martin' },
  { id: 'MID', name: 'Riviera Maya',    region: 'Mexico',          country: 'Mexico',              departureGateway: 'YYZ', revenueManager: 'David Okafor', salesManager: 'Tom Reyes'    },
  { id: 'HUX', name: 'Huatulco',        region: 'Mexico',          country: 'Mexico',              departureGateway: 'YYC', revenueManager: 'Priya Patel',  salesManager: 'Amir Hassan'  },
  { id: 'MZT', name: 'Mazatlan',        region: 'Mexico',          country: 'Mexico',              departureGateway: 'YYC', revenueManager: 'Jordan Kim',   salesManager: 'Amir Hassan'  },
  { id: 'CZM', name: 'Cozumel',         region: 'Mexico',          country: 'Mexico',              departureGateway: 'YUL', revenueManager: 'Jordan Kim',   salesManager: 'Chloe Martin' },
  { id: 'ZIH', name: 'Ixtapa',          region: 'Mexico',          country: 'Mexico',              departureGateway: 'YYZ', revenueManager: 'Lisa Tran',    salesManager: 'Chloe Martin' },

  // ── Central America ──
  { id: 'RTB', name: 'Roatan',          region: 'Central America', country: 'Honduras',            departureGateway: 'YYZ', revenueManager: 'David Okafor', salesManager: 'Amir Hassan'  },
  { id: 'LIR', name: 'Liberia',         region: 'Central America', country: 'Costa Rica',          departureGateway: 'YYZ', revenueManager: 'Lisa Tran',    salesManager: 'Amir Hassan'  },
  { id: 'PTY', name: 'Panama City',     region: 'Central America', country: 'Panama',              departureGateway: 'YYZ', revenueManager: 'David Okafor', salesManager: 'Tom Reyes'    },

  // ── Europe ──
  { id: 'LIS', name: 'Lisbon',          region: 'Europe',          country: 'Portugal',            departureGateway: 'YYZ', revenueManager: 'Sarah Chen',   salesManager: 'Tom Reyes'    },
  { id: 'BCN', name: 'Barcelona',       region: 'Europe',          country: 'Spain',               departureGateway: 'YYZ', revenueManager: 'Marcus Webb',  salesManager: 'Diana Novak'  },
  { id: 'FCO', name: 'Rome',            region: 'Europe',          country: 'Italy',               departureGateway: 'YYZ', revenueManager: 'Marcus Webb',  salesManager: 'Diana Novak'  },
  { id: 'ATH', name: 'Athens',          region: 'Europe',          country: 'Greece',              departureGateway: 'YYZ', revenueManager: 'Priya Patel',  salesManager: 'Amir Hassan'  },
  { id: 'AMS', name: 'Amsterdam',       region: 'Europe',          country: 'Netherlands',         departureGateway: 'YYZ', revenueManager: 'Jordan Kim',   salesManager: 'Chloe Martin' },

  // ── Sun & Sand (long-haul) ──
  { id: 'MLE', name: 'Maldives',        region: 'Sun & Sand',      country: 'Maldives',            departureGateway: 'YYZ', revenueManager: 'David Okafor', salesManager: 'Tom Reyes'    },
  { id: 'DXB', name: 'Dubai',           region: 'Sun & Sand',      country: 'United Arab Emirates',departureGateway: 'YYZ', revenueManager: 'Lisa Tran',    salesManager: 'Diana Novak'  },
  { id: 'HKT', name: 'Phuket',          region: 'Sun & Sand',      country: 'Thailand',            departureGateway: 'YVR', revenueManager: 'David Okafor', salesManager: 'Chloe Martin' },
];

// Assign a brand to each destination (alternating for variety; deterministic)
DESTINATIONS.forEach((d, i) => {
  d.brand = (i % 2 === 0) ? 'Sunwing' : 'WestJet Vacations';
});

// ── Shared helpers ─────────────────────────────────────────
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
  MID: [
    { flightNum: 'WS2501', origin: 'YYZ', category: 'Own Flight' },
    { flightNum: 'WG5401', origin: 'YYC', category: 'Risk Block' },
  ],
  SJD: [
    { flightNum: 'WS3001', origin: 'YYZ', category: 'Own Flight' },
    { flightNum: 'WS3003', origin: 'YVR', category: 'Own Flight' },
  ],
  BGI: [
    { flightNum: 'WS3201', origin: 'YYZ', category: 'Own Flight' },
    { flightNum: 'WG5801', origin: 'YOW', category: 'Risk Block' },
  ],
  NAS: [
    { flightNum: 'WS3401', origin: 'YYZ', category: 'Own Flight' },
    { flightNum: 'WG5901', origin: 'YWG', category: '3rd Party'  },
  ],
  PVR: [
    { flightNum: 'WS2701', origin: 'YYZ', category: 'Own Flight' },
    { flightNum: 'WS2703', origin: 'YVR', category: 'Own Flight' },
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

  // Aircraft capacity varies by category, with small per-date jitter to
  // reflect aircraft swaps and operational variation across weeks.
  const baseCapacity = category === 'Own Flight'
    ? 189                                  // 737-800
    : category === 'Risk Block' ? 174      // 737 MAX 8
    : 148;                                 // 3rd party narrow-body
  const jitter = Math.round((rand() - 0.5) * 18); // ±9 seats
  const capacity = Math.max(120, baseCapacity + jitter);

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
      brand: d.brand,
      revenueManager: d.revenueManager,
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
  MID: [
    { id: 'MID-H01', name: 'Now Jade Resort',     classification: 'Exclusive', stars: 5 },
    { id: 'MID-H02', name: 'Iberostar Paraiso',   classification: 'Exclusive', stars: 4 },
    { id: 'MID-H03', name: 'Gran Bahia Principe', classification: 'Commodity', stars: 4 },
  ],
  SJD: [
    { id: 'SJD-H01', name: 'Breathless Cabo', classification: 'Exclusive', stars: 5 },
    { id: 'SJD-H02', name: 'Riu Santa Fe',    classification: 'Commodity', stars: 4 },
  ],
  BGI: [
    { id: 'BGI-H01', name: 'Sandals Barbados',   classification: 'Exclusive', stars: 5 },
    { id: 'BGI-H02', name: 'Accra Beach Hotel',  classification: 'Commodity', stars: 3 },
  ],
  NAS: [
    { id: 'NAS-H01', name: 'Atlantis Paradise Island', classification: 'Exclusive', stars: 5 },
    { id: 'NAS-H02', name: 'Melia Nassau',             classification: 'Commodity', stars: 4 },
  ],
  PVR: [
    { id: 'PVR-H01', name: 'Dreams Villamagna', classification: 'Exclusive', stars: 5 },
    { id: 'PVR-H02', name: 'Krystal Grand',     classification: 'Commodity', stars: 4 },
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
      brand: d.brand,
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
