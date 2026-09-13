/*
  KESUPEN GALLERY — SINGLE SOURCE OF TRUTH
  ----------------------------------------
  Setiap gambar yang ditambah ke `images` untuk sesuatu event akan
  dipaparkan secara automatik di:
    1) Galeri Program pada halaman event tersebut
    2) Galeri utama (gallery.html)

  Jadi tidak perlu masukkan gambar yang sama dua kali.
*/
const KESUPEN_GALLERY = [
  {
    eventId: "hari-keluarga-kesupen-sandakan-2026",
    title: "HARI KELUARGA KESUPEN SANDAKAN 2026",
    dateText: "26 SEPTEMBER 2026",
    cover: "assets/images/hari-keluarga-kesupen-sandakan-2026.jpg",
    images: [
      "assets/images/hari-keluarga-kesupen-sandakan-2026.jpg",
      "assets/images/hari-keluarga-cover.jpg",
      "assets/images/hari-keluarga-pantai-dandulit.jpg"
    ]
  },
  {
    eventId: "program-kesupen-2025",
    title: "PROGRAM KESUPEN 2025",
    dateText: "12 OKTOBER 2025",
    cover: "",
    images: []
  }
];


// Helper dikongsi oleh halaman event dan galeri utama.
window.getKesupenEventGallery = function(eventId) {
  const album = window.KESUPEN_GALLERY.find(item => item.eventId === eventId);
  return album && Array.isArray(album.images) ? album.images.filter(Boolean) : [];
};
