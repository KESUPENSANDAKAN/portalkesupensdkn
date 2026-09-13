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


/* Mobile/tablet navigation polish */
(() => {
  const btn = document.getElementById("mobileMenuBtn");
  const nav = document.querySelector(".premium-nav nav");
  if (!btn || !nav) return;

  const closeMenu = () => {
    nav.classList.remove("menu-open");
    btn.setAttribute("aria-expanded", "false");
  };

  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", closeMenu));

  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("menu-open")) return;
    if (!nav.contains(e.target) && !btn.contains(e.target)) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMenu();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
