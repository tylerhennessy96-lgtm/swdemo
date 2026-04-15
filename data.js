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

// Routes with an explicit daily-flight count per week. Others default to 5.
const _FLIGHT_DAYS_PER_WEEK = {
  'WS2401': 7,
  'WS2601': 6,
  'WS2201': 5,
  'WS2801': 6,
  'WS2403': 5,
};
const _DOW_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// Weekday fare multipliers (Mon cheapest, Sat/Sun slightly up)
const _DOW_FARE_MULT = [1.08, 0.93, 0.92, 0.95, 0.98, 1.05, 1.10]; // Sun, Mon, Tue, Wed, Thu, Fri, Sat
const _DEP_TIME_POOL = ['06:30', '08:45', '11:20', '13:05', '14:55', '17:30', '20:15'];

function _makeFlightDay(parentId, baseDate, dayIdxInWeek, spec, rand, category, idx, flightNum) {
  // Pick the day-of-week offset: cycle through Mon, Tue, Thu, Fri, Sat, Sun, Wed depending on how many flights the route has
  const offsetCycle = [0, 1, 3, 4, 5, 6, 2]; // Mon, Tue, Thu, Fri, Sat, Sun, Wed
  const dayOffset = offsetCycle[dayIdxInWeek % 7];
  const d = new Date(baseDate);
  d.setDate(d.getDate() + dayOffset);
  const dow = d.getDay();

  // Capacity varies 150-220
  const baseCap = category === 'Own Flight' ? 195 : category === 'Risk Block' ? 178 : 158;
  const capacity = Math.max(150, Math.min(220, baseCap + Math.round((rand() - 0.5) * 30)));

  // Load factor drift with some variance per day
  const weeksOut = idx;
  const targetLF = Math.round((0.78 - weeksOut * 0.025) * 100) / 100;
  const forecastLF = Math.max(0.35, Math.min(0.98, targetLF + (rand() - 0.5) * 0.32));
  const sold = Math.round(capacity * Math.max(0, forecastLF - 0.06 - rand() * 0.12));

  const daysLeft = Math.max(7, 7 * (idx + 2));
  const rateOfSaleTarget = Math.round(((capacity * targetLF - sold) / daysLeft) * 10) / 10;
  const rateOfSale = Math.round((rateOfSaleTarget * (0.5 + rand() * 1.0)) * 10) / 10;

  const dowMult = _DOW_FARE_MULT[dow];
  const baseFare = spec.fareMin + rand() * (spec.fareMax - spec.fareMin);
  const currentFare = Math.round(baseFare * dowMult);
  const recFare = Math.max(spec.fareMin, currentFare + Math.round((rand() - 0.4) * 70));
  const currentMargin = Math.round(spec.marginMin + rand() * (spec.marginMax - spec.marginMin));
  const recMargin = Math.max(spec.marginMin, currentMargin + Math.round((rand() - 0.45) * 40));

  const departureTime = _DEP_TIME_POOL[dayIdxInWeek % _DEP_TIME_POOL.length];

  const comp1Fare = Math.round(currentFare + (rand() - 0.45) * 120);
  const comp2Fare = Math.round(currentFare + (rand() - 0.55) * 150);

  return {
    id: `${parentId}-${_DOW_LABELS[dow]}`,
    departureDate: _fmtDate(d),
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
    hasCostChange: rand() > 0.92,
    locked: false,
  };
}

function _makeFlightDate(routeId, idx, category, rand, flightNum) {
  const spec = _FLIGHT_CATEGORIES[category];
  const dep = _FLIGHT_DEPARTURE_DATES[idx];

  // Determine how many daily flights this route+week has
  const dayCount = _FLIGHT_DAYS_PER_WEEK[flightNum] || 5;

  const parentId = `${routeId}-W${idx + 1}`;
  const days = Array.from({ length: dayCount }, (_, di) =>
    _makeFlightDay(parentId, dep, di, spec, rand, category, idx, flightNum)
  );

  // Aggregate the week from its days
  const capacity = days.reduce((s, x) => s + x.capacity, 0);
  const sold     = days.reduce((s, x) => s + x.sold, 0);
  const avgTargetLF   = days.reduce((s, x) => s + x.targetLF, 0) / days.length;
  const avgForecastLF = days.reduce((s, x) => s + x.forecastLF, 0) / days.length;
  const avgRos       = days.reduce((s, x) => s + x.rateOfSale, 0) / days.length;
  const avgRosTarget = days.reduce((s, x) => s + x.rateOfSaleTarget, 0) / days.length;
  const avgCurFare = Math.round(days.reduce((s, x) => s + x.currentFare, 0) / days.length);
  const avgRecFare = Math.round(days.reduce((s, x) => s + x.recFare, 0) / days.length);
  const avgCurMargin = Math.round(days.reduce((s, x) => s + x.currentMargin, 0) / days.length);
  const avgRecMargin = Math.round(days.reduce((s, x) => s + x.recMargin, 0) / days.length);
  const avgComp1 = Math.round(days.reduce((s, x) => s + x.comp1Fare, 0) / days.length);
  const avgComp2 = Math.round(days.reduce((s, x) => s + x.comp2Fare, 0) / days.length);

  return {
    id: parentId,
    departureDate: _fmtDate(dep),
    departureTime: days[0].departureTime,
    capacity,
    sold,
    targetLF: Math.round(avgTargetLF * 100) / 100,
    forecastLF: Math.round(avgForecastLF * 100) / 100,
    rateOfSale: Math.round(avgRos * 10) / 10,
    rateOfSaleTarget: Math.round(avgRosTarget * 10) / 10,
    currentFare: avgCurFare,
    recFare: avgRecFare,
    deltaFare: avgRecFare - avgCurFare,
    currentMargin: avgCurMargin,
    recMargin: avgRecMargin,
    deltaMargin: avgRecMargin - avgCurMargin,
    comp1Fare: avgComp1,
    comp2Fare: avgComp2,
    hasCostChange: days.some(x => x.hasCostChange),
    locked: false,
    days,
  };
}

