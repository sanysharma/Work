// Small enhancements: scroll reveal, active TOC link, missing-image placeholders.
document.documentElement.classList.add('js');

// Show a labelled placeholder for any figure image that hasn't been added yet
document.querySelectorAll('.fig img').forEach(function (img) {
  function markMissing() { img.closest('.fig').classList.add('missing'); }
  if (img.complete && img.naturalWidth === 0) markMissing();
  img.addEventListener('error', markMissing);
});

if ('IntersectionObserver' in window) {
  var revealObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); revealObs.unobserve(e.target); }
    });
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach(function (el) { revealObs.observe(el); });

  var tocLinks = document.querySelectorAll('.toc a');
  if (tocLinks.length) {
    var map = {};
    tocLinks.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
    var tocObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          tocLinks.forEach(function (a) { a.classList.remove('active'); });
          var link = map[e.target.id];
          if (link) link.classList.add('active');
        }
      });
    }, { rootMargin: '-30% 0px -60% 0px' });
    document.querySelectorAll('.prose section[id]').forEach(function (s) { tocObs.observe(s); });
  }
} else {
  document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
}
