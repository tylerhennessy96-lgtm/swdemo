// ── Sunwing RMS shared filter components ────────────────────
// Multi-select dropdown + week-range picker, all vanilla JS.
// Used by pricing.html, hotel.html, flight.html, demand.html.
(function (global) {
  const F = {};

  // ── helpers ─────────────────────────────────────────────────
  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[c]));
  }
  function setLabelText(wrap, text) {
    const el = wrap.querySelector('button .ms-label, button .date-range-text, button span');
    if (el) el.textContent = text;
  }

  // ── Multi-select dropdown ───────────────────────────────────
  const msState = {}; // wrapId → { values, selected:Set, defaultLabel, onChange }

  function msLabel(wrapId) {
    const s = msState[wrapId];
    if (!s) return '';
    const n = s.selected.size;
    if (n === 0) return s.defaultLabel;
    if (n === 1) return Array.from(s.selected)[0];
    // "All Regions" → "Regions"
    const root = s.defaultLabel.replace(/^All\s+/i, '');
    return `${root} (${n})`;
  }

  function msBuildSkeleton(wrapId) {
    const wrap = document.getElementById(wrapId);
    if (!wrap) return null;
    const dropdown = wrap.querySelector('.ms-dropdown');
    if (!dropdown) return null;
    if (!dropdown.querySelector('.ms-search')) {
      dropdown.innerHTML = `
        <div class="ms-search"><input type="text" placeholder="Search…" /></div>
        <div class="ms-actions">
          <a href="#" data-action="all">Select all</a>
          <a href="#" data-action="clear">Clear</a>
        </div>
        <div class="ms-options"></div>
      `;
      const searchEl = dropdown.querySelector('.ms-search input');
      searchEl.addEventListener('input', () => msRenderOptions(wrapId));
      searchEl.addEventListener('click', e => e.stopPropagation());
      dropdown.querySelector('[data-action="all"]').addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const s = msState[wrapId];
        s.values.forEach(v => s.selected.add(v));
        msRenderOptions(wrapId);
        msApplyLabel(wrapId);
        if (s.onChange) s.onChange(F.getSelected(wrapId));
      });
      dropdown.querySelector('[data-action="clear"]').addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const s = msState[wrapId];
        s.selected.clear();
        msRenderOptions(wrapId);
        msApplyLabel(wrapId);
        if (s.onChange) s.onChange(F.getSelected(wrapId));
      });
    }
    return dropdown;
  }

  function msApplyLabel(wrapId) {
    const wrap = document.getElementById(wrapId);
    if (wrap) setLabelText(wrap, msLabel(wrapId));
  }

  function msRenderOptions(wrapId) {
    const s = msState[wrapId];
    const wrap = document.getElementById(wrapId);
    if (!s || !wrap) return;
    const dropdown = wrap.querySelector('.ms-dropdown');
    const searchEl = dropdown.querySelector('.ms-search input');
    const search = (searchEl ? searchEl.value : '').toLowerCase().trim();
    const optsContainer = dropdown.querySelector('.ms-options');
    const filtered = search
      ? s.values.filter(v => v.toLowerCase().includes(search))
      : s.values;
    if (!filtered.length) {
      optsContainer.innerHTML = '<div class="ms-empty">No matches</div>';
      return;
    }
    optsContainer.innerHTML = filtered.map(v => `
      <label class="ms-option">
        <input type="checkbox" data-value="${escapeHtml(v)}" ${s.selected.has(v) ? 'checked' : ''} />
        <span>${escapeHtml(v)}</span>
      </label>
    `).join('');
    optsContainer.querySelectorAll('input[type="checkbox"]').forEach(cb => {
      cb.addEventListener('change', (e) => {
        e.stopPropagation();
        const v = cb.dataset.value;
        if (cb.checked) s.selected.add(v); else s.selected.delete(v);
        msApplyLabel(wrapId);
        if (s.onChange) s.onChange(F.getSelected(wrapId));
      });
    });
  }

  F.initMultiSelect = function (wrapId, values, opts) {
    opts = opts || {};
    msState[wrapId] = {
      values: Array.isArray(values) ? values.slice() : [],
      selected: new Set(),
      defaultLabel: opts.defaultLabel || 'All',
      onChange: opts.onChange || null,
    };
    if (!msBuildSkeleton(wrapId)) return;
    msRenderOptions(wrapId);
    msApplyLabel(wrapId);
  };

  F.setMultiSelectValues = function (wrapId, values) {
    const s = msState[wrapId];
    if (!s) return;
    s.values = values.slice();
    // Drop any selected entries no longer in values
    s.selected = new Set(Array.from(s.selected).filter(v => values.includes(v)));
    msRenderOptions(wrapId);
    msApplyLabel(wrapId);
  };

  F.getSelected = function (wrapId) {
    return msState[wrapId] ? Array.from(msState[wrapId].selected) : [];
  };

  // ── Week range picker ───────────────────────────────────────
  const wpState = {}; // wrapId → { viewMonth:Date, startWeek:Date|null, endWeek:Date|null, ... }
  const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

  function getMonday(d) {
    const m = new Date(d);
    const day = m.getDay();             // 0 = Sun
    const offset = day === 0 ? -6 : 1 - day;
    m.setDate(m.getDate() + offset);
    m.setHours(0, 0, 0, 0);
    return m;
  }
  function fmtWeek(d) {
    return `Wk ${MONTHS[d.getMonth()]} ${d.getDate()}`;
  }
  function isSameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }
  function weekInRange(s, wkStart) {
    if (!s.startWeek) return false;
    const t = wkStart.getTime();
    const lo = s.endWeek ? Math.min(s.startWeek.getTime(), s.endWeek.getTime()) : s.startWeek.getTime();
    const hi = s.endWeek ? Math.max(s.startWeek.getTime(), s.endWeek.getTime()) : s.startWeek.getTime();
    return t >= lo && t <= hi;
  }

  function wpBuildSkeleton(wrapId) {
    const wrap = document.getElementById(wrapId);
    if (!wrap) return null;
    const popover = wrap.querySelector('.date-pill-popover');
    if (!popover) return null;
    if (!popover.querySelector('.wp-grid')) {
      popover.innerHTML = `
        <div class="wp-header">
          <button type="button" class="wp-nav" data-nav="prev" aria-label="Previous month">‹</button>
          <span class="wp-title"></span>
          <button type="button" class="wp-nav" data-nav="next" aria-label="Next month">›</button>
        </div>
        <div class="wp-dow">
          <span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span><span>Su</span>
        </div>
        <div class="wp-grid"></div>
        <div class="wp-footer">
          <a href="#" class="wp-clear">Clear</a>
        </div>
      `;
      popover.addEventListener('click', e => e.stopPropagation());
      popover.querySelector('[data-nav="prev"]').addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const s = wpState[wrapId];
        s.viewMonth.setMonth(s.viewMonth.getMonth() - 1);
        wpRenderGrid(wrapId);
      });
      popover.querySelector('[data-nav="next"]').addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const s = wpState[wrapId];
        s.viewMonth.setMonth(s.viewMonth.getMonth() + 1);
        wpRenderGrid(wrapId);
      });
      popover.querySelector('.wp-clear').addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation();
        const s = wpState[wrapId];
        s.startWeek = null; s.endWeek = null;
        wpRenderGrid(wrapId);
        wpApplyLabel(wrapId);
        if (s.onChange) s.onChange(null);
      });
    }
    return popover;
  }

  function wpRenderGrid(wrapId) {
    const s = wpState[wrapId];
    const wrap = document.getElementById(wrapId);
    if (!s || !wrap) return;
    const popover = wrap.querySelector('.date-pill-popover');
    popover.querySelector('.wp-title').textContent =
      `${MONTHS[s.viewMonth.getMonth()]} ${s.viewMonth.getFullYear()}`;

    // Build 6 week rows starting from the Monday of the week containing the 1st of the month
    const monthStart = new Date(s.viewMonth.getFullYear(), s.viewMonth.getMonth(), 1);
    let cursor = getMonday(monthStart);
    const grid = popover.querySelector('.wp-grid');
    let html = '';
    for (let i = 0; i < 6; i++) {
      const wkStart = new Date(cursor);
      const inRange = weekInRange(s, wkStart);
      const cellsHtml = Array.from({ length: 7 }, (_, j) => {
        const d = new Date(wkStart);
        d.setDate(wkStart.getDate() + j);
        const cls = d.getMonth() !== s.viewMonth.getMonth() ? 'other-month' : '';
        return `<span class="${cls}">${d.getDate()}</span>`;
      }).join('');
      html += `<div class="wp-week ${inRange ? 'selected' : ''}" data-week="${wkStart.toISOString()}">${cellsHtml}</div>`;
      cursor = new Date(cursor);
      cursor.setDate(cursor.getDate() + 7);
    }
    grid.innerHTML = html;
    grid.querySelectorAll('.wp-week').forEach(el => {
      el.addEventListener('click', (e) => {
        e.stopPropagation();
        const wkStart = new Date(el.dataset.week);
        wpHandleClick(wrapId, wkStart);
      });
    });
  }

  function wpHandleClick(wrapId, wkStart) {
    const s = wpState[wrapId];
    if (!s.startWeek || (s.startWeek && s.endWeek)) {
      s.startWeek = wkStart;
      s.endWeek = null;
    } else {
      if (wkStart.getTime() < s.startWeek.getTime()) {
        s.endWeek = s.startWeek;
        s.startWeek = wkStart;
      } else if (isSameDay(wkStart, s.startWeek)) {
        // Clicking the same week again — leave as single-week selection
        s.endWeek = null;
      } else {
        s.endWeek = wkStart;
      }
    }
    wpRenderGrid(wrapId);
    wpApplyLabel(wrapId);
    if (s.onChange) s.onChange({ start: s.startWeek, end: s.endWeek });
  }

  function wpApplyLabel(wrapId) {
    const s = wpState[wrapId];
    const wrap = document.getElementById(wrapId);
    if (!s || !wrap) return;
    const labelEl = wrap.querySelector('.date-range-text');
    if (!labelEl) return;
    if (!s.startWeek) {
      labelEl.textContent = s.defaultLabel;
    } else if (!s.endWeek) {
      labelEl.textContent = fmtWeek(s.startWeek);
    } else {
      labelEl.textContent = `${fmtWeek(s.startWeek)} – ${fmtWeek(s.endWeek)}`;
    }
  }

  F.initWeekPicker = function (wrapId, opts) {
    opts = opts || {};
    const start = new Date();
    start.setDate(1);
    wpState[wrapId] = {
      viewMonth: start,
      startWeek: null,
      endWeek: null,
      defaultLabel: opts.defaultLabel || 'Select dates',
      onChange: opts.onChange || null,
    };
    if (!wpBuildSkeleton(wrapId)) return;
    wpRenderGrid(wrapId);
    wpApplyLabel(wrapId);
  };

  F.getWeekRange = function (wrapId) {
    const s = wpState[wrapId];
    if (!s || !s.startWeek) return null;
    return { start: s.startWeek, end: s.endWeek };
  };

  // ── Convenience: standard filter bar setup ──────────────────
  // Wires the Brand / Region / Destination / Dates / RM dropdowns.
  // Region cascades into Destination.
  F.populateStandard = function () {
    if (typeof BRANDS === 'undefined' || typeof DESTINATIONS === 'undefined' || typeof REVENUE_MANAGERS === 'undefined') {
      return;
    }
    const REGION_LIST = ['Caribbean', 'Mexico', 'Central America', 'Europe', 'Sun & Sand'];
    const destNames = (regionSel) => {
      const list = (!regionSel || regionSel.length === 0)
        ? DESTINATIONS
        : DESTINATIONS.filter(d => regionSel.includes(d.region));
      return list.map(d => d.name);
    };

    F.initMultiSelect('fBrand', BRANDS.slice(), { defaultLabel: 'All Brands' });
    F.initMultiSelect('fRegion', REGION_LIST, {
      defaultLabel: 'All Regions',
      onChange: (sel) => F.setMultiSelectValues('fDestination', destNames(sel)),
    });
    F.initMultiSelect('fDestination', destNames([]), { defaultLabel: 'All Destinations' });

    // RM list excludes the leading 'All RMs' marker
    const rms = REVENUE_MANAGERS.filter(r => r !== 'All RMs');
    F.initMultiSelect('fRM', rms, { defaultLabel: 'All RMs' });

    F.initWeekPicker('fDates', { defaultLabel: 'Select weeks' });
  };

  global.Filters = F;
})(window);
