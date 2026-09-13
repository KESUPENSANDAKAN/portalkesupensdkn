const menu=document.querySelector(".menu"),nav=document.querySelector(".header nav");if(menu)menu.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";if(nav.style.display==="flex"){nav.style.position="absolute";nav.style.top="72px";nav.style.left="0";nav.style.right="0";nav.style.padding="20px 24px";nav.style.background="#071827";nav.style.flexDirection="column"}});
/* Premium theme V1 */
document.documentElement.classList.add("premium-theme");

/* Shared navigation enhancement */
(() => {
  const btn = document.getElementById("mobileMenuBtn");
  const nav = document.querySelector(".premium-nav nav");
  if (!btn || !nav) return;
  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("menu-open");
    btn.setAttribute("aria-expanded", String(open));
  });
})();


/* Homepage global search */
(() => {
  const form = document.getElementById('globalSearch');
  const input = document.getElementById('siteSearchInput');
  const results = document.getElementById('searchResults');
  if (!form || !input || !results) return;

  const pages = [
    {title:'Utama', type:'Portal', text:'Bersama KESUPEN Sandakan program aktiviti komuniti keluarga', url:'index.html'},
    {title:'Program', type:'Program & Acara', text:'Program akan datang dan arkib program KESUPEN Sandakan', url:'programs.html'},
    {title:'Galeri', type:'Memori Kita', text:'Album gambar aktiviti dan program KESUPEN Sandakan', url:'gallery.html'},
    {title:'E-Book HARI KELUARGA KESUPEN SANDAKAN 2026', type:'E-Book', text:'Buku program Hari Keluarga KESUPEN Sandakan 2026', url:'event.html?id=hari-keluarga-kesupen-sandakan-2026'},
    {title:'Tentang', type:'KESUPEN Sandakan', text:'Maklumat mengenai KESUPEN Sandakan', url:'about.html'},
    {title:'Hubungi', type:'Maklumat & Pertanyaan', text:'Hubungi KESUPEN Sandakan', url:'contact.html'}
  ];

  function render(q){
    const query = q.trim().toLowerCase();
    if(!query){ results.hidden = true; results.innerHTML=''; return; }
    const eventItems = (window.KESUPEN_EVENTS || []).map(e => ({title:e.title,type:e.category||'Program',text:(e.dateText||'')+' '+(e.location||'')+' '+(e.description||''),url:e.eventPage||'programs.html'}));
    const all = [...pages, ...eventItems];
    const hits = all.filter(x => (x.title+' '+x.type+' '+x.text).toLowerCase().includes(query)).slice(0,7);
    results.innerHTML = hits.length ? hits.map(x => `<a class="search-result" href="${x.url}"><strong>${x.title}</strong><small>${x.type}</small></a>`).join('') : '<div class="search-empty">Tiada hasil carian.</div>';
    results.hidden = false;
  }
  input.addEventListener('input', () => render(input.value));
  input.addEventListener('focus', () => { if(input.value.trim()) render(input.value); });
  form.addEventListener('submit', e => {
    e.preventDefault();
    const first = results.querySelector('.search-result');
    if(first) window.location.href = first.getAttribute('href');
  });
  document.addEventListener('click', e => { if(!form.contains(e.target)) results.hidden = true; });
})();
