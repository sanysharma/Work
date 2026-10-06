// Show the labelled grey placeholder until the real image file is added.
document.querySelectorAll('.ph img').forEach(function (img) {
  function drop() { img.remove(); }
  if (img.complete && img.naturalWidth === 0) drop();
  img.addEventListener('error', drop);
});
// Same for videos (screen recordings)
document.querySelectorAll('.ph video').forEach(function (v) {
  v.addEventListener('error', function () { v.remove(); }, true);
  var src = v.querySelector('source');
  if (src) src.addEventListener('error', function () { v.remove(); });
});

// Opening a page (e.g. "Next case study") always starts at the top.
// Back/forward still returns you to where you were.
(function () {
  var nav = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
  var isBackForward = nav && nav.type === 'back_forward';
  if (!isBackForward) {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
    window.addEventListener('load', function () { window.scrollTo(0, 0); });
  }
})();

// Inside the Claude preview, file downloads go through the viewer's save prompt.
// On the real site (GitHub Pages) window.claude doesn't exist, so links work normally.
(function () {
  var c = window.claude;
  if (!c || typeof c.use !== 'function') return;
  var dlReady = c.use('downloads');
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a[download]');
    if (!a) return;
    e.preventDefault();
    var name = a.getAttribute('download') || a.href.split('/').pop();
    dlReady.then(function (dl) {
      if (!dl) { window.open(a.href, '_blank', 'noopener'); return; }
      return fetch(a.href).then(function (r) { return r.blob(); })
        .then(function (blob) { return dl.save({ filename: name, data: blob }); });
    }).catch(function (err) {
      if (!err || (err.code !== 'declined' && err.code !== 'rate_limited')) window.open(a.href, '_blank', 'noopener');
    });
  });
})();
