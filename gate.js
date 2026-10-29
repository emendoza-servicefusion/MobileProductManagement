/* Lightweight access gate for the prototype pages. Client-side only: it keeps casual visitors out,
   it is not real security. To change the access code, replace HASH with
   printf 'sf-proto:<new code, lower case>' | shasum -a 256 */
(function () {
  var HASH = '4a9021b1714b38181323796a685763578916adbc7cdff604a997611eefda13eb', KEY = 'sf-auth', DAYS = 1;

  // Small SHA-256 so the gate also works where crypto.subtle is unavailable (e.g. file:// in Safari).
  function sha256(str) {
    var m = unescape(encodeURIComponent(str)), K = [], H = [], i, j, w = [], l = m.length, ml = l * 8, p = 0, out = '';
    var P = function (n) { return ((n = Math.pow(n, 1 / 3)) - (n | 0)) * 4294967296 | 0; };
    var isP = function (n) { for (var d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };
    for (i = 2, j = 0; j < 64; i++) if (isP(i)) { K[j] = P(i); if (j < 8) H[j] = (Math.sqrt(i) - (Math.sqrt(i) | 0)) * 4294967296 | 0; j++; }
    var bytes = [];
    for (i = 0; i < l; i++) bytes.push(m.charCodeAt(i));
    bytes.push(0x80);
    while (bytes.length % 64 !== 56) bytes.push(0);
    for (i = 7; i >= 0; i--) bytes.push(i > 3 ? 0 : (ml >>> (i * 8)) & 255);
    var rr = function (x, n) { return (x >>> n) | (x << (32 - n)); };
    for (p = 0; p < bytes.length; p += 64) {
      for (i = 0; i < 16; i++) w[i] = (bytes[p + i * 4] << 24) | (bytes[p + i * 4 + 1] << 16) | (bytes[p + i * 4 + 2] << 8) | bytes[p + i * 4 + 3];
      for (i = 16; i < 64; i++) { var s0 = rr(w[i - 15], 7) ^ rr(w[i - 15], 18) ^ (w[i - 15] >>> 3), s1 = rr(w[i - 2], 17) ^ rr(w[i - 2], 19) ^ (w[i - 2] >>> 10); w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0; }
      var a = H.slice();
      for (i = 0; i < 64; i++) {
        var t1 = (a[7] + (rr(a[4], 6) ^ rr(a[4], 11) ^ rr(a[4], 25)) + ((a[4] & a[5]) ^ (~a[4] & a[6])) + K[i] + w[i]) | 0;
        var t2 = ((rr(a[0], 2) ^ rr(a[0], 13) ^ rr(a[0], 22)) + ((a[0] & a[1]) ^ (a[0] & a[2]) ^ (a[1] & a[2]))) | 0;
        a = [(t1 + t2) | 0, a[0], a[1], a[2], (a[3] + t1) | 0, a[4], a[5], a[6]];
      }
      for (i = 0; i < 8; i++) H[i] = (H[i] + a[i]) | 0;
    }
    for (i = 0; i < 8; i++) for (j = 3; j >= 0; j--) out += ((H[i] >>> (j * 8)) & 255).toString(16).padStart(2, '0');
    return out;
  }

  var Gate = {
    check: function (pw) { return sha256('sf-proto:' + String(pw).trim().toLowerCase()) === HASH; },
    ok: function () {
      try { var a = JSON.parse(sessionStorage.getItem(KEY) || 'null'); return !!a && a.h === HASH && a.exp > Date.now(); } catch (e) { return false; }
    },
    signIn: function () { try { sessionStorage.setItem(KEY, JSON.stringify({ h: HASH, exp: Date.now() + DAYS * 864e5 })); } catch (e) {} },
    signOut: function () { try { sessionStorage.removeItem(KEY); } catch (e) {} },
    // Only same-folder .html pages, so ?next= can't send someone elsewhere.
    next: function () { var n = new URLSearchParams(location.search).get('next') || ''; return /^[\w.-]+\.html([?#].*)?$/.test(n) ? n : 'technician-happy-path.html'; }
  };
  window.SFGate = Gate;

  if (!/signin\.html$/.test(location.pathname) && !Gate.ok()) {
    document.documentElement.style.visibility = 'hidden';
    var here = location.pathname.split('/').pop() || 'technician-happy-path.html';
    location.replace('signin.html?next=' + encodeURIComponent(here + location.search + location.hash));
  }
})();
