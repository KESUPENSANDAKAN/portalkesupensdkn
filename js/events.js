/*
  KESUPEN PORTAL - EVENT CONTENT
  --------------------------------
  Untuk tambah program baharu:
  1. Salin satu blok event.
  2. Tukar id, title, date, location, category dan description.
  3. status: "upcoming" atau "past".
  4. Letakkan pautan eventPage/ebook jika sudah tersedia.
*/

const KESUPEN_EVENTS = [
  {
    id: "hari-keluarga-kesupen-sandakan-2026",
    title: "HARI KELUARGA KESUPEN SANDAKAN 2026",
    date: "2026-09-26",
    dateText: "26 SEPTEMBER 2026",
    location: "Pantai Dandulit, Sandakan",
    status: "upcoming",
    category: "Program Keluarga",
    description: "Program Hari Keluarga KESUPEN Sandakan 2026.",
    eventPage: "event.html?id=hari-keluarga-kesupen-sandakan-2026",
    ebook: "https://kesupensandakan.github.io/BUKU-PROGRAM-HARI-KELUARGA-KESUPEN-SANDAKAN-2026/",
    featured: true
  },
  {
    id: "program-kesupen-2025",
    title: "PROGRAM KESUPEN 2025",
    date: "2025-10-12",
    dateText: "12 OKTOBER 2025",
    location: "Sandakan, Sabah",
    status: "past",
    category: "Program KESUPEN",
    description: "Rekod program terdahulu KESUPEN Sandakan.",
    eventPage: "#",
    ebook: "#",
    featured: false
  }
];
