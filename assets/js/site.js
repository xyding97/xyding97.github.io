/* Preserve section links from the former Research page. */
(function () {
  var path = window.location.pathname.replace(/index\.html$/, '').replace(/\/$/, '');
  var legacy = {"#linkage-between-stratospheric-variability-and-north-american-surface-air-temperature": "#stratospheric-dynamics-and-winter-extremes", "#influence-of-latent-heating-on-atmospheric-blocking-and-cold-extremes-undergraduate": "", "#improving-the-identification-of-displaced-and-split-stratospheric-polar-vortex-events-undergraduate": ""};
  if (path === '/publications' && Object.prototype.hasOwnProperty.call(legacy, window.location.hash)) {
    window.location.replace('/research/' + legacy[window.location.hash]);
  }
}());
