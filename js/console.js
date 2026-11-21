// Console frame behaviour for case-study pages: light/dark switch and local time.
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.cx-theme');
  function isDark() { var t = root.getAttribute('data-theme'); return t ? t === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches; }
  function paint() {
    var d = isDark(); root.classList.toggle('is-dark', d);
    if (btn) { var tl = btn.querySelector('.tl'); if (tl) tl.textContent = d ? 'light' : 'dark'; btn.setAttribute('aria-label', d ? 'Switch to light mode' : 'Switch to dark mode'); }
  }
  try { var saved = localStorage.getItem('sk-theme'); if (saved) root.setAttribute('data-theme', saved); } catch (e) {}
  paint();
  if (btn) btn.addEventListener('click', function () {
    var next = isDark() ? 'light' : 'dark'; root.setAttribute('data-theme', next);
    try { localStorage.setItem('sk-theme', next); } catch (e) {}
    paint();
  });
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', paint);

  var clock = document.getElementById('cx-clock');
  function tick() { try { clock.textContent = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Kolkata' }).format(new Date()); } catch (e) {} }
  if (clock) { tick(); setInterval(tick, 30000); }
})();