function _makeFlightRoute(destId, routeSpec, destIdx, routeIdx) {
  const rand = _seededRandom((destIdx + 17) * 6301 + (routeIdx + 1) * 53);
  const routeId = `${destId}-${routeSpec.flightNum}`;
  const dates = _FLIGHT_DEPARTURE_DATES.map((_, i) =>
    _makeFlightDate(routeId, i, routeSpec.category, rand, routeSpec.flightNum)
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
      // Search inside per-week days
      for (const weekDate of r.dates) {
        if (!weekDate.days) continue;
        const dayHit = weekDate.days.find(x => x.id === dateId);
        if (dayHit) return { destination: d, route: r, date: dayHit, weekDate };
      }
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

// ── Package Rules seed ─────────────────────────────────────
const PACKAGE_RULES = [
  {
    id: 'RULE-001',
    name: 'Own Flight High LF Uplift',
    status: 'Active',
    priority: 10,
    flightCategories: ['Own Flight'],
    hotelClassifications: ['Any'],
    commitment: 'Fully Committed',
    destinations: ['All'],
    conditionLogic: 'ALL',
    conditions: [
      { metric: 'LF %', operator: '>=', value: 80 },
    ],
    action: { type: 'Increase margin by $', value: 20, maxChange: 40, minMargin: 80, maxMargin: null },
    lastModified: '04/10/26',
    modifiedBy: 'Sarah Chen',
  },
  {
    id: 'RULE-002',
    name: 'Risk Block Distressed Inventory',
    status: 'Active',
    priority: 20,
    flightCategories: ['Risk Block'],
    hotelClassifications: ['Any'],
    commitment: 'Allotment — Not Committed',
    destinations: ['All'],
    conditionLogic: 'ALL',
    conditions: [
      { metric: 'LF %', operator: '<', value: 50 },
      { metric: 'Days to Departure', operator: '<', value: 30 },
    ],
    action: { type: 'Decrease margin by $', value: 25, maxChange: 50, minMargin: 20, maxMargin: null },
    lastModified: '04/08/26',
    modifiedBy: 'Marcus Webb',
  },
  {
    id: 'RULE-003',
    name: 'Exclusive Hotel Premium',
    status: 'Active',
    priority: 15,
    flightCategories: ['Own Flight', 'Risk Block', '3rd Party'],
    hotelClassifications: ['Exclusive'],
    commitment: 'Any',
    destinations: ['All'],
    conditionLogic: 'ALL',
    conditions: [
      { metric: 'Occ %', operator: '>=', value: 75 },
      { metric: 'Beds:Seats Ratio', operator: '<', value: 0.90 },
    ],
    action: { type: 'Increase margin by %', value: 8, maxChange: 60, minMargin: null, maxMargin: null },
    lastModified: '04/05/26',
    modifiedBy: 'Priya Patel',
  },
  {
    id: 'RULE-004',
    name: '3rd Party Seat Margin Floor',
    status: 'Active',
    priority: 30,
    flightCategories: ['3rd Party'],
    hotelClassifications: ['Any'],
    commitment: 'Any',
    destinations: ['All'],
    conditionLogic: 'ALL',
    conditions: [
      { metric: 'Always apply', operator: '—', value: '' },
    ],
    action: { type: 'Set margin to $', value: 30, maxChange: null, minMargin: 30, maxMargin: null },
    lastModified: '03/28/26',
    modifiedBy: 'Jordan Kim',
  },
  {
    id: 'RULE-005',
    name: 'Caribbean Peak Season Lock',
    status: 'Active',
    priority: 5,
    flightCategories: ['Own Flight', 'Risk Block', '3rd Party'],
    hotelClassifications: ['Any'],
    commitment: 'Any',
    destinations: ['Caribbean'],
    conditionLogic: 'ALL',
    conditions: [
      { metric: 'LF %', operator: '>=', value: 90 },
    ],
    action: { type: 'Lock price', value: '', maxChange: null, minMargin: null, maxMargin: null, flagForReview: true },
    lastModified: '04/01/26',
    modifiedBy: 'Sarah Chen',
  },
  {
    id: 'RULE-006',
    name: 'Commodity Hotel Low Occ Discount',
    status: 'Draft',
    priority: 25,
    flightCategories: ['Own Flight', 'Risk Block', '3rd Party'],
    hotelClassifications: ['Commodity'],
    commitment: 'Any',
    destinations: ['All'],
    conditionLogic: 'ALL',
    conditions: [
      { metric: 'Occ %', operator: '<', value: 45 },
      { metric: 'Days to Departure', operator: '<', value: 21 },
    ],
    action: { type: 'Decrease margin by $', value: 15, maxChange: 30, minMargin: 0, maxMargin: null },
    lastModified: '04/12/26',
    modifiedBy: 'Lisa Tran',
  },
];

const RULE_METRICS    = ['LF %', 'Forecast LF %', 'Rate of Sale', 'Days to Departure', 'Margin $', 'Occ %', 'Beds:Seats Ratio'];
const RULE_OPERATORS  = ['>', '<', '=', '≥', '≤', 'between'];
const RULE_ACTIONS    = [
  'Increase margin by $',
  'Decrease margin by $',
  'Increase margin by %',
  'Decrease margin by %',
  'Set margin to $',
  'Set fare to $',
  'Lock price',
  'Flag for review',
];
const HOTEL_CLASSIFICATIONS = ['Exclusive', 'Commodity', 'Any'];
const COMMITMENT_TYPES = [
  'Fully Committed',
  'Allotment — Partially Committed',
  'Allotment — Not Committed',
  'Any',
];

// ── Demand Forecast seed data ──────────────────────────────
// 52 forward weeks starting from the current demo "today" (2026-04-15).
const DEMAND_WEEKS = (() => {
  const out = [];
  const start = new Date(2026, 3, 15); // 2026-04-15
  for (let i = 0; i < 52; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i * 7);
    const mo = d.toLocaleString('en-US', { month: 'short' });
    out.push({
      idx: i,
      label: `Wk ${mo} ${String(d.getDate()).padStart(2, '0')}`,
      weekStart: _fmtDate(d),
      monthIdx: d.getMonth(), // 0-11
    });
  }
  return out;
})();

// Per-region seasonality factor 0..12 month index → relative demand
const _REGION_SEASONALITY = {
  'Caribbean':       [1.28, 1.26, 1.22, 1.10, 0.90, 0.70, 0.68, 0.65, 0.72, 0.85, 1.05, 1.22],
  'Mexico':          [1.24, 1.22, 1.20, 1.12, 0.92, 0.78, 0.76, 0.80, 0.82, 0.92, 1.08, 1.20],
  'Central America': [1.15, 1.15, 1.12, 1.02, 0.88, 0.78, 0.82, 0.82, 0.80, 0.88, 1.00, 1.10],
  'Europe':          [0.70, 0.72, 0.80, 0.95, 1.12, 1.30, 1.40, 1.38, 1.18, 0.98, 0.78, 0.72],
  'Sun & Sand':      [1.10, 1.10, 1.08, 1.00, 0.92, 0.82, 0.80, 0.82, 0.88, 0.98, 1.05, 1.12],
};

// DEMAND_INDEX_DATA: destId → array of 52 weekly demand index values (100 = normal)
const DEMAND_INDEX_DATA = (() => {
  const out = {};
  DESTINATIONS.forEach((dest, di) => {
    const rand = _seededRandom(1009 + di * 137);
    const bump = (dest.region === 'Europe' ? 2 : -2); // slight base bias
    const series = DEMAND_WEEKS.map((wk, i) => {
      const season = (_REGION_SEASONALITY[dest.region] || _REGION_SEASONALITY['Caribbean'])[wk.monthIdx];
      const noise = (rand() - 0.5) * 10;
      const trend = Math.sin((i + di * 3) * 0.18) * 4;
      return Math.round(100 * season + bump + noise + trend);
    });
    out[dest.id] = series;
  });
  return out;
})();

// BOOKING_VELOCITY_DATA: destId → array of 52 weekly velocity ratios (1.0 = on target)
const BOOKING_VELOCITY_DATA = (() => {
  const out = {};
  DESTINATIONS.forEach((dest, di) => {
    const rand = _seededRandom(2053 + di * 211);
    const series = DEMAND_WEEKS.map((wk, i) => {
      const season = (_REGION_SEASONALITY[dest.region] || _REGION_SEASONALITY['Caribbean'])[wk.monthIdx];
      const base = 0.85 + (season - 1) * 0.55;
      const noise = (rand() - 0.5) * 0.35;
      return Math.round((base + noise) * 100) / 100;
    });
    out[dest.id] = series;
  });
  return out;
})();

// DEMAND_DRIVERS: external signal cards
const DEMAND_DRIVERS = [
  {
    icon: '✈️',
    title: 'Search Index — Cancun',
    description: 'Cancun searches up 23% month-over-month on Google Trends; search-to-book conversion also strengthening.',
    impact: 'positive',
    date: '04/12/26',
    category: 'Search',
  },
  {
    icon: '🌤️',
    title: 'Hurricane Season Outlook',
    description: 'NOAA forecasts a moderate 2026 Atlantic season with 13-17 named storms; elevated risk for Caribbean Aug–Oct.',
    impact: 'negative',
    date: '04/08/26',
    category: 'Weather',
  },
  {
    icon: '📅',
    title: 'Spring Break Window',
    description: 'Spring break demand window Mar 15 – Apr 15 driving sustained last-minute bookings on sun destinations.',
    impact: 'positive',
    date: '04/01/26',
    category: 'Events',
  },
  {
    icon: '💰',
    title: 'FX — CAD Weakness',
    description: 'CAD/USD sitting at 0.72 — continued pricing pressure on USD-denominated hotel costs across Caribbean & Mexico.',
    impact: 'negative',
    date: '04/14/26',
    category: 'FX',
  },
  {
    icon: '🏖️',
    title: 'European Summer Booking Pace',
    description: 'Lisbon and Barcelona bookings tracking +18% vs 2025 for Jun–Aug; capacity constrained on YYZ gateways.',
    impact: 'positive',
    date: '04/10/26',
    category: 'Pace',
  },
  {
    icon: '⚠️',
    title: 'Competitor Capacity — Air Transat',
    description: 'Air Transat announced 6 additional Caribbean frequencies starting May, adds ~3,200 weekly seats.',
    impact: 'negative',
    date: '04/05/26',
    category: 'Competitor',
  },
];

// SCENARIOS: pre-built what-if saved scenarios
const SCENARIOS = [
  {
    id: 'SCN-001',
    name: 'New Tulum Program',
    type: 'New destination',
    baseDestination: 'Tulum',
    modelledOn: 'Cancun',
    demandVsSimilar: 1.15,
    classificationMix: 0.65, // Exclusive share
    seasons: ['Spring', 'Fall'],
    createdBy: 'Sarah Chen',
    createdDate: '03/28/26',
    projectedImpact: '+15% demand premium vs Cancun baseline',
    revenueImpact: '+$48,200 / week',
    marginImpact: '+$32 / booking',
    status: 'Active',
  },
  {
    id: 'SCN-002',
    name: 'Hurricane Season Impact',
    type: 'Demand shock',
    baseDestination: 'Caribbean region',
    shockType: 'Negative',
    magnitude: -0.30,
    durationWeeks: 10,
    startWeek: '08/03/26',
    createdBy: 'Marcus Webb',
    createdDate: '03/20/26',
    projectedImpact: '-30% Caribbean demand Aug–Oct',
    revenueImpact: '-$215,000 / week at peak',
    marginImpact: '-$58 / booking',
    status: 'Active',
  },
  {
    id: 'SCN-003',
    name: 'New Air Transat Caribbean Route',
    type: 'New competitor',
    baseDestination: 'Caribbean routes',
    competitorName: 'Air Transat',
    pricingRelative: -0.10,
    routesAffected: ['CUN', 'PUJ', 'MBJ', 'VRA'],
    createdBy: 'Priya Patel',
    createdDate: '04/02/26',
    projectedImpact: '-6% avg LF on affected routes',
    revenueImpact: '-$92,400 / week',
    marginImpact: '-$18 / booking',
    status: 'Draft',
  },
  {
    id: 'SCN-004',
    name: 'Spring Break Surge',
    type: 'Demand shock',
    baseDestination: 'All Caribbean',
    shockType: 'Positive',
    magnitude: 0.40,
    durationWeeks: 5,
    startWeek: '03/15/26',
    createdBy: 'Jordan Kim',
    createdDate: '02/18/26',
    projectedImpact: '+40% demand for 5-week window',
    revenueImpact: '+$175,000 / week',
    marginImpact: '+$42 / booking',
    status: 'Archived',
  },
];

const SCENARIO_TYPES = [
  'New destination',
  'Existing destination — demand shock',
  'Capacity change',
  'New competitor entry',
  'Price war simulation',
];
