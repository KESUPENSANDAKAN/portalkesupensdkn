window.KESUPEN_HEADLINES = [
  { text: "PROGRAM TERDEKAT: HARI KELUARGA KESUPEN SANDAKAN 2026 — 26 SEPTEMBER 2026", link: "event.html?id=hari-keluarga-kesupen-sandakan-2026" },
  { text: "BUKU PROGRAM DIGITAL HARI KELUARGA KESUPEN SANDAKAN 2026 KINI BOLEH DIAKSES", link: "event.html?id=hari-keluarga-kesupen-sandakan-2026" },
  { text: "GALERI KESUPEN: DOKUMENTASI PROGRAM DAN AKTIVITI TERKINI", link: "gallery.html" },
  { text: "PORTAL KESUPEN SANDAKAN — PUSAT RUJUKAN DIGITAL UNTUK PROGRAM, AKTIVITI DAN DOKUMENTASI", link: "about.html" }
];

(() => {
  const items = window.KESUPEN_HEADLINES || [];
  const text = document.getElementById("heroHeadlineText");
  const link = document.getElementById("heroHeadlineLink");
  const counter = document.getElementById("heroHeadlineCounter");
  if (!text || !link || !counter || !items.length) return;
  let i = 0, timer;
  function render() {
    const item = items[i];
    text.classList.remove("headline-swap");
    void text.offsetWidth;
    text.textContent = item.text;
    link.href = item.link || "#";
    counter.textContent = String(i + 1).padStart(2, "0");
    text.classList.add("headline-swap");
  }
  function start() {
    clearInterval(timer);
    timer = setInterval(() => { i = (i + 1) % items.length; render(); }, 4000);
  }
  render(); start();
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) clearInterval(timer); else start();
  });
})();
